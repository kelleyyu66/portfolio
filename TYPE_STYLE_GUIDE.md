# Type Style Guide

Two typefaces and ten named styles, matching the text styles in the Figma file. Everything on the
site uses one of the styles below. If a new piece of text doesn't fit one of them, change the design
before you add a style.

## Typefaces

| Role | Typeface | Weights | Why |
|---|---|---|---|
| **Display** | Cormorant Garamond *Italic* | 600, 700 | The voice. Calligraphic and high-contrast, the opposite of the body face, so the two never compete. |
| **Text** | Instrument Sans | 400, 500, 600 | Everything that isn't a headline: body, tagline, nav, card titles, labels, data. Clean and slightly condensed, so long card titles fit on two lines. |

Both are free on Google Fonts and load in one request (`index.html`).

## Scale

Eight sizes: **14 · 16 · 18 · 20 · 28 · 36 · 44 · 60 · 68**. Sizes are for the 1440px desktop frame.
Below that they shrink with the viewport, but never below the minimum.

| Figma style | Token | Font | Size (1440 → min) | Line height | Tracking | Use for |
|---|---|---|---|---|---|---|
| — | `--type-display-lg` | Cormorant Garamond Bold Italic | 68 → 44 | 1.15 | −0.01em | The home page hero line |
| — | `--type-display-md` | Cormorant Garamond Bold Italic | 44 → 32 | 1.2 | −0.01em | "featured projects", footer wordmark |
| Header 1 | `--type-display-sm` | Cormorant Garamond Bold Italic | 60 → 36 | 1.2 | −0.01em | A case study title |
| Quote | `--type-quote` | Cormorant Garamond SemiBold Italic | 36 → 26 | 1.1 | — | Pull quotes, sign-offs |
| Section Header | `--type-section` | Instrument Sans Medium | 28 → 22 | 1.1 | — | Section headings, footer call to action |
| Subsection Header | `--type-subsection` | Instrument Sans Medium | 20 → 18 | 1.3 | — | Headings inside a section |
| Body 1 Semibold | `--type-title` | Instrument Sans SemiBold | 20 → 18 | 1.348 | — | Project card titles |
| Graph Headers | `--type-graph` | Instrument Sans Medium | 18 → 16 | 1.348 | 0.02em | Chart titles and axis labels, panel labels |
| Body 2 | `--type-body` | Instrument Sans | 18 → 16 | 1.348 | — | Running text, nav, links, chips, email |
| Body 3 | `--type-label` | Instrument Sans | 16 → 14 | 1.3 | — | Captions, tags, meta, status lines |
| Section Label | `--type-eyebrow` | Instrument Sans SemiBold | 16 → 14 | 1.348 | 0.02em | Section eyebrows, set uppercase |
| Section Label 2 | `--type-eyebrow-sm` | Instrument Sans SemiBold | 14 → 13 | 1.348 | 0.02em | Callout labels, set uppercase |
| — | `--type-micro` | Instrument Sans | 14 → 13 | 1.348 | — | Legends, popover copy |

**Prose leading is page-scoped.** Figma's Body 2 and Body 3 resolve to 1.6 and 1.5625 in the case
study frame, and to the tighter 1.348 and 1.3 on the home page. Rather than carry two tokens, a case
study page redefines the two tokens on its root:

```css
.page {
  --type-body:  400 var(--size-body) / 1.6 var(--font-text);
  --type-label: 400 var(--size-label) / 1.5625 var(--font-text);
}
```

**Two documented exceptions**, both from the frame: Body 2 Medium (18/**1.28**) for the two-line
labels in insight cards and comparison callouts, and Body 2 at 1.28 for the insight card bodies
themselves — deliberately tighter blocks set against looser prose.

## Rules

1. **Four sizes per screen at most.** Home: 68 · 20 · 18 · 16. Footer: 44 · 28 · 18. A case study:
   60 · 36 · 28 · 20 · 18 · 16 · 14 — more than four, but each belongs to a different layer of the
   page (title, quote, section, subsection, prose, caption, label), never to the same block.
2. **Cormorant is always italic, bold or semibold, and at least 26px.** Below that its thin strokes
   fall apart. Never use it for body, buttons, nav or captions.
3. **Instrument Sans carries everything that isn't a headline.** No third typeface, not even for
   labels, data or accents. (The Figma file still has Figtree on the Idea Prioritization Matrix and
   its popovers, and Google Sans Flex on the project card chip — both substitute to Instrument Sans
   in code.)
4. **Make hierarchy with weight or color before size.** The footer's "impact" is a color change, not
   a bigger size; eyebrows are weight and tracking, not size.
5. **Body text stays at 18px on desktop** with a line length of 60–70 characters. A case study's
   reading column is 680 Figma px, floored at 544px so it stays readable as the page scales down.

**Known near-duplicate:** Quote (36) and Display M (44) are close enough that one could probably go.
They live on different page types today, so they haven't been merged.

## Where each style is used

**Home page**

| Element | Style |
|---|---|
| "hi! I'm kelley." | Display LG |
| Hero line, nav links, card company chip | Body 2 |
| "looking for mission-driven opportunities in nyc", card tags | Body 3 |
| "featured projects", footer "kelley yu" | Display MD |
| Card title | Body 1 Semibold |
| "Let's create impact together." | Section Header, "impact" in `--ember` |

**Case study pages**

| Element | Style |
|---|---|
| Project title | Header 1 |
| Subtitle under the title | Section Header at 400 |
| Section eyebrows ("THE PROBLEM") | Section Label, `--green` (`--deep-teal` on the blue band) |
| Section headings | Section Header |
| Headings inside a section, panel titles | Subsection Header |
| Running text, meta values | Body 2 |
| Captions, meta labels, image labels, quote attribution | Body 3 |
| Pull quotes, "Thank you for reading!" | Quote |
| Chart title, axis labels, "VER 1—PERSONALITY QUIZ" | Graph Headers |
| Callout labels ("INTENTIONAL AI") | Section Label 2, `--ember-deep` |
| Matrix legend, exploration popovers | Micro |

## Using it in code

Each style is a CSS `font` shorthand token in `src/styles/tokens.css`, so one line applies the
family, weight, size and line height:

```css
.heading {
  font: var(--type-section);
  color: var(--charcoal);
}
```

Add `letter-spacing: var(--tracking-label)` to the two eyebrow styles and Graph Headers, and
`var(--tracking-display)` to the Cormorant display styles. Override only the weight, and only when
the guide says so. Don't set `font-size` directly anywhere. To change a size, change its token and it
updates everywhere.
