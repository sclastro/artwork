# The Gallery Walk · 藝廊漫遊

中英雙語名畫導賞網站：60 幅公有領域名畫、十個時期，由文藝復興到現代，重點在浪漫主義至後印象派。

**網站：** https://sclastro.github.io/artwork/

## 功能

- 每幅畫的詳細導賞：基本資料、創作背景、技法與構圖、象徵意義、趣聞、歷史影響與相關作品
- 深度縮放檢視器與畫面熱點解說
- 按時期、時間軸、畫家、博物館地圖、探索篩選瀏覽；⌘K／Ctrl+K 快速搜尋
- 收藏、小測驗（猜畫家／時期／年份）、兩幅並排比較、藝術詞彙表
- 頂部一按切換中文／English 及深色／淺色模式

## 開發

```bash
npm install
npm run dev     # http://localhost:3000
npm test
npm run build   # 靜態匯出至 out/
```

技術：Next.js（App Router，靜態匯出）、TypeScript、motion、Lenis、OpenSeadragon、Leaflet、Fuse.js。
詳細說明見 [CLAUDE.md](CLAUDE.md)。

## 部署

push 或 merge 至 `main` 後，GitHub Actions 自動建置並部署至 GitHub Pages。

## 圖片出處

全部圖片取自 [Wikimedia Commons](https://commons.wikimedia.org/)，均屬公有領域；逐幅出處見網站「關於」頁。
