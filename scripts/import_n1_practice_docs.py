#!/usr/bin/env python3
"""Import N1 adverb and loanword sentence practice items from exported DOCX files."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

from docx import Document


ROOT = Path(__file__).resolve().parents[1]


TITLE_RE = re.compile(r"^第\s*(\d+)\s*题[（(](.*?)[）)]$")
OPTION_RE = re.compile(r"^\*?\s*([A-D])[\.\．]\s*(.+)$")
ANSWER_RE = re.compile(r"^正确答案[:：]\s*([A-D])[\.\．]\s*(.+)$")


def strip_tags(value: str) -> str:
    return re.sub(r"<[^>]+>", "", value or "")


def normalize(value: str) -> str:
    return re.sub(r"\s+", "", strip_tags(value or "")).strip()


def strip_reading_parens(value: str) -> str:
    text = strip_tags(value or "")
    text = re.sub(r"[（(][ぁ-んァ-ンー・\s]+[）)]", "", text)
    return normalize(text)


def unwrap_import_array(source: str) -> list[dict]:
    match = re.search(r"const\s+fullWordList\s*=\s*(\[[\s\S]*?\]);\s*\n", source)
    if not match:
        raise ValueError("Could not locate const fullWordList array.")
    return json.loads(match.group(1))


def load_words(path: Path) -> list[dict]:
    return unwrap_import_array(path.read_text(encoding="utf-8"))


def write_words(path: Path, words: list[dict]) -> None:
    body = json.dumps(words, ensure_ascii=False, indent=8)
    content = (
        "(function(global) {\n"
        "    'use strict';\n\n"
        f"    const fullWordList = {body};\n\n"
        "    global.FULL_WORD_LIST = fullWordList;\n"
        "    global.ALL_DEFINED_WORDS = fullWordList;\n"
        "    global.WORDS_PER_DAY = 10;\n"
        "})(typeof window !== 'undefined' ? window : globalThis);\n"
    )
    path.write_text(content, encoding="utf-8")


def read_docx_lines(path: Path) -> list[str]:
    doc = Document(str(path))
    return [paragraph.text.strip() for paragraph in doc.paragraphs if paragraph.text.strip()]


def split_blocks(lines: list[str]) -> list[dict]:
    blocks: list[dict] = []
    current: dict | None = None
    for line in lines:
        if line == "⸻":
            continue
        title = TITLE_RE.match(line)
        if title:
            if current:
                blocks.append(current)
            current = {
                "number": int(title.group(1)),
                "target": title.group(2).strip(),
                "lines": [],
            }
            continue
        if current:
            current["lines"].append(line)
    if current:
        blocks.append(current)
    return blocks


def parse_meaning_usage(line: str) -> tuple[str, str]:
    text = line.strip()
    quote = re.search(r"表示[“\"]([^”\"]+)[”\"]", text)
    if quote:
        meaning = quote.group(1).strip()
        usage = text[quote.end():].strip(" 。.（）()")
        return meaning, usage or meaning
    return text, text


def parse_collocation(line: str) -> dict:
    text = line.split("：", 1)[1].strip() if "：" in line else line.strip()
    return {"jp": text, "cn": ""}


def parse_option_header(raw: str, module: str) -> tuple[str, str, str]:
    value = raw.strip()
    origin = ""
    base = value
    if "→" in value:
        option, base_form = [part.strip() for part in value.split("→", 1)]
        return option, base_form, origin
    origin_match = re.search(r"[（(]([^）)]+)[）)]\s*$", value)
    if origin_match:
        origin = origin_match.group(1).strip()
        value = value[:origin_match.start()].strip()
    if module == "loanwords":
        base = value
    return value, base, origin


def parse_practice_block(block: dict, module: str) -> dict:
    lines = list(block["lines"])
    if not lines:
        raise ValueError(f"Question {block['number']} has no body.")
    sentence = lines[0]

    options: list[tuple[str, str]] = []
    cursor = 1
    while cursor < len(lines) and len(options) < 4:
        match = OPTION_RE.match(lines[cursor])
        if not match:
            break
        options.append((match.group(1), match.group(2).strip()))
        cursor += 1
    if len(options) != 4:
        raise ValueError(f"Question {block['number']} does not have four options.")

    answer_letter = ""
    answer_value = ""
    while cursor < len(lines):
        answer = ANSWER_RE.match(lines[cursor])
        if answer:
            answer_letter = answer.group(1)
            answer_value = answer.group(2).strip()
            cursor += 1
            break
        cursor += 1
    if not answer_letter:
        raise ValueError(f"Question {block['number']} is missing answer.")

    cn_lines: list[str] = []
    if cursor < len(lines) and lines[cursor].startswith("题目翻译"):
        cursor += 1
        while cursor < len(lines) and not lines[cursor].startswith("解析"):
            cn_lines.append(lines[cursor])
            cursor += 1

    analysis_lines: list[str] = []
    if cursor < len(lines) and lines[cursor].startswith("解析"):
        cursor += 1
        while cursor < len(lines) and not OPTION_RE.match(lines[cursor]):
            analysis_lines.append(lines[cursor])
            cursor += 1

    detail_by_letter: dict[str, dict] = {}
    while cursor < len(lines):
        header = OPTION_RE.match(lines[cursor])
        if not header:
            cursor += 1
            continue
        letter = header.group(1)
        option_value, base_form, origin = parse_option_header(header.group(2), module)
        cursor += 1
        meaning = ""
        usage = ""
        collocation = {"jp": "", "cn": ""}
        while cursor < len(lines) and not OPTION_RE.match(lines[cursor]):
            line = lines[cursor]
            if line.startswith("表示"):
                meaning, usage = parse_meaning_usage(line)
            elif line.startswith("常见搭配"):
                collocation = parse_collocation(line)
            cursor += 1
        detail_by_letter[letter] = {
            "value": option_value,
            "baseForm": base_form,
            "wordLabel": base_form,
            "meaning": meaning,
            "usage": usage or meaning,
            "collocation": collocation,
            "origin": origin,
        }

    option_values = [value for _, value in options]
    if answer_value not in option_values:
        expected = dict(options).get(answer_letter)
        if expected:
            answer_value = expected
    option_details = []
    for letter, value in options:
        detail = dict(detail_by_letter.get(letter, {}))
        if not detail:
            detail = {
                "value": value,
                "baseForm": value,
                "wordLabel": value,
                "meaning": "",
                "usage": "",
                "collocation": {"jp": "", "cn": ""},
                "origin": "",
            }
        detail["value"] = value
        detail["isCorrect"] = value == answer_value
        option_details.append(detail)

    return {
        "number": block["number"],
        "target": block["target"],
        "sentence": sentence,
        "cn": "".join(cn_lines).strip(),
        "answer": answer_value,
        "options": option_values,
        "analysis": " ".join(analysis_lines).strip(),
        "optionDetails": option_details,
    }


def build_index(words: list[dict]) -> dict[str, dict]:
    index: dict[str, dict] = {}

    def add(key: str, word: dict) -> None:
        normalized = normalize(key)
        if normalized and normalized not in index:
            index[normalized] = word

    for word in words:
        add(word.get("id", ""), word)
        add(word.get("word", ""), word)
        add(word.get("reading", ""), word)
        add(strip_tags(word.get("word_html", "")), word)
        add(strip_reading_parens(word.get("word", "")), word)
        add(strip_reading_parens(word.get("word_html", "")), word)
        if word.get("word"):
            add(f"{word.get('word')}に", word)
    manual_aliases = {
        "いっこうに": "一向",
        "一向に": "一向",
        "なにとぞ": "何とぞ",
        "何卒": "何とぞ",
    }
    for alias, canonical in manual_aliases.items():
        canonical_word = index.get(normalize(canonical))
        if canonical_word:
            add(alias, canonical_word)
    return index


def resolve_word(index: dict[str, dict], *candidates: str) -> dict | None:
    for candidate in candidates:
        if not candidate:
            continue
        keys = [
            candidate,
            strip_tags(candidate),
            strip_reading_parens(candidate),
        ]
        for key in keys:
            found = index.get(normalize(key))
            if found:
                return found
    return None


def merge_practice_items(words: list[dict], practices: list[dict], module: str, disabled_words: set[str] | None = None) -> dict:
    index = build_index(words)
    by_id = {word["id"]: word for word in words}
    for word in words:
        word.pop("practice", None)
        word.pop("practiceItems", None)
        if module == "loanwords":
            word.pop("sentencePracticeDisabled", None)

    unmatched: list[str] = []
    option_unmatched: list[str] = []
    per_word: dict[str, list[dict]] = {}
    for practice in practices:
        target_word = resolve_word(index, practice["target"])
        if not target_word:
            unmatched.append(f"{practice['number']}: {practice['target']}")
            continue
        option_word_ids: list[str] = []
        enriched_details: list[dict] = []
        for detail in practice["optionDetails"]:
            option_word = resolve_word(index, detail.get("value", ""), detail.get("baseForm", ""), detail.get("wordLabel", ""))
            if not option_word:
                option_unmatched.append(f"Q{practice['number']} {detail.get('value')}")
                option_word_ids.append("")
                enriched_details.append(detail)
                continue
            normalized_detail = dict(detail)
            normalized_detail["wordId"] = option_word["id"]
            normalized_detail["wordLabel"] = option_word.get("word") or detail.get("wordLabel") or detail.get("baseForm") or detail.get("value")
            normalized_detail["baseForm"] = option_word.get("word") or normalized_detail.get("baseForm") or normalized_detail.get("value")
            normalized_detail["isResolved"] = True
            option_word_ids.append(option_word["id"])
            enriched_details.append(normalized_detail)
        item = {
            "sentence": practice["sentence"],
            "cn": practice["cn"],
            "answer": practice["answer"],
            "options": practice["options"],
            "optionWordIds": option_word_ids,
            "analysis": practice["analysis"],
            "optionDetails": enriched_details,
        }
        per_word.setdefault(target_word["id"], []).append(item)

    if unmatched or option_unmatched:
        raise SystemExit(
            "Unmatched practice data:\n"
            + "\n".join(unmatched[:50])
            + ("\nOption unmatched:\n" + "\n".join(option_unmatched[:100]) if option_unmatched else "")
        )

    for word_id, items in per_word.items():
        word = by_id[word_id]
        word["practiceItems"] = items
        word["practice"] = items[0]

    if module == "loanwords" and disabled_words:
        for label in disabled_words:
            word = resolve_word(index, label)
            if word:
                word["sentencePracticeDisabled"] = True

    return {
        "practiceItems": sum(len(items) for items in per_word.values()),
        "practiceWords": len(per_word),
        "disabledWords": sum(1 for word in words if word.get("sentencePracticeDisabled")),
    }


def parse_doc(path: Path, module: str) -> list[dict]:
    lines = read_docx_lines(path)
    blocks = split_blocks(lines)
    return [parse_practice_block(block, module) for block in blocks]


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--adverbs-docx", default="/private/tmp/N1副词练习题.docx")
    parser.add_argument("--loanwords-docx", default="/private/tmp/N1外来语练习.docx")
    args = parser.parse_args()

    adverbs_path = ROOT / "exam/vocabulary/n1/n1_adverbs_data.js"
    loanwords_path = ROOT / "exam/vocabulary/n1/n1_loanwords_data.js"
    adverbs = load_words(adverbs_path)
    loanwords = load_words(loanwords_path)

    adverb_practices = parse_doc(Path(args.adverbs_docx), "adverbs")
    loanword_practices = parse_doc(Path(args.loanwords_docx), "loanwords")
    adverb_report = merge_practice_items(adverbs, adverb_practices, "adverbs")
    loanword_report = merge_practice_items(
        loanwords,
        loanword_practices,
        "loanwords",
        {"クリア", "キャリア", "キャラクター", "チャージ", "チーフ", "クレーム", "アウトライン"},
    )

    write_words(adverbs_path, adverbs)
    write_words(loanwords_path, loanwords)

    print(json.dumps({
        "adverbs": adverb_report,
        "loanwords": loanword_report,
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
