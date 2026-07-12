# Level 5 — AI-generated video (OpenArt)

**Technique:** Generate media assets you don't have. An image model (Nano Banana in OpenArt) produced product shots; a video model (Kling/Seedance) turned a start+end frame into a rotating product film. Then hand the file to Claude.
**Artifacts:** [Fable demo](../../demos/fable/level-5.html) · [Opus demo](../../demos/opus/level-5.html)

## Key prompt (identical in both runs)

> On the yellow-iphone-web-level-4 file, please help Slot in the attached Yellow iPhone video and be relevant. @yellow-iphone-video-by-openart.mp4
> Name it as yellow-iphone-web-level-5

**Outcome (Fable):** A dedicated product-film section; autoplay-muted playback triggered on scroll-into-view with synced custom controls — visually verified before finishing.

**Outcome (Opus):** Embedded the MP4 into a relevant section of its own layout.

## Notable

- The asset workflow was: generate 2–4 image candidates → pick one → use it as the video's start *and* end frame so the loop lands exactly where it began.
- "Be relevant" is doing real work in this prompt — both models chose sensible placement and treatment (muted autoplay, correct aspect) without further direction.

## What this level taught

- Media is what separates "AI website" from "production website" — and it's now a one-prompt generation away.
- Give video generators a start and end frame for loopable product shots.
- Autoplay policies mean muted-by-default; the models both knew this.
