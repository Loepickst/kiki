#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, '..');

const PLACEHOLDER_WORDS = new Set(['', '---', '（準備中）']);
const GENERIC_DISTRACTOR_TEXT = '干扰选项；不是本题语境中最合适的表达。';

const MODULES = [
    {
        key: 'n1-verbs',
        label: 'N1 动词',
        dataFiles: ['exam/vocabulary/n1/n1_verbs_data.js'],
        curriculumFiles: ['exam/vocabulary/n1/n1-verbs-curriculum.js'],
        wordsExpr: 'FULL_WORD_LIST',
        daysExpr: 'LAB_N1_VERB_DAYS',
        stagesExpr: 'LAB_N1_VERB_STAGES',
        n1: true
    },
    {
        key: 'n1-adjectives',
        label: 'N1 形容词',
        dataFiles: ['exam/vocabulary/n1/n1_adjectives_data.js'],
        curriculumFiles: ['exam/vocabulary/n1/n1-adjectives-curriculum.js'],
        wordsExpr: 'FULL_WORD_LIST',
        daysExpr: 'LAB_N1_ADJECTIVE_DAYS',
        stagesExpr: 'LAB_N1_ADJECTIVE_STAGES',
        n1: true
    },
    {
        key: 'n1-mimetic',
        label: 'N1 拟声拟态词',
        dataFiles: ['exam/vocabulary/n1/n1_mimetic_data.js'],
        curriculumFiles: ['exam/vocabulary/n1/n1-mimetic-curriculum.js'],
        wordsExpr: 'FULL_WORD_LIST',
        daysExpr: 'LAB_N1_MIMETIC_DAYS',
        stagesExpr: 'LAB_N1_MIMETIC_STAGES',
        n1: true
    },
    {
        key: 'n1-adverbs',
        label: 'N1 副词',
        dataFiles: ['exam/vocabulary/n1/n1_adverbs_data.js'],
        curriculumFiles: ['exam/vocabulary/n1/n1-adverbs-curriculum.js'],
        wordsExpr: 'FULL_WORD_LIST',
        daysExpr: 'LAB_N1_ADVERB_DAYS',
        stagesExpr: 'LAB_N1_ADVERB_STAGES',
        expectedValidCount: 67,
        expectedDays: 7,
        expectedStages: 4,
        expectedPracticeItems: 68,
        validateToneFormat: true,
        n1: true
    },
    {
        key: 'n1-loanwords',
        label: 'N1 外来语',
        dataFiles: ['exam/vocabulary/n1/n1_loanwords_data.js'],
        curriculumFiles: ['exam/vocabulary/n1/n1-loanwords-curriculum.js'],
        wordsExpr: 'FULL_WORD_LIST',
        daysExpr: 'LAB_N1_LOANWORD_DAYS',
        stagesExpr: 'LAB_N1_LOANWORD_STAGES',
        expectedValidCount: 90,
        expectedDays: 9,
        expectedStages: 5,
        expectedPracticeItems: 83,
        expectedSentenceDisabled: 7,
        validateToneFormat: true,
        n1: true
    },
    {
        key: 'n2-verbs',
        label: 'N2 动词',
        dataFiles: ['exam/vocabulary/n2/n2_verbs_data.js'],
        curriculumFiles: ['exam/vocabulary/n2/n2-verbs-groups.js'],
        wordsExpr: 'FULL_WORD_LIST',
        daysExpr: 'LAB_N2_VERB_DAYS',
        stagesExpr: 'LAB_N2_VERB_STAGES',
        expectedValidCount: 235,
        expectedDays: 13,
        expectedStages: 7,
        validateCompoundTail: true
    }
];

const SIMPLIFIED_SUSPECTS = new Map(Object.entries({
    學: '学',
    習: '习',
    詞: '词',
    題: '题',
    選: '选',
    練: '练',
    復: '复',
    測: '测',
    進: '进',
    関: '关',
    対: '对',
    処: '处',
    発: '发',
    読: '读',
    訳: '译',
    説: '说',
    観: '观',
    変: '变',
    強: '强',
    時: '时',
    後: '后',
    経: '经',
    験: '验',
    優: '优',
    認: '认',
    記: '记',
    錯: '错',
    暫: '暂',
    類: '类',
    個: '个',
    規: '规',
    労: '劳',
    動: '动',
    歩: '步',
    髪: '发',
    価: '价',
    効: '效',
    帰: '归',
    長: '长',
    広: '广',
    辺: '边',
    単: '单',
    実: '实',
    態: '态',
    組: '组',
    図: '图',
    項: '项'
}));

function parseArgs(argv) {
    const args = {
        module: null,
        json: false,
        strict: false,
        help: false
    };

    for (let index = 0; index < argv.length; index += 1) {
        const token = argv[index];
        if (token === '--help' || token === '-h') {
            args.help = true;
        } else if (token === '--json') {
            args.json = true;
        } else if (token === '--strict') {
            args.strict = true;
        } else if (token === '--module') {
            args.module = argv[index + 1] || '';
            index += 1;
        } else if (token.startsWith('--module=')) {
            args.module = token.slice('--module='.length);
        } else {
            throw new Error(`未知参数：${token}`);
        }
    }

    return args;
}

function printHelp() {
    const moduleKeys = MODULES.map((item) => item.key).join(', ');
    console.log(`Usage:
  node scripts/validate-vocabulary-data.mjs
  node scripts/validate-vocabulary-data.mjs --module n2-verbs
  node scripts/validate-vocabulary-data.mjs --json
  node scripts/validate-vocabulary-data.mjs --strict

Modules:
  ${moduleKeys}`);
}

function readFile(relativePath) {
    const absolutePath = path.resolve(ROOT_DIR, relativePath);
    return fs.readFileSync(absolutePath, 'utf8');
}

function stripTags(html) {
    return String(html || '')
        .replace(/<rt[\s\S]*?<\/rt>/g, '')
        .replace(/<rp[\s\S]*?<\/rp>/g, '')
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

class MiniElement {
    constructor(html = '') {
        this.html = html;
    }

    set innerHTML(value) {
        this.html = String(value || '');
    }

    get innerHTML() {
        return this.html;
    }

    get textContent() {
        return stripTags(this.html);
    }

    cloneNode() {
        return new MiniElement(this.html);
    }

    querySelectorAll(selector) {
        if (selector === 'rt, rp' || selector === 'rt' || selector === 'rp') {
            return [{
                remove: () => {
                    this.html = this.html
                        .replace(/<rt[\s\S]*?<\/rt>/g, '')
                        .replace(/<rp[\s\S]*?<\/rp>/g, '');
                }
            }];
        }
        return [];
    }

    querySelector(selector) {
        if (selector !== '.ex-highlight') return null;
        const match = this.html.match(/<([a-zA-Z0-9:-]+)(?=[^>]*class=['"][^'"]*\bex-highlight\b[^'"]*['"])[^>]*>([\s\S]*?)<\/\1>/);
        return match ? new MiniElement(match[2]) : null;
    }
}

function createContext() {
    const sandbox = {
        console,
        document: {
            createElement: () => new MiniElement()
        }
    };
    sandbox.window = sandbox;
    sandbox.globalThis = sandbox;
    return vm.createContext(sandbox);
}

function runFile(context, relativePath) {
    const code = readFile(relativePath);
    vm.runInContext(code, context, { filename: relativePath });
}

function readExpression(context, expression, fallback = undefined) {
    try {
        return vm.runInContext(`typeof ${expression} !== 'undefined' ? ${expression} : undefined`, context);
    } catch {
        return fallback;
    }
}

function normalizeValue(value) {
    return String(value == null ? '' : value)
        .replace(/\s+/g, '')
        .trim();
}

function isPlaceholderWord(word) {
    return PLACEHOLDER_WORDS.has(String(word && word.word ? word.word : '').trim());
}

function getWordLabel(analysis, word) {
    if (analysis && typeof analysis.getWordLabel === 'function') {
        return analysis.getWordLabel(word);
    }
    return stripTags(word && (word.word_html || word.word));
}

function getKanaDisplayText(word) {
    if (!word) return '';
    if (word.reading) return String(word.reading).trim();
    const html = String(word.word_html || word.word || '');
    return html
        .replace(/<ruby>([\s\S]*?)<rt>([\s\S]*?)<\/rt><\/ruby>/g, '$2')
        .replace(/<ruby>([\s\S]*?)<\/ruby>/g, '$1')
        .replace(/<rt[\s\S]*?<\/rt>/g, '')
        .replace(/<rp[\s\S]*?<\/rp>/g, '')
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, '')
        .trim();
}

function getPracticeItems(word) {
    if (!word || isPlaceholderWord(word)) return [];
    if (Array.isArray(word.practiceItems) && word.practiceItems.length > 0) return word.practiceItems;
    return word.practice ? [word.practice] : [];
}

function getPracticeSentence(practice) {
    return String(practice && (practice.sentence || practice.question || '')).trim();
}

function addIssue(moduleReport, severity, code, message, location = '') {
    moduleReport[severity === 'error' ? 'errors' : 'warnings'].push({
        severity,
        code,
        message,
        location
    });
}

function createWordIndexes(words, analysis) {
    const byRef = new Map();
    const byLookup = new Map();

    function addRef(ref, word) {
        const key = String(ref == null ? '' : ref).trim();
        if (!key) return;
        if (!byRef.has(key)) byRef.set(key, word);
    }

    function addLookup(ref, word) {
        const key = analysis.normalizeValue ? analysis.normalizeValue(ref) : normalizeValue(ref);
        if (!key) return;
        if (!byLookup.has(key)) byLookup.set(key, []);
        byLookup.get(key).push(word);
    }

    words.forEach((word) => {
        if (!word || isPlaceholderWord(word)) return;
        addRef(word.id, word);
        addRef(word.word, word);
        addRef(getWordLabel(analysis, word), word);
        addRef(getKanaDisplayText(word), word);

        const lookupValues = typeof analysis.getLookupValuesForWord === 'function'
            ? analysis.getLookupValuesForWord(word, { getKanaDisplayText, getPracticeItems })
            : [word.word, getWordLabel(analysis, word), getKanaDisplayText(word)];
        lookupValues.forEach((value) => addLookup(value, word));
    });

    return { byRef, byLookup };
}

function resolveWordRef(ref, indexes) {
    const key = String(ref == null ? '' : ref).trim();
    return key ? indexes.byRef.get(key) || null : null;
}

function resolveOptionWord(optionValue, correctAnswer, currentWord, optionWordIds, optionIndex, indexes, analysis) {
    const explicitRef = Array.isArray(optionWordIds) ? optionWordIds[optionIndex] : null;
    const explicitWord = resolveWordRef(explicitRef, indexes);
    if (explicitRef && !explicitWord) return null;

    if (explicitWord) return explicitWord;

    const optionKey = analysis.normalizeValue ? analysis.normalizeValue(optionValue) : normalizeValue(optionValue);
    const answerKey = analysis.normalizeValue ? analysis.normalizeValue(correctAnswer) : normalizeValue(correctAnswer);
    if (optionKey && optionKey === answerKey) return currentWord;

    const candidates = indexes.byLookup.get(optionKey) || [];
    const uniqueCandidates = Array.from(new Set(candidates));
    return uniqueCandidates.length === 1 ? uniqueCandidates[0] : null;
}

function isMissingText(value) {
    const text = String(value || '').trim();
    return !text || text === '没有';
}

function validateWords(moduleConfig, moduleReport, words, analysis) {
    const seenWords = new Map();
    const validWords = [];

    words.forEach((word, index) => {
        if (!word || isPlaceholderWord(word)) return;
        validWords.push({ word, index });
        const surface = String(word.word || '').trim();

        if (!surface) {
            addIssue(moduleReport, 'error', 'word.missing-word', '有效词条缺少 word 字段。', `word[${index}]`);
        } else if (seenWords.has(surface)) {
            addIssue(
                moduleReport,
                'error',
                'word.duplicate',
                `重复词条「${surface}」，首次出现在 word[${seenWords.get(surface)}]。`,
                `word[${index}]`
            );
        } else {
            seenWords.set(surface, index);
        }

        ['mean', 'nuance'].forEach((field) => {
            if (!String(word[field] || '').trim()) {
                addIssue(moduleReport, 'error', `word.missing-${field}`, `词条「${surface || index}」缺少 ${field}。`, `word[${index}]`);
            }
        });

        if (moduleConfig.validateToneFormat) {
            const tone = String(word.tone || '').trim();
            if (!tone) {
                addIssue(moduleReport, 'error', 'word.missing-tone', `词条「${surface || index}」缺少音调。`, `word[${index}]`);
            } else if (!/^\d+(?:\/\d+)*$/.test(tone)) {
                addIssue(moduleReport, 'error', 'word.invalid-tone-format', `词条「${surface || index}」音调格式应为 0、1 或 0/1，实际为「${tone}」。`, `word[${index}]`);
            }
        }

        if (!Array.isArray(word.examples)) {
            addIssue(moduleReport, 'error', 'word.examples-not-array', `词条「${surface || index}」examples 不是数组。`, `word[${index}]`);
        } else if (word.examples.length === 0) {
            addIssue(moduleReport, 'warning', 'word.no-examples', `词条「${surface || index}」没有例句。`, `word[${index}]`);
        } else {
            word.examples.forEach((example, exampleIndex) => {
                if (!String(example && example.jp || '').trim()) {
                    addIssue(moduleReport, 'error', 'example.missing-jp', `词条「${surface || index}」例句缺少 jp。`, `word[${index}].examples[${exampleIndex}]`);
                }
                if (!String(example && example.cn || '').trim()) {
                    addIssue(moduleReport, 'warning', 'example.missing-cn', `词条「${surface || index}」例句缺少中文翻译。`, `word[${index}].examples[${exampleIndex}]`);
                }
            });
        }

        scanChineseFields(moduleReport, word, `word[${index}]`);
        getPracticeItems(word).forEach((practice, practiceIndex) => {
            scanChineseFields(moduleReport, practice, `word[${index}].practice[${practiceIndex}]`);
        });

        if (!analysis.getCollocation || !analysis.getCollocation(word)) {
            addIssue(moduleReport, 'warning', 'word.missing-collocation', `词条「${getWordLabel(analysis, word) || surface}」缺少可用常见搭配。`, `word[${index}]`);
        }
    });

    if (validWords.length === 0 && !moduleConfig.allowEmpty) {
        addIssue(moduleReport, 'error', 'module.no-valid-words', '模块没有有效词条。');
    }

    return validWords;
}

function validateDays(moduleConfig, moduleReport, words, days, stages) {
    if (!Array.isArray(days)) {
        addIssue(moduleReport, 'error', 'schedule.missing-days', '未找到日程 days 数组。');
        return;
    }

    days.forEach((day) => {
        const wordIds = Array.isArray(day && day.wordIds) ? day.wordIds : [];
        const seen = new Set();
        wordIds.forEach((wordIndex) => {
            const location = `day[${day.id}].wordIds`;
            if (!Number.isInteger(wordIndex) || wordIndex < 0 || wordIndex >= words.length) {
                addIssue(moduleReport, 'error', 'schedule.word-index-out-of-range', `日程引用了不存在的词条索引 ${wordIndex}。`, location);
                return;
            }
            if (seen.has(wordIndex)) {
                addIssue(moduleReport, 'error', 'schedule.duplicate-word-index', `同一天重复引用词条索引 ${wordIndex}。`, location);
            }
            seen.add(wordIndex);
            if (isPlaceholderWord(words[wordIndex])) {
                addIssue(moduleReport, 'error', 'schedule.placeholder-word', `日程引用了占位词条索引 ${wordIndex}。`, location);
            }
        });
    });

    if (moduleConfig.expectedDays && days.length !== moduleConfig.expectedDays) {
        addIssue(moduleReport, 'error', 'schedule.unexpected-day-count', `日程天数应为 ${moduleConfig.expectedDays}，实际为 ${days.length}。`);
    }

    if (moduleConfig.expectedStages && Array.isArray(stages) && stages.length !== moduleConfig.expectedStages) {
        addIssue(moduleReport, 'error', 'schedule.unexpected-stage-count', `阶段数应为 ${moduleConfig.expectedStages}，实际为 ${stages.length}。`);
    }

    if (moduleConfig.validateCompoundTail && days.length > 0) {
        const firstCompoundIndex = days.findIndex((day) => day && day.scheduleKind === 'compound');
        if (firstCompoundIndex < 0) {
            addIssue(moduleReport, 'error', 'schedule.no-compound-tail', 'N2 动词日程未找到复合动词专训段。');
        } else {
            const hasNormalAfterCompound = days.slice(firstCompoundIndex).some((day) => day && day.scheduleKind !== 'compound');
            if (hasNormalAfterCompound) {
                addIssue(moduleReport, 'error', 'schedule.compound-not-tail', '复合动词专训段之后仍存在普通日程。');
            }
        }
    }
}

function validateExpectedCounts(moduleConfig, moduleReport, validWords) {
    if (moduleConfig.expectedValidCount && validWords.length !== moduleConfig.expectedValidCount) {
        addIssue(moduleReport, 'error', 'module.unexpected-word-count', `有效词数应为 ${moduleConfig.expectedValidCount}，实际为 ${validWords.length}。`);
    }
}

function validatePracticeItems(moduleConfig, moduleReport, validWords, indexes, analysis, days) {
    let practiceCount = 0;
    let n1MissingAnalysisCount = 0;

    validWords.forEach(({ word, index }) => {
        const practices = getPracticeItems(word);
        practices.forEach((practice, practiceIndex) => {
            const location = `word[${index}].practice[${practiceIndex}]`;
            const sentence = getPracticeSentence(practice);
            const answer = String(practice && practice.answer || '').trim();
            const options = Array.isArray(practice && practice.options) ? practice.options.map((item) => String(item || '').trim()).filter(Boolean) : [];
            const optionWordIds = Array.isArray(practice && practice.optionWordIds) ? practice.optionWordIds : null;

            if (!sentence && options.length === 0 && !answer) return;
            practiceCount += 1;

            if (!sentence) addIssue(moduleReport, 'error', 'practice.missing-sentence', '句子选词题缺少题干。', location);
            if (!String(practice && practice.cn || '').trim()) addIssue(moduleReport, 'error', 'practice.missing-cn', '句子选词题缺少题干翻译 cn。', location);
            if (!answer) addIssue(moduleReport, 'error', 'practice.missing-answer', '句子选词题缺少正确答案。', location);
            if (options.length !== 4) addIssue(moduleReport, 'error', 'practice.invalid-options-count', `句子选词题需要 4 个选项，实际为 ${options.length} 个。`, location);
            if (answer && options.length > 0 && !options.includes(answer)) {
                addIssue(moduleReport, 'error', 'practice.answer-not-in-options', `正确答案「${answer}」不在选项中。`, location);
            }

            if (optionWordIds && optionWordIds.length !== options.length) {
                addIssue(moduleReport, 'error', 'practice.option-word-ids-length', `optionWordIds 长度 ${optionWordIds.length} 与选项数 ${options.length} 不一致。`, location);
            }

            if (optionWordIds) {
                optionWordIds.forEach((ref, optionIndex) => {
                    if (ref == null || String(ref).trim() === '') return;
                    if (!resolveWordRef(ref, indexes)) {
                        addIssue(moduleReport, 'error', 'practice.bad-option-word-id', `选项 ${optionIndex + 1} 的 optionWordId「${ref}」无法解析到词条。`, location);
                    }
                });
            }

            if (moduleConfig.n1 && !String(practice && practice.analysis || '').trim()) {
                n1MissingAnalysisCount += 1;
            }

            validatePracticeAnalysis(moduleReport, word, practice, options, answer, optionWordIds, indexes, analysis, location);
        });
    });

    if (moduleConfig.n1 && n1MissingAnalysisCount > 0) {
        addIssue(moduleReport, 'warning', 'practice.n1-auto-analysis', `${n1MissingAnalysisCount} 道 N1 句子题没有显式 analysis，将依赖自动解析。`);
    }

    if (moduleConfig.expectedPracticeItems != null && practiceCount !== moduleConfig.expectedPracticeItems) {
        addIssue(moduleReport, 'error', 'practice.unexpected-count', `句子题数量应为 ${moduleConfig.expectedPracticeItems}，实际为 ${practiceCount}。`);
    }

    if (moduleConfig.expectedSentenceDisabled != null) {
        const disabledCount = validWords.filter(({ word }) => word && word.sentencePracticeDisabled).length;
        moduleReport.stats.sentenceDisabled = disabledCount;
        if (disabledCount !== moduleConfig.expectedSentenceDisabled) {
            addIssue(moduleReport, 'error', 'practice.unexpected-disabled-count', `禁用句子题词数应为 ${moduleConfig.expectedSentenceDisabled}，实际为 ${disabledCount}。`);
        }
    }

    if (moduleConfig.validateCompoundTail && Array.isArray(days)) {
        days
            .filter((day) => day && day.scheduleKind === 'compound')
            .forEach((day) => {
                const hasSentencePractice = (Array.isArray(day.wordIds) ? day.wordIds : []).some((wordIndex) => {
                    const word = validWords.find((entry) => entry.index === wordIndex)?.word;
                    return getPracticeItems(word).length > 0;
                });
                if (!hasSentencePractice) {
                    addIssue(moduleReport, 'warning', 'practice.compound-day-no-sentence', `第 ${day.id} 天复合动词专训暂无句子题。`, `day[${day.id}]`);
                }
            });
    }

    moduleReport.stats.practiceItems = practiceCount;
}

function validatePracticeAnalysis(moduleReport, word, practice, options, answer, optionWordIds, indexes, analysis, location) {
    if (!analysis || typeof analysis.buildOptionDetail !== 'function') return;

    options.forEach((optionValue, optionIndex) => {
        const resolvedWord = resolveOptionWord(optionValue, answer, word, optionWordIds, optionIndex, indexes, analysis);
        const optionKey = analysis.normalizeValue ? analysis.normalizeValue(optionValue) : normalizeValue(optionValue);
        const answerKey = analysis.normalizeValue ? analysis.normalizeValue(answer) : normalizeValue(answer);
        const isCorrect = optionKey === answerKey;
        const detail = analysis.buildOptionDetail({
            resolvedWord,
            optionValue,
            isCorrect,
            getWordId: (targetWord) => String(targetWord && targetWord.id != null ? targetWord.id : targetWord && targetWord.word || '')
        });

        if (isCorrect) {
            if (isMissingText(detail.baseForm) || isMissingText(detail.meaning) || isMissingText(detail.usage) || isMissingText(detail.collocation)) {
                addIssue(moduleReport, 'error', 'analysis.incomplete-correct', `正确项「${optionValue}」解析不完整。`, `${location}.options[${optionIndex}]`);
            }
            return;
        }

        if (isMissingText(detail.baseForm) || isMissingText(detail.meaning)) {
            addIssue(moduleReport, 'error', 'analysis.incomplete-distractor', `错误选项「${optionValue}」缺少原型或释义。`, `${location}.options[${optionIndex}]`);
        }

        if (String(detail.meaning || '').includes(GENERIC_DISTRACTOR_TEXT)) {
            addIssue(moduleReport, 'error', 'analysis.generic-distractor', `错误选项「${optionValue}」仍使用泛化干扰说明。`, `${location}.options[${optionIndex}]`);
        }
    });
}

function scanChineseFields(moduleReport, value, location) {
    if (!value || typeof value !== 'object') return;
    const fields = new Set(['cn', 'mean', 'nuance', 'usage', 'analysis', 'title', 'summary', 'hint', 'label']);

    Object.entries(value).forEach(([key, fieldValue]) => {
        const fieldLocation = `${location}.${key}`;
        if (fields.has(key) && typeof fieldValue === 'string') {
            const scanTarget = fieldValue.replace(/[「『“"][^」』”"]+[」』”"]/g, '');
            const hits = Array.from(new Set(Array.from(scanTarget).filter((char) => SIMPLIFIED_SUSPECTS.has(char))));
            if (hits.length > 0) {
                const suggestions = hits.map((char) => `${char}->${SIMPLIFIED_SUSPECTS.get(char)}`).join(', ');
                addIssue(moduleReport, 'warning', 'cn.suspicious-han', `中文字段疑似混入非简体字形：${suggestions}`, fieldLocation);
            }
        } else if (key === 'collocation' && fieldValue && typeof fieldValue === 'object') {
            scanChineseFields(moduleReport, { cn: fieldValue.cn }, fieldLocation);
        } else if (Array.isArray(fieldValue)) {
            fieldValue.forEach((item, index) => {
                if (item && typeof item === 'object') scanChineseFields(moduleReport, item, `${fieldLocation}[${index}]`);
            });
        } else if (fieldValue && typeof fieldValue === 'object' && key !== 'examples') {
            scanChineseFields(moduleReport, fieldValue, fieldLocation);
        }
    });
}

function validateModule(moduleConfig) {
    const report = {
        key: moduleConfig.key,
        label: moduleConfig.label,
        errors: [],
        warnings: [],
        stats: {
            validWords: 0,
            allWords: 0,
            days: 0,
            stages: 0,
            practiceItems: 0,
            sentenceDisabled: 0
        }
    };

    const context = createContext();

    try {
        runFile(context, 'exam/vocabulary/shared/vocabulary-sentence-analysis.js');
        moduleConfig.dataFiles.forEach((file) => runFile(context, file));
        moduleConfig.curriculumFiles.forEach((file) => runFile(context, file));
    } catch (error) {
        addIssue(report, 'error', 'module.load-failed', error.message || String(error));
        return report;
    }

    const analysis = context.VocabularySentenceAnalysis;
    const words = readExpression(context, moduleConfig.wordsExpr, []);
    const days = readExpression(context, moduleConfig.daysExpr, []);
    const stages = readExpression(context, moduleConfig.stagesExpr, []);

    if (!Array.isArray(words)) {
        addIssue(report, 'error', 'module.words-not-array', `${moduleConfig.wordsExpr} 不是数组。`);
        return report;
    }

    report.stats.allWords = words.length;
    report.stats.days = Array.isArray(days) ? days.length : 0;
    report.stats.stages = Array.isArray(stages) ? stages.length : 0;

    const validWords = validateWords(moduleConfig, report, words, analysis);
    report.stats.validWords = validWords.length;

    validateExpectedCounts(moduleConfig, report, validWords);
    validateDays(moduleConfig, report, words, days, stages);

    const indexes = createWordIndexes(words, analysis);
    validatePracticeItems(moduleConfig, report, validWords, indexes, analysis, days);

    return report;
}

function printHumanReport(result) {
    console.log('Vocabulary data validation');
    console.log('');

    result.modules.forEach((moduleReport) => {
        const status = moduleReport.errors.length > 0 ? '✗' : '✓';
        const stats = moduleReport.stats;
        console.log(`${status} ${moduleReport.key} (${moduleReport.label})`);
        const disabledInfo = stats.sentenceDisabled ? ` · sentence-disabled: ${stats.sentenceDisabled}` : '';
        console.log(`  words: ${stats.validWords}/${stats.allWords} · days: ${stats.days} · stages: ${stats.stages} · practice: ${stats.practiceItems}${disabledInfo}`);
        console.log(`  errors: ${moduleReport.errors.length} · warnings: ${moduleReport.warnings.length}`);

        const issues = [...moduleReport.errors, ...moduleReport.warnings].slice(0, 80);
        issues.forEach((issue) => {
            const marker = issue.severity === 'error' ? 'ERROR' : 'WARN ';
            const location = issue.location ? ` ${issue.location}` : '';
            console.log(`  [${marker}] ${issue.code}${location} - ${issue.message}`);
        });

        const hiddenCount = moduleReport.errors.length + moduleReport.warnings.length - issues.length;
        if (hiddenCount > 0) {
            console.log(`  ... ${hiddenCount} more issue(s). Use --json for the full report.`);
        }
        console.log('');
    });

    console.log(`Total: ${result.totals.errors} error(s), ${result.totals.warnings} warning(s)`);
}

function main() {
    let args;
    try {
        args = parseArgs(process.argv.slice(2));
    } catch (error) {
        console.error(error.message);
        printHelp();
        process.exitCode = 2;
        return;
    }

    if (args.help) {
        printHelp();
        return;
    }

    const selectedModules = args.module
        ? MODULES.filter((moduleConfig) => moduleConfig.key === args.module)
        : MODULES;

    if (selectedModules.length === 0) {
        console.error(`未知模块：${args.module}`);
        console.error(`可用模块：${MODULES.map((item) => item.key).join(', ')}`);
        process.exitCode = 2;
        return;
    }

    const reports = selectedModules.map(validateModule);
    const result = {
        generatedAt: new Date().toISOString(),
        strict: args.strict,
        modules: reports,
        totals: {
            errors: reports.reduce((sum, report) => sum + report.errors.length, 0),
            warnings: reports.reduce((sum, report) => sum + report.warnings.length, 0)
        }
    };

    if (args.json) {
        console.log(JSON.stringify(result, null, 2));
    } else {
        printHumanReport(result);
    }

    if (result.totals.errors > 0 || (args.strict && result.totals.warnings > 0)) {
        process.exitCode = 1;
    }
}

main();
