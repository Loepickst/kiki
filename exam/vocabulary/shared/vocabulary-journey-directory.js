/* Day-by-day vocabulary directory shared by the N1 word-class pages.
   Owns: learned-word records, the learning journey (shared/vocabulary-learning-journey.js),
   explicit day completion, the chapter directory markup, and the word-card list marks.
   Pages keep their own word card, practice and audio code and pass labels/callbacks in. */
(function (global) {
    'use strict';

    const CHAPTER_NUMERALS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    const CHEVRON = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

    function escapeHtml(value) {
        return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
    }

    function chapterName(index) {
        return `第${CHAPTER_NUMERALS[index] || index + 1}章`;
    }

    function create(options) {
        const Journey = global.VocabularyLearningJourney;
        const days = Array.isArray(options.days) ? options.days : [];
        const stages = Array.isArray(options.stages) && options.stages.length
            ? options.stages
            : [{ id: 1, title: '全部', dayIds: days.map((day) => Number(day.id)) }];
        const storage = options.storage;
        const keys = options.keys;
        const labels = options.labels;
        const stamp = options.stamp || null;
        const getWordStorageId = options.getWordStorageId;
        const getDayWords = options.getDayWords;

        let journeyState = null;
        let notice = { text: '', isError: false, practiceDayId: null };
        let hasPlayedGreeting = false;

        const getDay = (dayId) => days.find((day) => Number(day.id) === Number(dayId)) || null;
        const stageDayIds = (stage) => (Array.isArray(stage.dayIds) ? stage.dayIds.map(Number) : []);
        const dayLabel = (dayId) => labels.dayLabel(getDay(dayId), Number(dayId));
        const dayName = (dayId) => (labels.dayName ? labels.dayName(getDay(dayId), Number(dayId)) : dayLabel(dayId));
        const dayTopic = (dayId) => (labels.dayTopic ? labels.dayTopic(getDay(dayId)) || '' : '');

        /* Learned words: viewed words, used for day progress and resume position. */
        function getLearnedWordIds() {
            try {
                const stored = JSON.parse(storage.get(keys.learned) || '[]');
                return new Set(Array.isArray(stored) ? stored.map((id) => String(id || '').trim()).filter(Boolean) : []);
            } catch (error) {
                return new Set();
            }
        }

        function getLearnedWordCount(words, learnedWordIds) {
            const learned = learnedWordIds || getLearnedWordIds();
            return (Array.isArray(words) ? words : []).reduce((count, word) => {
                const wordId = getWordStorageId(word);
                return count + (wordId && learned.has(wordId) ? 1 : 0);
            }, 0);
        }

        function getProgressPercent(completedCount, totalCount) {
            const completed = Math.max(0, Number(completedCount) || 0);
            const total = Math.max(0, Number(totalCount) || 0);
            if (total === 0 || completed === 0) return 0;
            if (completed >= total) return 100;
            return Math.max(1, Math.round((completed / total) * 100));
        }

        function markWordLearned(word) {
            const wordId = word ? getWordStorageId(word) : '';
            if (!wordId) return false;
            const learnedWordIds = getLearnedWordIds();
            if (learnedWordIds.has(wordId)) return false;
            learnedWordIds.add(wordId);
            storage.set(keys.learned, JSON.stringify(Array.from(learnedWordIds)));
            return true;
        }

        /* Journey: days opened before the journey existed stay open, never counted as completed. */
        function getState() {
            if (journeyState) return journeyState;
            let stored = null;
            try {
                stored = JSON.parse(storage.get(keys.journey) || 'null');
            } catch (error) {
                // Recover from invalid state without removing existing word progress.
            }
            // Pages that were never sequential keep the days a learner could already open.
            const legacy = options.legacyUnlock === false ? 0 : options.readLastDay();
            journeyState = Journey.restore(days, stored, { legacyUnlockedThroughDayId: legacy });
            const serialized = JSON.stringify(journeyState);
            if (JSON.stringify(stored) !== serialized) storage.set(keys.journey, serialized);
            return journeyState;
        }

        function getStatus() {
            return Journey.status(days, getState(), options.readLastDay());
        }

        function getCompletedDayIds() {
            return getStatus().completedDayIds;
        }

        function isAccessible(dayId) {
            return getStatus().accessibleDayIds.includes(Number(dayId));
        }

        function isCompleted(dayId) {
            return getCompletedDayIds().includes(Number(dayId));
        }

        // Another tab changed the records.
        function invalidate() {
            journeyState = null;
            clearNotice();
        }

        function clearNotice() {
            notice = { text: '', isError: false, practiceDayId: null };
        }

        // Explicit completion: every word learned, saved successfully, then the next day unlocks.
        function confirmDay(dayId) {
            const id = Number(dayId);
            const before = getStatus();
            const words = getDayWords(id);
            if (!before.accessibleDayIds.includes(id) || before.completedDayIds.includes(id)
                || words.length === 0 || getLearnedWordCount(words) !== words.length) return false;
            const nextState = Journey.complete(days, journeyState, id);
            if (!storage.set(keys.journey, JSON.stringify(nextState))) {
                notice = { text: '未能保存完成记录，请允许本地存储后重试。', isError: true, practiceDayId: null };
                return false;
            }
            journeyState = nextState;
            const after = getStatus();
            const newlyUnlocked = after.accessibleDayIds.find((nextId) => !before.accessibleDayIds.includes(nextId));
            if (newlyUnlocked) options.writeLastDay(newlyUnlocked);
            notice = {
                text: after.allComplete
                    ? `全部 ${days.length} 天已完成，随时可以回来复习。`
                    : `${dayName(id)}已完成${newlyUnlocked ? ` · ${dayName(newlyUnlocked)}已解锁` : '，这一步已经记下了。'}`,
                isError: false,
                practiceDayId: options.hasDayPractice === false ? null : id
            };
            return true;
        }

        function celebrate(dayId) {
            stamp?.celebrate(dayId, getCompletedDayIds);
        }

        // First unlearned word for an open day; reviews start from the top.
        function resumeIndex(dayId, words) {
            if (isCompleted(dayId)) return 0;
            const learned = getLearnedWordIds();
            const firstUnlearned = words.findIndex((word) => !learned.has(getWordStorageId(word)));
            return firstUnlearned >= 0 ? firstUnlearned : Math.max(0, words.length - 1);
        }

        function stageIndexOf(dayId) {
            return stages.findIndex((stage) => stageDayIds(stage).includes(Number(dayId)));
        }

        // Kicker above the word card: "第二章 · な形容詞" or "第一章 · 2日目".
        function chapterLabel(dayId) {
            const index = stageIndexOf(dayId);
            const detail = labels.cardKicker ? labels.cardKicker(getDay(dayId), Number(dayId)) : dayLabel(dayId);
            return index >= 0 ? `${chapterName(index)} · ${detail}` : detail;
        }

        /* Directory */
        function dayRowHtml(dayId, isCurrent, learnedWordIds) {
            const words = getDayWords(dayId);
            const day = getDay(dayId);
            const wordCount = words.length || (day && Array.isArray(day.wordIds) ? day.wordIds.length : 0);
            const learnedCount = getLearnedWordCount(words, learnedWordIds);
            const topic = dayTopic(dayId);
            return `
                <button
                    type="button"
                    class="curriculum-unit ${isCurrent ? 'is-current' : 'is-pending'}"
                    data-directory-day="${dayId}"
                    ${isCurrent ? 'aria-current="step"' : ''}
                    aria-label="${escapeHtml(dayName(dayId))}${topic ? `，${escapeHtml(topic)}` : ''}，已学习 ${learnedCount} / ${wordCount} 词${isCurrent ? '，当前学习内容' : '，尚未确认完成'}"
                >
                    <span class="curriculum-unit-order">${String(dayId).padStart(2, '0')}</span>
                    <span class="curriculum-unit-copy">
                        <strong lang="ja">${escapeHtml(dayLabel(dayId))}</strong>
                        ${topic ? `<small lang="zh-CN">${escapeHtml(topic)}</small>` : ''}
                    </span>
                    <span class="curriculum-unit-count">
                        已学 ${learnedCount} / ${wordCount} 词
                        <i class="journey-day-progress" aria-hidden="true"><span style="width:${getProgressPercent(learnedCount, wordCount)}%"></span></i>
                    </span>
                    <span class="curriculum-unit-state" aria-hidden="true">${learnedCount > 0 ? '继续学习' : '开始学习'} ›</span>
                </button>`;
        }

        function stageHtml(stage, stageIndex, journey, learnedWordIds, openStageIndex) {
            const dayIds = stageDayIds(stage);
            const completedDays = journey.completedDayIds;
            const currentDay = journey.currentDayId;
            const stageName = labels.stageName(stage, stageIndex);
            const accessibleDays = dayIds.filter((id) => journey.accessibleDayIds.includes(id));
            const completedInStage = dayIds.filter((id) => completedDays.includes(id));
            const pendingInStage = dayIds.filter((id) => journey.pendingDayIds.includes(id));
            const isAvailable = accessibleDays.length > 0;
            const isOpen = stageIndex === openStageIndex && isAvailable;
            const isComplete = dayIds.length > 0 && completedInStage.length === dayIds.length;
            const containsCurrentDay = dayIds.includes(currentDay);
            // A part without words yet is shown as 準備中 and never blocks the next part.
            const isEmpty = dayIds.length === 0;
            const stageState = !isAvailable ? 'locked' : (isComplete ? 'done' : (containsCurrentDay ? 'current' : 'review'));
            const statusLabel = isEmpty ? '準備中' : { locked: '未解放', done: '完了', current: '学習中', review: '振り返り' }[stageState];
            // One quiet mark per day: progress is felt, the task list stays hidden.
            const trailHtml = dayIds.map((id) => `<i class="${completedDays.includes(id) ? 'is-done' : (id === currentDay ? 'is-current' : '')}"></i>`).join('');
            const historyHtml = stamp ? completedInStage.map((id) => stamp.reviewMarkup(id, dayTopic(id) || stageName, completedDays)).join('') : '';
            const panelId = `learning-unit-panel-${stageIndex + 1}`;
            return `
                <section class="curriculum-stage n2-journey-stage n2-journey-stage--${stageIndex + 1} ${isOpen ? 'is-open' : ''}" data-learning-unit="${stageIndex + 1}" data-stage-state="${stageState}" style="--i:${stageIndex}">
                    <header class="curriculum-stage-header">
                        <span class="curriculum-stage-number"><span class="stage-number-digit">${String(stageIndex + 1).padStart(2, '0')}</span><span class="stage-number-chapter" lang="ja" aria-hidden="true">${chapterName(stageIndex)}</span></span>
                        <div class="curriculum-stage-copy">
                            <small><span class="stage-kicker-label">${escapeHtml(labels.stageKicker(stage, stageIndex))}</span><span class="journey-stage-trail" role="img" aria-label="已完成 ${completedInStage.length} / ${dayIds.length} 天">${trailHtml}</span></small>
                            <h3 lang="${labels.stageNameLang || 'zh-CN'}">${escapeHtml(stageName)}</h3>
                        </div>
                        <button
                            type="button"
                            class="curriculum-stage-practice n2-journey-toggle"
                            data-unit-toggle="${stageIndex + 1}"
                            aria-expanded="${isOpen ? 'true' : 'false'}"
                            aria-controls="${panelId}"
                            ${isAvailable ? '' : 'disabled'}
                        >
                            <span lang="ja">${statusLabel}</span>
                            ${isAvailable ? CHEVRON : ''}
                        </button>
                    </header>
                    ${isAvailable ? `<div id="${panelId}" class="n2-journey-panel" ${isOpen ? '' : 'hidden'}>
                        ${containsCurrentDay ? `<div class="n2-journey-current">
                            <p class="n2-journey-current-label">当前学习</p>
                            ${dayRowHtml(currentDay, true, learnedWordIds)}
                        </div>` : ''}
                        ${pendingInStage.length ? `<details class="directory-history n2-journey-history journey-pending-history">
                            <summary><span>之前学过 · 待确认 ${pendingInStage.length} 天</span><span>展开 ${CHEVRON}</span></summary>
                            <div class="journey-pending-list">${pendingInStage.map((id) => dayRowHtml(id, false, learnedWordIds)).join('')}</div>
                        </details>` : ''}
                        ${completedInStage.length ? `<details class="directory-history n2-journey-history">
                            <summary><span>已完成 · ${completedInStage.length} 天</span><span>集章回顾 ${CHEVRON}</span></summary>
                            <div class="n2-stamp-history-grid">${historyHtml}</div>
                        </details>` : ''}
                        ${completedInStage.length && options.hasStagePractice !== false ? `<div class="journey-stage-footer">
                            <button type="button" class="journey-text-button" data-directory-stage="${stage.id}">阶段练习 <span aria-hidden="true">›</span></button>
                        </div>` : ''}
                    </div>` : ''}
                </section>`;
        }

        function renderDirectory(container, handlers) {
            const journey = getStatus();
            const learnedWordIds = getLearnedWordIds();
            const completedDays = journey.completedDayIds;
            const currentDay = journey.currentDayId;
            const greetingText = labels.greeting(handlers.userName || '', journey.allComplete);
            // The greeting types itself out once per visit, like a message window.
            const playGreeting = !hasPlayedGreeting;
            hasPlayedGreeting = true;
            const openStageIndex = Math.max(0, currentDay === null ? stages.length - 1 : stageIndexOf(currentDay));
            const currentTopic = currentDay === null ? '' : dayTopic(currentDay);
            const currentLine = currentDay === null ? ''
                : (labels.currentLine ? labels.currentLine(getDay(currentDay), currentDay) : `${dayLabel(currentDay)}${currentTopic ? ` · ${currentTopic}` : ''}`);

            container.innerHTML = `
                <main class="n2-directory n1-journey-directory ${playGreeting ? 'is-entering' : ''}" lang="zh-CN">
                    ${notice.text || journey.allComplete ? `<div class="directory-journey-notice ${notice.isError ? 'is-error' : ''}" role="status" tabindex="-1">
                        <span aria-hidden="true">${notice.isError ? '!' : '✓'}</span>
                        <p>${escapeHtml(notice.text || `全部 ${days.length} 天已完成，随时可以回来复习。`)}</p>
                        ${notice.practiceDayId && !notice.isError ? `<button type="button" class="journey-text-button" data-notice-practice="${notice.practiceDayId}">顺手练一练 <span aria-hidden="true">›</span></button>` : ''}
                    </div>` : ''}
                    <section class="directory-heading" aria-labelledby="directory-title">
                        <span class="directory-mentor-portrait" role="img" aria-label="${escapeHtml(labels.mentorName)}"></span>
                        <div class="directory-heading-copy">
                            <small>${escapeHtml(labels.mentorName)}</small>
                            <h2 id="directory-title" class="${playGreeting ? 'is-typing' : ''}" style="--chars:${Array.from(greetingText).length + 2}">${escapeHtml(greetingText)}</h2>
                            <span class="adv-next" aria-hidden="true">▼</span>
                            <span class="directory-current-unit">
                                <span>${journey.allComplete ? '学习完成' : '当前学习'}</span>
                                <strong>${journey.allComplete ? '全部词汇已完成，可随时回顾' : escapeHtml(currentLine)}</strong>
                                <b>已完成 ${completedDays.length} / ${days.length} 天</b>
                            </span>
                        </div>
                        ${stamp ? stamp.entryMarkup(completedDays) : ''}
                    </section>
                    <div class="directory-section-heading">
                        <div>
                            <span class="adv-section-kicker" lang="en" aria-hidden="true">Chapter Select</span>
                            <h2>${escapeHtml(labels.sectionTitle)}</h2>
                        </div>
                    </div>
                    <section class="curriculum-stage-list" aria-label="${days.length} 天学习内容">
                        ${stages.map((stage, index) => stageHtml(stage, index, journey, learnedWordIds, openStageIndex)).join('')}
                    </section>
                    ${journey.allComplete && handlers.onFinalPractice ? `<footer class="n2-journey-footer">
                        <button type="button" class="curriculum-stage-practice" data-directory-final-practice lang="ja">
                            総合練習へ <span aria-hidden="true">→</span>
                        </button>
                    </footer>` : ''}
                </main>
            `;

            container.querySelectorAll('[data-directory-day]').forEach((button) => {
                button.addEventListener('click', () => handlers.onSelectDay(Number(button.dataset.directoryDay)));
            });
            container.querySelectorAll('[data-directory-stage]').forEach((button) => {
                button.addEventListener('click', () => handlers.onStagePractice?.(Number(button.dataset.directoryStage)));
            });
            container.querySelector('[data-notice-practice]')?.addEventListener('click', (event) => {
                handlers.onDayPractice?.(Number(event.currentTarget.dataset.noticePractice));
            });
            container.querySelectorAll('[data-unit-toggle]').forEach((button) => {
                button.addEventListener('click', () => {
                    const selectedUnit = button.closest('[data-learning-unit]');
                    const shouldOpen = !selectedUnit.classList.contains('is-open');
                    container.querySelectorAll('[data-learning-unit]').forEach((unit) => {
                        const isSelected = unit === selectedUnit && shouldOpen;
                        unit.classList.toggle('is-open', isSelected);
                        unit.querySelector('[data-unit-toggle]')?.setAttribute('aria-expanded', isSelected ? 'true' : 'false');
                        const panel = unit.querySelector('.n2-journey-panel');
                        if (panel) panel.hidden = !isSelected;
                    });
                });
            });
            container.querySelector('[data-directory-final-practice]')?.addEventListener('click', handlers.onFinalPractice);
            stamp?.bindEntry(container, getCompletedDayIds, {
                getDayTitle: (dayId) => dayTopic(dayId) || dayName(dayId),
                onReviewDay: (dayId) => {
                    if (!isCompleted(dayId)) return;
                    handlers.onSelectDay(dayId);
                    const title = global.document.querySelector('.study-word-title');
                    title?.setAttribute('tabindex', '-1');
                    title?.focus({ preventScroll: true });
                }
            });
        }

        function focusNotice(container) {
            container.querySelector('.directory-journey-notice')?.focus({ preventScroll: true });
        }

        /* Word card helpers */
        function wordListHtml(words, currentIndex, isReviewStyle) {
            const learned = isReviewStyle ? new Set() : getLearnedWordIds();
            return words.map((word, index) => {
                const isLearned = learned.has(getWordStorageId(word));
                return `
                <button
                    type="button"
                    class="study-word-link ${index === currentIndex ? 'is-selected' : ''} ${isLearned ? 'is-learned' : ''}"
                    data-study-word-index="${index}"
                    title="${escapeHtml(word.word)}"
                    ${index === currentIndex ? 'aria-current="page"' : ''}
                >
                    <span class="study-word-mark" aria-hidden="true"></span>
                    <span class="study-word-text">${word.word_html || escapeHtml(word.word)}</span>
                    ${isLearned ? '<span class="study-sr-only">（已学）</span>' : ''}
                </button>`;
            }).join('');
        }

        // One mark per word, the same route language as the directory.
        function routeHtml(words, currentIndex, isReviewStyle) {
            if (isReviewStyle) return '';
            const learned = getLearnedWordIds();
            return `<span class="study-route" aria-hidden="true">${words.map((word, index) =>
                `<i class="${index === currentIndex ? 'is-current' : (learned.has(getWordStorageId(word)) ? 'is-done' : '')}"></i>`).join('')}</span>`;
        }

        // What the last word's "next" button means for this day.
        function lastWordAction(dayId, words, currentIndex) {
            const dayIsConfirmed = isCompleted(dayId);
            const learned = getLearnedWordIds();
            const readyToConfirm = words.every((word, index) => index === currentIndex || learned.has(getWordStorageId(word)));
            if (dayIsConfirmed) return { kind: 'return', label: '回到目录', className: '' };
            return readyToConfirm
                ? { kind: 'confirm', label: '确认完成 ✓', className: 'is-confirm' }
                : { kind: 'resume', label: '继续未学词汇 ›', className: '' };
        }

        // Runs the last word's action; returns the index to show, or null when the view changes.
        function completeLastWord(dayId, words, currentIndex) {
            markWordLearned(words[currentIndex]);
            if (isCompleted(dayId)) return { next: 'directory' };
            if (getLearnedWordCount(words) === words.length) {
                return confirmDay(dayId) ? { next: 'celebrate' } : { next: 'directory' };
            }
            const learned = getLearnedWordIds();
            return { next: 'word', index: words.findIndex((word) => !learned.has(getWordStorageId(word))) };
        }

        return Object.freeze({
            getLearnedWordIds, getLearnedWordCount, getProgressPercent, markWordLearned,
            getState, getStatus, getCompletedDayIds, isAccessible, isCompleted, invalidate, clearNotice,
            confirmDay, celebrate, resumeIndex, chapterLabel, renderDirectory, focusNotice,
            wordListHtml, routeHtml, lastWordAction, completeLastWord
        });
    }

    const api = Object.freeze({ create, chapterName, escapeHtml });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else global.VocabularyJourneyDirectory = api;
})(typeof window !== 'undefined' ? window : globalThis);
