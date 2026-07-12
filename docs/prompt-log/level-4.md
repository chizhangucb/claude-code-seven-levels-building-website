# Level 4 — UI snipping (21st.dev-style component)

**Technique:** Copy a production-grade component (here: `balloons-js`) from a component library and ask Claude to integrate it. Don't reinvent the fireplace — copy it into your room.
**Artifacts:** [Fable demo](../../demos/fable/level-4.html) · [Opus demo](../../demos/opus/level-4.html)

*(Note: the source video does image/video at level 4 and UI snipping at level 5 — these runs did it in the reverse order.)*

## Key prompts

> Hey there. I'd like you to integrate those balloons feature at the bottom of the page. Make sure you keep the current index HTML file.
> Name it as yellow-iphone-web-level-4.html

(Preceded by pasted screenshots of the component page in the Fable run; in the Opus run, by the actual React/TSX `Balloons` component source.)

Follow-up (both runs, nearly verbatim):

> The Bloom animation is supposed to be automatically shown up when hitting the end of the page, not only when I click on the button.

**Outcome (Fable):** Inlined the `balloons-js` library (github.com/arturbien/balloons-js) into the vanilla-HTML page, wired an IntersectionObserver to auto-fire once per visit, kept the button as a manual replay. Along the way it found and fixed an **upstream memory leak** — balloons-js never removes its `<text-balloons>` wrappers, which accumulate full-screen drop-shadow filters (Fable spotted the "dark smudge" in its own screenshots).

**Outcome (Opus):** Translated the pasted React component into vanilla JS by importing `balloons-js@0.0.3` from **esm.sh** at runtime — a genuinely different integration strategy (CDN import vs Fable's inlining).

## What this level taught

- You can paste a React component into a no-build HTML page and the model will adapt the paradigm.
- Model divergence appears at the *dependency strategy* level: Fable inlined (self-contained), Opus imported from a CDN (lighter file, runtime dependency).
- Screenshots of a component are enough — but pasting the source is more precise.
