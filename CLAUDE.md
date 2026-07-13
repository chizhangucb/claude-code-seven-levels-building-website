# CLAUDE.md — Handoff notes for the Seven Levels tutorial project

Context file for future Claude Code sessions working in this repo. It captures the
decisions, file map, patterns, and gotchas from the sessions that built and published
this project (July 2026).

## What this project is

A tutorial package replicating Jack Roberts' "7 Levels of Building Claude Code Websites"
(https://www.youtube.com/watch?v=AFRL9dtUHeI), run twice — once with **Fable 5**
(`fable-trials/`), once with **Opus 4.8** (`opus-trials/`) — building a "yellow iPhone"
site at each level. Deliverables: interactive tutorial site, 31-slide HTML deck, pptx
export, curated prompt log, per-level cost/time metrics, and a 60-min internal talk
for Chi's colleagues at Kite AI.

- **GitHub (public):** https://github.com/chizhangucb/design-seven-levels-round1-yellow-iphone
- **Production:** https://design-seven-levels-round1-yellow-iphone.vercel.app
  (Vercel project name matches; the old `claude-code-seven-levels.vercel.app` domain
  was removed and now 404s)

## Level numbering (differs from the video!)

The deck/site swapped the video's levels 4 and 5:
1 grab-and-go · 2 screenshots/references · 3 design skills · **4 UI snipping (21st.dev
balloons)** · **5 AI image/video (OpenArt)** · 6 data/Firecrawl · 7 design extraction
(antigravity.google → "Lume"/"LUMA"). Keep this ordering in all new material.

## File map

| Path | What it is |
|---|---|
| `index.html`, `levels/1-7.html` | Tutorial site (static, no build step) |
| `compare/index.html` | Fable-vs-Opus side-by-side with proportional sync scroll |
| `slides/index.html` | Self-contained 31-slide deck (`/slides/#/N` deep links) |
| `assets/site.js`, `assets/site.css` | Shared site logic/styles (compare logic in site.js) |
| `assets/metrics.js` | **Single source of truth** for per-level cost/time metrics; renders on level pages (`[data-metrics-level]`) and compare page (`[data-compare-metrics]`, re-rendered inside `loadLevel()` in site.js) |
| `demos/fable/`, `demos/opus/` | The 14 verbatim level demos (immutable evidence, SHA-256 checksummed in README) |
| `docs/prompt-log/level-N.md` | Curated per-level prompts + outcomes (mined from transcripts) |
| `docs/talk-outline.md`, `docs/seven-levels-talk.pptx` | Talk materials — **pptx is STALE** (predates tool-links, summary-table, and metrics slides; regenerate via anthropic-skills:pptx if asked) |
| ~~`fable-trials/`, `opus-trials/`~~ | Raw working dirs from the original runs — **deleted 2026-07-12** (were gitignored/local-only; every file was verified byte-identical to its canonical copy in `demos/`, `skill/`, `references/`, `process-artifacts/`). An empty `fable-trials/` shell may linger as a past session's cwd — safe to delete. |
| `skill/design-language/` | The level-7 extraction skill; `/skill/` has no index.html so link to the GitHub tree, not the path |

## Deploy pipeline

- **Static site, no build.** Local preview: `python3 -m http.server 8899` from repo root
  (the Browser-pane preview tool rejects `file://` and bare `navigate` to unapproved
  origins — use `preview_start {url}` once, then `navigate`).
- **Deploy:** `cd <repo root> && vercel deploy --prod --yes` (CLI is authed as
  `chizhangucb`). Production deploys publish publicly — do one only when Chi has asked
  for the change to go live, and confirm first if in doubt. Preview URLs are
  SSO-protected — **curl -L follows to a vercel.com login page that returns 200, so
  curl "success" on a preview URL is meaningless.** Verify against the production
  domain, or grep response bodies for expected content.
- Git push and prod deploy are **independent** — pushing does not deploy.
- Commits must use the GitHub noreply email `8743300+chizhangucb@users.noreply.github.com`
  (repo-local git config already set). GitHub rejects pushes exposing private emails;
  history was rewritten once with filter-branch for this.
- Vercel project rename ≠ domain move: after renaming, the new `<name>.vercel.app`
  domain had to be added via `POST /v9|v10/projects/{id}/domains` (Vercel CLI has no
  rename; used the REST API with the token from
  `~/Library/Application Support/com.vercel.cli/auth.json` + orgId/projectId from
  `.vercel/project.json`). A manually `vercel alias`-ed domain is treated as a
  *preview* alias (SSO-gated); only a project production domain is public.

## Metrics methodology (per-level cost & time)

Data mined from Claude Code session transcripts, now consolidated in
`~/.claude/projects/-Users-chizhang-experimental-design-yellow-iphone-web/*.jsonl`
(moved there from the per-trial project dirs on 2026-07-12; the tutorial-building
session `2cbfdd25` remains in the `...-fable-trials` project dir).

- **Session→level map** (start timestamps, all 2026-07-12 UTC):
  - Fable: `ee515a1e` L1 04:54:24, L2 05:02:19 · `fea341bc` L3 05:17:40, L4 05:36:58,
    L5 06:01:29, L6 06:08:11 · `dacf9a15` L7 06:06:54
  - Opus: `b9ae9be2` L1 04:55:00, L2 04:57:27 · `9c3bff0d` L3 05:04:54, L4 05:17:03,
    L5 05:39:07, L6 05:46:52 · `6371bc75` L7 06:06:07
  - Exclude `2cbfdd25` (the tutorial-building session itself) and `7b4ee22c` (empty).
- **Tokens:** dedupe assistant entries by `message.id` (streaming writes one JSONL line
  per content block, each repeating the same usage — summing raw lines double-counts).
- **Pricing:** Fable 5 $10/$50 per MTok in/out; Opus 4.8 $5/$25; cache read 0.1×;
  cache write **2× (1-hour TTL)** — verified via `usage.cache_creation`
  (`ephemeral_1h_input_tokens` covers 100% of writes; 5m bucket is 0). Do NOT assume
  the 1.25× 5-minute rate.
- **Time = machine time only:** sum of (prompt → last assistant/tool event before next
  prompt) intervals; human think-time between prompts excluded. Gotcha:
  `queue-operation` entries are stamped with the *next* prompt's timestamp — end
  intervals at the last **assistant or tool_result** event, or times inflate past wall-clock.
- User-prompt counting: exclude `isMeta`, `[Request interrupted...]` markers, and
  tool_result-only user entries; a re-sent prompt after an interrupt counts.
- Costs are **API-equivalent** (runs were on subscription). Headline numbers:
  Fable $102.13 / ~96 min machine time / 13 prompts / 311 API calls;
  Opus $35.92 / ~61 min / 12 prompts / 229 calls. Fable L7 machine time includes the
  level-6 overwrite recovery.
- Chi explicitly does NOT want total rows in the per-level metrics table.

## Deck conventions (slides/index.html)

- Fully self-contained single file (metrics data is intentionally **duplicated** inline
  in the chart script — update both metrics.js and the slide when numbers change).
- Slide count/progress/overview/`#/N` links are computed from `.slide` sections; adding
  a section anywhere renumbers deep links (talk outline may reference numbers — check).
- Bar charts: Fable = `var(--accent)` #f5b800, Opus = `var(--ink)` #1a1712, grouped
  side-by-side per level.
- Tool-link pills (`.tools`) on each level slide use URLs from the video description.
- 🔴 `demo-callout` pills mark live-demo pivots (levels 1, 5, 7 → `/compare/?level=N`).
- Verify slide layout at small viewport after table/chart edits (a 4-col table
  overflowed once; fixed with `table-layout:fixed` + smaller font).
- The browser caches the deck aggressively during local preview — bust with `?v=N`.

## Other gotchas

- The claude-api skill's pricing table is the authority for model pricing — don't
  answer pricing from memory.
- Chi's preferences: concise but warm; no unrequested scope creep; flat repo layout;
  results over methods (always offer alternatives).
