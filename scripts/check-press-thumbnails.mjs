/**
 * Warn when a public/press thumbnail is portrait or far from the landscape
 * card ratio (16:9 to about 1.91:1). No extra dependencies. Does not fail the build.
 */
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "public", "press");
const minRatio = 1.6;
const maxRatio = 2.15;

function webpSize(buf) {
  if (buf.length < 30 || buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") {
    return null;
  }
  const format = buf.toString("ascii", 12, 16);
  if (format === "VP8X") {
    return {
      width: buf.readUIntLE(24, 3) + 1,
      height: buf.readUIntLE(27, 3) + 1,
    };
  }
  if (format === "VP8 ") {
    const start = buf.indexOf(Buffer.from([0x9d, 0x01, 0x2a]));
    if (start < 0 || start + 7 > buf.length) return null;
    return {
      width: buf.readUInt16LE(start + 3) & 0x3fff,
      height: buf.readUInt16LE(start + 5) & 0x3fff,
    };
  }
  if (format === "VP8L") {
    const bits = buf.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    };
  }
  return null;
}

const files = readdirSync(dir).filter((name) => name.endsWith(".webp")).sort();
let warnings = 0;

for (const name of files) {
  const size = webpSize(readFileSync(path.join(dir, name)));
  if (!size || !size.width || !size.height) {
    console.warn(`press thumbnail: could not read ${name}`);
    warnings += 1;
    continue;
  }
  const ratio = size.width / size.height;
  if (size.height > size.width) {
    console.warn(
      `press thumbnail: ${name} is portrait (${size.width}x${size.height}). Use a landscape WebP, about 1200x630.`,
    );
    warnings += 1;
  } else if (ratio < minRatio || ratio > maxRatio) {
    console.warn(
      `press thumbnail: ${name} is ${size.width}x${size.height} (${ratio.toFixed(2)}:1), far from the 16:9 card. Prefer about 1200x630.`,
    );
    warnings += 1;
  }
}

if (warnings === 0) {
  console.log(`press thumbnails: ${files.length} landscape files in public/press/`);
} else {
  console.warn(`press thumbnails: ${warnings} warning(s). Cards stay landscape.`);
}
