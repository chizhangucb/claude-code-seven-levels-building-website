# antigravity-kit → LUMA

Design language extracted from **https://antigravity.google/** and translated for **LUMA — the yellow flagship**, using the `design-language` skill.

The source provided the *system* (type, spacing, motion, layout). The brand, copy, and imagery are LUMA's. The one deliberate change vs the source: the accent ink is **signature yellow**, not Google blue.

## Files

| File | What it is |
|---|---|
| **builder-brief.md** | The paste-ready brief. Hand this + `scaffold.html` to v0 / Lovable / Claude / Cursor to rebuild. Read the "What makes the source feel the way it does" section first. |
| **scaffold.html** | A working, self-contained, deploy-ready page. Open it in any browser. Uses Roboto Flex (public sibling of Google Sans Flex) so the opsz axis + weight 450 survive. |
| **tokens.json** | Every design token as data — Tailwind / CSS-vars ready. Categorized: font, accent, palette, type scale, spacing, radius, easing, layout, breakpoints. |
| **structure.css** | The load-bearing production rules (container, heading scale, arrow-link, buttons) that a screenshot can't show. |
| **preview.png** | Full-page render of `scaffold.html` for visual reference. |

## The whole idea in one line

Antigravity feels expensive because of three invisible typography moves — **opsz matched to size, weight 450, pixel line-heights**. Keep those, paint them yellow, and LUMA reads as a peer of Google's design team, not an imitator.

## Run it locally

```bash
cd antigravity-kit && python3 -m http.server 8799
# open http://localhost:8799/scaffold.html
```
