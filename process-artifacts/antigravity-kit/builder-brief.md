# Builder brief — LUMA

> **Generated from:** https://antigravity.google/
> **Date:** 2026-07-11
>
> This brief carries the **design language** of Google Antigravity, translated for you to apply to **LUMA** — *the yellow flagship: a single, exquisitely-crafted flagship phone in signature yellow.*
>
> The source is the inspiration. The brand below is yours. Nothing about LUMA's product, copy, or imagery is copied from the source — only the typographic system, spacing rhythm, motion curves, and layout patterns.

---

## What makes the source feel the way it does

Antigravity feels *engineered, calm, and expensive* — and almost none of that comes from color or imagery. It comes from three near-invisible typography choices. **First, every headline uses a variable font's optical-size (`opsz`) axis matched to its exact pixel size** — a 72px headline is drawn at `opsz 72`, a 42px one at `opsz 42`, so large type gets a sharper, tighter cut and small type gets a friendlier one. It is the single biggest reason the type reads as "designed" rather than "body text blown up," and it is completely invisible in a screenshot. **Second, every headline sits at `font-weight: 450`** — the exact midpoint between Regular (400) and Medium (500), only reachable with a variable font. It gives headlines presence without ever looking heavy. **Third, every line-height is a fixed pixel value** (`88px`, `43.68px`, `25.38px`) rather than a ratio like `1.5`, which locks the vertical rhythm so nothing shifts as weights animate. On top of that: no drop shadows anywhere (surfaces separate with 6–12% alpha *borders*), one accent color used like ink, and each section is a full, quiet viewport of whitespace. **For LUMA we keep all of this and change exactly one thing — the accent ink goes from Google-blue to signature yellow.** That is the entire "level-up": same rigorous engine, unmistakably your color.

Read this section before you touch any value below. If you change a token without understanding *why* it's set that way, the page loses its tone of voice.

---

## Tokens — extracted verbatim from the source

All values were read directly from Antigravity's production CSS (`styles-NNWH23TG.css`, 204 `:root` vars) and live computed styles. Use them exactly. Do not "round" the numbers — the awkward decimals (`25.38px`, `-0.73px`) are the craft.

### Type scale — `size / line-height / letter-spacing / opsz` (weight 450, wdth 100)
| Role | Size | Line-height | Tracking | opsz |
|---|---|---|---|---|
| Hero (`landing-main`) | 107px | 107px | -2.14px | **144** |
| H1 (7xl) | 98px | 82.04px | -1.8px | 98 |
| H2 (6xl) | 72px | 72px | -1.44px | 72 |
| H3 (5xl) | 54px | 56.16px | -0.95px | 54 |
| H4 (4xl) | 42px | 43.68px | -0.73px | 42 |
| H5 (3xl) | 32px | 33.92px | -0.15px | 32 |
| H6 (xl) | 24px | 25.92px | -0.07px | 24 |
| Body | 17.5px | 25.38px | 0.18px | 17.5 |
| Body sm / CTA sm | 14.5px | 21.02px | 0.16px | 14.5 |
| Body xs | 12.5px | 15.5px | 0.11px | 12.5 |

> Note: the hero uses `opsz 144` (the *sharpest* cut), NOT matched to its 107px size — the biggest type on the page always gets the biggest optical size. Every other step matches opsz to its px size.

### Accent (LUMA override — one ink per screen)
| Token | Value | Note |
|---|---|---|
| `--accent` | `#FFC400` | signature yellow (source was `#3279F9`) |
| `--accent-strong` | `#F0A800` | hover / deeper amber |
| `--accent-soft` | `#FFF3C9` | tint fills, badges |
| `--accent-ink-on` | `#121317` | text on yellow |

### Palette (grey system — kept from source)
| Token | Value |
|---|---|
| surface / white | `#FFFFFF` |
| surface-container | `#F8F9FC` |
| surface-container-high | `#EFF2F7` |
| on-surface (near-black) | `#121317` |
| on-surface-variant | `#45474D` |
| dark-surface | `#121317` |
| outline (hairline) | `rgba(33,34,38,.12)` |
| outline-variant | `rgba(33,34,38,.06)` |

### Spacing (px)
`4 · 8 · 16 · 24 · 36 · 48 · 60 · 80 · 88 · 120 · 180`

### Radius
`sm 8 · md 16 · lg 24 · xl 36 · 2xl 48 · pill 9999`

### Easing (motion curves)
| Token | cubic-bezier |
|---|---|
| out-expo | `.19, 1, .22, 1` |
| out-quint | `.23, 1, .32, 1` |
| out-back | `.34, 1.85, .64, 1` |
| in-out-quart | `.77, 0, .175, 1` |

### Layout
`nav-height 52px · page-margin 72px · 12-col grid · gutter 64px · container-max calc(1728px + 72px·2) · section-pad-y 120px`

### Breakpoints
`xs 425 · sm 767 · md 1024 · lg 1440 · max 1600`

---

## The three artistic decisions to preserve

1. **Optical-size axis (`opsz`).** Set `font-variation-settings: "wdth" 100, "opsz" <N>` on every headline, where `<N>` equals the px font-size (hero excepted — it uses `opsz 144`). Without this, headlines look like body type blown up.
2. **Non-standard font-weight `450`.** Between Regular and Medium. Presence without heaviness. Only possible with a variable font.
3. **Pixel line-heights, not ratios.** `line-height: 25.38px`, not `1.45`. Locks vertical rhythm.

**Font:** Source is *Google Sans Flex* (proprietary — not downloadable). Substitute **Roboto Flex** — its public sibling with the *same* axes (`opsz 8–144, wght 100–1000, wdth 25–151`). It preserves all three decisions. Import it from Google Fonts; the scaffold already does.

---

## The page — 7 sections, in this order (adapted for a product, not a SaaS)

The source's spine, mapped to a phone brand. Don't add sections. Don't reorder.

1. **Nav** — sticky, 52px, blurred white, hairline bottom border. Left: yellow radial mark + `LUMA`. Center: The Phone / Design / Colors / Journal. Right: one dark pill CTA (*Reserve*).
2. **Hero** — full viewport, centered. Yellow gradient orb behind. Massive `landing-main` headline with letter-reveal animation + gradient caret. Lede ≤38ch. Two pill CTAs (yellow primary + ghost). "Watch the film" arrow below.
3. **Feature cards** (was use-cases) — horizontal scroll-snap carousel. Eyebrow + H2 left, two 48px round nav buttons right. 5 cards (Body / Screen / Weight / Sound / Camera), each 380px, gradient cover 16:10, uppercase badge, headline, body, arrow-link.
4. **Two-column showpiece** — two equal panels, gap 16px, animated yellow orbs behind. One light ("the signature" — the yellow), one dark ("the making"). Status pill, 54px headline, lede ≤26ch, two CTAs each.
5. **Journal** (was blog) — same carousel pattern, 320px cards: gradient cover, date·category meta, H6 title, "Read" arrow-link.
6. **Dark CTA band** — full-width `#121317`, white text, letter-reveal headline + yellow caret, one yellow pill CTA, orb at 0.35 opacity.
7. **Footer** — 4-col grid (tagline + 3 link columns), then a giant `LUMA` wordmark (line-height 0.85, weight 450, opsz 144), then small mark + legal.

---

## House rules

- No drop shadows. Surfaces lift via alpha borders only.
- No stock photos, no people. Product renders and gradient orbs only.
- One accent (yellow) per screen — used like ink, never as a fill-everything.
- Headlines ≥54px must use the `opsz` axis matched to their size.
- Body line length caps at 60ch.
- Sections ≥120px vertical padding; each is one viewport tall (`min-height:100vh`, centered). Mobile drops to `min-height:auto`. Footer is exempt.
- Native scroll only. No scroll-jacking.
- CTAs ≤4 words.
- Banned words: revolutionary, seamless, unleash, empower, transform, game-changing, supercharge, world-class.
- **The brief is the spec, not the product.** Never render token readouts, axis sliders, theme pickers, or grid overlays on the page. The site is the finished application of the system — silent, not self-referential.

---

## Copy slots (already filled in the scaffold — edit freely)

```
NAV      Brand: LUMA · Links: The Phone, Design, Colors, Journal · CTA: Reserve
HERO     Headline: "A phone worth looking at."
         Lede: "One flagship. Machined in a single block, finished in a yellow you will not find anywhere else."
         CTAs: Reserve yours / See the design
CARDS    Body · Screen · Weight · Sound · Camera
DUO      "Yellow, the way we mean it." / "Six weeks per hundred phones."
JOURNAL  4 notes from the workshop
DARK CTA "Own the yellow flagship." → Reserve for $99
FOOTER   Tagline: "One phone. Made beautifully." · Wordmark: LUMA
```

---

## Acceptance criteria — how to know it landed

- [x] Every token value appears verbatim in `:root` (no rounding).
- [x] Hero + every headline use `font-variation-settings: "wdth" 100, "opsz" <size>`, weight 450.
- [x] Words never break mid-character (test 1024 / 1440 / 1920).
- [x] The 7 sections appear in order. No extras.
- [x] Orb animation visible in hero, two-column, and dark band.
- [x] Letter-reveal animation works in hero + dark CTA.
- [x] Mobile: hero scales to ~56px, columns stack, carousels swipeable.

**Verified:** the included `scaffold.html` renders all of the above (screenshot in this kit).

---

## How to use this

1. Open `scaffold.html` in a browser — it's the finished reference, ready to deploy as-is.
2. To rebuild in v0 / Lovable / Claude / Cursor: paste this whole brief + `scaffold.html`, then say *"build this for LUMA, keep every token exact, keep the opsz axis and weight 450."*
3. Swap gradient-orb covers for real LUMA product renders as you get them (keep the 16:10 ratio and alpha borders).

*Design language read by the `design-language` skill. Source provided the system; the brand, copy, and imagery are LUMA's.*
