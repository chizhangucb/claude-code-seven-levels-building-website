# Seven Levels of Building Beautiful Websites with Claude Code

**60-minute internal session.** Format: ~40 min slides, ~15 min live demos (3 pivots), ~5 min Q&A.
Presented from the web deck (`/slides/`); this file carries the speaker notes. The .pptx export is the forwardable version.

**Pre-flight checklist:** open the deployed site, `/compare?level=1`, and `/compare?level=7` in background tabs (caches fonts + the esm.sh dependency in Opus levels 5–7); confirm wifi; volume muted.

---

## Act 1 — Setup (5 min, slides 1–5)

### 1. Title
Seven Levels of Building Beautiful Websites with Claude Code.
*Notes: One product, one ladder, two models. Everything you'll see is live at the link on screen.*

### 2. Why this talk
95% of Claude-built websites look generic — and it's not the model's fault. It's missing skills and references. "Mozart with no piano."
*Notes: Credit the source: Jack Roberts' "7 Levels" video. This is a replication with receipts — and a model comparison he didn't do.*

### 3. The experiment
One product page (a yellow iPhone). Same prompts run twice: Fable 5 and Opus. Every level's HTML preserved verbatim — checksummed in the repo.
*Notes: The medium is the message: this deck and the tutorial site were built the same way.*

### 4. The ladder
All 7 levels on one slide: 1 grab-and-go → 2 references → 3 design skills → 4 UI snipping → 5 AI video → 6 data research → 7 design extraction.
*Notes: Each level is one technique, and they compound. Mention our order swaps video/snipping vs the source video.*

### 5. Ground rules
Verbatim evidence. Named output files per level. One variable changed at a time.
*Notes: This discipline is what makes the comparison meaningful — treat prompting experiments like experiments.*

## Act 2 — The climb (30 min, slides 6–20)

### 6. Level 1 — Grab and go
The entire prompt: "build me a nice looking website that is cool about iPhones that are yellow."
*Notes: Read the prompt out loud. It's the prompt everyone writes.*

### 7. Level 1 result — 🔴 LIVE DEMO 1 (~3 min)
Open `/compare?level=1`. Scroll both panes.
*Notes: Point out "default AI design": centered hero, safe gradient, no point of view. Both models competent, both generic. Fable spontaneously asked about reference images sitting in the folder — agents look around.*

### 8. Level 2 — Screenshots & references
Show the reference PNG. Sources: godly.website, Land-book, Awwwards, Dribbble.
*Notes: Show, don't tell. One image replaces paragraphs of adjectives.*

### 9. Level 2 result + delta
Side-by-side thumbnails L1 → L2. Layout inherits the reference's structure and rhythm.
*Notes: War story: Opus overwrote level 1 on the first try — state the save-as rule up front. Also: references convey looks, not behavior; "make the buttons work" was a separate ask.*

### 10. Level 3 — Design skills
What a skill is: packaged design expertise (ui-ux-pro-max: 67 UI styles, 161 palettes, font pairings; power-design brand references). Install once, invoke by asking.
*Notes: The Mozart-gets-a-piano moment. Opus prompt pinned variables: "do NOT use superpowers plugin."*

### 11. Level 3 result — the model catches its own bug
File size doubled (20KB → 56KB) — that's the design system. Fable's WCAG contrast check caught a real CSS specificity bug and fixed it to 11.3:1.
*Notes: Let the model verify: dark mode, 320px reflow, contrast. It finds real bugs.*

### 12. Level 4 — UI snipping
Copy production components from 21st.dev / Magic UI / CodePen. Here: balloons-js. Paste code or even screenshots.
*Notes: Don't re-engineer the fireplace — copy it.*

### 13. Level 4 result — divergence appears
Same ask, different engineering: Fable inlined the library (self-contained); Opus imported from esm.sh (runtime CDN). Fable also fixed an upstream memory leak it spotted as a "dark smudge" in its own screenshots.
*Notes: Model personality shows up at the dependency-strategy level, not the pixel level.*

### 14. Level 5 — AI image & video
OpenArt workflow: image model → pick a product shot → video model with start frame = end frame → perfect loop.
*Notes: Media is what separates "AI website" from "production website."*

### 15. Level 5 result — 🔴 LIVE DEMO 2 (~4 min)
Open `/compare?level=5`. Let the product film play in both panes.
*Notes: The prompt was two words of art direction: "be relevant." Both models chose muted scroll-triggered autoplay unprompted — they know browser policy.*

### 16. Level 6 — Data research
Firecrawl scrapes apple.com for brand identity: type scale, palette, spacing, tone. Real data beats lorem ipsum. The scrapes are in the repo.
*Notes: A beautiful site that doesn't convert is a Ferrari with no engine. Mention the research-prompt pattern: winners vs losers analysis, scoring matrix, evidence-based blueprint.*

### 17. Level 6 — the overwrite incident
Two concurrent sessions raced; level 7's session silently clobbered level-6.html. Fable diagnosed it, mined the other session's transcript for the build recipe, and restored the file — flagging it as a rebuild, not the original.
*Notes: Best war story of the experiment. Lessons: partition outputs across concurrent sessions; transcripts are recoverable state.*

### 18. Level 7 — Design extraction
The strongest lever: a skill extracts a site's full design language (tokens, type ladder, easing, load-bearing rules) into a builder brief; Claude rebuilds *your* product in that language. Target: antigravity.google.
*Notes: Translation, not cloning. Most humans can't articulate why a design is great — the skill does it for them.*

### 19. Level 7 result — 🔴 LIVE DEMO 3 (~4 min)
Open `/compare?level=7`. Fable's "Lume" vs Opus's "LUMA."
*Notes: Both models independently invented near-identical brand names from the same design language — extraction converges. Opus produced a full kit (tokens.json, structure.css, verified preview) — show process-artifacts/ if time allows.*

### 20. The whole climb
L1 vs L7 side by side. Night and day; chalk and cheese.
*Notes: Pause here. This is the money slide.*

## Act 3 — Fable vs Opus (8 min, slides 21–24)

### 21. Methodology
Same prompts, same references, same skills, same order. The only variable: the model.

### 22. Where they diverged
Table: dependency strategy (inline vs CDN), verification habits (Fable screenshots aggressively), artifact style (Opus builds kits and saves to memory), file sizes per level.
*Notes: Fable QAs harder; Opus scaffolds harder.*

### 23. Where they converged
Same brand names (Lume/LUMA), same autoplay policy, same layout instincts under the same design language.
*Notes: Technique dominates model choice — a level-7 Opus site beats a level-1 Fable site every time.*

### 24. Verdict
The ladder is the lever; the model is the multiplier.

## Act 4 — Takeaways (7 min, slides 25–28)

### 25. Meta-lessons
References > adjectives. Skills > instructions. Research > invention. Verification > hope.

### 26. Tricks & gotchas
Name output files to keep evidence immutable. One variable at a time. Partition concurrent sessions. Budget one extra prompt from blueprint → deliverable. Let the model look at its own screenshots.

### 27. What this means for Kite
Agent-built UI is production-viable *today* with the right scaffolding — the scaffolding (skills, references, data access, payment for tools like Firecrawl/OpenArt) is exactly the infrastructure layer. Agents that can research, buy assets, and verify autonomously need identity and payments.
*Notes: Tie to Agent Passport: the OpenArt/Firecrawl steps are agentic commerce in miniature.*

### 28. Try it yourself
Repo + live site + prompt log + the design-language skill, all one link. Run the ladder on your own product.

### 29. Q&A
*Notes: Seed questions if quiet: "Which level has the best ROI?" (2 and 3 — minutes of effort, step-change results). "When would you stop at level 3?" (internal tools).*
