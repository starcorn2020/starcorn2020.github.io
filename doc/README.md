# 給 AI Agent 的交接文件

這個資料夾讓新開的 session 不需要回頭讀對話紀錄，就能接手這個 repo。先讀這一頁，再依任務去看其他三份。

| 文件 | 什麼時候讀 |
| --- | --- |
| [architecture.md](architecture.md) | 要改 HTML、CSS、翻譯，或新增頁面、段落 |
| [content-guide.md](content-guide.md) | 要改任何使用者看得到的文字（**動文字前必讀**） |
| [workflow.md](workflow.md) | 要驗證、截圖、commit、push |

## 30 秒概覽

- **這是什麼**：Jory（KUNG-FENG LAN，台灣）的個人作品集，給面試官與招募方看。
- **網址**：https://starcorn2020.github.io/ ，由 GitHub Pages 直接從 `main` 分支根目錄發布，推上去約 1 分鐘生效。
- **技術**：純靜態 HTML + CSS + 原生 JS，沒有 build、沒有依賴、沒有 `package.json`。雙擊 `index.html` 就能在本機打開。
- **三個頁面**：
  - `index.html`：經歷，含四個專長領域與四個專案
  - `quant.html`：量化，含技能、個人研究平台與研究結果
  - `ai.html`：AI 協作方式
- **四種語言**：en（預設）、zh-TW、zh-CN、fr。所有字串都在 `script.js`，改任何文字都要四種語言一起改。

## 和使用者合作

- **語言**：對話一律用繁體中文。程式碼、commit message、檔案內容維持原本的語言。
- **commit 和 push 前先問**：每次都要使用者明確同意。上一次同意不代表這一次也同意。
- **網站是公開的**：任何內容都會被面試官看到。遇到保密疑慮先問，不要自己決定，見 [content-guide.md](content-guide.md) 的保密規則。
- **不確定的事實要標出來**：寫進網站的每個數字、每件事都要有來源（使用者親口說過，或出現在履歷裡）。是推論的，交付時要明確告訴使用者。

## 開工檢查

1. `git log --oneline -10` 看最近改了什麼。使用者常在其他電腦上自己改，不要假設檔案還是上次看到的樣子。
2. 先讀要改的檔案，不要憑記憶改。
3. 改完後照 [workflow.md](workflow.md) 跑翻譯檢查，再用截圖確認排版。

## Repo 地圖

```
index.html      經歷頁（首頁，data-page="exp"）
quant.html      量化頁（data-page="quant"）
ai.html         AI 協作方式頁（data-page="ai"）
style.css       三頁共用樣式
script.js       四種語言字典 + 套用邏輯
og.png          分享連結用的預覽圖（1200×627，三頁共用）
README.md       給人看的專案說明
doc/            本資料夾，給 agent 看的交接文件
.agents/skills/ 設計用的 agent skills（Codex 讀這裡）
.claude/skills  → ../.agents/skills 的 symlink（Claude Code 讀這裡）
```
