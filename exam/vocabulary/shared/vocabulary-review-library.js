(function (global) {
    'use strict';

    const labels = { reading: '读音', meaning: '含义', sentence: '句子', listening: '听音', legacy: '待巩固' };
    const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    const idOf = (word) => String(word && (word.wordId || word.id || word.word) || '').trim();
    const legacyIdsOf = (word) => [idOf(word), String(word && (word.wordLabel || word.word) || '').trim(), ...(word?.legacyWordIds || []), ...(word?.legacyWords || [])].filter(Boolean);
    const legacySameWord = (left, right) => legacyIdsOf(left).some((id) => legacyIdsOf(right).includes(id));
    const normalizeAnswer = (value) => String(value || '').normalize('NFKC').trim().replace(/\s+/g, '').replace(/[ァ-ヶ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));

    function createModel(config) {
        const store = global.VocabularyReviewStore;
        const sentences = global.VocabularySentenceReviewStore;
        const moduleKey = config.moduleKey;
        const typedKinds = ['reading', 'meaning', ...(global.VocabularyListeningPractice?.enabled(moduleKey) ? ['listening'] : [])];
        const preserveReadings = /^n1_(verbs|adjectives|adverbs|mimetic|loanwords)$/.test(moduleKey);
        const refreshAliases = /^n[12]_(verbs|adjectives|adverbs|mimetic|loanwords)$/.test(moduleKey);
        const identity = preserveReadings ? global.VocabularyPracticeCore.create({ moduleKey, getFullWordList: config.getFullWordList }) : null;
        const idsOf = (word) => preserveReadings ? identity.getReviewIdentityIds(identity.findWordByReviewSnapshot(word) || word) : legacyIdsOf(word);
        const sameWord = (left, right) => {
            if (!preserveReadings) return legacySameWord(left, right);
            const a = identity.findWordByReviewSnapshot(left), b = identity.findWordByReviewSnapshot(right);
            return Boolean(a && b && global.VocabularyPracticeCore.getWordKey(a) === global.VocabularyPracticeCore.getWordKey(b));
        };
        const fullWords = () => config.getFullWordList().filter((word) => word && word.word !== '（準備中）' && !word.duplicateOf);
        function sentenceWordId(snapshot) {
            if (!refreshAliases) return '';
            const parts = String(snapshot?.questionId || '').split('::');
            if (parts.length < 4 || parts[0] !== moduleKey || !['practice', 'practiceItem', 'example'].includes(parts[parts.length - 2])) return '';
            return parts.slice(1, -2).join('::').trim();
        }
        const resolve = (snapshot) => preserveReadings ? identity.findWordByReviewSnapshot(snapshot) : fullWords().find((word) => sameWord(word, snapshot) || sameWord(word, snapshot && snapshot.word))
            || (refreshAliases && fullWords().find((word) => idsOf(word).includes(sentenceWordId(snapshot)))) || null;
        const matchesSnapshot = (word, snapshot) => preserveReadings ? sameWord(word, snapshot) : sameWord(word, snapshot) || sameWord(word, snapshot && snapshot.word)
            || (refreshAliases && sameWord(word, resolve(snapshot)));
        function dismissed(word) {
            const currentIds = [idOf(word), String(word?.word || '').trim()].filter(Boolean);
            if (!refreshAliases || !(word?.legacyWordIds || []).length || currentIds.some((id) => store?.isKeywordDismissed(moduleKey, id))) {
                return idsOf(word).some((id) => store?.isKeywordDismissed(moduleKey, id));
            }
            // Recover already-saved new mistakes hidden only by an old alias
            // dismissal. Reading the library never rewrites those records.
            const pendingCurrent = activeRecords().some(({ snapshot }) => currentIds.includes(idOf(snapshot)));
            return !pendingCurrent && idsOf(word).some((id) => store?.isKeywordDismissed(moduleKey, id));
        }
        const activeRecords = () => [
            ...typedKinds.flatMap((kind) => (store?.listTypedWords(moduleKey, kind) || []).map((snapshot) => ({ kind, snapshot }))),
            ...(sentences?.listQuestions(moduleKey) || []).map((snapshot) => ({ kind: 'sentence', snapshot }))
        ];

        function entries() {
            const map = new Map();
            function add(word, kind, stamp = 0) {
                if (!word || dismissed(word)) return;
                const key = idOf(word);
                if (!map.has(key)) map.set(key, { word, kinds: new Set(), lastWrongAt: 0 });
                const entry = map.get(key);
                entry.kinds.add(kind);
                entry.lastWrongAt = Math.max(entry.lastWrongAt, Number(stamp) || 0);
            }
            activeRecords().forEach(({ kind, snapshot }) => add(resolve(snapshot), kind, snapshot.lastWrongAt));
            // Keep historical stars/count-only records readable; never migrate or erase them on entry.
            const tracked = new Set(sentences?.listTrackedWordIds(moduleKey) || []);
            fullWords().forEach((word) => {
                if (map.has(idOf(word))) return;
                let starred = false;
                try { starred = idsOf(word).some((id) => global.localStorage.getItem(config.getStarKey(id)) === 'true'); } catch (_) { /* read-only fallback */ }
                if (starred || idsOf(word).some((id) => tracked.has(id))) add(word, 'legacy');
            });
            return Array.from(map.values()).sort((a, b) => b.lastWrongAt - a.lastWrongAt);
        }

        function clearWord(word) {
            if (!word) return;
            activeRecords().forEach(({ kind, snapshot }) => {
                if (!matchesSnapshot(word, snapshot)) return;
                if (kind === 'sentence') sentences.removeQuestion(moduleKey, snapshot.questionId);
                else store.removeTypedWord(moduleKey, kind, idOf(snapshot));
            });
            idsOf(word).forEach((id) => {
                try { global.localStorage.removeItem(config.getStarKey(id)); } catch (_) { /* storage unavailable */ }
                store?.dismissKeyword(moduleKey, id);
            });
        }

        function buildQueue(core, subset) {
            const words = subset || entries().map((entry) => entry.word);
            const allowed = (word) => words.some((candidate) => sameWord(word, candidate));
            const queue = [];
            const queued = new Set();
            [...typedKinds, 'sentence'].forEach((kind) => {
                core.prepareQuestionSet({ mode: 'review' }, kind).questions.forEach((question) => {
                    const word = resolve(question.word) || question.word;
                    const key = kind === 'sentence'
                        ? `sentence::${question.reviewCanonicalQuestionId || question.questionId}`
                        : `${kind}::${idOf(word)}`;
                    if (allowed(word) && !dismissed(word) && !queued.has(key)) {
                        queued.add(key);
                        queue.push({ ...question, word });
                    }
                });
            });
            words.forEach((word) => {
                if (queue.some((question) => sameWord(question.word, word))) return;
                const question = core.buildMeaningQuestionSpec(word, fullWords()) || core.buildReadingQuestionSpec(word) || core.buildSentenceQuestionSpec(word);
                if (question) queue.push({ ...question, reviewFallback: true });
            });
            return queue;
        }

        function recordAnswer(core, question, correct) {
            if (!correct) {
                core.handleWrongAnswer(question, question.kind);
                return;
            }
            core.handleCorrectAnswer(question, question.kind);
            // Remove old aliases too, but leave the other exercise kinds untouched.
            if (question.kind !== 'sentence') {
                (store?.listTypedWords(moduleKey, question.kind) || []).forEach((snapshot) => {
                    if (sameWord(question.word, snapshot)) store.removeTypedWord(moduleKey, question.kind, idOf(snapshot));
                });
            }
            // Retired duplicates without an authored replacement sentence use
            // the retained card's ordinary fallback review, not a made-up cloze.
            if ((question.word?.legacyWordIds || []).length && !core.getSentencePracticeItems(question.word).length) {
                const retiredIds = [...question.word.legacyWordIds, ...(question.word.legacyWords || [])];
                activeRecords().forEach(({ kind, snapshot }) => {
                    if (kind !== 'sentence' || !sameWord(question.word, resolve(snapshot))) return;
                    const sourceIds = [snapshot.wordId, snapshot.wordLabel, snapshot.word?.wordId, snapshot.word?.id, snapshot.word?.word, sentenceWordId(snapshot)];
                    if (sourceIds.some((id) => retiredIds.includes(id))) sentences.removeQuestion(moduleKey, snapshot.questionId);
                });
            }
            const stillPending = activeRecords().some(({ snapshot }) => matchesSnapshot(question.word, snapshot));
            if (!stillPending) clearWord(question.word);
        }

        return { entries, buildQueue, recordAnswer, clearWord, resolve };
    }

    function create(config) {
        const model = createModel(config);
        const core = global.VocabularyPracticeCore.create({
            moduleKey: config.moduleKey,
            getFullWordList: config.getFullWordList,
            getVocabStarKey: config.getStarKey,
            starKeyPrefix: config.starKeyPrefix,
            formatQuestionHtml: (body, support) => `<div class="review-question-jp" lang="ja">${body}</div><p class="review-question-hint">${esc(support)}</p>`
        });
        const header = document.getElementById('header-review-btn');
        const retry = document.getElementById('vocabulary-review-retry');
        retry.setAttribute('data-mobile-label', '再次练习');
        const practice = document.createElement('section');
        practice.id = 'vocabulary-review-practice';
        practice.className = 'vocabulary-review-practice hidden';
        practice.setAttribute('aria-label', '错题再次练习');
        document.getElementById('word-list-view').after(practice);
        let queue = [], position = 0, answers = [], answered = false;
        let listeningController = null, unavailable = 0;
        let currentReviewTitle = '', directoryTitle = '';
        function syncVisibleTitle() {
            const title = document.querySelector('.kiki-unified-header-title');
            if (!title) return;
            if (!directoryTitle) directoryTitle = title.textContent;
            title.textContent = currentReviewTitle || directoryTitle;
        }
        global.addEventListener('kiki-unified-header:ready', syncVisibleTitle);

        header.addEventListener('click', () => config.openList());
        retry.addEventListener('click', () => startPractice());

        function updateHeader() {
            const count = model.entries().length;
            header.hidden = Boolean(currentReviewTitle);
            header.disabled = false;
            header.setAttribute('aria-label', `错题库，${count} 个词汇`);
            header.querySelector('[data-review-count]').textContent = count;
        }

        function setRoute(active) {
            const url = new URL(global.location.href);
            if (active) url.searchParams.set('review', '1');
            else url.searchParams.delete('review');
            global.history.replaceState(global.history.state, '', url);
        }

        function renderList(container) {
            const entries = model.entries();
            container.classList.add('vocabulary-review-list');
            container.innerHTML = `<div class="review-list-heading"><h2>错题词汇</h2><span class="review-list-count">${entries.length} 词</span></div>`;
            if (!entries.length) {
                container.insertAdjacentHTML('beforeend', '<div class="review-empty"><span aria-hidden="true">✓</span><h3>暂时没有待复习的词汇</h3><p>练习中答错的词汇会自动收录到这里。</p></div>');
                return;
            }
            entries.forEach((entry, index) => {
                const row = document.createElement('article');
                row.className = 'review-word-row';
                row.innerHTML = `<button type="button" class="review-word-open" aria-label="查看 ${esc(entry.word.word)} 的词汇卡片"><span class="review-word-number">${String(index + 1).padStart(2, '0')}</span><span class="review-word-copy"><strong lang="ja">${entry.word.word_html || esc(entry.word.word)}</strong><span class="review-word-meaning">${esc(core.extractPrimaryMeaning(entry.word))}</span><span class="review-word-tags">${Array.from(entry.kinds).map((kind) => `<span data-kind="${kind}">${labels[kind]}</span>`).join('')}</span></span><span class="review-word-arrow" aria-hidden="true">›</span></button><button type="button" class="review-word-remove" aria-label="将 ${esc(entry.word.word)} 移出错题库">移出</button>`;
                row.querySelector('.review-word-open').addEventListener('click', () => config.openWord(index));
                row.querySelector('.review-word-remove').addEventListener('click', () => { model.clearWord(entry.word); config.openList(); });
                container.appendChild(row);
            });
        }

        function update(view, day) {
            if (view !== 'review-practice') { listeningController?.dispose(); listeningController = null; }
            const isReview = day === -1 && view !== 'days';
            currentReviewTitle = isReview ? (view === 'review-practice' ? '错题 · 再次练习' : '错题库') : '';
            updateHeader();
            practice.classList.add('hidden');
            syncVisibleTitle();
            retry.hidden = !isReview || view === 'review-practice';
            retry.disabled = model.entries().length === 0;
            document.body.classList.toggle('vocabulary-review-active', isReview);
            if (!isReview) return false;
            const originalPractice = document.getElementById('header-practice-btn');
            if (originalPractice) originalPractice.hidden = true;
            config.setTitle(view === 'review-practice' ? '错题 · 再次练习' : '错题库');
            config.setBack(view === 'list' ? '返回目录' : '返回错题库');
            if (view === 'review-practice') practice.classList.remove('hidden');
            else if (view === 'detail') document.getElementById('word-detail-view').classList.remove('hidden');
            else {
                document.getElementById('word-list-view').classList.remove('hidden');
                renderList(document.getElementById('word-list-container'));
            }
            return true;
        }

        function startPractice() {
            queue = model.buildQueue(core);
            position = 0; answers = []; answered = false; unavailable = 0;
            config.showPractice();
            renderQuestion();
        }

        function renderQuestion() {
            listeningController?.dispose(); listeningController = null;
            if (position >= queue.length) { renderResult(); return; }
            answered = false;
            const question = queue[position];
            practice.innerHTML = `<div class="review-practice-top"><span>${labels[question.kind]}练习</span><span>${position + 1} / ${queue.length}</span></div><progress max="${queue.length}" value="${position}"></progress><div class="review-question">${question.questionHtml}</div><form class="review-answer-form">${question.answerMode === 'input' ? '<label for="review-reading-answer">输入完整读音（平假名或片假名）</label><input id="review-reading-answer" lang="ja" autocomplete="off" spellcheck="false" placeholder="输入读音"><button type="submit" class="review-primary">确认答案</button>' : `<div class="review-options">${question.options.map((option, index) => `<button type="button" data-option="${index}"><span>${index + 1}</span>${esc(option)}</button>`).join('')}</div>`}</form><div class="review-answer-feedback" role="status" aria-live="polite"></div>`;
            practice.querySelector('form').addEventListener('submit', (event) => {
                event.preventDefault();
                const input = practice.querySelector('input');
                if (input && input.value.trim()) submitAnswer(input.value);
            });
            practice.querySelector('input')?.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' && event.isComposing) event.preventDefault();
            });
            practice.querySelectorAll('[data-option]').forEach((button) => button.addEventListener('click', () => submitAnswer(question.options[Number(button.dataset.option)])));
            practice.querySelector('input')?.focus({ preventScroll: true });
            if (question.kind === 'listening') {
                listeningController = global.VocabularyListeningPractice.mount(practice, question, {
                    onReady: (ready) => { if (!answered) practice.querySelectorAll('[data-option]').forEach((node) => { node.disabled = !ready; }); },
                    onSkip: () => { if (answered) return; unavailable++; queue.splice(position, 1); renderQuestion(); }
                });
            }
        }

        function submitAnswer(value) {
            if (answered) return;
            if (queue[position]?.kind === 'listening' && !listeningController?.isReady()) return;
            answered = true;
            listeningController?.reveal();
            const question = queue[position];
            const correct = question.kind === 'reading' ? normalizeAnswer(value) === normalizeAnswer(question.correctAnswer) : value === question.correctAnswer;
            answers.push({ question, correct });
            model.recordAnswer(core, question, correct);
            updateHeader();
            practice.querySelectorAll('form button, form input').forEach((node) => { node.disabled = true; });
            practice.querySelectorAll('[data-option]').forEach((node) => {
                const option = question.options[Number(node.dataset.option)];
                node.classList.toggle('is-correct', option === question.correctAnswer);
                node.classList.toggle('is-wrong', !correct && option === value);
            });
            const feedback = practice.querySelector('.review-answer-feedback');
            feedback.innerHTML = `<strong class="${correct ? 'is-correct' : 'is-wrong'}">${correct ? '回答正确' : '再记住这个用法'}</strong><p>正确答案：<b>${esc(question.correctAnswer)}</b></p>${question.sentenceCn || question.cn ? `<p>${esc(question.sentenceCn || question.cn)}</p>` : ''}<p>${esc(question.analysis || core.extractPrimaryMeaning(question.word))}</p><button class="review-primary" type="button">${position + 1 === queue.length ? '查看结果' : '下一题'}</button>`;
            if (question.kind === 'listening') feedback.innerHTML = `<strong class="${correct ? 'is-correct' : 'is-wrong'}">${correct ? '回答正确' : '再听一次，记住这个词'}</strong>${global.VocabularyListeningPractice.revealMarkup(question)}<button class="review-primary" type="button">${position + 1 === queue.length ? '查看结果' : '下一题'}</button>`;
            feedback.querySelector('button').addEventListener('click', () => { position++; renderQuestion(); });
            feedback.querySelector('button').focus({ preventScroll: true });
        }

        function renderResult() {
            listeningController?.dispose(); listeningController = null;
            const correct = answers.filter((answer) => answer.correct).length;
            const remaining = model.entries().length;
            practice.innerHTML = `<div class="review-result"><p class="review-eyebrow">REVIEW COMPLETE</p><h2>${queue.length ? '本轮复习完成' : '暂无可再次练习的题目'}</h2>${queue.length ? `<div class="review-result-score">${correct}<span> / ${queue.length}</span></div><p>答对 ${correct} 题 · 待复习 ${remaining} 词</p><p>已掌握的错题已移出，仍答错的内容继续保留。</p>` : '<p>可以先返回错题库查看词汇卡片。</p>'}<div class="review-result-actions"><button class="review-secondary" data-review-back type="button">返回错题库</button>${remaining && queue.length ? '<button class="review-primary" data-review-again type="button">再次练习</button>' : ''}</div></div>`;
            if (unavailable) practice.querySelector('.review-result-actions').insertAdjacentHTML('beforebegin', `<p>${unavailable} 题因录音未播放而跳过，未计入成绩，错题仍保留。</p>`);
            practice.querySelector('[data-review-back]').addEventListener('click', () => config.openList());
            practice.querySelector('[data-review-again]')?.addEventListener('click', startPractice);
        }

        return { update, renderList, startPractice, setRoute, getWords: () => model.entries().map((entry) => entry.word), removeWord: (wordOrId) => model.clearWord(typeof wordOrId === 'string' ? model.resolve({ wordId: wordOrId }) : wordOrId) };
    }

    global.VocabularyReviewLibrary = Object.freeze({ create, createModel, normalizeAnswer });
})(typeof window !== 'undefined' ? window : globalThis);
