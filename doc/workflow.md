# 工作流程

## 本機預覽

直接用瀏覽器打開 `index.html` 即可，不需要伺服器。要用 HTTP 的話：

```bash
npx serve .                  # 需要 Node.js
python3 -m http.server 8000  # 需要 Python
```

## 改完一定要跑的檢查

### 1. 翻譯 key 一致性

確認五種語言的 key 集合相同、HTML 用到的 key 都存在、沒有多餘的 key。每個語言的 `missing` 和 `unused` 都要是空陣列：

```bash
node -e '
const fs=require("fs");const I={};
require("vm").runInNewContext(fs.readFileSync("script.js","utf8").replace("var I18N = {};","var I18N = OUT;"),{OUT:I,document:{body:null,readyState:"loading",documentElement:{},addEventListener(){}}});
const pages=["index.html","ai.html","quant.html"];
const keys=new Set();for(const f of pages)for(const x of fs.readFileSync(f,"utf8").matchAll(/data-i18n(?:-html|-label)?="([^"]+)"/g))keys.add(x[1]);
for(const f of pages){const p=fs.readFileSync(f,"utf8").match(/data-page="([^"]+)"/)[1];keys.add("meta."+p+".title");keys.add("meta."+p+".desc")}
for(const l in I)console.log(l,"missing",[...keys].filter(k=>!(k in I[l])),"unused",Object.keys(I[l]).filter(k=>!keys.has(k)))'
```

新增頁面時，記得把它加進 `pages` 陣列。

### 2. 沒有破折號

下面這行應該沒有任何輸出（`══` 是 HTML 註解裡的分隔線，已排除）：

```bash
grep -n "[—–]" index.html ai.html quant.html script.js | grep -v "══"
```

### 3. 截圖檢查排版

macOS 上用 headless Chrome：

```bash
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CH" --headless=new --hide-scrollbars --window-size=1440,2400 \
  --screenshot=/tmp/page.png "file://$PWD/index.html"
```

常見需求的做法：

- **看中文版**：語言存在 localStorage，而同一台機器的 `file://` 頁面共用同一份。先開一個跳轉頁設定語言，看完再切回英文，以免影響下一次截圖：

  ```bash
  echo "<script>localStorage.setItem('lang','zh-TW');location.href='index.html'</script>" > _zh.html
  "$CH" --headless=new --hide-scrollbars --virtual-time-budget=3000 --window-size=1440,2400 \
    --screenshot=/tmp/zh.png "file://$PWD/_zh.html"; rm _zh.html
  echo "<script>localStorage.setItem('lang','en')</script>" > _en.html
  "$CH" --headless=new --virtual-time-budget=1000 --dump-dom "file://$PWD/_en.html" >/dev/null; rm _en.html
  ```

- **看頁面下半部**：headless 不會跟著 `#anchor` 捲動。先截一張很高的圖，再用 `sips` 裁切（參數依序是高、寬，offset 依序是 y、x）：

  ```bash
  sips -c 900 1440 --cropOffset 2400 0 /tmp/page.png --out /tmp/crop.png
  ```

- **看手機版**：headless Chrome 的 viewport 最窄只有 500px，`--window-size=375,...` 實際上還是 500。要看 375px，用 iframe 包起來：

  ```bash
  echo '<body style="margin:0"><iframe src="index.html" style="width:375px;height:1500px;border:0"></iframe></body>' > _m.html
  "$CH" --headless=new --hide-scrollbars --window-size=500,1500 --screenshot=/tmp/m.png "file://$PWD/_m.html"; rm _m.html
  ```

暫存的 `_zh.html`、`_en.html`、`_m.html` 用完一定要刪，不能 commit 進去。

## Commit 與 push

- **每次都要先取得使用者同意**，同意了才 commit 和 push。
- **Commit message 用英文**：祈使句標題，必要時加內文說明原因，結尾加上目前環境指定的 co-author 行。現有的 commit 用的是：

  ```
  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
  ```

- **直接推 `main`**：這個 repo 沒有其他分支，也沒有 PR 流程。

## 確認部署

根目錄的 `.nojekyll` 不能刪。沒有它，GitHub Pages 會用 Jekyll 建置，而 Jekyll 會把 `doc/` 裡的 `{{` 當成模板語法而建置失敗，網站就停在舊版。

建置失敗時，`pages/builds/latest` 會一直停在 `building`。用 `gh run list -L 3` 看狀態，`gh run view <id> --log-failed` 看錯誤。

push 後等 GitHub Pages 建置完成，再確認線上版本：

```bash
h=$(git rev-parse --short=7 HEAD)
for i in $(seq 1 12); do
  s=$(gh api repos/starcorn2020/starcorn2020.github.io/pages/builds/latest --jq '.status+" "+.commit[0:7]')
  case "$s" in "built $h") echo "$s"; break;; esac; sleep 10
done
curl -s https://starcorn2020.github.io/ | grep -c "某段剛改的文字"
```

通常約 40 秒完成。跟使用者回報時提醒：若看到舊版，按 Cmd+Shift+R 強制重新整理。

## 分享預覽圖（`og.png`）

- 1200×627 的 PNG，三頁共用，內容是名字、職稱與領域摘要。
- **原始檔不在 repo 裡。** 若職稱或定位改變（例如之前拿掉 Rust），要重新產生：寫一個 1200×627 的 HTML，用上面的 headless Chrome 指令加 `--window-size=1200,627` 截圖，覆蓋 `og.png`。
- 社群平台會快取預覽圖，更新後可能要過一段時間才會看到新版。
