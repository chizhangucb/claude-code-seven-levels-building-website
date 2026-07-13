# Seven Levels, Round 1: Yellow iPhone

The same website built seven times, each level one technique better — and the whole ladder run **twice with identical prompts**: once on **Claude Fable 5**, once on **Claude Opus**. Every level's output is preserved verbatim. This is round 1, a hands-on replication of Jack Roberts' ["7 Levels of Building Claude Code Websites"](https://www.youtube.com/watch?v=AFRL9dtUHeI), selling a **yellow iPhone**. Round 2 reran the whole ladder on a [pink Cybertruck](https://github.com/chizhangucb/seven-levels-round2-pink-cybertruck) — orchestrated headlessly by an agent.

**Live site: https://claude-code-seven-levels-building-website.vercel.app** — every level's writeup with the exact prompts, all 14 demos, a Fable-vs-Opus compare view with synced scrolling, and the talk slides.

## The ladder

| Level | Technique | Fable 5 | Opus |
|---|---|---|---|
| 1 | Grab and go — a bare prompt | [demo](demos/fable/level-1.html) | [demo](demos/opus/level-1.html) |
| 2 | Screenshots & references | [demo](demos/fable/level-2.html) | [demo](demos/opus/level-2.html) |
| 3 | Design skills (ui-ux-pro-max, power-design) | [demo](demos/fable/level-3.html) | [demo](demos/opus/level-3.html) |
| 4 | UI snipping (balloons-js component) | [demo](demos/fable/level-4.html) | [demo](demos/opus/level-4.html) |
| 5 | AI image & video (OpenArt) | [demo](demos/fable/level-5.html) | [demo](demos/opus/level-5.html) |
| 6 | Data & brand research (Firecrawl → apple.com) | [demo](demos/fable/level-6.html) | [demo](demos/opus/level-6.html) |
| 7 | Design extraction (antigravity.google → "Lume"/"LUMA") | [demo](demos/fable/level-7.html) | [demo](demos/opus/level-7.html) |

*(Levels 4 and 5 are swapped versus the source video — see [docs/prompt-log/README.md](docs/prompt-log/README.md).)*

## What's in the repo

- **`demos/`** — the 14 level HTML files, byte-for-byte as the sessions produced them (`demos/CHECKSUMS` has SHA-256 of each), plus the OpenArt-generated hero video.
- **`levels/`, `compare/`, `index.html`** — the tutorial site: one page per level (technique, exact prompts, live demo with model toggle) and a side-by-side Fable-vs-Opus view with proportional sync-scroll.
- **`docs/prompt-log/`** — the curated prompts that produced each level, mined from the session transcripts, with outcomes and per-model divergence notes.
- **`docs/talk-outline.md`** + **`slides/`** + **`docs/seven-levels-talk.pptx`** — a 60-minute talk: speaker notes, a self-contained HTML deck, and a PowerPoint export.
- **`skill/design-language/`** — the level-7 design-extraction skill, ready to install in Claude Code.
- **`references/`** — the level-2 reference images. **`process-artifacts/`** — the Opus run's working evidence: raw Firecrawl scrapes of apple.com, the antigravity.google extraction kit (tokens.json, structure.css, builder brief), Playwright verification logs.

## Run locally

```bash
python3 -m http.server 8765
# open http://localhost:8765
```

No build step — everything is static HTML.

## Highlights worth reading

- **The overwrite incident** ([docs/prompt-log/level-6.md](docs/prompt-log/level-6.md)): two concurrent sessions raced on one file; the model recovered the lost work by mining the other session's transcript. (Designed out in round 2 — it didn't recur.)
- **Extraction converges** ([docs/prompt-log/level-7.md](docs/prompt-log/level-7.md)): both models independently invented near-identical brand names ("Lume"/"LUMA") from the same extracted design language.
- **Divergent engineering**: same component-integration ask — Fable inlined the library, Opus imported it from a CDN.
- **The bill**: Fable 5 ~$102 / ~96 min machine time across the ladder; Opus ~$36 / ~61 min — the interactive, hand-driven baseline that round 2's orchestrated run beat by ~2.7×.

## The framework

This experiment is now a reusable, product-agnostic framework — the prompt pack, runbook, orchestration harness, and metrics methodology live at [seven-levels-framework](https://github.com/chizhangucb/seven-levels-framework). Pick a product, fill the placeholders, run your own round.

## Credit

The seven-level framework and original prompts are from [Jack Roberts' video](https://www.youtube.com/watch?v=AFRL9dtUHeI). Skills used: [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), [power-design](https://github.com/ItsssssJack/power-design). Tools: [Firecrawl](https://firecrawl.dev), [OpenArt](https://openart.ai), [21st.dev](https://21st.dev), [balloons-js](https://github.com/arturbien/balloons-js).
