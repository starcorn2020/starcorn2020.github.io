/* ==========================================================================
   Jory: personal site
   Client-side i18n (en / zh-TW / zh-CN / fr) shared by both pages. No dependencies.
   ========================================================================== */

(function () {
  "use strict";

  var SUPPORTED = ["en", "zh-TW", "zh-CN", "fr"];
  var DEFAULT_LANG = "en";
  var STORAGE_KEY = "lang";

  var OG_LOCALE = {
    "en": "en_US",
    "zh-TW": "zh_TW",
    "zh-CN": "zh_CN",
    "fr": "fr_FR"
  };

  /* ── dictionaries ──────────────────────────────────────────────────── */

  var I18N = {};

  I18N["en"] = {
    "meta.exp.title": "Jory | Rust systems engineer",
    "meta.exp.desc": "Jory, a Rust systems engineer: trading systems, data engineering, distributed systems and operations.",
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
    "exp.hero.title": "I'm a Rust systems engineer.",
    "exp.hero.sub": "I work on trading systems, data engineering, distributed systems and operations.",
    "exp.hero.cta": "What I work on",

    "exp.dom.title": "What I work on",
    "exp.dom.lead": "Besides Rust, I write Go, Python, C/C++ (FFI), SQL and Bash.",
    "exp.dom.1.t": "Trading systems",
    "exp.dom.1.s": "I've worked on the whole path: market data in, orders out, funds moved, books settled.",
    "exp.dom.1.1": "Connected 14+ centralized and decentralized exchanges, plus traditional and prediction markets, for market data and execution.",
    "exp.dom.1.2": "OMS and risk: order lifecycle, position sync, account-level margin and risk calculations.",
    "exp.dom.1.3": "Transfers across blockchain and traditional finance: on-chain payouts (build, sign, broadcast, confirm), exchange-to-exchange transfers and FX conversion.",
    "exp.dom.1.4": "Accounting and settlement: reconciliation against payment providers, daily settlement and ledger reports.",
    "exp.dom.1.5": "Brought order latency under 10 ms for a proprietary trading firm.",
    "exp.dom.2.t": "Data engineering",
    "exp.dom.2.s": "Collecting scattered, inconsistent data, cleaning it up, and handing it to analysis and backtesting.",
    "exp.dom.2.1": "PB-scale data processing, including a ClickHouse platform ingesting about 1 billion raw records a day.",
    "exp.dom.2.2": "Scheduled pipelines and ETL with Airflow; consolidated 32 sources from 8 partners into one schema.",
    "exp.dom.2.3": "Historical market-data extraction for backtesting, and time-series analysis.",
    "exp.dom.2.4": "Distributed scrapers, including analysing and getting past anti-bot protection.",
    "exp.dom.3.t": "Distributed systems",
    "exp.dom.3.s": "Keeping many services on many machines fast, stable and consistent.",
    "exp.dom.3.1": "Rebuilt an on-chain payout system as event-driven stages, cutting end-to-end API latency from about 53 s to under 1.5 s.",
    "exp.dom.3.2": "Microservices over gRPC with RabbitMQ and Kafka, on a platform peaking above 100K QPS.",
    "exp.dom.3.3": "Consistency across services: position sync and reconciliation, so every system agrees on the same trade.",
    "exp.dom.3.4": "Non-blocking fan-out with a bounded queue per subscriber, so a slow client can't hold up the main path.",
    "exp.dom.4.t": "Operations",
    "exp.dom.4.s": "Keeping services up around the clock, from the cloud down to bare metal.",
    "exp.dom.4.1": "AWS infrastructure and networking: EC2, VPC, Route 53, IAM, blockchain node deployment and low-latency networking.",
    "exp.dom.4.2": "Bare-metal Linux clusters: multi-node provisioning, OS installs and network setup automated with Ansible and PXE, remote management over IPMI/BMC.",
    "exp.dom.4.3": "Watchdogs and monitoring: centralised ELK logging, Grafana dashboards, and automatic detection and recovery when a service fails.",
    "exp.dom.4.4": "Linux kernel and system-level tuning.",
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
    "p1.callout": "It was planned as two months of work for one back-end and one front-end engineer. I took it on alone.",
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

    "foot.role": "Rust systems engineer"
  };

  I18N["zh-TW"] = {
    "meta.exp.title": "Jory | Rust 系統工程師",
    "meta.exp.desc": "Jory，Rust 系統工程師：交易系統、資料工程、分散式系統與維運。",
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

    "exp.hero.title": "我是 Rust 系統工程師。",
    "exp.hero.sub": "專長是交易系統、資料工程、分散式系統與維運。",
    "exp.hero.cta": "看專長領域",

    "exp.dom.title": "專長領域",
    "exp.dom.lead": "除了 Rust，也寫 Go、Python、C/C++（FFI）、SQL 和 Bash。",
    "exp.dom.1.t": "交易系統",
    "exp.dom.1.s": "從行情進來到訂單成交、資金移轉與結算，整條交易鏈路都做過。",
    "exp.dom.1.1": "串接 14 個以上的 CEX 與 DEX，以及傳統金融市場與預測市場，涵蓋行情資料與交易執行。",
    "exp.dom.1.2": "OMS 與風控：訂單生命週期、倉位同步、帳戶層級的保證金與風險計算。",
    "exp.dom.1.3": "區塊鏈與傳統金融的資金轉帳：鏈上出款流程（建構、簽章、廣播、確認）、交易所間轉帳與匯率換算。",
    "exp.dom.1.4": "會計結算：與外部金流對帳、每日結算與帳務報表。",
    "exp.dom.1.5": "協助一家自營交易公司把下單延遲壓到 10ms 以下。",
    "exp.dom.2.t": "資料工程",
    "exp.dom.2.s": "把分散、格式不一的資料收進來、整理好，交給分析和回測使用。",
    "exp.dom.2.1": "PB 級資料處理，包含每日約 10 億筆原始資料的 ClickHouse 資料平台。",
    "exp.dom.2.2": "用 Airflow 建構排程 data pipeline 與 ETL，把 8 個合作方、32 個資料源整合成統一 schema。",
    "exp.dom.2.3": "為量化回測抽取歷史行情資料，並做時間序列分析。",
    "exp.dom.2.4": "分散式爬蟲，以及反爬蟲機制的分析與繞過。",
    "exp.dom.3.t": "分散式系統",
    "exp.dom.3.s": "讓多台機器、多個服務一起運作時，依然快、穩、資料一致。",
    "exp.dom.3.1": "把鏈上出款系統改為事件驅動流程，API 端到端延遲從約 53 秒降到 1.5 秒以內。",
    "exp.dom.3.2": "微服務架構：服務間以 gRPC 溝通，搭配 RabbitMQ 與 Kafka 訊息佇列，平台尖峰超過 10 萬 QPS。",
    "exp.dom.3.3": "跨服務的狀態一致：倉位同步與對帳，讓各系統對同一筆交易的認知一致。",
    "exp.dom.3.4": "非阻塞 fan-out 搭配每個訂閱者一條有界佇列，慢速客戶端拖不住主流程。",
    "exp.dom.4.t": "維運",
    "exp.dom.4.s": "從雲端到實體機房，讓服務 24/7 穩定運行。",
    "exp.dom.4.1": "AWS 架構與網路：EC2、VPC、Route 53、IAM，以及鏈上節點部署與低延遲網路。",
    "exp.dom.4.2": "Bare-metal Linux 叢集維運：用 Ansible 與 PXE 自動化多節點佈建、系統安裝與網路設定，透過 IPMI/BMC 遠端管理。",
    "exp.dom.4.3": "Watchdog 與監控告警：ELK 集中日誌、Grafana 儀表板，服務異常時自動偵測與復原。",
    "exp.dom.4.4": "Linux kernel 與系統層級調校。",
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
    "p1.callout": "原本規劃 1 位後端加 1 位前端、為期 2 個月的重構，由我一個人接手。",
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

    "foot.role": "Rust 系統工程師"
  };

  I18N["zh-CN"] = {
    "meta.exp.title": "Jory | Rust 系统工程师",
    "meta.exp.desc": "Jory，Rust 系统工程师：交易系统、数据工程、分布式系统与运维。",
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

    "exp.hero.title": "我是 Rust 系统工程师。",
    "exp.hero.sub": "专长是交易系统、数据工程、分布式系统与运维。",
    "exp.hero.cta": "看专长领域",

    "exp.dom.title": "专长领域",
    "exp.dom.lead": "除了 Rust，也写 Go、Python、C/C++（FFI）、SQL 和 Bash。",
    "exp.dom.1.t": "交易系统",
    "exp.dom.1.s": "从行情进来到订单成交、资金划转与结算，整条交易链路都做过。",
    "exp.dom.1.1": "对接 14 个以上的 CEX 与 DEX，以及传统金融市场与预测市场，涵盖行情数据与交易执行。",
    "exp.dom.1.2": "OMS 与风控：订单生命周期、仓位同步、账户级保证金与风险计算。",
    "exp.dom.1.3": "区块链与传统金融的资金划转：链上出款流程（构建、签名、广播、确认）、交易所间转账与汇率换算。",
    "exp.dom.1.4": "会计结算：与外部支付渠道对账、每日结算与账务报表。",
    "exp.dom.1.5": "协助一家自营交易公司把下单延迟压到 10ms 以下。",
    "exp.dom.2.t": "数据工程",
    "exp.dom.2.s": "把分散、格式不一的数据收进来、整理好，交给分析和回测使用。",
    "exp.dom.2.1": "PB 级数据处理，包括每日约 10 亿条原始数据的 ClickHouse 数据平台。",
    "exp.dom.2.2": "用 Airflow 构建定时 data pipeline 与 ETL，把 8 个合作方、32 个数据源整合成统一 schema。",
    "exp.dom.2.3": "为量化回测抽取历史行情数据，并做时间序列分析。",
    "exp.dom.2.4": "分布式爬虫，以及反爬虫机制的分析与绕过。",
    "exp.dom.3.t": "分布式系统",
    "exp.dom.3.s": "让多台机器、多个服务一起运作时，依然快、稳、数据一致。",
    "exp.dom.3.1": "把链上出款系统改为事件驱动流程，API 端到端延迟从约 53 秒降到 1.5 秒以内。",
    "exp.dom.3.2": "微服务架构：服务间以 gRPC 通信，搭配 RabbitMQ 与 Kafka 消息队列，平台峰值超过 10 万 QPS。",
    "exp.dom.3.3": "跨服务的状态一致：仓位同步与对账，让各系统对同一笔交易的认知一致。",
    "exp.dom.3.4": "非阻塞 fan-out 搭配每个订阅者一条有界队列，慢速客户端拖不住主流程。",
    "exp.dom.4.t": "运维",
    "exp.dom.4.s": "从云端到实体机房，让服务 24/7 稳定运行。",
    "exp.dom.4.1": "AWS 架构与网络：EC2、VPC、Route 53、IAM，以及链上节点部署与低延迟网络。",
    "exp.dom.4.2": "Bare-metal Linux 集群运维：用 Ansible 与 PXE 自动化多节点部署、系统安装与网络配置，通过 IPMI/BMC 远程管理。",
    "exp.dom.4.3": "Watchdog 与监控告警：ELK 集中日志、Grafana 仪表板，服务异常时自动检测与恢复。",
    "exp.dom.4.4": "Linux kernel 与系统层级调优。",
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
    "p1.callout": "原本规划 1 位后端加 1 位前端、为期 2 个月的重构，由我一个人接手。",
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

    "foot.role": "Rust 系统工程师"
  };

  I18N["fr"] = {
    "meta.exp.title": "Jory | Ingénieur systèmes Rust",
    "meta.exp.desc": "Jory, ingénieur systèmes Rust : systèmes de trading, ingénierie des données, systèmes distribués et exploitation.",
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

    "exp.hero.title": "Je suis ingénieur systèmes Rust.",
    "exp.hero.sub": "Je travaille sur les systèmes de trading, l'ingénierie des données, les systèmes distribués et l'exploitation.",
    "exp.hero.cta": "Voir mes domaines",

    "exp.dom.title": "Domaines",
    "exp.dom.lead": "En plus de Rust, j'écris du Go, du Python, du C/C++ (FFI), du SQL et du Bash.",
    "exp.dom.1.t": "Systèmes de trading",
    "exp.dom.1.s": "J'ai travaillé sur toute la chaîne : données de marché en entrée, ordres en sortie, fonds transférés, comptes réglés.",
    "exp.dom.1.1": "Connexion à plus de 14 exchanges centralisés et décentralisés, ainsi qu'aux marchés traditionnels et prédictifs, pour les données de marché et l'exécution.",
    "exp.dom.1.2": "OMS et risque : cycle de vie des ordres, synchronisation des positions, calcul de marge et de risque au niveau du compte.",
    "exp.dom.1.3": "Transferts entre blockchain et finance traditionnelle : paiements on-chain (construction, signature, diffusion, confirmation), transferts entre exchanges et conversion de devises.",
    "exp.dom.1.4": "Comptabilité et règlement : rapprochement avec les prestataires de paiement, règlement quotidien et rapports comptables.",
    "exp.dom.1.5": "Latence d'ordre ramenée sous les 10 ms pour une société de trading pour compte propre.",
    "exp.dom.2.t": "Ingénierie des données",
    "exp.dom.2.s": "Collecter des données éparses et hétérogènes, les nettoyer et les livrer à l'analyse et au backtesting.",
    "exp.dom.2.1": "Traitement de données à l'échelle du pétaoctet, dont une plateforme ClickHouse ingérant environ un milliard d'enregistrements bruts par jour.",
    "exp.dom.2.2": "Pipelines planifiés et ETL avec Airflow ; 32 sources de 8 partenaires consolidées dans un schéma unique.",
    "exp.dom.2.3": "Extraction de données de marché historiques pour le backtesting, et analyse de séries temporelles.",
    "exp.dom.2.4": "Scrapers distribués, y compris l'analyse et le contournement des protections anti-bot.",
    "exp.dom.3.t": "Systèmes distribués",
    "exp.dom.3.s": "Faire en sorte que de nombreux services sur de nombreuses machines restent rapides, stables et cohérents.",
    "exp.dom.3.1": "Refonte d'un système de paiement on-chain en étapes pilotées par événements : latence de bout en bout passée d'environ 53 s à moins de 1,5 s.",
    "exp.dom.3.2": "Microservices en gRPC avec RabbitMQ et Kafka, sur une plateforme dépassant 100 000 requêtes par seconde en pointe.",
    "exp.dom.3.3": "Cohérence entre services : synchronisation des positions et rapprochement, pour que chaque système voie la même transaction de la même façon.",
    "exp.dom.3.4": "Diffusion non bloquante avec une file bornée par abonné, pour qu'un client lent ne retienne pas le chemin principal.",
    "exp.dom.4.t": "Exploitation",
    "exp.dom.4.s": "Garder les services en marche jour et nuit, du cloud jusqu'au bare metal.",
    "exp.dom.4.1": "Infrastructure et réseau AWS : EC2, VPC, Route 53, IAM, déploiement de nœuds blockchain et réseau à faible latence.",
    "exp.dom.4.2": "Clusters Linux bare metal : provisionnement multi-nœuds, installation des systèmes et configuration réseau automatisés avec Ansible et PXE, gestion à distance via IPMI/BMC.",
    "exp.dom.4.3": "Watchdogs et supervision : logs centralisés ELK, tableaux de bord Grafana, détection et reprise automatiques en cas de panne.",
    "exp.dom.4.4": "Réglage du noyau Linux et du système.",
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
    "p1.callout": "Prévue sur deux mois pour un développeur back-end et un front-end, la refonte a été reprise par moi seul.",
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

    "foot.role": "Ingénieur systèmes Rust"
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
