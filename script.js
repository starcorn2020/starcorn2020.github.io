/* ==========================================================================
   Jory: personal site
   Client-side i18n (en / zh-TW / zh-CN / fr / ko) shared by all pages. No dependencies.
   ========================================================================== */

(function () {
  "use strict";

  var SUPPORTED = ["en", "zh-TW", "zh-CN", "fr", "ko"];
  var DEFAULT_LANG = "en";
  var STORAGE_KEY = "lang";

  var OG_LOCALE = {
    "en": "en_US",
    "zh-TW": "zh_TW",
    "zh-CN": "zh_CN",
    "fr": "fr_FR",
    "ko": "ko_KR"
  };

  /* ── dictionaries ──────────────────────────────────────────────────── */

  var I18N = {};

  I18N["en"] = {
    "meta.exp.title": "Jory | Systems engineer",
    "meta.exp.desc": "Jory, a systems engineer: trading systems, data engineering, distributed systems and operations.",
    "meta.ai.title": "Jory | How do I work with AI?",
    "meta.ai.desc": "How Jory uses AI coding agents: who decides what, how output gets checked, and how project knowledge carries across sessions.",
    "meta.quant.title": "Jory | Quant",
    "meta.quant.desc": "Jory's quantitative skills, from derivatives pricing and time series to strategy implementation, and current quant projects.",

    "a11y.skip": "Skip to content",
    "a11y.pages": "Pages",
    "a11y.lang": "Language",

    "nav.exp": "Experience",
    "nav.ai": "Working with AI",
    "nav.quant": "Quant",

    /* experience page */
    "exp.hero.title": "I'm a systems engineer.",
    "exp.hero.sub": "I work on trading systems, data engineering, distributed systems and operations.",
    "exp.hero.cta": "What I work on",

    "exp.dom.title": "What I work on",
    "exp.dom.lead": "Besides Rust, I write Go, Python, C/C++ (FFI), SQL and Bash.",
    "exp.dom.1.t": "Trading systems",
    "exp.dom.1.d": "End-to-end trading infrastructure: market data, order execution, risk, fund transfers, settlement and reconciliation. Experienced both in designing complete systems from the ground up and in taking over individual components of existing ones. Integrations span centralized and decentralized exchanges, traditional markets and prediction markets, with order latency under 10 ms in latency-sensitive setups.",
    "exp.dom.2.t": "Data engineering",
    "exp.dom.2.d": "Data pipelines covering ingestion, cleaning, normalisation and delivery, sourced from exchanges, partners and the open web, and feeding analysis, reporting and quantitative backtesting. Operated at petabyte scale.",
    "exp.dom.3.t": "Distributed systems",
    "exp.dom.3.d": "Design and refactoring of multi-service, multi-node architectures that hold latency, availability and cross-service consistency under high concurrency, along with profiling existing systems to locate and remove bottlenecks. Supported a platform peaking above 100K QPS.",
    "exp.dom.4.t": "Operations",
    "exp.dom.4.d": "Infrastructure and 24/7 availability from cloud to bare metal: automated multi-node provisioning, centralised monitoring and alerting, and automatic fault detection and recovery, down to Linux kernel and system-level tuning.",
    "exp.cv.title": "Full résumé",
    "exp.cv.d": "For my full work history, message me on LinkedIn and I'll send you my résumé.",
    "exp.cv.cta": "Message me on LinkedIn",

    "exp.proj.title": "Projects",

    "p1.name": "Live operations client rewrite",
    "p1.tagline": "Splitting a ~120K-line TypeScript client into a React front end and a Rust back end. Rewritten and into testing within 3 weeks.",
    "p1.bg": "It runs on site 24/7, handling real-time video, a WebSocket protocol, and USB, serial and UDP hardware. UI, logic and hardware I/O were all mixed together, on a 2016 game engine and a 2017 Electron.",
    "p1.d1.t": "Map it before touching it",
    "p1.d1.d": "Before changing any code, I mapped the whole dependency closure: layers, protocol contracts, size, and whether each layer can move to Rust.",
    "p1.d2.t": "Cut along existing seams",
    "p1.d2.d": "The control channel and the hardware channel were already separate, which gave a natural split. The UI now runs in the browser with React; domain logic, protocol and hardware I/O live in one Rust service.",
    "p1.d3.t": "Freeze the contracts first",
    "p1.d3.d": "The server protocol has about 75 routes, obfuscated field names and no machine-readable schema. Before the rewrite, I turned the protocol into a schema and recorded real traffic as the regression suite.",
    "p1.callout": "It was planned as two months of work for a senior back-end and a senior front-end engineer. I took it on alone.",
    "proj.private": "Internal project. The code is not public.",

    "pm.name": "Polymarket prediction market integration",
    "pm.tagline": "Led the integration of prediction markets into the firm's trading platform, and mentored a junior data analyst through the build.",
    "pm.bg": "In a prediction market you trade the outcome of an event, so pricing and settlement differ from a regular exchange. The platform's existing models could not be reused as they were.",
    "pm.d1.t": "OMS",
    "pm.d1.d": "Defined the order lifecycle for prediction markets and fitted it into the platform's existing OMS.",
    "pm.d2.t": "Risk controls",
    "pm.d2.d": "Set risk rules specific to prediction markets and wired them into the platform's risk checks.",
    "pm.d3.t": "Data model",
    "pm.d3.d": "Designed the model for events, outcomes and positions, so prediction markets are managed alongside every other market.",
    "pm.callout": "I owned the design and handed the implementation to a junior data analyst, mentoring him from his first steps in Rust to a shipped feature.",

    "lt.name": "Lighter exchange integration",
    "lt.tagline": "A production connector for Lighter, built during its closed beta, before any public API existed. Shipped in about 2 weeks.",
    "lt.bg": "All I had was the beta SDK: no docs, no vendor support.",
    "lt.d1.t": "Protocol from the SDK",
    "lt.d1.d": "With no public documentation, I worked out the interface and message formats from the beta SDK, and called the official signing binary from Rust over FFI.",
    "lt.d2.t": "Nonce handling",
    "lt.d2.d": "Every transaction needs a correct nonce. I verified how nonces are generated and advanced, so concurrent orders and retries are neither rejected nor sent twice.",
    "lt.d3.t": "An unstable beta",
    "lt.d3.d": "The closed beta had frequent stability problems. The connector detects them and recovers on its own, so they don't reach the trading side.",
    "lt.d4.t": "Order rules and risk",
    "lt.d4.d": "I researched the exchange's order rules and limits, such as precision, minimum size and rate limits, and reject orders that would fail before they are sent.",
    "lt.d5.t": "Clean interface, OMS mapping",
    "lt.d5.d": "The exchange's raw formats are normalized into our internal order interface, and order states map onto the OMS lifecycle.",
    "lt.callout": "The market-making strategy running on this connector returned 255% in a single month.",

    "lj.name": "On-chain payout performance",
    "lj.tagline": "Tracked down the bottlenecks in a ~200K-line Go codebase and cut end-to-end payout API latency from about 53 s to under 1.5 s.",
    "lj.bg": "A 2023 project, before AI tools were much help, so the debugging was done by hand. I traced the whole path, from database to code to chain, and found two bottlenecks: polling that hit rate limits at certain times, and database queries that slowed down as the data grew.",
    "lj.d1.t": "From polling to events",
    "lj.d1.d": "The payout flow (build, sign, broadcast, confirm) now runs on events instead of timed polling, so busy periods no longer hit rate limits.",
    "lj.d2.t": "Indexes and query tuning",
    "lj.d2.d": "Added the missing indexes and rewrote slow queries, so lookups stay fast as the data grows.",
    "lj.d3.t": "Every payout traceable",
    "lj.d3.d": "Added ELK logging that records each payout's path through every stage, so later issues can be traced straight to the step that failed.",
    "lj.callout": "Payout API latency, end to end: about 53 s → under 1.5 s.",


    /* quant page */
    "q.hero.title": "Quant research, built to trade.",
    "q.hero.sub": "A background in economics, finance and data analysis, plus the engineering to take a strategy from research to live orders.",
    "q.skills.title": "Quant skills",
    "q.skills.lead": "B.A. in Economics and M.S. in Finance, National Chi Nan University: stochastic processes, derivatives pricing, time series and econometrics, numerical optimization, financial risk management.",
    "q.s1.t": "Derivatives pricing",
    "q.s1.d": "Options and derivatives pricing, and the stochastic processes behind them.",
    "q.s2.t": "Time series and data analysis",
    "q.s2.d": "Time series, econometrics and data analysis, applied to market data and strategy research.",
    "q.s3.t": "Risk modeling",
    "q.s3.d": "Risk models, financial risk management and numerical optimization.",
    "q.s4.t": "Strategy implementation",
    "q.s4.d": "Turning research into running code: backtest data, execution and risk checks. I have supported market-making, arbitrage and alpha desks.",
    "q.proj.title": "Current quant projects",
    "qp.name": "Cross-market quant research and execution platform",
    "qp.tagline": "A personal research project across spot, perpetuals and options, automated from research to live orders. In progress.",
    "qp.bg": "It links every stage of quant work into one automated pipeline: market data, AI-assisted research, strategy development, backtesting, live execution and Grafana monitoring.",
    "qp.d1.t": "Research direction",
    "qp.d1.d": "I read the literature on options, market making, alpha, market microstructure and quantitative finance to pick research topics and tradable strategies.",
    "qp.d2.t": "One engine for backtest and live",
    "qp.d2.d": "Built on NautilusTrader, so the same strategy code runs in backtests and live trading, which narrows the gap between research and production.",
    "qp.d3.t": "Data and monitoring",
    "qp.d3.d": "Market and trading data live in ClickHouse and PostgreSQL, and live execution is monitored in Grafana.",
    "qr.title": "Research so far",
    "qr.lead": "Deribit BTC and ETH options and perpetuals, on data my own collector records. Every test fixes its data, costs and pass/fail rule before I look at the result, and a rejected hypothesis is logged as a result, not deleted.",
    "qr.callout": "The main finding so far is a limit, not a signal: across eight days, two assets and 1 to 60 second horizons, no short-term directional effect exceeds about 0.42 bp, against a taker fee of about 5 bp.",
    "qr.1.t": "Clean the data before trusting it",
    "qr.1.d": "27% of one day's trades arrived more than ten minutes late, and the same trade can arrive up to four times. Counting unique trade IDs instead of rows, and using the venue's own trade counter, gave an absolute bound on lost data of about 1.2%.",
    "qr.2.t": "Execution footprints",
    "qr.2.d": "I looked for algorithms trading on a fixed rhythm, such as eight fills exactly 12.000 s apart. They exist and are not collection artifacts, but they are too rare to trade: two ordinary options on the main test day, none on the replication day.",
    "qr.3.t": "Does option flow lead the underlying?",
    "qr.3.d": "No, it follows. The move before an option trade is 2 to 12 times larger than the move after it, and the small move right after is not a market maker's delta hedge (rejected on 5 of 5 days).",
    "qr.4.t": "Checking the method itself",
    "qr.4.d": "As a positive control, order-flow imbalance does predict the next bar, on 8 of 8 days at 6 to 18 times placebo. It is worth only 0.13 to 0.42 bp and gone within 30 to 60 s. The method works; the limit is in the data.",
    "qr.5.t": "Fading large sweeps",
    "qr.5.d": "Rejected. 82% (BTC) and 100% (ETH) of the price move from a large aggressive order is still there 300 s later, and larger sweeps revert even less.",
    "qr.6.t": "Market making at standard fees",
    "qr.6.d": "Rejected on arithmetic. The perpetual maker fee is 46 times the one-tick spread. On options, measured from 82.9M quotes, fees exceed the captured spread before adverse selection is even counted.",
    "qr.7.t": "Options relative value",
    "qr.7.d": "A strike's bid never exceeded what its neighbouring strikes implied, in about 148,000 checks. The next test is combo arbitrage using Deribit's native multi-leg orders.",
    "qr.note": "No strategy has passed yet, so live trading stays off. Moving to live needs my explicit sign-off; the research process cannot grant it.",

    /* AI page */
    "ai.hero.title": "How do I work with AI?",
    "ai.hero.sub": "I work as the architect, directing multiple AI agents that each take a different role in development.",

    "ai.split.title": "Who does what",
    "ai.split.me": "I decide",
    "ai.split.me.1": "Architecture and system boundaries",
    "ai.split.me.2": "Constraints: latency, and how failures should behave",
    "ai.split.me.3": "Trade-offs and acceptance criteria",
    "ai.split.me.4": "What gets merged",
    "ai.split.ai": "AI agents, by role",
    "ai.split.ai.1": "Research: reads the code and docs, and cites its sources",
    "ai.split.ai.2": "Implementation: writes code, refactors and docs",
    "ai.split.ai.3": "Testing: writes and runs tests",
    "ai.split.ai.4": "Review: checks each diff against the constraints",

    "ai.flow.title": "How a task goes",
    "ai.flow.1.t": "Read first",
    "ai.flow.1.d": "The research agent reads the code, docs and schemas before anything is proposed.",
    "ai.flow.2.t": "Set the rules",
    "ai.flow.2.d": "I define the boundaries, the invariants and what should happen on failure.",
    "ai.flow.3.t": "Split the work",
    "ai.flow.3.d": "Tasks are small enough to review one at a time, and each goes to the agent with the matching role.",
    "ai.flow.4.t": "Build and run",
    "ai.flow.4.d": "The implementation agent writes the code and the testing agent runs the tests. The compiler, tests and benchmarks decide whether it works.",
    "ai.flow.5.t": "Review and record",
    "ai.flow.5.d": "The review agent checks the diff against the constraints. I then check the result against the acceptance criteria and record what was confirmed.",

    "ai.check.title": "Catching wrong answers",
    "ai.check.lead": "AI will sometimes make things up. I can't prevent that, but I can make it show up early.",
    "ai.check.1.t": "Show the source",
    "ai.check.1.d": "Every claim has to point to code, a spec, a test or real data. What the model remembers from training is not a source.",
    "ai.check.2.t": "Unknown is an answer",
    "ai.check.2.d": "If something can't be confirmed, it is marked unknown instead of guessed.",
    "ai.check.3.t": "Only a run counts",
    "ai.check.3.d": "“It works” means nothing until the tests pass or a real run shows it.",

    "ai.mem.title": "Memory across sessions",
    "ai.mem.d1": "A long project outlives any single AI session. I keep design docs, decisions and confirmed findings in Notion and Markdown. At the start of a session, semantic search pulls in only the parts that matter for the task.",
    "ai.mem.d2": "Only confirmed conclusions are written back, so one wrong answer doesn't get reused as fact later.",
    "ai.mem.alt": "Notes are searched, used in a session, verified, then written back to the notes.",
    "ai.mem.n1": "Notes",
    "ai.mem.n2": "Search",
    "ai.mem.n3": "Session",
    "ai.mem.n4": "Verify",
    "ai.mem.n5": "Write back",

    "ai.ex.title": "In practice",
    "ai.ex.1": "A take-home assignment from a top proprietary trading firm. AI helped compare designs, generated the Rust code and planned the tests; I made the design and trade-off calls.",
    "ai.ex.1.hl": "The interviewer called it “the safest” design among the submissions.",
    "ai.ex.2": "A mid-2025 project, when AI was less capable. I found the math for AI to implement, then checked that every step matched the exchange bit for bit: curve arithmetic, Pedersen hash, order hash, deterministic signing, L2 fields, fees and key derivation.",
    "ai.ex.2.hl": "Rust had no usable StarkNet signing library, so I built the signing myself and connected EdgeX to the trading system.",

    "foot.role": "Systems engineer"
  };

  I18N["zh-TW"] = {
    "meta.exp.title": "Jory | 系統工程師",
    "meta.exp.desc": "Jory，系統工程師：交易系統、資料工程、分散式系統與維運。",
    "meta.ai.title": "Jory | 我怎麼用 AI 開發？",
    "meta.ai.desc": "Jory 如何使用 AI 寫程式：誰決定什麼、產出怎麼檢查、專案知識怎麼跨對話保存。",
    "meta.quant.title": "Jory | 量化",
    "meta.quant.desc": "Jory 的量化技能：衍生品定價、時間序列到策略實作，以及目前的量化專案。",

    "a11y.skip": "跳至主要內容",
    "a11y.pages": "頁面",
    "a11y.lang": "語言",

    "nav.exp": "經歷",
    "nav.ai": "AI 協作方式",
    "nav.quant": "量化",

    "exp.hero.title": "我是系統工程師。",
    "exp.hero.sub": "專長是交易系統、資料工程、分散式系統與維運。",
    "exp.hero.cta": "看專長領域",

    "exp.dom.title": "專長領域",
    "exp.dom.lead": "除了 Rust，也寫 Go、Python、C/C++（FFI）、SQL 和 Bash。",
    "exp.dom.1.t": "交易系統",
    "exp.dom.1.d": "具備交易系統完整鏈路的實作經驗：行情接入、訂單執行、風險控管、資金移轉、結算與對帳。可從零建置整套架構，也能接手既有系統的單一模組。串接範圍涵蓋 CEX、DEX、傳統金融與預測市場，在低延遲場景中，下單延遲可壓到 10ms 以下。",
    "exp.dom.2.t": "資料工程",
    "exp.dom.2.d": "建置從資料擷取、清洗、標準化到交付的完整 pipeline，來源涵蓋交易所、合作方與公開網頁，產出供分析、報表與量化回測使用。處理規模達 PB 級。",
    "exp.dom.3.t": "分散式系統",
    "exp.dom.3.d": "設計與重構多服務、多節點的分散式架構，在高併發下維持低延遲、高可用與跨服務的資料一致性，並能針對既有系統定位效能瓶頸、完成優化。支撐過尖峰逾 10 萬 QPS 的平台。",
    "exp.dom.4.t": "維運",
    "exp.dom.4.d": "維運範圍從雲端到實體機房，確保服務 24/7 可用：多節點自動化佈建、集中式監控告警、故障自動偵測與復原，並可深入 Linux kernel 與系統層級調校。",
    "exp.cv.title": "完整履歷",
    "exp.cv.d": "想看完整工作經歷，歡迎透過 LinkedIn 聯絡我，我會提供履歷。",
    "exp.cv.cta": "在 LinkedIn 聯絡我",

    "exp.proj.title": "專案",

    "p1.name": "即時營運客戶端重構",
    "p1.tagline": "把約 12 萬行的 TypeScript 客戶端拆成 React 前端與 Rust 後端，3 週內完成改寫、進入測試階段。",
    "p1.bg": "24 小時在現場運作，同時處理即時視訊、WebSocket 協定，以及 USB、序列埠、UDP 硬體。原本 UI、邏輯和硬體 I/O 全混在一起，底層是 2016 年的遊戲引擎與 2017 年的 Electron。",
    "p1.d1.t": "先盤點，再動手",
    "p1.d1.d": "動任何程式碼之前，先把整個依賴範圍盤點清楚：分層、協定契約、程式規模，以及每一層能不能轉成 Rust。",
    "p1.d2.t": "沿著既有的縫切開",
    "p1.d2.d": "控制通道和硬體通道本來就是分開的，這就是天然的切割線。UI 改用 React 在瀏覽器執行，領域邏輯、協定與硬體 I/O 收進單一 Rust 服務。",
    "p1.d3.t": "先凍結契約",
    "p1.d3.d": "伺服器協定約有 75 個路由，欄位名稱經過混淆，也沒有機器可讀的 schema。改寫前我先把協定整理成 schema，並錄下真實流量作為回歸測試。",
    "p1.callout": "原本規劃 1 位資深後端加 1 位資深前端、為期 2 個月的重構，由我一個人接手。",
    "proj.private": "公司內部專案，程式碼不公開。",

    "pm.name": "Polymarket 預測市場接入",
    "pm.tagline": "主導把預測市場接進公司的交易平台，並帶一位資料分析師完成實作。",
    "pm.bg": "預測市場交易的是事件結果，報價和結算方式都和一般交易所不同，平台原有的模型無法直接沿用。",
    "pm.d1.t": "OMS 設計",
    "pm.d1.d": "定義預測市場的訂單生命週期，並接進平台既有的 OMS。",
    "pm.d2.t": "風控規則",
    "pm.d2.d": "訂出預測市場專用的風控規則，接進平台的風控檢查。",
    "pm.d3.t": "資料模型",
    "pm.d3.d": "設計事件、結果與倉位的資料模型，讓預測市場能和其他市場一起管理。",
    "pm.callout": "設計由我負責，實作交給一位資料分析師；我一路帶他從 Rust 入門到功能上線。",

    "lt.name": "Lighter 交易所接入",
    "lt.tagline": "在 Lighter 封閉測試、還沒有公開 API 的階段，完成正式環境可用的交易連接器，約 2 週上線。",
    "lt.bg": "手上只有測試版 SDK，沒有文件，也沒有廠商支援。",
    "lt.d1.t": "從 SDK 反推協定",
    "lt.d1.d": "沒有公開文件，我從測試版 SDK 反推介面與訊息格式，並透過 FFI 把官方的簽章 binary 接進 Rust。",
    "lt.d2.t": "Nonce 產生與驗證",
    "lt.d2.d": "每筆交易都要帶正確的 nonce。我驗證了 nonce 的產生與遞增規則，讓併發下單和重送不會被拒，也不會重複送出。",
    "lt.d3.t": "處理封測版的不穩定",
    "lt.d3.d": "封測版穩定性問題很多。連接器會自行偵測異常並恢復，不讓問題影響到交易端。",
    "lt.d4.t": "下單規則與風控",
    "lt.d4.d": "調研交易所的下單規則與限制，例如精度、最小數量與頻率限制，在送單前就擋下會被拒的訂單。",
    "lt.d5.t": "介面整理與 OMS 對接",
    "lt.d5.d": "把交易所的原始格式整理成內部統一的下單介面，訂單狀態對應到 OMS 的生命週期。",
    "lt.callout": "跑在這個連接器上的做市策略，單月報酬率達 255%。",

    "lj.name": "鏈上出款系統效能優化",
    "lj.tagline": "在約 20 萬行的 Go 專案裡追出效能瓶頸，出款 API 端到端延遲從約 53 秒降到 1.5 秒以內。",
    "lj.bg": "2023 年的專案，當時 AI 還幫不上什麼忙，全靠手動除錯。我沿著「資料庫 → 程式碼 → 鏈上」整條流程逐段排查，找到兩個瓶頸：輪詢在特定時段撞上 rate limit，以及資料量變大後變慢的資料庫查詢。",
    "lj.d1.t": "輪詢改成事件驅動",
    "lj.d1.d": "出款流程（建構、簽章、廣播、確認）改以事件串接，不再定時輪詢，尖峰時段也不會再撞上 rate limit。",
    "lj.d2.t": "資料庫索引與查詢優化",
    "lj.d2.d": "補上缺少的索引並改寫慢查詢，資料量大時查詢依然夠快。",
    "lj.d3.t": "每筆出款都能追蹤",
    "lj.d3.d": "導入 ELK，記錄每筆出款在各階段的流程日誌，之後出問題能直接追到是哪一步。",
    "lj.callout": "出款 API 端到端延遲：約 53 秒 → 1.5 秒以內。",


    /* quant page */
    "q.hero.title": "量化研究，也能落地交易。",
    "q.hero.sub": "經濟、金融與數據分析背景，加上把策略從研究推到實際下單的工程能力。",
    "q.skills.title": "量化技能",
    "q.skills.lead": "國立暨南國際大學經濟學學士、金融碩士，修習隨機過程、衍生品定價、時間序列與計量、數值最佳化與財務風險管理。",
    "q.s1.t": "衍生品定價",
    "q.s1.d": "選擇權與衍生品定價，以及背後的隨機過程。",
    "q.s2.t": "時間序列與數據分析",
    "q.s2.d": "時間序列、計量經濟與數據分析，用在行情資料與策略研究。",
    "q.s3.t": "風險建模",
    "q.s3.d": "風險模型、財務風險管理與數值最佳化。",
    "q.s4.t": "策略實作",
    "q.s4.d": "把研究變成能跑的程式：回測資料、下單執行與風控檢查。曾支援做市、套利與 alpha 交易團隊。",
    "q.proj.title": "目前的量化專案",
    "qp.name": "跨市場量化研究與交易平台",
    "qp.tagline": "個人研究專案，涵蓋現貨、永續合約與選擇權，從研究一路自動化到實盤下單。進行中。",
    "qp.bg": "把量化工作的每一段接成一條自動化流程：行情資料、AI 輔助研究、策略開發、回測、實盤執行與 Grafana 監控。",
    "qp.d1.t": "研究方向",
    "qp.d1.d": "研讀選擇權、做市、alpha、市場微結構與量化金融文獻，從中篩選值得研究的題目與可交易的策略。",
    "qp.d2.t": "回測與實盤同一套引擎",
    "qp.d2.d": "以 NautilusTrader 為核心，回測和實盤跑同一份策略程式碼，縮小研究與上線之間的落差。",
    "qp.d3.t": "資料與監控",
    "qp.d3.d": "行情與交易資料存在 ClickHouse 與 PostgreSQL，實盤執行狀態透過 Grafana 監控。",
    "qr.title": "目前的研究成果",
    "qr.lead": "研究對象是 Deribit 的 BTC、ETH 選擇權與永續合約，資料來自我自己的收集器。每項測試都在看結果之前先固定資料、成本與通過條件；被否定的假設也記錄為結果，不會刪掉。",
    "qr.callout": "目前最主要的發現是一個上限，而不是訊號：在八天、兩個資產、1 到 60 秒的時間尺度上，沒有任何短期方向性效果超過約 0.42 bp，而吃單手續費約 5 bp。",
    "qr.1.t": "先把資料弄乾淨再相信它",
    "qr.1.d": "某一天有 27% 的成交晚了十分鐘以上才到，同一筆成交最多會重複送達四次。改用唯一成交 ID 而非資料列計數，並利用交易所自己的成交序號，得到資料遺失的絕對上限約 1.2%。",
    "qr.2.t": "執行足跡",
    "qr.2.d": "尋找以固定節奏下單的演算法，例如連續八筆成交、間隔精準 12.000 秒。這些確實存在，也不是收集造成的假象，但少到無法交易：主要測試日只有兩檔一般選擇權，複驗日為零。",
    "qr.3.t": "選擇權訂單流會領先標的嗎？",
    "qr.3.d": "不會，它是跟隨。選擇權成交之前的價格變動是之後的 2 到 12 倍，而成交後那一點小變動也不是造市商的 delta 避險（5 天中 5 天皆否定）。",
    "qr.4.t": "檢驗方法本身",
    "qr.4.d": "作為正向對照，訂單流不平衡確實能預測下一根 K 棒，8 天中 8 天成立，強度是安慰劑的 6 到 18 倍。但只值 0.13 到 0.42 bp，30 到 60 秒內消失。方法沒問題，上限來自資料本身。",
    "qr.5.t": "反向交易大額掃單",
    "qr.5.d": "否定。大額主動單造成的價格變動，300 秒後仍保留 82%（BTC）與 100%（ETH），掃單越大，回補越少。",
    "qr.6.t": "標準費率下的做市",
    "qr.6.d": "光算術就否定。永續合約的掛單手續費是一個 tick 價差的 46 倍。選擇權以 8,290 萬筆報價實測，還沒計入逆選擇，手續費就已超過賺到的價差。",
    "qr.7.t": "選擇權相對價值",
    "qr.7.d": "在約 14.8 萬次檢查中，某個履約價的買價從未超過相鄰履約價所隱含的價格。下一步是用 Deribit 原生多腳組合單做組合套利。",
    "qr.note": "目前還沒有策略通過，所以實盤交易保持關閉。進入實盤需要我明確核准，研究流程本身無法授權。",

    "ai.hero.title": "我怎麼用 AI 開發？",
    "ai.hero.sub": "我以架構師的角度，驅動多個 AI Agent 以不同角色進行開發。",

    "ai.split.title": "分工",
    "ai.split.me": "我決定",
    "ai.split.me.1": "架構與系統邊界",
    "ai.split.me.2": "限制條件：延遲，以及出錯時該怎麼處理",
    "ai.split.me.3": "取捨與驗收標準",
    "ai.split.me.4": "哪些程式碼可以合併",
    "ai.split.ai": "AI Agent 分工",
    "ai.split.ai.1": "研究：閱讀程式碼與文件，回報時附上來源",
    "ai.split.ai.2": "實作：撰寫程式碼、重構與文件",
    "ai.split.ai.3": "測試：撰寫並執行測試",
    "ai.split.ai.4": "審查：對照限制條件檢查每次改動",

    "ai.flow.title": "一個任務怎麼進行",
    "ai.flow.1.t": "先讀",
    "ai.flow.1.d": "研究 Agent 先讀過程式碼、文件和 schema，才提出做法。",
    "ai.flow.2.t": "定規則",
    "ai.flow.2.d": "我定義邊界、不變條件，以及出錯時該怎麼處理。",
    "ai.flow.3.t": "拆任務",
    "ai.flow.3.d": "每個任務小到可以一次審完，並分派給對應角色的 Agent。",
    "ai.flow.4.t": "寫完就跑",
    "ai.flow.4.d": "實作 Agent 寫程式，測試 Agent 跑測試。能不能用由編譯器、測試和 benchmark 決定。",
    "ai.flow.5.t": "驗收與記錄",
    "ai.flow.5.d": "審查 Agent 先對照限制條件檢查改動，我再依驗收標準確認結果，把確認過的結論記下來。",

    "ai.check.title": "怎麼抓出錯誤答案",
    "ai.check.lead": "AI 有時會編造內容。這無法完全避免，但可以讓它早點被發現。",
    "ai.check.1.t": "說出來源",
    "ai.check.1.d": "每個說法都要指向程式碼、規格、測試或真實資料。模型自己的記憶不算來源。",
    "ai.check.2.t": "不知道也是答案",
    "ai.check.2.d": "無法確認的事標記為未知，不用猜的補上。",
    "ai.check.3.t": "跑過才算",
    "ai.check.3.d": "「可以動了」沒有意義，要跑過測試或實際執行證明才算。",

    "ai.mem.title": "跨對話的專案記憶",
    "ai.mem.d1": "長期專案一定會跨越很多次 AI 對話。我把設計文件、決策和確認過的結論放在 Notion 與 Markdown，每次開始工作時用語意搜尋只取出跟這次任務相關的部分。",
    "ai.mem.d2": "只有確認過的結論才會寫回去，避免一次錯誤的回答之後被當成事實重複使用。",
    "ai.mem.alt": "筆記經過搜尋、在對話中使用、驗證後，再寫回筆記。",
    "ai.mem.n1": "筆記",
    "ai.mem.n2": "搜尋",
    "ai.mem.n3": "對話",
    "ai.mem.n4": "驗證",
    "ai.mem.n5": "寫回",

    "ai.ex.title": "實際案例",
    "ai.ex.1": "一間頂尖自營交易公司的面試題目。AI 協助比較設計方案、產出 Rust 程式碼並規劃測試，設計與取捨由我決定。",
    "ai.ex.1.hl": "面試官評為所有提交中「最安全」的設計。",
    "ai.ex.2": "2025 年中的專案，當時 AI 能力較差。我找出數學公式讓 AI 實作，再親自驗證每一步與交易所逐位元一致：曲線運算、Pedersen 雜湊、訂單雜湊、確定性簽章、L2 欄位、手續費與金鑰推導。",
    "ai.ex.2.hl": "Rust 沒有可用的 StarkNet 簽章套件，我自己實作簽章，把 EdgeX 接入交易系統。",

    "foot.role": "系統工程師"
  };

  I18N["zh-CN"] = {
    "meta.exp.title": "Jory | 系统工程师",
    "meta.exp.desc": "Jory，系统工程师：交易系统、数据工程、分布式系统与运维。",
    "meta.ai.title": "Jory | 我怎么用 AI 开发？",
    "meta.ai.desc": "Jory 如何使用 AI 写代码：谁决定什么、产出怎么检查、项目知识怎么跨会话保存。",
    "meta.quant.title": "Jory | 量化",
    "meta.quant.desc": "Jory 的量化技能：衍生品定价、时间序列到策略实现，以及目前的量化项目。",

    "a11y.skip": "跳至主要内容",
    "a11y.pages": "页面",
    "a11y.lang": "语言",

    "nav.exp": "经历",
    "nav.ai": "AI 协作方式",
    "nav.quant": "量化",

    "exp.hero.title": "我是系统工程师。",
    "exp.hero.sub": "专长是交易系统、数据工程、分布式系统与运维。",
    "exp.hero.cta": "看专长领域",

    "exp.dom.title": "专长领域",
    "exp.dom.lead": "除了 Rust，也写 Go、Python、C/C++（FFI）、SQL 和 Bash。",
    "exp.dom.1.t": "交易系统",
    "exp.dom.1.d": "具备交易系统完整链路的实战经验：行情接入、订单执行、风险控制、资金划转、结算与对账。可从零搭建整套架构，也能接手现有系统的单一模块。对接范围涵盖 CEX、DEX、传统金融与预测市场，在低延迟场景中，下单延迟可压到 10ms 以下。",
    "exp.dom.2.t": "数据工程",
    "exp.dom.2.d": "搭建从数据采集、清洗、标准化到交付的完整 pipeline，来源涵盖交易所、合作方与公开网页，产出供分析、报表与量化回测使用。处理规模达 PB 级。",
    "exp.dom.3.t": "分布式系统",
    "exp.dom.3.d": "设计与重构多服务、多节点的分布式架构，在高并发下保持低延迟、高可用与跨服务的数据一致性，并能针对现有系统定位性能瓶颈、完成优化。支撑过峰值逾 10 万 QPS 的平台。",
    "exp.dom.4.t": "运维",
    "exp.dom.4.d": "运维范围从云端到实体机房，确保服务 24/7 可用：多节点自动化部署、集中式监控告警、故障自动检测与恢复，并可深入 Linux kernel 与系统层级调优。",
    "exp.cv.title": "完整履历",
    "exp.cv.d": "想看完整工作经历，欢迎通过 LinkedIn 联系我，我会提供履历。",
    "exp.cv.cta": "在 LinkedIn 联系我",

    "exp.proj.title": "项目",

    "p1.name": "实时运营客户端重构",
    "p1.tagline": "把约 12 万行的 TypeScript 客户端拆成 React 前端与 Rust 后端，3 周内完成改写、进入测试阶段。",
    "p1.bg": "24 小时在现场运行，同时处理实时视频、WebSocket 协议，以及 USB、串口、UDP 硬件。原本 UI、逻辑和硬件 I/O 全混在一起，底层是 2016 年的游戏引擎与 2017 年的 Electron。",
    "p1.d1.t": "先盘点，再动手",
    "p1.d1.d": "动任何代码之前，先把整个依赖范围盘点清楚：分层、协议契约、代码规模，以及每一层能不能转成 Rust。",
    "p1.d2.t": "沿着既有的缝切开",
    "p1.d2.d": "控制通道和硬件通道本来就是分开的，这就是天然的切割线。UI 改用 React 在浏览器运行，领域逻辑、协议与硬件 I/O 收进单一 Rust 服务。",
    "p1.d3.t": "先冻结契约",
    "p1.d3.d": "服务器协议约有 75 个路由，字段名称经过混淆，也没有机器可读的 schema。改写前我先把协议整理成 schema，并录下真实流量作为回归测试。",
    "p1.callout": "原本规划 1 位资深后端加 1 位资深前端、为期 2 个月的重构，由我一个人接手。",
    "proj.private": "公司内部项目，代码不公开。",

    "pm.name": "Polymarket 预测市场接入",
    "pm.tagline": "主导把预测市场接进公司的交易平台，并带一位数据分析师完成实现。",
    "pm.bg": "预测市场交易的是事件结果，报价和结算方式都和一般交易所不同，平台原有的模型无法直接沿用。",
    "pm.d1.t": "OMS 设计",
    "pm.d1.d": "定义预测市场的订单生命周期，并接进平台既有的 OMS。",
    "pm.d2.t": "风控规则",
    "pm.d2.d": "制定预测市场专用的风控规则，接进平台的风控检查。",
    "pm.d3.t": "数据模型",
    "pm.d3.d": "设计事件、结果与仓位的数据模型，让预测市场能和其他市场一起管理。",
    "pm.callout": "设计由我负责，实现交给一位数据分析师；我一路带他从 Rust 入门到功能上线。",

    "lt.name": "Lighter 交易所接入",
    "lt.tagline": "在 Lighter 封闭测试、还没有公开 API 的阶段，完成可用于生产环境的交易连接器，约 2 周上线。",
    "lt.bg": "手上只有测试版 SDK，没有文档，也没有厂商支持。",
    "lt.d1.t": "从 SDK 反推协议",
    "lt.d1.d": "没有公开文档，我从测试版 SDK 反推接口与消息格式，并通过 FFI 把官方的签名 binary 接进 Rust。",
    "lt.d2.t": "Nonce 生成与验证",
    "lt.d2.d": "每笔交易都要带正确的 nonce。我验证了 nonce 的生成与递增规则，让并发下单和重发不会被拒，也不会重复发送。",
    "lt.d3.t": "处理封测版的不稳定",
    "lt.d3.d": "封测版稳定性问题很多。连接器会自行检测异常并恢复，不让问题影响到交易端。",
    "lt.d4.t": "下单规则与风控",
    "lt.d4.d": "调研交易所的下单规则与限制，例如精度、最小数量与频率限制，在发单前就拦下会被拒的订单。",
    "lt.d5.t": "接口整理与 OMS 对接",
    "lt.d5.d": "把交易所的原始格式整理成内部统一的下单接口，订单状态对应到 OMS 的生命周期。",
    "lt.callout": "跑在这个连接器上的做市策略，单月收益率达 255%。",

    "lj.name": "链上出款系统性能优化",
    "lj.tagline": "在约 20 万行的 Go 项目里找出性能瓶颈，出款 API 端到端延迟从约 53 秒降到 1.5 秒以内。",
    "lj.bg": "2023 年的项目，当时 AI 还帮不上什么忙，全靠手动调试。我沿着“数据库 → 代码 → 链上”整条流程逐段排查，找到两个瓶颈：轮询在特定时段撞上 rate limit，以及数据量变大后变慢的数据库查询。",
    "lj.d1.t": "轮询改成事件驱动",
    "lj.d1.d": "出款流程（构建、签名、广播、确认）改以事件串接，不再定时轮询，高峰时段也不会再撞上 rate limit。",
    "lj.d2.t": "数据库索引与查询优化",
    "lj.d2.d": "补上缺少的索引并改写慢查询，数据量大时查询依然够快。",
    "lj.d3.t": "每笔出款都能追踪",
    "lj.d3.d": "引入 ELK，记录每笔出款在各阶段的流程日志，之后出问题能直接追到是哪一步。",
    "lj.callout": "出款 API 端到端延迟：约 53 秒 → 1.5 秒以内。",


    /* quant page */
    "q.hero.title": "量化研究，也能落地交易。",
    "q.hero.sub": "经济、金融与数据分析背景，加上把策略从研究推到实际下单的工程能力。",
    "q.skills.title": "量化技能",
    "q.skills.lead": "国立暨南国际大学经济学学士、金融硕士，修习随机过程、衍生品定价、时间序列与计量、数值优化与金融风险管理。",
    "q.s1.t": "衍生品定价",
    "q.s1.d": "期权与衍生品定价，以及背后的随机过程。",
    "q.s2.t": "时间序列与数据分析",
    "q.s2.d": "时间序列、计量经济与数据分析，用在行情数据与策略研究。",
    "q.s3.t": "风险建模",
    "q.s3.d": "风险模型、金融风险管理与数值优化。",
    "q.s4.t": "策略实现",
    "q.s4.d": "把研究变成能跑的代码：回测数据、下单执行与风控检查。曾支持做市、套利与 alpha 交易团队。",
    "q.proj.title": "目前的量化项目",
    "qp.name": "跨市场量化研究与交易平台",
    "qp.tagline": "个人研究项目，涵盖现货、永续合约与期权，从研究一路自动化到实盘下单。进行中。",
    "qp.bg": "把量化工作的每一段接成一条自动化流程：行情数据、AI 辅助研究、策略开发、回测、实盘执行与 Grafana 监控。",
    "qp.d1.t": "研究方向",
    "qp.d1.d": "研读期权、做市、alpha、市场微观结构与量化金融文献，从中筛选值得研究的题目与可交易的策略。",
    "qp.d2.t": "回测与实盘同一套引擎",
    "qp.d2.d": "以 NautilusTrader 为核心，回测和实盘跑同一份策略代码，缩小研究与上线之间的落差。",
    "qp.d3.t": "数据与监控",
    "qp.d3.d": "行情与交易数据存在 ClickHouse 与 PostgreSQL，实盘执行状态通过 Grafana 监控。",
    "qr.title": "目前的研究成果",
    "qr.lead": "研究对象是 Deribit 的 BTC、ETH 期权与永续合约，数据来自我自己的采集器。每项测试都在看结果之前先固定数据、成本与通过条件；被否定的假设也记录为结果，不会删掉。",
    "qr.callout": "目前最主要的发现是一个上限，而不是信号：在八天、两个资产、1 到 60 秒的时间尺度上，没有任何短期方向性效果超过约 0.42 bp，而吃单手续费约 5 bp。",
    "qr.1.t": "先把数据弄干净再相信它",
    "qr.1.d": "某一天有 27% 的成交晚了十分钟以上才到，同一笔成交最多会重复送达四次。改用唯一成交 ID 而非数据行计数，并利用交易所自己的成交序号，得到数据丢失的绝对上限约 1.2%。",
    "qr.2.t": "执行足迹",
    "qr.2.d": "寻找以固定节奏下单的算法，例如连续八笔成交、间隔精准 12.000 秒。这些确实存在，也不是采集造成的假象，但少到无法交易：主要测试日只有两只普通期权，复验日为零。",
    "qr.3.t": "期权订单流会领先标的吗？",
    "qr.3.d": "不会，它是跟随。期权成交之前的价格变动是之后的 2 到 12 倍，而成交后那一点小变动也不是做市商的 delta 对冲（5 天中 5 天均否定）。",
    "qr.4.t": "检验方法本身",
    "qr.4.d": "作为正向对照，订单流不平衡确实能预测下一根 K 线，8 天中 8 天成立，强度是安慰剂的 6 到 18 倍。但只值 0.13 到 0.42 bp，30 到 60 秒内消失。方法没问题，上限来自数据本身。",
    "qr.5.t": "反向交易大额扫单",
    "qr.5.d": "否定。大额主动单造成的价格变动，300 秒后仍保留 82%（BTC）与 100%（ETH），扫单越大，回补越少。",
    "qr.6.t": "标准费率下的做市",
    "qr.6.d": "光算术就否定。永续合约的挂单手续费是一个 tick 价差的 46 倍。期权以 8,290 万笔报价实测，还没计入逆向选择，手续费就已超过赚到的价差。",
    "qr.7.t": "期权相对价值",
    "qr.7.d": "在约 14.8 万次检查中，某个行权价的买价从未超过相邻行权价所隐含的价格。下一步是用 Deribit 原生多腿组合单做组合套利。",
    "qr.note": "目前还没有策略通过，所以实盘交易保持关闭。进入实盘需要我明确批准，研究流程本身无法授权。",

    "ai.hero.title": "我怎么用 AI 开发？",
    "ai.hero.sub": "我以架构师的角度，驱动多个 AI Agent 以不同角色进行开发。",

    "ai.split.title": "分工",
    "ai.split.me": "我决定",
    "ai.split.me.1": "架构与系统边界",
    "ai.split.me.2": "约束条件：延迟，以及出错时该怎么处理",
    "ai.split.me.3": "取舍与验收标准",
    "ai.split.me.4": "哪些代码可以合并",
    "ai.split.ai": "AI Agent 分工",
    "ai.split.ai.1": "研究：阅读代码与文档，汇报时附上来源",
    "ai.split.ai.2": "实现：编写代码、重构与文档",
    "ai.split.ai.3": "测试：编写并运行测试",
    "ai.split.ai.4": "审查：对照约束条件检查每次改动",

    "ai.flow.title": "一个任务怎么进行",
    "ai.flow.1.t": "先读",
    "ai.flow.1.d": "研究 Agent 先读过代码、文档和 schema，才提出做法。",
    "ai.flow.2.t": "定规则",
    "ai.flow.2.d": "我定义边界、不变条件，以及出错时该怎么处理。",
    "ai.flow.3.t": "拆任务",
    "ai.flow.3.d": "每个任务小到可以一次审完，并分派给对应角色的 Agent。",
    "ai.flow.4.t": "写完就跑",
    "ai.flow.4.d": "实现 Agent 写代码，测试 Agent 跑测试。能不能用由编译器、测试和 benchmark 决定。",
    "ai.flow.5.t": "验收与记录",
    "ai.flow.5.d": "审查 Agent 先对照约束条件检查改动，我再按验收标准确认结果，把确认过的结论记下来。",

    "ai.check.title": "怎么抓出错误答案",
    "ai.check.lead": "AI 有时会编造内容。这无法完全避免，但可以让它早点被发现。",
    "ai.check.1.t": "说出来源",
    "ai.check.1.d": "每个说法都要指向代码、规格、测试或真实数据。模型自己的记忆不算来源。",
    "ai.check.2.t": "不知道也是答案",
    "ai.check.2.d": "无法确认的事标记为未知，不靠猜来补。",
    "ai.check.3.t": "跑过才算",
    "ai.check.3.d": "“能跑了”没有意义，要跑过测试或实际运行证明才算。",

    "ai.mem.title": "跨会话的项目记忆",
    "ai.mem.d1": "长期项目一定会跨越很多次 AI 会话。我把设计文档、决策和确认过的结论放在 Notion 与 Markdown，每次开始工作时用语义搜索只取出跟这次任务相关的部分。",
    "ai.mem.d2": "只有确认过的结论才会写回去，避免一次错误的回答之后被当成事实重复使用。",
    "ai.mem.alt": "笔记经过搜索、在会话中使用、验证后，再写回笔记。",
    "ai.mem.n1": "笔记",
    "ai.mem.n2": "搜索",
    "ai.mem.n3": "会话",
    "ai.mem.n4": "验证",
    "ai.mem.n5": "写回",

    "ai.ex.title": "实际案例",
    "ai.ex.1": "一家顶尖自营交易公司的面试题目。AI 协助比较设计方案、生成 Rust 代码并规划测试，设计与取舍由我决定。",
    "ai.ex.1.hl": "面试官评为所有提交中“最安全”的设计。",
    "ai.ex.2": "2025 年中的项目，当时 AI 能力较差。我找出数学公式让 AI 实现，再亲自验证每一步与交易所逐位一致：曲线运算、Pedersen 哈希、订单哈希、确定性签名、L2 字段、手续费与密钥推导。",
    "ai.ex.2.hl": "Rust 没有可用的 StarkNet 签名库，我自己实现签名，把 EdgeX 接入交易系统。",

    "foot.role": "系统工程师"
  };

  I18N["fr"] = {
    "meta.exp.title": "Jory | Ingénieur systèmes",
    "meta.exp.desc": "Jory, ingénieur systèmes : systèmes de trading, ingénierie des données, systèmes distribués et exploitation.",
    "meta.ai.title": "Jory | Comment est-ce que je travaille avec l'IA ?",
    "meta.ai.desc": "Comment Jory utilise les agents de code IA : qui décide quoi, comment le résultat est vérifié, et comment la connaissance du projet passe d'une session à l'autre.",
    "meta.quant.title": "Jory | Quant",
    "meta.quant.desc": "Les compétences quantitatives de Jory, de la valorisation des dérivés aux séries temporelles et à l'implémentation de stratégies, et ses projets quant actuels.",

    "a11y.skip": "Aller au contenu",
    "a11y.pages": "Pages",
    "a11y.lang": "Langue",

    "nav.exp": "Parcours",
    "nav.ai": "Travail avec l'IA",
    "nav.quant": "Quant",

    "exp.hero.title": "Je suis ingénieur systèmes.",
    "exp.hero.sub": "Je travaille sur les systèmes de trading, l'ingénierie des données, les systèmes distribués et l'exploitation.",
    "exp.hero.cta": "Voir mes domaines",

    "exp.dom.title": "Domaines",
    "exp.dom.lead": "En plus de Rust, j'écris du Go, du Python, du C/C++ (FFI), du SQL et du Bash.",
    "exp.dom.1.t": "Systèmes de trading",
    "exp.dom.1.d": "Chaîne de trading complète : données de marché, exécution des ordres, risque, transferts de fonds, règlement et rapprochement. Expérience aussi bien dans la conception de systèmes complets que dans la reprise de modules au sein de systèmes existants. Intégrations avec des exchanges centralisés et décentralisés, des marchés traditionnels et des marchés prédictifs, avec une latence d'ordre sous les 10 ms dans les contextes sensibles à la latence.",
    "exp.dom.2.t": "Ingénierie des données",
    "exp.dom.2.d": "Pipelines couvrant la collecte, le nettoyage, la normalisation et la livraison des données, à partir d'exchanges, de partenaires et du web public, au service de l'analyse, du reporting et du backtesting quantitatif. Volumes traités à l'échelle du pétaoctet.",
    "exp.dom.3.t": "Systèmes distribués",
    "exp.dom.3.d": "Conception et refonte d'architectures multi-services et multi-nœuds qui tiennent la latence, la disponibilité et la cohérence entre services sous forte concurrence, ainsi que l'analyse de systèmes existants pour identifier et lever les goulots d'étranglement. Plateforme soutenue au-delà de 100 000 requêtes par seconde en pointe.",
    "exp.dom.4.t": "Exploitation",
    "exp.dom.4.d": "Infrastructure et disponibilité 24/7, du cloud au bare metal : provisionnement multi-nœuds automatisé, supervision et alertes centralisées, détection et reprise automatiques des pannes, jusqu'au réglage du noyau Linux et du système.",
    "exp.cv.title": "CV complet",
    "exp.cv.d": "Pour mon parcours professionnel complet, écrivez-moi sur LinkedIn et je vous enverrai mon CV.",
    "exp.cv.cta": "Me contacter sur LinkedIn",

    "exp.proj.title": "Projets",

    "p1.name": "Refonte d'un client d'exploitation en temps réel",
    "p1.tagline": "Séparer un client TypeScript d'environ 120 000 lignes en un front-end React et un back-end Rust. Réécrit et en phase de test en moins de 3 semaines.",
    "p1.bg": "Il tourne sur site 24 h/24 : vidéo en temps réel, protocole WebSocket, matériel en USB, série et UDP. Interface, logique et E/S matérielles étaient mêlées, sur un moteur de jeu de 2016 et un Electron de 2017.",
    "p1.d1.t": "Cartographier avant de toucher",
    "p1.d1.d": "Avant de modifier le code, j'ai cartographié toutes les dépendances : couches, contrats de protocole, volume, et possibilité de passer chaque couche en Rust.",
    "p1.d2.t": "Couper le long des coutures existantes",
    "p1.d2.d": "Le canal de contrôle et le canal matériel étaient déjà séparés, ce qui donnait une découpe naturelle. L'interface tourne désormais dans le navigateur avec React ; logique métier, protocole et E/S matérielles vivent dans un seul service Rust.",
    "p1.d3.t": "Figer les contrats d'abord",
    "p1.d3.d": "Le protocole serveur compte environ 75 routes, des noms de champs obfusqués et aucun schéma lisible par machine. Avant la réécriture, j'ai décrit le protocole dans un schéma et enregistré du trafic réel comme suite de régression.",
    "p1.callout": "Prévue sur deux mois pour un développeur back-end senior et un front-end senior, la refonte a été reprise par moi seul.",
    "proj.private": "Projet interne. Le code n'est pas public.",

    "pm.name": "Intégration des marchés prédictifs Polymarket",
    "pm.tagline": "J'ai mené l'intégration des marchés prédictifs dans la plateforme de trading de la société, et accompagné un data analyst junior tout au long du développement.",
    "pm.bg": "Sur un marché prédictif, on échange l'issue d'un événement : cotation et règlement diffèrent d'un exchange classique. Les modèles existants de la plateforme ne pouvaient pas être repris tels quels.",
    "pm.d1.t": "OMS",
    "pm.d1.d": "Définition du cycle de vie des ordres pour les marchés prédictifs, intégré à l'OMS existant de la plateforme.",
    "pm.d2.t": "Contrôle des risques",
    "pm.d2.d": "Règles de risque propres aux marchés prédictifs, branchées sur les contrôles de risque de la plateforme.",
    "pm.d3.t": "Modèle de données",
    "pm.d3.d": "Modèle pour les événements, les issues et les positions, afin de gérer les marchés prédictifs avec tous les autres.",
    "pm.callout": "J'ai porté la conception et confié l'implémentation à un data analyst junior, que j'ai accompagné de ses débuts en Rust jusqu'à la mise en production.",

    "lt.name": "Intégration de l'exchange Lighter",
    "lt.tagline": "Un connecteur de production pour Lighter, construit pendant sa bêta fermée, avant toute API publique. Livré en environ 2 semaines.",
    "lt.bg": "Je n'avais que le SDK de la bêta : pas de documentation, pas de support.",
    "lt.d1.t": "Le protocole à partir du SDK",
    "lt.d1.d": "Sans documentation publique, j'ai reconstitué l'interface et les formats de messages à partir du SDK bêta, et appelé depuis Rust le binaire de signature officiel via FFI.",
    "lt.d2.t": "Gestion des nonces",
    "lt.d2.d": "Chaque transaction exige un nonce correct. J'ai vérifié comment les nonces sont générés et incrémentés, pour que les ordres concurrents et les renvois ne soient ni rejetés ni envoyés deux fois.",
    "lt.d3.t": "Une bêta instable",
    "lt.d3.d": "La bêta fermée avait de nombreux problèmes de stabilité. Le connecteur les détecte et se rétablit seul, sans impact côté trading.",
    "lt.d4.t": "Règles d'ordres et risque",
    "lt.d4.d": "J'ai étudié les règles et limites d'ordres de l'exchange, comme la précision, la taille minimale et les limites de débit, pour bloquer avant envoi les ordres qui seraient rejetés.",
    "lt.d5.t": "Interface propre, intégration OMS",
    "lt.d5.d": "Les formats bruts de l'exchange sont normalisés dans notre interface d'ordres interne, et les états d'ordre suivent le cycle de vie de l'OMS.",
    "lt.callout": "La stratégie de market making exécutée sur ce connecteur a rapporté 255 % en un seul mois.",

    "lj.name": "Performance des paiements on-chain",
    "lj.tagline": "Identification des goulots d'étranglement dans une base Go d'environ 200 000 lignes : latence de bout en bout de l'API de paiement passée d'environ 53 s à moins de 1,5 s.",
    "lj.bg": "Un projet de 2023, quand les outils d'IA aidaient peu : le débogage s'est fait à la main. J'ai suivi tout le chemin, de la base de données au code puis à la chaîne, et trouvé deux goulots : un polling qui atteignait les limites de débit à certains moments, et des requêtes qui ralentissaient à mesure que les données grossissaient.",
    "lj.d1.t": "Du polling aux événements",
    "lj.d1.d": "Le flux de paiement (construction, signature, diffusion, confirmation) fonctionne désormais par événements plutôt que par polling, et les pics n'atteignent plus les limites de débit.",
    "lj.d2.t": "Index et requêtes",
    "lj.d2.d": "Ajout des index manquants et réécriture des requêtes lentes, pour que les recherches restent rapides quand les données augmentent.",
    "lj.d3.t": "Chaque paiement traçable",
    "lj.d3.d": "Journalisation ELK du parcours de chaque paiement à travers chaque étape, pour remonter directement à l'étape en échec.",
    "lj.callout": "Latence de bout en bout de l'API de paiement : environ 53 s → moins de 1,5 s.",


    /* quant page */
    "q.hero.title": "De la recherche quant au trading réel.",
    "q.hero.sub": "Une formation en économie, finance et analyse de données, et l'ingénierie pour mener une stratégie de la recherche jusqu'aux ordres réels.",
    "q.skills.title": "Compétences quant",
    "q.skills.lead": "Licence d'économie et master en finance, National Chi Nan University : processus stochastiques, valorisation des dérivés, séries temporelles et économétrie, optimisation numérique, gestion des risques financiers.",
    "q.s1.t": "Valorisation des dérivés",
    "q.s1.d": "Valorisation des options et des dérivés, et les processus stochastiques qui les sous-tendent.",
    "q.s2.t": "Séries temporelles et analyse de données",
    "q.s2.d": "Séries temporelles, économétrie et analyse de données, appliquées aux données de marché et à la recherche de stratégies.",
    "q.s3.t": "Modélisation du risque",
    "q.s3.d": "Modèles de risque, gestion des risques financiers et optimisation numérique.",
    "q.s4.t": "Implémentation de stratégies",
    "q.s4.d": "Transformer la recherche en code qui tourne : données de backtest, exécution et contrôles de risque. J'ai accompagné des desks de market making, d'arbitrage et d'alpha.",
    "q.proj.title": "Projets quant actuels",
    "qp.name": "Plateforme de recherche et d'exécution quant multi-marchés",
    "qp.tagline": "Un projet de recherche personnel sur le spot, les perpétuels et les options, automatisé de la recherche jusqu'aux ordres réels. En cours.",
    "qp.bg": "Il relie chaque étape du travail quant en une seule chaîne automatisée : données de marché, recherche assistée par IA, développement de stratégies, backtest, exécution réelle et supervision Grafana.",
    "qp.d1.t": "Axes de recherche",
    "qp.d1.d": "J'étudie la littérature sur les options, le market making, l'alpha, la microstructure et la finance quantitative pour choisir des sujets de recherche et des stratégies exploitables.",
    "qp.d2.t": "Un moteur pour le backtest et le réel",
    "qp.d2.d": "Construit sur NautilusTrader : le même code de stratégie tourne en backtest et en réel, ce qui réduit l'écart entre recherche et production.",
    "qp.d3.t": "Données et supervision",
    "qp.d3.d": "Les données de marché et de trading sont dans ClickHouse et PostgreSQL, et l'exécution réelle est supervisée dans Grafana.",
    "qr.title": "Où en est la recherche",
    "qr.lead": "Options et perpétuels BTC et ETH sur Deribit, à partir des données de mon propre collecteur. Chaque test fixe ses données, ses coûts et son critère de réussite avant que je regarde le résultat, et une hypothèse rejetée est consignée comme un résultat, pas effacée.",
    "qr.callout": "Le principal résultat à ce jour est une limite, pas un signal : sur huit jours, deux actifs et des horizons de 1 à 60 secondes, aucun effet directionnel à court terme ne dépasse environ 0,42 bp, face à des frais taker d'environ 5 bp.",
    "qr.1.t": "Nettoyer les données avant de s'y fier",
    "qr.1.d": "27 % des transactions d'une journée sont arrivées avec plus de dix minutes de retard, et une même transaction peut arriver jusqu'à quatre fois. Compter les identifiants uniques plutôt que les lignes, et utiliser le compteur de transactions de la plateforme, a donné une borne absolue d'environ 1,2 % de données perdues.",
    "qr.2.t": "Empreintes d'exécution",
    "qr.2.d": "J'ai cherché des algorithmes qui traitent à rythme fixe, par exemple huit exécutions espacées d'exactement 12,000 s. Ils existent et ne sont pas des artefacts de collecte, mais ils sont trop rares pour être exploités : deux options ordinaires le jour de test principal, aucune le jour de réplication.",
    "qr.3.t": "Le flux d'options précède-t-il le sous-jacent ?",
    "qr.3.d": "Non, il le suit. Le mouvement avant une transaction d'option est 2 à 12 fois plus grand que celui qui la suit, et le petit mouvement juste après n'est pas une couverture delta d'un teneur de marché (rejeté 5 jours sur 5).",
    "qr.4.t": "Vérifier la méthode elle-même",
    "qr.4.d": "En contrôle positif, le déséquilibre du flux d'ordres prédit bien la barre suivante, 8 jours sur 8, à 6 à 18 fois le placebo. Il ne vaut que 0,13 à 0,42 bp et disparaît en 30 à 60 s. La méthode fonctionne ; la limite vient des données.",
    "qr.5.t": "Jouer contre les gros balayages",
    "qr.5.d": "Rejeté. 82 % (BTC) et 100 % (ETH) du mouvement de prix causé par un gros ordre agressif sont toujours là 300 s plus tard, et plus le balayage est gros, moins il se résorbe.",
    "qr.6.t": "Market making aux frais standard",
    "qr.6.d": "Rejeté par l'arithmétique. Les frais maker du perpétuel valent 46 fois l'écart d'un tick. Sur les options, mesurés sur 82,9 M de cotations, les frais dépassent l'écart capté avant même de compter la sélection adverse.",
    "qr.7.t": "Valeur relative sur options",
    "qr.7.d": "Sur environ 148 000 vérifications, le bid d'un strike n'a jamais dépassé ce qu'impliquaient les strikes voisins. Le prochain test porte sur l'arbitrage de combos via les ordres multi-jambes natifs de Deribit.",
    "qr.note": "Aucune stratégie n'a encore passé les tests, donc le trading réel reste désactivé. Passer en réel exige mon accord explicite ; le processus de recherche ne peut pas se l'accorder.",

    "ai.hero.title": "Comment est-ce que je travaille avec l'IA ?",
    "ai.hero.sub": "Je travaille en architecte : je pilote plusieurs agents IA, chacun avec un rôle différent dans le développement.",

    "ai.split.title": "Qui fait quoi",
    "ai.split.me": "Je décide",
    "ai.split.me.1": "L'architecture et les frontières du système",
    "ai.split.me.2": "Les contraintes : latence, et comportement en cas de panne",
    "ai.split.me.3": "Les compromis et les critères d'acceptation",
    "ai.split.me.4": "Ce qui est fusionné",
    "ai.split.ai": "Les agents IA, par rôle",
    "ai.split.ai.1": "Recherche : lit le code et la documentation, et cite ses sources",
    "ai.split.ai.2": "Implémentation : écrit le code, les refactorisations et la documentation",
    "ai.split.ai.3": "Tests : écrit et lance les tests",
    "ai.split.ai.4": "Relecture : vérifie chaque diff au regard des contraintes",

    "ai.flow.title": "Le déroulé d'une tâche",
    "ai.flow.1.t": "Lire d'abord",
    "ai.flow.1.d": "L'agent de recherche lit le code, la documentation et les schémas avant toute proposition.",
    "ai.flow.2.t": "Poser les règles",
    "ai.flow.2.d": "Je définis les frontières, les invariants et le comportement attendu en cas de panne.",
    "ai.flow.3.t": "Découper",
    "ai.flow.3.d": "Chaque tâche est assez petite pour être relue d'un coup, et va à l'agent qui a le rôle correspondant.",
    "ai.flow.4.t": "Écrire et exécuter",
    "ai.flow.4.d": "L'agent d'implémentation écrit le code et l'agent de tests lance les tests. Le compilateur, les tests et les benchmarks décident s'il fonctionne.",
    "ai.flow.5.t": "Relire et consigner",
    "ai.flow.5.d": "L'agent de relecture vérifie le diff au regard des contraintes. Je compare ensuite le résultat aux critères d'acceptation et je note ce qui a été confirmé.",

    "ai.check.title": "Repérer les mauvaises réponses",
    "ai.check.lead": "L'IA invente parfois. Je ne peux pas l'empêcher, mais je peux faire en sorte que ça se voie tôt.",
    "ai.check.1.t": "Citer la source",
    "ai.check.1.d": "Chaque affirmation doit renvoyer à du code, une spécification, un test ou des données réelles. Ce que le modèle a retenu de son entraînement n'est pas une source.",
    "ai.check.2.t": "Inconnu est une réponse",
    "ai.check.2.d": "Ce qui ne peut pas être confirmé est marqué inconnu plutôt que deviné.",
    "ai.check.3.t": "Seule l'exécution compte",
    "ai.check.3.d": "« Ça marche » ne vaut rien tant que les tests ne passent pas ou qu'une exécution réelle ne l'a pas montré.",

    "ai.mem.title": "Une mémoire d'une session à l'autre",
    "ai.mem.d1": "Un long projet dure plus longtemps qu'une session d'IA. Je garde la documentation de conception, les décisions et les conclusions vérifiées dans Notion et en Markdown. Au début d'une session, une recherche sémantique ne ramène que ce qui concerne la tâche.",
    "ai.mem.d2": "Seules les conclusions confirmées sont réécrites, pour qu'une mauvaise réponse ne soit pas réutilisée plus tard comme un fait.",
    "ai.mem.alt": "Les notes sont recherchées, utilisées en session, vérifiées, puis réécrites dans les notes.",
    "ai.mem.n1": "Notes",
    "ai.mem.n2": "Recherche",
    "ai.mem.n3": "Session",
    "ai.mem.n4": "Vérification",
    "ai.mem.n5": "Réécriture",

    "ai.ex.title": "En pratique",
    "ai.ex.1": "Un exercice de recrutement d'une grande société de trading pour compte propre. L'IA a aidé à comparer les conceptions, généré le code Rust et planifié les tests ; j'ai tranché la conception et les compromis.",
    "ai.ex.1.hl": "L'intervieweur l'a qualifiée de « la plus sûre » parmi les rendus.",
    "ai.ex.2": "Un projet de mi-2025, quand l'IA était moins capable. J'ai trouvé les formules pour que l'IA les implémente, puis vérifié que chaque étape correspondait à l'exchange bit pour bit : arithmétique de courbe, hachage Pedersen, hachage d'ordre, signature déterministe, champs L2, frais et dérivation de clé.",
    "ai.ex.2.hl": "Rust n'avait aucune bibliothèque de signature StarkNet utilisable : j'ai implémenté la signature moi-même et connecté EdgeX au système de trading.",

    "foot.role": "Ingénieur systèmes"
  };

I18N["ko"] = {
    "meta.exp.title": "Jory | 시스템 엔지니어",
    "meta.exp.desc": "시스템 엔지니어 Jory: 트레이딩 시스템, 데이터 엔지니어링, 분산 시스템, 운영.",
    "meta.ai.title": "Jory | AI와 어떻게 일하나요?",
    "meta.ai.desc": "Jory가 AI 코딩 에이전트를 활용하는 방식: 누가 무엇을 결정하는지, 결과물을 어떻게 검증하는지, 프로젝트 지식을 세션 간에 어떻게 이어 가는지.",
    "meta.quant.title": "Jory | 퀀트",
    "meta.quant.desc": "파생상품 가격 결정과 시계열 분석부터 전략 구현까지, Jory의 퀀트 역량과 진행 중인 퀀트 프로젝트.",

    "a11y.skip": "본문으로 건너뛰기",
    "a11y.pages": "페이지",
    "a11y.lang": "언어",

    "nav.exp": "경력",
    "nav.ai": "AI 협업 방식",
    "nav.quant": "퀀트",

    "exp.hero.title": "저는 시스템 엔지니어입니다.",
    "exp.hero.sub": "트레이딩 시스템, 데이터 엔지니어링, 분산 시스템, 운영을 다룹니다.",
    "exp.hero.cta": "전문 분야 보기",

    "exp.dom.title": "전문 분야",
    "exp.dom.lead": "Rust 외에도 Go, Python, C/C++(FFI), SQL, Bash를 사용합니다.",
    "exp.dom.1.t": "트레이딩 시스템",
    "exp.dom.1.d": "시세 수신, 주문 체결, 리스크 관리, 자금 이체, 정산과 대사까지 트레이딩 시스템 전 구간을 구현한 경험이 있습니다. 전체 아키텍처를 처음부터 설계할 수도 있고, 기존 시스템의 개별 모듈을 맡을 수도 있습니다. 연동 범위는 CEX, DEX, 전통 금융 시장, 예측 시장을 아우르며, 저지연 환경에서는 주문 지연을 10ms 이하로 낮춥니다.",
    "exp.dom.2.t": "데이터 엔지니어링",
    "exp.dom.2.d": "데이터 수집, 정제, 표준화부터 전달까지 전체 파이프라인을 구축합니다. 거래소, 파트너사, 공개 웹의 데이터를 받아 분석, 리포팅, 퀀트 백테스트에 공급하며, PB 규모의 데이터를 처리해 왔습니다.",
    "exp.dom.3.t": "분산 시스템",
    "exp.dom.3.d": "다중 서비스, 다중 노드 분산 아키텍처를 설계하고 재구성해, 높은 동시성에서도 낮은 지연, 고가용성, 서비스 간 데이터 일관성을 유지합니다. 기존 시스템의 성능 병목을 찾아 개선하는 작업도 맡아 왔습니다. 피크 시 10만 QPS를 넘는 플랫폼을 지원했습니다.",
    "exp.dom.4.t": "운영",
    "exp.dom.4.d": "클라우드부터 베어메탈까지 인프라를 운영하며 서비스의 24/7 가용성을 책임집니다. 다중 노드 자동 프로비저닝, 중앙 집중식 모니터링과 알림, 장애 자동 감지와 복구를 다루며, 필요하면 Linux 커널과 시스템 레벨 튜닝까지 내려갑니다.",
    "exp.cv.title": "전체 이력서",
    "exp.cv.d": "전체 경력이 궁금하시면 LinkedIn으로 메시지를 보내 주세요. 이력서를 보내 드리겠습니다.",
    "exp.cv.cta": "LinkedIn으로 메시지 보내기",

    "exp.proj.title": "프로젝트",

    "p1.name": "실시간 운영 클라이언트 재구축",
    "p1.tagline": "약 12만 줄의 TypeScript 클라이언트를 React 프론트엔드와 Rust 백엔드로 분리했습니다. 3주 만에 재작성을 마치고 테스트 단계에 들어갔습니다.",
    "p1.bg": "현장에서 24시간 가동되며 실시간 영상, WebSocket 프로토콜, USB·시리얼·UDP 하드웨어를 함께 처리합니다. UI, 로직, 하드웨어 I/O가 모두 뒤섞여 있었고, 기반은 2016년 게임 엔진과 2017년 Electron이었습니다.",
    "p1.d1.t": "손대기 전에 먼저 파악",
    "p1.d1.d": "코드를 바꾸기 전에 의존성 전체를 파악했습니다. 계층 구조, 프로토콜 계약, 코드 규모, 그리고 각 계층을 Rust로 옮길 수 있는지를 정리했습니다.",
    "p1.d2.t": "기존 경계를 따라 분리",
    "p1.d2.d": "제어 채널과 하드웨어 채널은 원래 분리되어 있어 자연스러운 분할선이 되었습니다. UI는 이제 브라우저에서 React로 동작하고, 도메인 로직, 프로토콜, 하드웨어 I/O는 하나의 Rust 서비스에 모였습니다.",
    "p1.d3.t": "계약부터 고정",
    "p1.d3.d": "서버 프로토콜에는 약 75개의 라우트가 있고, 필드 이름은 난독화되어 있으며, 기계가 읽을 수 있는 스키마도 없습니다. 재작성 전에 프로토콜을 스키마로 정리하고, 실제 트래픽을 녹화해 회귀 테스트로 삼았습니다.",
    "p1.callout": "원래 시니어 백엔드 엔지니어와 시니어 프론트엔드 엔지니어 두 명이 2개월 동안 진행할 계획이었던 작업을 혼자 맡았습니다.",
    "proj.private": "사내 프로젝트로, 코드는 공개되어 있지 않습니다.",

    "pm.name": "Polymarket 예측 시장 연동",
    "pm.tagline": "회사 트레이딩 플랫폼에 예측 시장을 연동하는 작업을 이끌고, 주니어 데이터 분석가를 멘토링하며 함께 구현했습니다.",
    "pm.bg": "예측 시장에서는 사건의 결과를 거래하기 때문에 가격 결정과 정산 방식이 일반 거래소와 다릅니다. 플랫폼의 기존 모델을 그대로 쓸 수 없었습니다.",
    "pm.d1.t": "OMS",
    "pm.d1.d": "예측 시장의 주문 생명주기를 정의하고 플랫폼의 기존 OMS에 맞춰 넣었습니다.",
    "pm.d2.t": "리스크 관리",
    "pm.d2.d": "예측 시장 전용 리스크 규칙을 정하고 플랫폼의 리스크 검증에 연결했습니다.",
    "pm.d3.t": "데이터 모델",
    "pm.d3.d": "이벤트, 결과, 포지션 모델을 설계해 예측 시장을 다른 모든 시장과 함께 관리할 수 있게 했습니다.",
    "pm.callout": "설계는 제가 맡고 구현은 주니어 데이터 분석가에게 넘겼습니다. Rust 입문부터 기능 출시까지 멘토링했습니다.",

    "lt.name": "Lighter 거래소 연동",
    "lt.tagline": "공개 API가 나오기 전, 클로즈드 베타 기간에 Lighter용 프로덕션 커넥터를 만들었습니다. 약 2주 만에 출시했습니다.",
    "lt.bg": "가진 것은 베타 SDK뿐이었습니다. 문서도, 벤더 지원도 없었습니다.",
    "lt.d1.t": "SDK에서 프로토콜 파악",
    "lt.d1.d": "공개 문서가 없어 베타 SDK에서 인터페이스와 메시지 형식을 알아냈고, 공식 서명 바이너리를 Rust에서 FFI로 호출했습니다.",
    "lt.d2.t": "Nonce 처리",
    "lt.d2.d": "모든 트랜잭션에는 올바른 nonce가 필요합니다. nonce가 생성되고 증가하는 방식을 검증해, 동시 주문과 재전송이 거부되거나 중복 전송되지 않게 했습니다.",
    "lt.d3.t": "불안정한 베타",
    "lt.d3.d": "클로즈드 베타는 안정성 문제가 잦았습니다. 커넥터가 이를 스스로 감지하고 복구해 트레이딩 쪽에 영향이 가지 않습니다.",
    "lt.d4.t": "주문 규칙과 리스크",
    "lt.d4.d": "정밀도, 최소 수량, 요청 빈도 제한 등 거래소의 주문 규칙과 한도를 조사해, 실패할 주문은 전송 전에 걸러 냅니다.",
    "lt.d5.t": "깔끔한 인터페이스, OMS 매핑",
    "lt.d5.d": "거래소의 원본 형식을 내부 주문 인터페이스로 정규화하고, 주문 상태를 OMS 생명주기에 매핑했습니다.",
    "lt.callout": "이 커넥터 위에서 돌아간 마켓 메이킹 전략은 한 달 동안 255%의 수익률을 기록했습니다.",

    "lj.name": "온체인 출금 시스템 성능 최적화",
    "lj.tagline": "약 20만 줄의 Go 코드베이스에서 병목을 찾아, 출금 API의 엔드투엔드 지연을 약 53초에서 1.5초 이하로 줄였습니다.",
    "lj.bg": "AI 도구가 아직 큰 도움이 되지 않던 2023년의 프로젝트라 디버깅은 직접 했습니다. 데이터베이스에서 코드, 체인까지 전체 경로를 추적해 두 가지 병목을 찾았습니다. 특정 시간대에 rate limit에 걸리는 폴링, 그리고 데이터가 늘수록 느려지는 데이터베이스 쿼리였습니다.",
    "lj.d1.t": "폴링에서 이벤트로",
    "lj.d1.d": "출금 흐름(생성, 서명, 브로드캐스트, 확인)을 주기적 폴링 대신 이벤트 기반으로 바꿔, 바쁜 시간대에도 rate limit에 걸리지 않습니다.",
    "lj.d2.t": "인덱스와 쿼리 튜닝",
    "lj.d2.d": "누락된 인덱스를 추가하고 느린 쿼리를 다시 작성해, 데이터가 늘어도 조회 속도가 유지됩니다.",
    "lj.d3.t": "모든 출금을 추적 가능하게",
    "lj.d3.d": "ELK 로깅을 추가해 각 출금이 모든 단계를 거치는 경로를 기록했습니다. 이후 문제가 생기면 실패한 단계까지 바로 추적할 수 있습니다.",
    "lj.callout": "출금 API 엔드투엔드 지연: 약 53초 → 1.5초 이하.",


    /* quant page */
    "q.hero.title": "실전 트레이딩을 위한 퀀트 리서치.",
    "q.hero.sub": "경제학, 금융, 데이터 분석 배경에 더해, 전략을 리서치에서 실제 주문까지 옮기는 엔지니어링 역량을 갖추고 있습니다.",
    "q.skills.title": "퀀트 역량",
    "q.skills.lead": "국립 지난국제대학교(National Chi Nan University) 경제학 학사, 금융학 석사: 확률 과정, 파생상품 가격 결정, 시계열과 계량경제학, 수치 최적화, 금융 리스크 관리.",
    "q.s1.t": "파생상품 가격 결정",
    "q.s1.d": "옵션과 파생상품의 가격 결정, 그리고 그 바탕이 되는 확률 과정.",
    "q.s2.t": "시계열과 데이터 분석",
    "q.s2.d": "시계열, 계량경제학, 데이터 분석을 시장 데이터와 전략 리서치에 적용합니다.",
    "q.s3.t": "리스크 모델링",
    "q.s3.d": "리스크 모델, 금융 리스크 관리, 수치 최적화.",
    "q.s4.t": "전략 구현",
    "q.s4.d": "리서치를 실제로 돌아가는 코드로 옮깁니다. 백테스트 데이터, 주문 실행, 리스크 검증을 다루며, 마켓 메이킹, 차익거래, 알파 데스크를 지원한 경험이 있습니다.",
    "q.proj.title": "진행 중인 퀀트 프로젝트",
    "qp.name": "크로스마켓 퀀트 리서치 및 트레이딩 플랫폼",
    "qp.tagline": "현물, 무기한 선물, 옵션을 아우르는 개인 리서치 프로젝트로, 리서치부터 실제 주문까지 자동화합니다. 진행 중입니다.",
    "qp.bg": "시장 데이터, AI 보조 리서치, 전략 개발, 백테스트, 실거래 실행, Grafana 모니터링까지 퀀트 작업의 모든 단계를 하나의 자동화 파이프라인으로 연결합니다.",
    "qp.d1.t": "리서치 방향",
    "qp.d1.d": "옵션, 마켓 메이킹, 알파, 시장 미시구조, 계량 금융에 관한 문헌을 읽고 리서치 주제와 거래 가능한 전략을 고릅니다.",
    "qp.d2.t": "백테스트와 실거래를 하나의 엔진으로",
    "qp.d2.d": "NautilusTrader 기반이라 같은 전략 코드가 백테스트와 실거래에서 그대로 돌아가, 리서치와 프로덕션 사이의 차이를 줄입니다.",
    "qp.d3.t": "데이터와 모니터링",
    "qp.d3.d": "시장 데이터와 거래 데이터는 ClickHouse와 PostgreSQL에 저장하고, 실거래 실행은 Grafana로 모니터링합니다.",
    "qr.title": "지금까지의 리서치",
    "qr.lead": "Deribit BTC·ETH 옵션과 무기한 선물을 대상으로, 직접 만든 수집기가 기록한 데이터를 사용합니다. 모든 테스트는 결과를 보기 전에 데이터, 비용, 통과 기준을 먼저 고정하며, 기각된 가설도 삭제하지 않고 결과로 기록합니다.",
    "qr.callout": "지금까지의 주요 결론은 신호가 아니라 한계입니다. 8일, 두 자산, 1초에서 60초 구간에 걸쳐 단기 방향성 효과는 약 0.42 bp를 넘지 않았고, 테이커 수수료는 약 5 bp입니다.",
    "qr.1.t": "믿기 전에 데이터부터 정제",
    "qr.1.d": "하루치 체결 중 27%가 10분 넘게 늦게 도착했고, 같은 체결이 최대 네 번까지 도착하기도 했습니다. 행 수 대신 고유 체결 ID를 세고 거래소 자체의 체결 카운터를 사용해, 유실 데이터의 절대 상한을 약 1.2%로 확정했습니다.",
    "qr.2.t": "실행 흔적",
    "qr.2.d": "정확히 12.000초 간격의 체결 8건처럼 고정된 리듬으로 거래하는 알고리즘을 찾아봤습니다. 실제로 존재하며 수집 과정의 오류도 아니지만, 거래하기에는 너무 드뭅니다. 주 테스트일에는 일반 옵션 2개, 재현 테스트일에는 하나도 없었습니다.",
    "qr.3.t": "옵션 주문 흐름이 기초자산을 선행할까?",
    "qr.3.d": "아니요, 뒤따릅니다. 옵션 체결 이전의 가격 움직임이 이후보다 2배에서 12배 크며, 체결 직후의 작은 움직임은 마켓 메이커의 델타 헤지가 아닙니다(5일 중 5일 기각).",
    "qr.4.t": "방법론 자체 검증",
    "qr.4.d": "양성 대조군으로 확인한 결과, 주문 흐름 불균형은 실제로 다음 바를 예측합니다. 8일 중 8일, 플라시보 대비 6배에서 18배입니다. 하지만 가치는 0.13에서 0.42 bp에 불과하고 30초에서 60초 안에 사라집니다. 방법은 작동하며, 한계는 데이터에 있습니다.",
    "qr.5.t": "대형 스윕 역추세 매매",
    "qr.5.d": "기각. 대형 공격적 주문이 만든 가격 움직임의 82%(BTC)와 100%(ETH)가 300초 뒤에도 그대로 남아 있었고, 스윕이 클수록 되돌림은 더 작았습니다.",
    "qr.6.t": "표준 수수료에서의 마켓 메이킹",
    "qr.6.d": "계산만으로 기각. 무기한 선물의 메이커 수수료는 1틱 스프레드의 46배입니다. 옵션은 8,290만 건의 호가로 측정한 결과, 역선택을 고려하기도 전에 수수료가 포착한 스프레드를 넘어섭니다.",
    "qr.7.t": "옵션 상대가치",
    "qr.7.d": "약 148,000번의 검사에서 어떤 행사가의 매수 호가도 인접 행사가들이 함의하는 값을 넘은 적이 없었습니다. 다음 테스트는 Deribit의 기본 멀티레그 주문을 이용한 콤보 차익거래입니다.",
    "qr.note": "아직 통과한 전략이 없어 실거래는 꺼 둔 상태입니다. 실거래 전환에는 저의 명시적인 승인이 필요하며, 리서치 프로세스가 이를 대신할 수 없습니다.",

    "ai.hero.title": "AI와 어떻게 일하나요?",
    "ai.hero.sub": "저는 아키텍트로서 여러 AI 에이전트를 지휘하고, 각 에이전트는 개발에서 서로 다른 역할을 맡습니다.",

    "ai.split.title": "역할 분담",
    "ai.split.me": "제가 결정하는 것",
    "ai.split.me.1": "아키텍처와 시스템 경계",
    "ai.split.me.2": "제약 조건: 지연 시간, 장애 시 동작 방식",
    "ai.split.me.3": "트레이드오프와 인수 기준",
    "ai.split.me.4": "무엇을 머지할지",
    "ai.split.ai": "역할별 AI 에이전트",
    "ai.split.ai.1": "리서치: 코드와 문서를 읽고 출처를 명시",
    "ai.split.ai.2": "구현: 코드 작성, 리팩터링, 문서화",
    "ai.split.ai.3": "테스트: 테스트 작성과 실행",
    "ai.split.ai.4": "리뷰: 각 diff를 제약 조건에 비춰 검토",

    "ai.flow.title": "작업이 진행되는 방식",
    "ai.flow.1.t": "먼저 읽기",
    "ai.flow.1.d": "무언가를 제안하기 전에 리서치 에이전트가 코드, 문서, 스키마를 먼저 읽습니다.",
    "ai.flow.2.t": "규칙 정하기",
    "ai.flow.2.d": "경계, 불변 조건, 장애 시 어떻게 동작해야 하는지를 제가 정합니다.",
    "ai.flow.3.t": "작업 나누기",
    "ai.flow.3.d": "작업은 하나씩 리뷰할 수 있을 만큼 작게 나누고, 각각 해당 역할의 에이전트에게 맡깁니다.",
    "ai.flow.4.t": "구현과 실행",
    "ai.flow.4.d": "구현 에이전트가 코드를 작성하고 테스트 에이전트가 테스트를 실행합니다. 동작 여부는 컴파일러, 테스트, 벤치마크가 판단합니다.",
    "ai.flow.5.t": "리뷰와 기록",
    "ai.flow.5.d": "리뷰 에이전트가 diff를 제약 조건에 비춰 검토합니다. 이후 제가 결과를 인수 기준에 맞춰 확인하고, 확인된 내용을 기록합니다.",

    "ai.check.title": "틀린 답 잡아내기",
    "ai.check.lead": "AI는 가끔 없는 내용을 지어냅니다. 막을 수는 없지만, 일찍 드러나게 할 수는 있습니다.",
    "ai.check.1.t": "출처 제시",
    "ai.check.1.d": "모든 주장은 코드, 명세, 테스트, 실제 데이터 중 하나를 근거로 가리켜야 합니다. 모델이 학습에서 기억하는 내용은 출처가 아닙니다.",
    "ai.check.2.t": "모른다는 것도 답",
    "ai.check.2.d": "확인할 수 없는 것은 추측하지 않고 ‘알 수 없음’으로 표시합니다.",
    "ai.check.3.t": "실행만이 증거",
    "ai.check.3.d": "테스트가 통과하거나 실제 실행으로 확인되기 전까지 “된다”는 말은 의미가 없습니다.",

    "ai.mem.title": "세션 간 기억",
    "ai.mem.d1": "긴 프로젝트는 하나의 AI 세션보다 오래 갑니다. 설계 문서, 결정 사항, 확인된 결과를 Notion과 Markdown에 보관하고, 세션을 시작할 때 시맨틱 검색으로 해당 작업에 필요한 부분만 불러옵니다.",
    "ai.mem.d2": "확인된 결론만 다시 기록하기 때문에, 한 번 틀린 답이 나중에 사실처럼 재사용되지 않습니다.",
    "ai.mem.alt": "노트를 검색해 세션에서 사용하고, 검증한 뒤 다시 노트에 기록합니다.",
    "ai.mem.n1": "노트",
    "ai.mem.n2": "검색",
    "ai.mem.n3": "세션",
    "ai.mem.n4": "검증",
    "ai.mem.n5": "다시 기록",

    "ai.ex.title": "실제 사례",
    "ai.ex.1": "최상위 프롭 트레이딩 회사의 과제 전형입니다. AI는 설계 비교, Rust 코드 생성, 테스트 계획을 도왔고, 설계와 트레이드오프 판단은 제가 내렸습니다.",
    "ai.ex.1.hl": "면접관은 제출된 설계 중 “가장 안전한” 설계라고 평가했습니다.",
    "ai.ex.2": "AI의 능력이 아직 부족했던 2025년 중반의 프로젝트입니다. AI가 구현할 수학을 제가 찾아 주고, 곡선 연산, Pedersen 해시, 주문 해시, 결정적 서명, L2 필드, 수수료, 키 파생까지 모든 단계가 거래소와 비트 단위로 일치하는지 확인했습니다.",
    "ai.ex.2.hl": "Rust에는 쓸 만한 StarkNet 서명 라이브러리가 없어서, 서명을 직접 구현해 EdgeX를 트레이딩 시스템에 연결했습니다.",

    "foot.role": "시스템 엔지니어"
  };

  /* ── apply ─────────────────────────────────────────────────────────── */

  var docEl = document.documentElement;
  var page = (document.body && document.body.getAttribute("data-page")) || "exp";

  function dict(lang) {
    return I18N[lang] || I18N[DEFAULT_LANG];
  }

  function translate(lang, key) {
    var table = dict(lang);
    if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    return I18N[DEFAULT_LANG][key];
  }

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el && value) el.setAttribute("content", value);
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;

    var nodes = document.querySelectorAll("[data-i18n]");
    var i, el, val;

    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      val = translate(lang, el.getAttribute("data-i18n"));
      if (typeof val === "string") el.textContent = val;
    }

    nodes = document.querySelectorAll("[data-i18n-html]");
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      val = translate(lang, el.getAttribute("data-i18n-html"));
      if (typeof val === "string") el.innerHTML = val;
    }

    nodes = document.querySelectorAll("[data-i18n-label]");
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      val = translate(lang, el.getAttribute("data-i18n-label"));
      if (typeof val === "string") el.setAttribute("aria-label", val);
    }

    var title = translate(lang, "meta." + page + ".title");
    var desc = translate(lang, "meta." + page + ".desc");

    document.title = title;
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', desc);
    setMeta('meta[property="og:locale"]', OG_LOCALE[lang]);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', desc);

    docEl.setAttribute("lang", lang);
    docEl.setAttribute("data-lang", lang);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function storedLang() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return SUPPORTED.indexOf(stored) !== -1 ? stored : DEFAULT_LANG;
  }

  /* ── init ──────────────────────────────────────────────────────────── */

  function init() {
    var lang = storedLang();
    var select = document.getElementById("langSelect");

    if (lang !== DEFAULT_LANG) applyLang(lang);
    if (select) {
      select.value = lang;
      select.addEventListener("change", function () {
        applyLang(select.value);
      });
    }

    docEl.classList.remove("i18n-pending");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
