# starcorn2020.github.io

**Live site:** https://starcorn2020.github.io/

This is Jory's personal portfolio. It covers my engineering skills, experience, the projects I've built, and how I work with AI in software development.

這是我的個人作品集網站，用來介紹我的工程能力、經歷、做過的專案，以及我如何運用 AI 進行軟體開發。

## Contents

The site has three pages, switched from the left rail:

- **Experience** (`index.html`): four areas of expertise (trading systems, data engineering, distributed systems, operations) and selected projects
- **Quant** (`quant.html`): quant skills and current quant research
- **Working with AI** (`ai.html`): how I work with multiple AI agents, how a task runs, how I catch wrong answers, and how project memory carries across sessions

The site is available in English, 繁體中文, 简体中文 and Français. It switches language on the client side, with no page reload.

## Tech stack

This is a plain static site with no build step and no dependencies:

```
index.html   experience page (default: English)
quant.html   quant page
ai.html      working-with-AI page
style.css    styles shared by all pages
script.js    i18n dictionaries (en / zh-TW / zh-CN / fr) shared by all pages
```

## Run locally

Open `index.html` in any browser. Nothing to install and no server needed; this works the same on macOS, Windows and Linux.

If you'd rather serve it over HTTP (closer to how GitHub Pages serves it), any static file server works:

```bash
npx serve .                  # needs Node.js
python3 -m http.server 8000  # needs Python (not preinstalled on Windows)
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
