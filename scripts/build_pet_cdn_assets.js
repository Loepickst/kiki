#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const SOURCE_ROOT = path.join(ROOT, 'shared', 'assets', 'pets');
const OUTPUT_ROOT = path.join(ROOT, 'shared', 'assets', 'pets-optimized');
const TARGET_SIZE = 384;
const WEBP_QUALITY = 82;

const PET_ACTIONS = {
    'mumu-shiba': {
        blink: 4,
        cola: 6,
        eat: 5,
        happy: 4,
        headpat_annoyed: 6,
        leash: 4,
        play: 6,
        reward: 4,
        run: 6,
        sad: 6,
        sleep: 4,
        sleepy_wake: 6,
        thinking: 4
    },
    mianmian: {
        blink: 4,
        catnip_dizzy: 6,
        eat: 5,
        happy: 4,
        headpat_annoyed: 6,
        leash: 4,
        play: 6,
        reward: 4,
        run: 6,
        sad: 6,
        sleep: 4,
        sleepy_wake: 6,
        thinking: 4
    }
};

function formatBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) {
        return '0B';
    }
    const units = ['B', 'KB', 'MB', 'GB'];
    let next = bytes;
    let unitIndex = 0;
    while (next >= 1024 && unitIndex < units.length - 1) {
        next /= 1024;
        unitIndex += 1;
    }
    return `${next.toFixed(next >= 10 || unitIndex === 0 ? 0 : 1)}${units[unitIndex]}`;
}

function getFileSize(filePath) {
    try {
        return fs.statSync(filePath).size;
    } catch (error) {
        return 0;
    }
}

function ensureCwebp() {
    try {
        execFileSync('cwebp', ['-version'], { stdio: 'ignore' });
    } catch (error) {
        throw new Error('Missing cwebp. Install WebP tools first, for example: brew install webp');
    }
}

function convertFrame(inputPath, outputPath) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    execFileSync('cwebp', [
        '-quiet',
        '-q', String(WEBP_QUALITY),
        '-m', '6',
        '-alpha_q', '85',
        '-metadata', 'none',
        '-resize', String(TARGET_SIZE), String(TARGET_SIZE),
        inputPath,
        '-o', outputPath
    ]);
}

function build() {
    ensureCwebp();

    let sourceBytes = 0;
    let outputBytes = 0;
    let convertedCount = 0;
    const missing = [];

    Object.entries(PET_ACTIONS).forEach(([petId, actions]) => {
        Object.entries(actions).forEach(([action, frameCount]) => {
            for (let index = 1; index <= frameCount; index += 1) {
                const frameName = `frame-${String(index).padStart(2, '0')}`;
                const inputPath = path.join(SOURCE_ROOT, petId, 'frames', action, `${frameName}.png`);
                const outputPath = path.join(OUTPUT_ROOT, petId, 'frames', action, `${frameName}.webp`);

                if (!fs.existsSync(inputPath)) {
                    missing.push(path.relative(ROOT, inputPath));
                    continue;
                }

                sourceBytes += getFileSize(inputPath);
                convertFrame(inputPath, outputPath);
                outputBytes += getFileSize(outputPath);
                convertedCount += 1;
            }
        });
    });

    console.log(`Converted frames: ${convertedCount}`);
    console.log(`Source size: ${formatBytes(sourceBytes)}`);
    console.log(`Optimized size: ${formatBytes(outputBytes)}`);
    console.log(`Saved: ${formatBytes(sourceBytes - outputBytes)}`);
    console.log(`Output: ${path.relative(ROOT, OUTPUT_ROOT)}`);

    if (missing.length) {
        console.error(`Missing frames (${missing.length}):`);
        missing.forEach((item) => console.error(`- ${item}`));
        process.exitCode = 1;
    }
}

build();
