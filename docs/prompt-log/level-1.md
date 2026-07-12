# Level 1 — Grab and go

**Technique:** Treat Claude like a chatbot. No references, no skills, no assets — just ask.
**Artifacts:** [Fable demo](../../demos/fable/level-1.html) · [Opus demo](../../demos/opus/level-1.html)

## Key prompt (identical in both runs)

> Claude, I want you to build for me a simple website or just a nice looking website that is cool about iPhones that are yellow. Build me one of those website.
>
> name the file as yellow-iphone-web-level-1.html

**Outcome (Fable):** A dark editorial one-pager ("Yellow. The iPhone that smiles back."). Fable self-verified in the browser, hit a stale-frame rendering artifact, and re-verified with Playwright full-page screenshots before declaring done.

**Outcome (Opus):** A single-file landing page ("Yellow iPhone — Sunshine in Your Pocket") from the same zero-context prompt.

## Notable

- Fable spontaneously noticed the two reference PNGs sitting in the folder and asked about them — the agent looks around even when you don't tell it to.

## What this level taught

- A bare prompt gets you a competent but generic "AI website" — the baseline everything else improves on.
- Naming the output file in the prompt is the cheapest way to keep levels immutable.
