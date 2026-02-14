const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const input = path.join(__dirname, "..", "public", "favicon.ico");
const outDir = path.join(__dirname, "..", "public", "logos");

async function run() {
  const { parseICO } = await import("icojs");
  const buffer = await fs.readFile(input);
  const images = await parseICO(buffer, "image/png");

  if (!images.length) {
    throw new Error("No images found in favicon.ico");
  }

  const best = images.sort((a, b) => b.width * b.height - a.width * a.height)[0];
  const pngBuffer = Buffer.from(best.buffer);

  await fs.mkdir(outDir, { recursive: true });

  await sharp(pngBuffer)
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(outDir, '\\favicon.ico'"));

  await sharp(pngBuffer)
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(outDir, '\\favicon.ico'"));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
