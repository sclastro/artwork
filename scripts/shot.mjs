// 截圖工具：node scripts/shot.mjs <url> <out.png> [width] [height] [theme] [fullPage]
import { chromium } from "playwright-core";
const [url, out, w = "1440", h = "900", theme = "light", full = "0", scrollTo = "0"] = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const ctx = await browser.newContext({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1, colorScheme: theme === "dark" ? "dark" : "light", reducedMotion: "reduce" });
// 沙盒中的 Chromium 不信任代理的 CA；外部圖片改由 Node 端（已設定 CA）代為下載
await ctx.route(/^https:\/\/upload\.wikimedia\.org\//, async (route) => {
  try {
    const r = await fetch(route.request().url(), { headers: { "User-Agent": "TheGalleryWalk/1.0 (https://github.com/sclastro/artwork) test" } });
    await route.fulfill({ status: r.status, headers: { "content-type": r.headers.get("content-type") ?? "image/jpeg", "access-control-allow-origin": "*" }, body: Buffer.from(await r.arrayBuffer()) });
  } catch {
    await route.abort();
  }
});
const page = await ctx.newPage();
const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
page.on("pageerror", (e) => errors.push(String(e)));
await page.addInitScript((t) => localStorage.setItem("tgw:theme", t), theme);
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
if (+scrollTo) await page.evaluate((y) => window.scrollTo(0, y), +scrollTo);
await page.waitForTimeout(1500);
await page.screenshot({ path: out, fullPage: full === "1" });
console.log(out, errors.length ? "ERRORS:\n" + errors.join("\n") : "no console errors");
await browser.close();
