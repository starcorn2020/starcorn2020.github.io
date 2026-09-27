# starcorn2020.github.io

**Live site:** https://starcorn2020.github.io/

This is Jory's personal portfolio. It covers my engineering skills, experience, the projects I've built, and how I work with AI in software development.

這是我的個人作品集網站，用來介紹我的工程能力、經歷、做過的專案，以及我如何運用 AI 進行軟體開發。

## Contents

- **How I use AI**: my AI-assisted engineering workflow, from requirements to verification
- **Reliability**: how I keep AI output grounded in evidence and checked by tests
- **Case studies**: public Rust projects, each with its reasoning written up in the README
  - [market-data-service](https://github.com/starcorn2020/market-data-service): Rust market-data middleware
  - [edgex_singer](https://github.com/starcorn2020/edgex_singer): Rust-side Stark signing compatibility layer
- **Engineering principles**

The site is available in English, 繁體中文, 简体中文 and Français. It switches language on the client side, with no page reload.

## Tech stack

This is a plain static site with no build step and no dependencies:

```
index.html   page structure and content (default: English)
style.css    styles
script.js    i18n dictionaries (en / zh-TW / zh-CN / fr) and navigation
```

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment

The site is deployed by GitHub Pages. Pushing to `main` publishes it to https://starcorn2020.github.io/.

## Agent skills

The design work uses agent skills, checked into the repo so that both [Claude Code](https://claude.com/claude-code) and [Codex](https://github.com/openai/codex) can use them:

```
.agents/skills/                    canonical location (read by Codex)
.claude/skills -> ../.agents/skills  symlink (read by Claude Code)
```

| Skill | Source | Purpose |
| --- | --- | --- |
| `frontend-design` | [Anthropic](https://github.com/anthropics/skills) | Pushes the design toward a distinct visual direction instead of a template look |
| `design-taste-frontend` | [taste-skill](https://github.com/Leonxlnx/taste-skill) | Anti-slop rules and a pre-flight checklist for landing pages and portfolios |

Both agents load these skills automatically when they run in this repo. To add or update a skill, edit it under `.agents/skills/` only.
