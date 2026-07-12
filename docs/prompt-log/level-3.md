# Level 3 — Design skills

**Technique:** Install packaged design expertise (Claude skills) so the model knows *what good looks like*, then invoke it alongside a product reference photo.
**Artifacts:** [Fable demo](../../demos/fable/level-3.html) · [Opus demo](../../demos/opus/level-3.html)

## Key prompt

> Hey there. I'd like to use all the best skills and the design principles to build me a beautiful website selling yellow iPhones. Make sure that's using all relevant skills that I have given you for building beautiful design @reference-real-iphone.png
>
> https://github.com/ItsssssJack/power-design.git
>
> name the file as yellow-iphone-web-level-3.html

(Opus run additionally passed https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git and ended with: *"Btw, do NOT use superpowers plugin in this session."* — an explicit negative instruction to keep the skill variable controlled.)

**Outcome (Fable):** Invoked the `ui-ux-pro-max` skill plus the `power-design` repo's brand-style references. Then ran a full QA pass: dark mode, 320px mobile reflow, hamburger nav, a color-studio shade switcher, and a WCAG contrast check that surfaced a **real CSS specificity bug** (`.nav-links a` at specificity 0,1,1 overriding `.btn-yellow` at 0,1,0 → white-on-yellow nav pill), fixed to 11.3:1 contrast.

**Outcome (Opus):** Pulled both skill repos and applied them; produced "iPhone Yellow — Seriously Mellow". File size jumped ~2× vs level 2 in both runs — that's where the design system went.

## What this level taught

- Skills > instructions: packaged expertise (color palettes, type scales, UX rules) compounds with the model's raw ability.
- The models can catch their own design bugs when you let them verify (contrast checks, viewport sweeps).
- Control your variables: explicitly excluding a plugin/skill keeps the comparison honest.
