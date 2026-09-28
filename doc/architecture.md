# 架構

## 頁面骨架

三個 HTML 檔的外框完全相同，只有 `<main>` 裡的內容不同：

```
<body data-page="exp|quant|ai">
  <div class="shell">
    <aside class="rail">      左側固定欄：品牌、頁面切換、GitHub、語言選單
    <main class="content">    右側內容欄
      <section class="hero">  標題 + 副標（+ 按鈕）
      <section class="section"> ... 各段落
      <footer class="site-foot">
```

**側欄與頁尾的 HTML 在三個檔案裡各複製了一份。** 改導覽列、品牌文字、頁尾時，三個檔案都要改。目前頁面的連結要加 `aria-current="page"`，其他兩個不加。

`<head>` 裡的 `<title>`、description、og、twitter meta 每頁各自寫一份英文預設值。`og:image` 三頁都指向 `https://starcorn2020.github.io/og.png`，`og:url` 則各自是自己的網址。

### SEO

- 每頁有 `<link rel="canonical">`，指向自己的網址，和 `og:url` 相同。
- `index.html` 有一段 JSON-LD（schema.org `Person`）：名字、職稱、網址、`sameAs` 連到 LinkedIn 與 GitHub。**網站上只寫「Jory」，使用者還沒決定要不要公開全名，不要自己加。**職稱或定位改變時這裡也要改。
- 根目錄的 `robots.txt` 指向 `sitemap.xml`，`sitemap.xml` 列出三頁的網址。
- 多語系是 JS 切換，搜尋引擎只會收錄英文。要讓其他語言被收錄，得改成每個語言一個網址，目前不做。
- Google Search Console 還沒提交，使用者之後有需要再做。

## 多語系（`script.js`）

### 運作方式

- `I18N["en" | "zh-TW" | "zh-CN" | "fr" | "ko"]` 是五個扁平的 key → 字串字典。
- 頁面上的元素用屬性綁定 key：

| 屬性 | 效果 |
| --- | --- |
| `data-i18n="key"` | 設定 `textContent` |
| `data-i18n-html="key"` | 設定 `innerHTML`（字串內含 `<code>` 等標籤時才用） |
| `data-i18n-label="key"` | 設定 `aria-label` |

- 頁面標題與 meta 讀 `meta.<page>.title`、`meta.<page>.desc`，`<page>` 取自 `<body data-page>`。
- 語言選擇存在 `localStorage` 的 `lang`。預設 `en` 時不執行任何替換，直接顯示 HTML 裡的英文。
- 某個語言缺 key 時會退回英文，所以缺翻譯不會壞版，只會默默顯示英文。這種錯誤很難發現，一定要跑 [workflow.md](workflow.md) 裡的檢查。
- `<head>` 裡有一段小 script：若存的語言不是英文，先加上 `i18n-pending` 把 body 隱藏，最多 900ms，避免英文閃一下再換成中文。

### 兩個必須同步的地方

1. **HTML 內的英文預設文字**必須和 `I18N["en"]` 的值一致。英文使用者看到的是 HTML，不是字典。
2. **五種語言的 key 集合**必須相同，而且每個 key 都要在某個 HTML 裡用到。

### Key 命名

| 前綴 | 用途 |
| --- | --- |
| `meta.<page>.*` | 各頁標題與描述 |
| `a11y.*`、`nav.*`、`foot.role` | 共用外框（`foot.role` 同時用在側欄的職稱與頁尾） |
| `exp.hero.*`、`exp.dom.*`、`exp.proj.*`、`exp.cv.*` | 經歷頁：hero、四個領域、專案標題、完整履歷段 |
| `p1.*` | 專案：即時營運客戶端重構 |
| `pm.*` | 專案：Polymarket 預測市場接入 |
| `lt.*` | 專案：Lighter 交易所接入 |
| `lj.*` | 專案：鏈上出款系統效能優化 |
| `proj.private` | 「公司內部專案，程式碼不公開」共用註記 |
| `q.*`、`qp.*`、`qr.*` | 量化頁：技能、平台專案、研究結果 |
| `ai.*` | AI 協作方式頁 |

字典內的順序是 meta → 共用 → 經歷頁 → 量化頁（`/* quant page */`）→ AI 頁（`/* AI page */`）→ `foot.role`。新增 key 時五種語言放在同一個相對位置。字典順序是 en → zh-TW → zh-CN → fr → ko。

### 修改字串的安全做法

五種語言的同一個 key 分散在五個區塊，手動改很容易漏。建議用腳本依語言區塊替換，並斷言每個 key 剛好命中一次：

```python
import re, json
V = {"en": "...", "zh-TW": "...", "zh-CN": "...", "fr": "...", "ko": "..."}
KEY = "p1.callout"
s = open("script.js").read()
order = ["en", "zh-TW", "zh-CN", "fr", "ko"]
starts = [s.index(f'I18N["{l}"] = {{') for l in order] + [s.index("/* ── apply")]
out = s[:starts[0]]
for i, l in enumerate(order):
    blk = s[starts[i]:starts[i + 1]]
    blk, n = re.subn(r'(\n    "' + re.escape(KEY) + r'": )".*?"',
                     lambda m: m.group(1) + json.dumps(V[l], ensure_ascii=False), blk)
    assert n == 1, (l, KEY)
    out += blk
out += s[starts[-1]:]
open("script.js", "w").write(out)
```

改完同樣要更新 HTML 裡對應元素的英文預設文字。

## 樣式（`style.css`）

### 設計方向

淺色、專業，像一份排版好的工程文件。只用一個強調色（深綠，代表成交單），圓角統一 6px，不用卡片陰影，段落之間用細線分隔。只用系統字體、不載入外部字型，所以離線雙擊開啟也正常；等寬字體只用在 `code`。

### Token（`:root`）

| 變數 | 值 | 用途 |
| --- | --- | --- |
| `--paper` | `#fbfcfc` | 內容區背景 |
| `--rail` | `#f3f5f6` | 側欄背景 |
| `--line` / `--line-soft` | `#dde2e6` / `#e9edf0` | 分隔線 |
| `--ink` / `--text-2` / `--muted` | `#111a22` / `#4b5761` / `#6b7680` | 主文字 / 內文 / 次要 |
| `--accent` / `--accent-deep` / `--accent-tint` | `#0d7a5f` / `#0a6650` / `#e6f2ee` | 唯一的強調色 |
| `--radius` | `6px` | 全站圓角 |
| `--rail-w` | `14.5rem` | 側欄寬（使用者要求過縮窄，不要再加寬） |
| `--measure` | `50rem` | 內容欄最大寬度 |

### 版面元件

| class | 用在哪 |
| --- | --- |
| `.hero`、`.lead`、`.cta-row`、`.btn`、`.btn-primary` | 各頁開頭 |
| `.section`、`.sec-title`（後接 `.lead` 會自動收緊間距） | 段落 |
| `.domain`、`.domain-head`、`.domain-desc`、`.tags` | 經歷頁四個領域：左標題、右能力描述段落 + 技術標籤 |
| `.case`、`.case-head`、`.case-name`、`.case-tag`、`.case-body`、`.case-main`、`.case-side` | 專案卡：左內文、右標籤 |
| `.dec-list`（`dl`） | 專案裡的「重點 + 說明」條列，左側有細線 |
| `.callout` | 淺綠底的亮點框，一個專案最多一個 |
| `.note` | 灰色小字註記 |
| `.skill-grid`、`.skill-item` | 量化頁技能 2×2 |
| `.rules`（`dl`） | 左標題、右說明的列表（AI 頁、量化研究結果） |
| `.split`、`.split-col`、`.split-me` | AI 頁「分工」兩欄 |
| `.steps` | AI 頁有編號的流程（真的有先後順序才用編號） |
| `.memory`、`.loop` | AI 頁記憶段與循環圖 |
| `.examples`、`.ex-name`、`.ex-highlight` | AI 頁「實際案例」 |

### 響應式

- `≥ 720px`：領域、技能、分工、規則、案例變成兩欄。
- `≥ 1100px`：專案卡出現右側欄。
- `≤ 900px`：側欄收成頂部列，頁面切換變成三個並排分頁鈕（`.pages` 用 `repeat(3, 1fr)`；**若新增第四頁要改這裡**）。
- 中文標題有專屬規則 `html[lang^="zh"] .hero h1`，放寬寬度避免斷字。
- 韓文有 `html[lang="ko"] body { word-break: keep-all; }`，讓韓文在詞與詞之間換行，不在詞中間斷開；標題寬度規則同中文。字體堆疊裡有 Apple SD Gothic Neo、Malgun Gothic、Noto Sans KR。
- 新增語言時：`script.js` 的 `SUPPORTED`、`OG_LOCALE`、字典區塊，三個 HTML 的語言選單 `<option>`，以及需要的話加語言專屬 CSS。

## 新增頁面

1. 複製一個現有 HTML，改 `<body data-page>`、`<title>` 與各 meta、`og:url`，把 `aria-current` 移到新頁的連結。
2. 另外兩個 HTML 的側欄也要加上新頁連結。新頁的 canonical 改成自己的網址，並加進 `sitemap.xml`。
3. 五種語言都加上 `nav.<page>`、`meta.<page>.title`、`meta.<page>.desc` 與內容 key。
4. 窄螢幕的 `.pages` 欄數要跟著調整。
5. 更新根目錄 `README.md` 的頁面清單。

## Agent skills

`.agents/skills/` 放了兩個設計 skill：`frontend-design`（Anthropic）與 `design-taste-frontend`（taste-skill）。改版面或視覺時先載入。Claude Code 透過 `.claude/skills` symlink 讀同一份。更新 skill 只改 `.agents/skills/`。
