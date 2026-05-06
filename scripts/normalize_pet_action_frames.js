#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const CANVAS_SIZE = 768;
const ALPHA_THRESHOLD = 8;
const PETS = {
  'mumu-shiba': {
    targetHeight: 360
  },
  mianmian: {
    targetHeight: 340
  }
};

function crc32(buffer) {
  let crc = -1;
  for (let i = 0; i < buffer.length; i += 1) {
    crc ^= buffer[i];
    for (let j = 0; j < 8; j += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ -1) >>> 0;
}

function readPng(filePath) {
  const data = fs.readFileSync(filePath);
  if (data.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
    throw new Error(`Not a PNG: ${filePath}`);
  }

  let offset = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  const idatChunks = [];

  while (offset < data.length) {
    const length = data.readUInt32BE(offset);
    const type = data.subarray(offset + 4, offset + 8).toString('ascii');
    const chunk = data.subarray(offset + 8, offset + 8 + length);
    offset += length + 12;

    if (type === 'IHDR') {
      width = chunk.readUInt32BE(0);
      height = chunk.readUInt32BE(4);
      bitDepth = chunk[8];
      colorType = chunk[9];
    } else if (type === 'IDAT') {
      idatChunks.push(chunk);
    } else if (type === 'IEND') {
      break;
    }
  }

  if (bitDepth !== 8 || colorType !== 6) {
    throw new Error(`Unsupported PNG format, expected 8-bit RGBA: ${filePath}`);
  }

  const raw = zlib.inflateSync(Buffer.concat(idatChunks));
  const bytesPerPixel = 4;
  const stride = width * bytesPerPixel;
  const pixels = Buffer.alloc(width * height * bytesPerPixel);
  let sourceOffset = 0;
  let previous = Buffer.alloc(stride);

  for (let y = 0; y < height; y += 1) {
    const filterType = raw[sourceOffset];
    sourceOffset += 1;
    const scanline = raw.subarray(sourceOffset, sourceOffset + stride);
    sourceOffset += stride;
    const reconstructed = Buffer.alloc(stride);

    for (let x = 0; x < stride; x += 1) {
      const left = x >= bytesPerPixel ? reconstructed[x - bytesPerPixel] : 0;
      const up = previous[x];
      const upLeft = x >= bytesPerPixel ? previous[x - bytesPerPixel] : 0;
      let predictor = 0;

      if (filterType === 1) {
        predictor = left;
      } else if (filterType === 2) {
        predictor = up;
      } else if (filterType === 3) {
        predictor = Math.floor((left + up) / 2);
      } else if (filterType === 4) {
        const p = left + up - upLeft;
        const pa = Math.abs(p - left);
        const pb = Math.abs(p - up);
        const pc = Math.abs(p - upLeft);
        predictor = pa <= pb && pa <= pc ? left : (pb <= pc ? up : upLeft);
      } else if (filterType !== 0) {
        throw new Error(`Unsupported PNG filter ${filterType}: ${filePath}`);
      }

      reconstructed[x] = (scanline[x] + predictor) & 255;
    }

    reconstructed.copy(pixels, y * stride);
    previous = reconstructed;
  }

  return { width, height, pixels };
}

function writeChunk(type, chunkData) {
  const typeBuffer = Buffer.from(type, 'ascii');
  const lengthBuffer = Buffer.alloc(4);
  lengthBuffer.writeUInt32BE(chunkData.length, 0);
  const crcBuffer = Buffer.alloc(4);
  crcBuffer.writeUInt32BE(crc32(Buffer.concat([typeBuffer, chunkData])), 0);
  return Buffer.concat([lengthBuffer, typeBuffer, chunkData, crcBuffer]);
}

function writePng(filePath, image) {
  const { width, height, pixels } = image;
  const header = Buffer.from('89504e470d0a1a0a', 'hex');
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const rowOffset = y * (stride + 1);
    raw[rowOffset] = 0;
    pixels.copy(raw, rowOffset + 1, y * stride, (y + 1) * stride);
  }

  const compressed = zlib.deflateSync(raw, { level: 9 });
  fs.writeFileSync(filePath, Buffer.concat([
    header,
    writeChunk('IHDR', ihdr),
    writeChunk('IDAT', compressed),
    writeChunk('IEND', Buffer.alloc(0))
  ]));
}

function getAlphaBoundingBox(image) {
  const { width, height, pixels } = image;
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const alpha = pixels[(y * width + x) * 4 + 3];
      if (alpha > ALPHA_THRESHOLD) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX < 0 || maxY < 0) {
    return null;
  }

  return {
    x: minX,
    y: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1
  };
}

function sampleNearest(source, sourceX, sourceY) {
  const x = Math.max(0, Math.min(source.width - 1, Math.round(sourceX)));
  const y = Math.max(0, Math.min(source.height - 1, Math.round(sourceY)));
  const offset = (y * source.width + x) * 4;
  return [
    source.pixels[offset],
    source.pixels[offset + 1],
    source.pixels[offset + 2],
    source.pixels[offset + 3]
  ];
}

function normalizeFrame(filePath, targetHeight) {
  const source = readPng(filePath);
  const bbox = getAlphaBoundingBox(source);
  if (!bbox) {
    return null;
  }

  const targetCanvas = {
    width: CANVAS_SIZE,
    height: CANVAS_SIZE,
    pixels: Buffer.alloc(CANVAS_SIZE * CANVAS_SIZE * 4)
  };

  const maxTargetWidth = CANVAS_SIZE - 80;
  const heightScale = targetHeight / bbox.height;
  const widthScale = maxTargetWidth / bbox.width;
  const scale = Math.min(heightScale, widthScale);
  const drawWidth = Math.max(1, Math.round(bbox.width * scale));
  const drawHeight = Math.max(1, Math.round(bbox.height * scale));
  const destX = Math.round((CANVAS_SIZE - drawWidth) / 2);
  const destY = Math.round((CANVAS_SIZE - drawHeight) / 2);

  for (let y = 0; y < drawHeight; y += 1) {
    for (let x = 0; x < drawWidth; x += 1) {
      const sourceX = bbox.x + (x + 0.5) / scale - 0.5;
      const sourceY = bbox.y + (y + 0.5) / scale - 0.5;
      const [r, g, b, a] = sampleNearest(source, sourceX, sourceY);
      const targetOffset = ((destY + y) * CANVAS_SIZE + (destX + x)) * 4;
      targetCanvas.pixels[targetOffset] = r;
      targetCanvas.pixels[targetOffset + 1] = g;
      targetCanvas.pixels[targetOffset + 2] = b;
      targetCanvas.pixels[targetOffset + 3] = a;
    }
  }

  writePng(filePath, targetCanvas);
  return {
    before: bbox,
    after: getAlphaBoundingBox(targetCanvas)
  };
}

function summarize(rootDir) {
  const summary = {};
  const actionDirs = fs.readdirSync(rootDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  for (const action of actionDirs) {
    const dir = path.join(rootDir, action);
    const files = fs.readdirSync(dir)
      .filter((name) => /^frame-\d+\.png$/.test(name))
      .sort();
    const widths = [];
    const heights = [];

    for (const name of files) {
      const bbox = getAlphaBoundingBox(readPng(path.join(dir, name)));
      if (bbox) {
        widths.push(bbox.width);
        heights.push(bbox.height);
      }
    }

    if (widths.length && heights.length) {
      summary[action] = {
        width: [Math.min(...widths), Math.max(...widths)],
        height: [Math.min(...heights), Math.max(...heights)]
      };
    }
  }

  return summary;
}

function printSummary(petId, summary) {
  console.log(`\n${petId}`);
  for (const [action, stats] of Object.entries(summary)) {
    const widthRange = `${String(stats.width[0]).padStart(3)}-${String(stats.width[1]).padStart(3)}`;
    const heightRange = `${String(stats.height[0]).padStart(3)}-${String(stats.height[1]).padStart(3)}`;
    console.log(`${action.padEnd(16)} w ${widthRange} h ${heightRange}`);
  }
}

const assetsRoot = path.resolve(__dirname, '..', 'shared', 'assets', 'pets');

for (const [petId, config] of Object.entries(PETS)) {
  const framesRoot = path.join(assetsRoot, petId, 'frames');
  const actionDirs = fs.readdirSync(framesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  for (const action of actionDirs) {
    const dir = path.join(framesRoot, action);
    const files = fs.readdirSync(dir)
      .filter((name) => /^frame-\d+\.png$/.test(name))
      .sort();

    for (const name of files) {
      normalizeFrame(path.join(dir, name), config.targetHeight);
    }
  }

  printSummary(petId, summarize(framesRoot));
}
