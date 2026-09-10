# 柴犬回应叫声

`shiba-bark.wav`：游戏使用的 0.389 秒单声犬吠，来自 kwahmah_02 的 **Single Dog Bark**（2015-06-21）。原发布者标为 CC0 1.0 / public domain；未声称原录音犬种为柴犬。

- 来源：https://freesound.org/people/kwahmah_02/sounds/277058/
- 授权：https://creativecommons.org/publicdomain/zero/1.0/
- 原预览资源：https://cdn.freesound.org/previews/277/277058_4486188-hq.mp3
- 原文件：`source/single-dog-bark.mp3`
- 本地处理：转单声道 44.1 kHz PCM WAV，90 Hz 高通、6.5 kHz 低通，5 ms 淡入、末尾 39 ms 淡出；播放增益 0.55。音频全部本地加载，运行时不依赖 Freesound。

复现：

```sh
ffmpeg -i source/single-dog-bark.mp3 -ac 1 -ar 44100 -af 'highpass=f=90,lowpass=f=6500,afade=t=in:d=0.005,afade=t=out:st=0.35:d=0.039' shiba-bark.wav
```

`bark-data.js` 由 `node scripts/build-audio-data.cjs` 从 WAV 无损打包，作为普通脚本加载，兼容双击 `index.html` 的 `file://` 入口；运行时不再 fetch 本地音频。更换 WAV 后请重新运行打包脚本。
