# Curated prompt log

The prompts that produced each level, mined from the original Claude Code session transcripts (5 Fable sessions, 3 Opus sessions), bucketed by level using file modification times.

## Method

1. User prompts extracted from session `.jsonl` transcripts with `jq` (tool results, system reminders, and command output excluded).
2. Prompts bucketed into levels by comparing timestamps against each level file's mtime.
3. Per level, only the 1–4 prompts that actually drove the result are kept — acknowledgments and trivia dropped. Outcomes summarized from the surrounding assistant messages.
4. Privacy scrub: absolute paths generalized to `~/project`, no raw transcripts are published.

Both runs used near-identical prompts (that's the experiment), so each level doc shows the shared prompt plus per-model divergence notes.

## Note on level order

The original video's ladder is: 1 plain prompt → 2 references → 3 design skills → 4 AI image/video → 5 UI snipping → 6 data → 7 design extraction. In these runs, **levels 4 and 5 are swapped**: level 4 integrated a 21st.dev-style component (balloons) and level 5 slotted in the OpenArt video. The docs follow what actually happened.

## Verbatim evidence

The demo HTML files in `demos/` are the exact bytes each session produced (see `demos/CHECKSUMS`). One exception, disclosed in [level-6.md](level-6.md): Fable's level 6 was overwritten by a concurrent session and faithfully rebuilt from the transcript — a teaching moment in its own right.
