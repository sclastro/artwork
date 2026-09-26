// 依 src/content/artworks/*.ts 重新產生 index.ts（新增畫作後執行：node scripts/gen-artwork-index.mjs）
import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("src/content/artworks");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".ts") && f !== "index.ts").sort();
const id = (f) => f.replace(/\.ts$/, "").replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, "_$1");
const out = [
  "// 此檔由 scripts/gen-artwork-index.mjs 自動產生，請勿手動修改。",
  'import type { Artwork } from "../types";',
  ...files.map((f) => `import ${id(f)} from "./${f.replace(/\.ts$/, "")}";`),
  "",
  `export const artworks: Artwork[] = [${files.map(id).join(", ")}];`,
  "",
].join("\n");
fs.writeFileSync(path.join(dir, "index.ts"), out);
console.log(`index.ts: ${files.length} artworks`);
