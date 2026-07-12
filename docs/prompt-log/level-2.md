# Level 2 — Screenshots & references

**Technique:** Show, don't tell. Attach a screenshot of a design you love (from godly.website, Land-book, Awwwards, Dribbble…) and ask Claude to restyle toward it.
**Artifacts:** [Fable demo](../../demos/fable/level-2.html) · [Opus demo](../../demos/opus/level-2.html)

## Key prompts

> hey there, I would like you to update the website using this image as a reference style (only this one) for how i would likeThe website you look @reference-for-yellow-phone-web.png
>
> name the file as yellow-iphone-web-level-2.html

**Outcome:** Both models restyled the level-1 page to match the attached reference (a 1200×3853 full-page design screenshot).

Follow-up (Fable):

> Buttons like models, colors, and stories are not clickable, could you make them work?

**Outcome:** Fable built three real sections (Models / Colors / Stories) instead of dead anchors, and verified by actually clicking the nav links in a browser.

## Notable

- In the Opus run the first attempt overwrote level 1; a follow-up prompt ("keep the yellow-iphone-web-level-1.html untouched, save the updated one to …level-2.html") forked it. Lesson: state the save-as rule up front.

## What this level taught

- One reference image beats paragraphs of adjectives — visual intent transfers almost losslessly.
- Ask for interactivity explicitly; a reference screenshot only conveys looks.
