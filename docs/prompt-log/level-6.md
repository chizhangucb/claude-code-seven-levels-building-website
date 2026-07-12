# Level 6 — Data & brand research (Firecrawl)

**Technique:** Pull real-world data instead of inventing it. Firecrawl scrapes a live site (here apple.com) for brand identity — type scale, palette, spacing, tone — and Claude upgrades the site in accordance.
**Artifacts:** [Fable demo](../../demos/fable/level-6.html) · [Opus demo](../../demos/opus/level-6.html)
**Process evidence:** [`process-artifacts/firecrawl/`](../../process-artifacts/firecrawl/) — the actual apple.com scrapes.

## Key prompt (identical in both runs)

> Hey there. I'd like to go ahead and to apple.com and use my FireCrawl integration. Let's go ahead and grab me the brand identity and then just upgrade this website in accordance with that.
> Name it as yellow-iphone-web-level-6

**Outcome (Fable):** Combined the power-design brand-extraction recipe with the Firecrawl scrape skill; scraped apple.com live, then built level 6 as level 5 plus a 9.3KB Python patch script (with asserts) → the "Sunburst" iPhone 17 site: dark nav, blue CTAs, *"The brightest iPhone ever made."*

**Outcome (Opus):** 39 Firecrawl calls in the transcript, scrapes cached under `.firecrawl/`; extracted Apple's type scale, spacing, and tone and restyled accordingly.

## The overwrite incident (worth a slide on its own)

While Fable's level-7 session ran *concurrently* with the level-6 session, it wrote its output to `level-6.html` — silently clobbering the Firecrawl version. When asked why levels 6 and 7 looked the same, Fable diagnosed the race, **mined the other session's transcript for the exact build recipe** (copy level 5 + replay the Python patch script), restored level 6, and transparently flagged that the result is a faithful rebuild, not the original bytes.

## What this level taught

- Real data beats lorem ipsum: the copy, specs, and brand feel all sharpened once grounded in a live source.
- Concurrent agent sessions writing to the same folder is a race condition — partition outputs, or run sequentially.
- Session transcripts are recoverable state: an agent can reconstruct lost work from another session's log.
