# Level 7 — Design extraction blueprint

**Technique:** The strongest lever. Point a purpose-built skill ([`skill/design-language/`](../../skill/design-language/)) at a website whose design you love; it extracts the design *language* — tokens, typography, easing, load-bearing rules — into a builder brief, and Claude rebuilds your product in that language (translation, not cloning).
**Artifacts:** [Fable demo](../../demos/fable/level-7.html) · [Opus demo](../../demos/opus/level-7.html)
**Process evidence:** [`process-artifacts/antigravity-kit/`](../../process-artifacts/antigravity-kit/) — Opus's extracted blueprint: tokens.json, structure.css, builder-brief.md, scaffold, verified preview.png.

## Key prompt (identical in both runs; target site: antigravity.google)

> Hi there. I'm going to give you a website. I would like to basically understand the design, and I'd like you to follow all the instructions in this file, Namely go to this website, understand the typography, the design, and get it an extraction blueprint so that I can build a website that levels this up. And our website is going to be on selling beautiful phones. @design-language-skill.zip
>
> https://antigravity.google/

Follow-ups that mattered (Fable):

> I didn't find the website file, where is it? The scaffold only has the framework, not the real website.

> rename the file to yellow-iphone-web-level-7 and keep the old yellow-iphone-web-level-6 untouched.

**Outcome (Fable):** Extracted antigravity.google's design language — grey palette, weight-450 headings, optical-size ladder, pill shapes, alpha borders — and built **"Lume"**: CSS-drawn phone hero, typing headline, colors carousel, 148px wordmark footer.

**Outcome (Opus):** The richest run. Followed the zipped skill, produced the full `antigravity-kit/` (blueprint + scaffold + README + Playwright-verified preview), branded the result **"LUMA"**, saved the design direction to its memory, then promoted the scaffold to level 7.

## Notable

- Both models independently landed on near-identical brand names (Lume / LUMA) from the same design language — extraction converges.
- The skill's output is a *kit* (brief, tokens, scaffold), not a page; you sometimes have to push from blueprint to the actual website ("where is the website file?").

## What this level taught

- Design extraction gives Claude what most humans can't articulate: the vocabulary of a specific great design.
- A blueprint is an intermediate artifact — budget one more prompt to turn it into the deliverable.
- Verify with screenshots at the end; both runs self-checked visually before declaring victory.
