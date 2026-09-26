// 以 GitHub Pages 的方式伺服 out/：支援 basePath、目錄 index.html 與 404.html。
// 用法：PAGES_BASE_PATH=/artwork node scripts/serve-out.mjs [port]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("out");
const base = process.env.PAGES_BASE_PATH ?? "";
const port = Number(process.argv[2] ?? 4173);
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".json": "application/json", ".woff2": "font/woff2", ".txt": "text/plain", ".xml": "application/xml", ".png": "image/png", ".ico": "image/x-icon" };

http
  .createServer((req, res) => {
    let url = decodeURIComponent((req.url ?? "/").split("?")[0]);
    if (base && url.startsWith(base)) url = url.slice(base.length) || "/";
    else if (base) {
      res.writeHead(404).end("outside base path");
      return;
    }
    let file = path.join(root, url);
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
    if (!fs.existsSync(file) && fs.existsSync(file + ".html")) file += ".html";
    if (!file.startsWith(root) || !fs.existsSync(file)) {
      res.writeHead(404, { "content-type": types[".html"] });
      fs.createReadStream(path.join(root, "404.html")).pipe(res);
      return;
    }
    res.writeHead(200, { "content-type": types[path.extname(file)] ?? "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  })
  .listen(port, () => console.log(`http://localhost:${port}${base}/`));
