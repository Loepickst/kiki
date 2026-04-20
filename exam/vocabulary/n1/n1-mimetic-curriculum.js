(function (global) {
    const groups = [
        {
            id: 1,
            title: "第 1 阶段",
            summary: "Day 1 - Day 5"
        },
        {
            id: 2,
            title: "第 2 阶段",
            summary: "Day 6 - Day 9"
        }
    ];

    const daySizes = [10, 10, 10, 10, 10, 10, 10, 10, 10];
    let cursor = 0;

    const days = daySizes.map((size, index) => {
        const id = index + 1;
        const groupId = id <= 5 ? 1 : 2;
        const group = groups.find((item) => item.id === groupId);
        const wordIds = Array.from({ length: size }, (_, offset) => cursor + offset);
        cursor += size;
        return {
            id,
            groupId,
            groupTitle: group ? group.title : `第 ${groupId} 阶段`,
            groupSummary: group ? group.summary : "",
            title: `Day ${String(id).padStart(2, "0")}`,
            wordIds
        };
    });

    const stages = [
        { id: 1, groupId: 1, groupTitle: "第 1 阶段", title: "阶段 1 · Day 1 - Day 5", dayIds: [1, 2, 3, 4, 5] },
        { id: 2, groupId: 2, groupTitle: "第 2 阶段", title: "阶段 2 · Day 6 - Day 9", dayIds: [6, 7, 8, 9] }
    ];

    global.LAB_N1_MIMETIC_GROUPS = groups;
    global.LAB_N1_MIMETIC_DAYS = days;
    global.LAB_N1_MIMETIC_STAGES = stages;

    global.LAB_ONOMATOPOEIA_GROUPS = groups;
    global.LAB_ONOMATOPOEIA_DAYS = days;
    global.LAB_ONOMATOPOEIA_STAGES = stages;
})(typeof window !== "undefined" ? window : globalThis);
