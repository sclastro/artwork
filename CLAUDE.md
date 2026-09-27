# CLAUDE.md

給 Claude Code 參考的專案說明。每次開新 session 會自動讀取此檔，免得重新摸索。

## 這是什麼

**The Gallery Walk（藝廊漫遊）**：中英雙語名畫導賞網站。60 幅公有領域名畫、十個時期
（重點在浪漫主義至後印象派），每幅畫有六個分段的詳細導賞、深度縮放與熱點標註；
另有時間軸、畫家、博物館地圖、探索篩選、⌘K 搜尋、收藏、小測驗、比較、詞彙表。

- 技術：**Next.js 16（App Router）+ TypeScript + React 19**，`output: 'export'` 純靜態，無伺服器、無資料庫。
- 部署：**GitHub Pages**，由 GitHub Actions 建置（`https://sclastro.github.io/artwork/`）。
- 圖片：來源為 Wikimedia Commons，**轉成 WebP 自存於 `public/art/`**（320／960／1920 寬）；只有深度縮放的最高解像度仍向 Wikimedia 取圖。

## 指令

```bash
npm install
npm run dev        # http://localhost:3000（basePath 為空）
npm test           # vitest：內容完整性 + lib 純函數
npm run build      # 靜態匯出至 out/（等同 typecheck；約 310 頁）
npm run images     # 重新向 Commons 取得圖片資料，寫入 src/data/images.json
npm run fetch-images  # 下載並轉成 WebP 存於 public/art/（只補缺少的；--refresh 全部重做）
npm run index      # 重新產生 src/content/artworks/index.ts
npm run serve      # 以 GitHub Pages 方式伺服 out/（PAGES_BASE_PATH=/artwork 可測 basePath）
npm run shot -- <url> <out.png> [w] [h] [light|dark] [fullPage] [scrollY]   # 截圖
```

出 PR 前 `npm test` 與 `npm run build` 都要綠。專案**沒有 ESLint 設定**，不要執行 `next lint`
（會彈出互動精靈）。

## 新增一幅畫的步驟

1. 在 `src/content/artworks/<slug>.ts` 新增檔案（仿現有檔案，型別見 `src/content/types.ts`）。
2. 畫家、博物館不存在時，分別加入 `artists.ts`、`museums.ts`（博物館要有經緯度）。
3. `npm run index` 更新匯總檔。
4. `npm run images` 取得圖片尺寸、模糊預覽與主色（非公有領域的檔案會被拒絕），再 `npm run fetch-images` 產生自存 WebP。
5. `npm test`：會檢查引用、雙語、熱點、術語、廣東話用字等。
6. 以 `npm run build && npm run serve` 加截圖檢查**熱點位置**（座標是人手估計，務必目測）。

## 內容資料模型（`src/content/`）

全部以 TypeScript 撰寫，型別檢查即可捕捉缺漏。雙語欄位一律是 `Bi = { zh, en }`。

- `Artwork`：`summary`、`background`（段落）、`technique`（段落）、`symbolism`（卡片，可連 `hotspot` 索引）、
  `anecdotes`、`legacy`、`hotspots`（`x`、`y` 為 0–1 相對座標）、`related`。`date` 可覆寫年份顯示（如「1889 年 6 月」）。
- 正文標記（`src/lib/richText.ts`）：
  - `[[term]]` 或 `[[term|顯示文字]]` → 詞彙彈出框，term 必須在 `glossary.ts`。
  - `{{i|顯示文字}}` → 按下捲回大圖並開啟第 i 個熱點。
  - **中英兩版必須連到同一組熱點**，測試會驗證。
  - `((English))` → 英文人名／作品名註，**不要手寫**：由 `lib/names.ts` 的 `annotateNames()` 在頁面渲染時自動加入。
- **英文人名與作品名**：中文頁面中，人名與作品名在「每頁首次出現」時自動附上英文（旁邊有 0.8 倍速發音掣）。
  對照表 = 畫家（`artists.ts`）＋本站作品（`《標題》`）＋ `src/content/names.ts` 的其他名稱。
  **新增內容時，文中新出現的人名、書名、電影名要加入 `names.ts`**；短名稱易誤配（曾有「波希米亞」誤中「波希」、
  「莫斯科特列季亞科夫」誤中「科特」），可加 `null` 鍵擋住。同一人全站只用一個譯名（例如一律「哥雅」，不用「戈雅」）。
- 中文內容用正統書面語；`test/content.test.ts` 會拒絕 `嘅咗喺唔冇啲嗰俾`。
- 事實須查證（博物館官方頁、Wikipedia）。曾更正過的例子：《拿破崙跨越阿爾卑斯山》採用美景宮版本（264×232）；
  轉售權趣聞屬《晚禱》而非《拾穗》。

## ⚠️ Wikimedia Commons 關鍵知識

- **為何自存**：直接引用時，連續瀏覽多頁（時間軸一頁已有 60 幅）便會被 upload.wikimedia.org 限流（429），
  圖片只剩模糊預覽。`lib/images.ts` 的 `imageUrl()`／`srcSet()` 一律回傳 `public/art/` 的檔案，
  `zoomUrl()` 才指向 Wikimedia；深度縮放載入失敗會自動改用自存 1920px。
- **縮圖只可用標準寬度**：60、250、330、500、960、1280、1920、3840。
  其他寬度（例如 640）會回 400 或觸發即時縮放限流。要求寬度 ≥ 原圖時 `imageUrl()` 改用原檔。
- Commons API 會回 **429**：腳本以 40 個一批查詢，並有重試與退避。
- **User-Agent 只寫 repo 網址**（`TheGalleryWalk/1.0 (https://github.com/sclastro/artwork)`），
  切勿放入任何個人電郵。
- upload.wikimedia.org 容許 CORS，故 OpenSeadragon 可直接讀取。

## 架構重點

- **單一 root layout**（`app/layout.tsx`）擁有 `<html>`；`app/[locale]/layout.tsx` 以
  `generateStaticParams` 產生 `zh`、`en`，`dynamicParams = false`。
- **無閃爍**：`lib/prefs.ts` 的 `bootScript` 在首次繪製前設定 `data-theme` 及 `html lang`。
  根頁 `/` 以腳本按 localStorage → `navigator.language` 轉往 `/zh/` 或 `/en/`。
- **basePath**：`next.config.ts` 讀 `PAGES_BASE_PATH`（Actions 由 `actions/configure-pages` 提供），
  並以 `NEXT_PUBLIC_BASE_PATH` 給 client。手寫的絕對路徑（例如 `router.push`、圖示）要自行加上。
- **語言切換**（`LangToggle`）替換網址的 locale 段，保留 query 與 hash，並以 `window.__tgwKeepScroll`
  保持捲動位置。介面字串在 `src/i18n/zh.ts`、`en.ts`，型別保證兩者鍵值一致。
- **localStorage** 鍵：`tgw:theme`、`tgw:locale`、`tgw:favorites`、`tgw:hotspots`；讀寫一律包 try/catch。
- **熱點預設隱藏**：作品頁先讓人直接欣賞畫作，按「導覽標註」才顯示全部編號（偏好記於 `tgw:hotspots`）。
  正文或象徵卡的熱點連結只亮出該一點，關閉解說後消失，不改動偏好。曾經預設全部顯示，用戶反映編號遮住畫面。
- **發音掣**（`SayButton`、`lib/speech.ts`）：用瀏覽器內建語音合成，以 0.8 倍速讀出英文人名、作品名及術語；
  用戶只需要讀英文關鍵詞，不需要朗讀整段中文。支援與否在 useEffect 判斷，不支援的瀏覽器不顯示掣。
- `lib/catalog.ts` 產生給 client 用的輕量資料（不含長文），探索、收藏、比較、⌘K 都用它，免得把全部導賞文字送到瀏覽器。

## 動畫與互動的教訓

- **不要在 render 中用 `useReducedMotion()` 分支**：server 與 client 首次繪製結果不同，
  曾令標題永遠停在 `opacity: 0`。改為在 `LocaleProvider` 包 `<MotionConfig reducedMotion="user">`。
- Lenis 平滑捲動只在滑鼠裝置且未要求減少動態時啟用；實例放在 `window.__lenis`。
  **不要開 Lenis 的 `anchors` 選項**：頁內錨點一律用 `onAnchorClick`（`SmoothScroll.tsx`），
  曾經兩者同時處理同一次點擊，兩段動畫互相打斷，目錄跳到錯誤位置。
- **頁內元素不要用 `scrollIntoView`**：即使只想橫向捲動標籤列，它也會連整頁一併捲動，
  並打斷正在進行的平滑捲動。曾令手機打開直幅畫作時整頁自動下捲、熱點被導覽列遮住。
  改為對容器本身 `scrollTo({ left })`（見 `SectionNav`）。
- 縮圖→大圖轉場用 React `<ViewTransition name share="morph">`；不支援的瀏覽器自動退回。
- **只靠 `:hover` 的提示在手機上等於沒有**；術語與熱點都有靜態樣式，手機熱點以底部抽屜顯示。
- `.section` 只可設 `padding-block`，否則會蓋掉 `.container` 的左右內距。

## 地圖

- Leaflet + **OpenStreetMap 標準圖磚**，以 CSS filter 配合深淺色（見 `pages.css`）。
- **不要用 CARTO 圖磚**：現在未帶 API key 會出現「API KEY REQUIRED」水印。

## 截圖／測試環境備註

- 沙盒內 Chromium 不信任代理 CA，`scripts/shot.mjs` 把 https 請求交由 Node `fetch` 代為下載。
- Chromium 位於 `/opt/pw-browsers/chromium`，用 `playwright-core`；不要執行 `playwright install`。

## 慣例

- 程式註解用繁體中文書面語，不用廣東話口語。
- 樣式必須顧及手機（`@media (max-width: 640px)`），以 390px 逐頁檢查。
- 顏色、字體、間距只在 `src/styles/tokens.css` 定義。

## Git / 部署

- 每個 Claude Code session 各自開 `claude/*` branch。修改 → PR → merge 至 `main`。
- `.github/workflows/deploy.yml`：push 至 `main` → test → build → 部署 Pages（約一至兩分鐘）。
- `.github/workflows/ci.yml`：PR 時跑 test 與 build。
- 首次部署前，repo 的 Settings → Pages → Source 須設為「GitHub Actions」。
