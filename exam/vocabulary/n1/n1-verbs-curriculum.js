(function (global) {
    const groups = [
        {
            id: 1,
            title: "动作与操作",
            summary: "先把运作、积累、聚拢和抓取这些高频动作练稳。"
        },
        {
            id: 2,
            title: "变化与结果",
            summary: "围绕损坏、阻挡、达成和扭转这些结果变化来刷题。"
        },
        {
            id: 3,
            title: "状态与感受",
            summary: "把控制、清晰、隐藏、安抚和负担这些状态词练熟。"
        },
        {
            id: 4,
            title: "人际与表达",
            summary: "集中处理跟随、表达、规劝和冲突这些互动场景。"
        },
        {
            id: 5,
            title: "判断与应对",
            summary: "最后把请求回应和裁决判断这一组收口。"
        }
    ];

    const days = [
        { id: 1, groupId: 1, groupTitle: "动作与操作", groupSummary: groups[0].summary, title: "维持与供给", wordIds: [0, 1, 2, 3, 6, 7, 11, 13, 108, 150, 188, 262, 279] },
        { id: 2, groupId: 1, groupTitle: "动作与操作", groupSummary: groups[0].summary, title: "积累与培养", wordIds: [28, 29, 30, 31, 32, 33, 34, 35, 44, 45, 46, 47, 58, 59, 74, 277] },
        { id: 3, groupId: 1, groupTitle: "动作与操作", groupSummary: groups[0].summary, title: "聚拢与扩张", wordIds: [4, 20, 21, 22, 23, 24, 25, 26, 27, 36, 37, 38, 39, 98, 173, 179] },
        { id: 4, groupId: 1, groupTitle: "动作与操作", groupSummary: groups[0].summary, title: "耕作与抓取", wordIds: [40, 41, 42, 43, 48, 49, 50, 51, 52, 53, 91, 92, 93, 94] },

        { id: 5, groupId: 2, groupTitle: "变化与结果", groupSummary: groups[1].summary, title: "破损与脱落", wordIds: [8, 9, 10, 12, 14, 54, 55, 56, 57, 219, 225, 274] },
        { id: 6, groupId: 2, groupTitle: "变化与结果", groupSummary: groups[1].summary, title: "阻挡与回避", wordIds: [66, 67, 68, 69, 70, 71, 72, 73, 76, 77, 78, 79, 80, 81, 82, 83, 86, 87] },
        { id: 7, groupId: 2, groupTitle: "变化与结果", groupSummary: groups[1].summary, title: "达成与胜负", wordIds: [75, 104, 105, 106, 107, 109, 110, 111, 112, 113, 115, 116, 117, 118, 149, 174, 220, 221] },
        { id: 8, groupId: 2, groupTitle: "变化与结果", groupSummary: groups[1].summary, title: "谋划与翻盘", wordIds: [60, 101, 119, 120, 121, 122, 123, 124, 125, 184, 185, 242, 257, 259, 263, 272, 273, 275] },

        { id: 9, groupId: 3, groupTitle: "状态与感受", groupSummary: groups[2].summary, title: "固定与操控", wordIds: [62, 84, 85, 90, 96, 99, 128, 180, 181, 182, 183, 186, 211, 223, 229, 255, 256, 267] },
        { id: 10, groupId: 3, groupTitle: "状态与感受", groupSummary: groups[2].summary, title: "看清与模糊", wordIds: [61, 102, 127, 131, 132, 134, 135, 136, 137, 138, 151, 205, 236, 237, 239] },
        { id: 11, groupId: 3, groupTitle: "状态与感受", groupSummary: groups[2].summary, title: "隐藏与守护", wordIds: [114, 142, 143, 144, 145, 148, 152, 153, 154, 155, 172, 276] },
        { id: 12, groupId: 3, groupTitle: "状态与感受", groupSummary: groups[2].summary, title: "安抚与迟疑", wordIds: [140, 141, 146, 147, 156, 157, 158, 159, 187, 222, 243, 265, 266] },
        { id: 13, groupId: 3, groupTitle: "状态与感受", groupSummary: groups[2].summary, title: "为难与负担", wordIds: [5, 95, 97, 126, 129, 130, 133, 139, 160, 161, 162, 163, 164, 165, 166, 167, 175] },

        { id: 14, groupId: 4, groupTitle: "人际与表达", groupSummary: groups[3].summary, title: "跟随与行进", wordIds: [16, 18, 88, 89, 100, 103, 168, 169, 170, 171, 176, 177, 178, 216, 218, 224, 235] },
        { id: 15, groupId: 4, groupTitle: "人际与表达", groupSummary: groups[3].summary, title: "表达与规劝", wordIds: [19, 65, 189, 190, 191, 192, 193, 200, 212, 213, 214, 215, 217, 244, 246] },
        { id: 16, groupId: 4, groupTitle: "人际与表达", groupSummary: groups[3].summary, title: "欺瞒与冲突", wordIds: [63, 194, 195, 196, 197, 238, 240, 241, 245, 247, 248, 249, 250, 251, 252, 253, 254, 264] },

        { id: 17, groupId: 5, groupTitle: "判断与应对", groupSummary: groups[4].summary, title: "请求与回应", wordIds: [201, 202, 203, 204, 206, 207, 208, 209, 210, 268, 270, 271, 278] },
        { id: 18, groupId: 5, groupTitle: "判断与应对", groupSummary: groups[4].summary, title: "裁决与判断", wordIds: [15, 17, 64, 198, 199, 226, 227, 228, 230, 231, 232, 233, 234, 258, 260, 261, 269] }
    ];

    const stages = [
        { id: 1, groupId: 1, groupTitle: "动作与操作", title: "阶段 1 · 动作起手", dayIds: [1, 2, 3, 4] },
        { id: 2, groupId: 2, groupTitle: "变化与结果", title: "阶段 2 · 变化推进", dayIds: [5, 6, 7, 8] },
        { id: 3, groupId: 3, groupTitle: "状态与感受", title: "阶段 3 · 状态判断", dayIds: [9, 10, 11, 12, 13] },
        { id: 4, groupId: 4, groupTitle: "人际与表达", title: "阶段 4 · 表达交锋", dayIds: [14, 15, 16] },
        { id: 5, groupId: 5, groupTitle: "判断与应对", title: "阶段 5 · 应对定夺", dayIds: [17, 18] }
    ];

    global.LAB_N1_VERB_GROUPS = groups;
    global.LAB_N1_VERB_DAYS = days;
    global.LAB_N1_VERB_STAGES = stages;
})(typeof window !== "undefined" ? window : globalThis);
