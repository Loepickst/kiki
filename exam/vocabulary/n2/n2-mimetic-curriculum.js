(function (global) {
    const groups = [
        {
            id: 1,
            title: "擬声语・擬态语",
            summary: "从声音、动作和状态中建立画面感"
        }
    ];

    const days = [
        {
            id: 1,
            groupId: 1,
            groupTitle: "擬声语・擬态语",
            groupSummary: "从声音、动作和状态中建立画面感",
            dayNumber: 1,
            title: "第1组 心情与状态",
            wordIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        },
        {
            id: 2,
            groupId: 1,
            groupTitle: "擬声语・擬态语",
            groupSummary: "从声音、动作和状态中建立画面感",
            dayNumber: 2,
            title: "第2组 动作与表情",
            wordIds: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43]
        },
        {
            id: 3,
            groupId: 1,
            groupTitle: "擬声语・擬态语",
            groupSummary: "从声音、动作和状态中建立画面感",
            dayNumber: 3,
            title: "第3组 睡眠与身体状态",
            wordIds: [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]
        },
        {
            id: 4,
            groupId: 1,
            groupTitle: "擬声语・擬态语",
            groupSummary: "从声音、动作和状态中建立画面感",
            dayNumber: 4,
            title: "第4组 触感与物体状态",
            wordIds: [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94]
        }
    ];

    const stages = [
        {
            id: 1,
            groupId: 1,
            groupTitle: "擬声语・擬态语",
            title: "擬声语・擬态语",
            dayIds: [1, 2, 3, 4]
        }
    ];

    global.LAB_N2_MIMETIC_GROUPS = groups;
    global.LAB_N2_MIMETIC_DAYS = days;
    global.LAB_N2_MIMETIC_STAGES = stages;
    global.LAB_ONOMATOPOEIA_GROUPS = groups;
    global.LAB_ONOMATOPOEIA_DAYS = days;
    global.LAB_ONOMATOPOEIA_STAGES = stages;
})(typeof window !== "undefined" ? window : globalThis);
