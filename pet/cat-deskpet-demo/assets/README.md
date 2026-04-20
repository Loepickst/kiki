# 素材目录说明

这版 demo 的原则是：**优先直接使用正式角色图，不再重绘猫脸。**

请先放入这张正式角色素材：

- `cat_reference.png`

当前状态机默认会这样使用：

- `idle`：优先使用 `cat_reference.png`
- `blink`：若有 `cat_blink.png` 就切换；没有则保留原图，并显示 `Blink · 需补素材`
- `sleep`：若有 `cat_sleep.png` 就切换；没有则继续用原图，同时只做整体下沉和透明度变化，并显示 `Sleep · 需补素材`
- `walk`：结构已预留，需补素材

后续推荐命名：

- `cat_reference.png`
- `cat_blink.png`  ← 需补素材
- `cat_sleep.png`  ← 需补素材
- `cat_walk_01.png`  ← 需补素材
- `cat_walk_02.png`  ← 需补素材
- `cat_walk_03.png`  ← 需补素材
- `cat_walk_04.png`  ← 需补素材

建议：

- 优先导出透明背景 PNG
- 不改变毛色、眼睛、项圈、铃铛、尾巴形状
- 尽量保持同一构图比例
- blink / sleep / walk 都应基于同一只正式角色补绘
