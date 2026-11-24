import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import path from "node:path";

const dir = path.join(process.cwd(), "public", "images", "produtos");
const files = (await readdir(dir)).filter((f) => f.endsWith(".jpg"));

for (const f of files) {
  const src = path.join(dir, f);
  const tmp = src + ".tmp";
  const before = (await stat(src)).size;
  await sharp(src)
    .rotate()
    .resize({ width: 1500, height: 1500, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(tmp);
  await unlink(src);
  await rename(tmp, src);
  const after = (await stat(src)).size;
  console.log(f, (before / 1024 | 0) + "kb ->", (after / 1024 | 0) + "kb");
}
