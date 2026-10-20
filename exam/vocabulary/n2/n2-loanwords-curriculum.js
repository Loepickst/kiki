(function (global) {
    'use strict';

    const groups = [
        { id: 1, title: '行为、操作与活动型', summary: '' },
        { id: 2, title: '状态、变化与结果型', summary: '' },
        { id: 3, title: '情绪、影响与评价型', summary: '' },
        { id: 4, title: '性质、方式与程度型', summary: '' },
        { id: 5, title: '人物、身份、生物与群体型', summary: '' },
        { id: 6, title: '时间、空间、场所与数量型', summary: '' },
        { id: 7, title: '目标、计划、制度与信息型', summary: '' },
        { id: 8, title: '物品、工具、材料与外观型', summary: '' }
    ];

    const groupPlans = [
        {
            group: groups[0],
            wordIds: [3, 8, 12, 14, 16, 17, 29, 30, 38, 40, 42, 44, 49, 52, 62, 64, 65, 71, 77, 78, 80, 91, 92, 94, 102, 106, 109, 128, 133, 143, 147, 163, 166, 170, 172]
        },
        {
            group: groups[1],
            wordIds: [1, 2, 20, 23, 25, 28, 55, 68, 88, 104, 105, 112, 125]
        },
        {
            group: groups[2],
            wordIds: [15, 19, 53, 59, 73, 90, 93, 103, 129, 135, 148, 152, 153, 156, 158]
        },
        {
            group: groups[3],
            wordIds: [61, 66, 75, 107, 111, 122, 149]
        },
        {
            group: groups[4],
            wordIds: [5, 35, 43, 45, 67, 115, 119, 138, 141, 154, 159, 162, 165]
        },
        {
            group: groups[5],
            wordIds: [7, 24, 26, 34, 39, 47, 51, 56, 58, 69, 74, 83, 84, 89, 99, 123, 124, 139, 146, 151, 161, 164, 167, 171]
        },
        {
            group: groups[6],
            wordIds: [0, 4, 6, 9, 10, 11, 13, 21, 41, 46, 50, 57, 60, 70, 72, 81, 87, 95, 98, 101, 113, 114, 120, 126, 131, 136, 145, 150, 157]
        },
        {
            group: groups[7],
            wordIds: [18, 22, 27, 31, 32, 33, 36, 37, 48, 54, 63, 76, 79, 82, 85, 86, 96, 97, 100, 108, 110, 116, 117, 118, 121, 127, 130, 132, 134, 137, 140, 142, 144, 155, 160, 168, 169]
        }
    ];

    let nextDayId = 1;
    const days = groupPlans.flatMap((plan) => {
        const daySizes = plan.wordIds.length < 20
            ? [plan.wordIds.length]
            : Array.from({ length: Math.ceil(plan.wordIds.length / 10) }, (_, index) => {
                return Math.min(10, plan.wordIds.length - (index * 10));
            });
        let cursor = 0;
        return daySizes.map((size, index) => {
            const wordIds = plan.wordIds.slice(cursor, cursor + size);
            cursor += size;
            return {
                id: nextDayId++,
                groupId: plan.group.id,
                groupTitle: plan.group.title,
                groupSummary: plan.group.summary,
                dayNumber: index + 1,
                title: `${index + 1}日目`,
                wordIds
            };
        });
    });

    const stages = groups.map((group) => ({
        id: group.id,
        groupId: group.id,
        groupTitle: group.title,
        title: group.title,
        dayIds: days
            .filter((day) => day.groupId === group.id)
            .map((day) => day.id)
    }));

    global.LAB_N2_LOANWORD_GROUPS = groups;
    global.LAB_N2_LOANWORD_DAYS = days;
    global.LAB_N2_LOANWORD_STAGES = stages;
})(typeof window !== 'undefined' ? window : globalThis);
