# Design Direction — Kelley Yu, UX Portfolio 2026

A working design system derived from the moodboard and portfolio references in `References/`
and the illustration assets in `Illustrations/`. Every color, texture, and pattern below is
traced back to a specific reference so decisions stay defensible while you build.

---

## 1. Brand Foundation

### 1.1 Personality

Your original five, sharpened, plus three additions the references clearly ask for.

| Trait | What it means in the build |
|---|---|
| **Intentional** | Nothing decorative without a reason. Generous margins, one idea per screen, deliberate pacing between sections. |
| **Playful** | Charm lives in small moments — a frog that blinks, a lily pad that drifts on hover — never in visual noise. |
| **Warm** | Cream and sand grounds, never pure white. Rounded terminals, soft shadows, painted edges. |
| **Nature-inspired** | Specifically a **pond**, not "nature" generally — see 1.2. |
| **Down to earth** | Plain language. No jargon-heavy headlines. Captions read like a person wrote them. |
| **Minimal but memorable** | Restraint in structure, generosity in one hero moment per page. |
| **Handmade** *(added)* | The references are overwhelmingly *printed* and *painted* — riso halftone (`moodboard5`), paper grain (`moodboard9`), gouache edges (`Illustrations/`). Nothing should look vector-flat. |
| **Quietly confident** *(added)* | `moodboard10` and `websiteinspo` both lead with type at poster scale. The work is allowed to take up space without shouting. |
| **World-building** *(added)* | `moodboard1`, `moodboard2`, and `moodboard4` are all *inhabited scenes*, not spot illustrations. The site should feel like one continuous place you scroll through. |

### 1.2 The Unifying Motif: The Pond

Your own illustration assets are the strongest signal in the folder — `Illustrations/` is frogs,
lily pads, lotus, koi, and a dragonfly. That is a complete, coherent ecosystem, and it solves the
"nature-inspired" brief far better than generic leaves would. **Commit to it as the spine of the site.**

How it maps to structure:

| Pond element | Site role |
|---|---|
| **Water surface** | The sand/cream page ground. Ripples on scroll, gentle caustic texture in hero. |
| **Lily pads** | Project cards — organic rounded rectangles with one notched corner, echoing the pad's cleft. |
| **Frog** | Your guide character. Appears sparingly — hero, empty states, end-of-page, 404. Blinks on hover. |
| **Koi** | Slow ambient motion. Drifting through negative space in a section transition. |
| **Lotus** | The blossom moment — a single blush accent marking "this is the good part" (featured work, CTA). |
| **Dragonfly** | The cursor companion / micro-interaction. Lands on the element you hover. |
| **Ripple** | The universal interaction primitive. Click, reveal, and section transition all use a ripple easing. |

This is what turns "another cream-and-sage portfolio" into *your* portfolio. Use it or a single
alternative motif — but pick one and be disciplined.

### 1.3 Keywords

Grouped so they can actually drive copy and section naming, rather than sitting in a list.

**Core three** — say these loudest, everywhere:
- **Curiosity** — the engine. Research, questions, out-of-the-box thinking.
- **Craft** — the standard. Systems, simplicity, care at every zoom level.
- **Connection** — the outcome. Human, leadership, bringing people along.

**Supporting:**
- Magic · Systems · Simplicity · Sustainable · Human · Leadership

**Added from references:**
- **Attention** *(added)* — `moodboard10`'s "touch grass" is about pulling people out of the scroll. Your behavior-change work is fundamentally about where attention goes. Strong differentiator.
- **Patience** *(added)* — the riso and gouache references are slow, made things. Pairs with "sustainable" and separates you from fast, trend-chasing portfolios.
- **Ecosystem** *(added)* — a warmer, pond-native synonym for "systems." Use it in body copy where "systems thinking" sounds corporate.

**Demote:** "Magic" is doing a lot of work in the references (`Portfolio-Belle` literally says
"makes magic"). It risks reading as generic designer-speak. Keep it as *behavior* — the delightful
micro-interactions — not as a word on the page.

### 1.4 Expertise

Restated as claims a hiring manager can scan in five seconds. Original meaning preserved; each one
now leads with the outcome.

1. **Research that goes deeper than usability** — a consumer-psychology background means I start from why people do what they do, not just whether they can find the button.
2. **Design for behavior change** — building for what people *do* after they close the tab.
3. **Making complexity feel obvious** — turning dense, technical, or messy information into something a person can act on.
4. **Branding that finds the right audience** — connecting a company's substance to the people it's actually for.
5. **Out-of-the-box thinking** — reframing the problem before solving the given one.
6. **Leadership that moves people to act** — aligning a room, building shared conviction, getting decisions made.
7. **Cross-functional fluency** — translating between engineering, business, and client stakeholders without losing the plot.

**Added:**
8. **Systems and craft at both ends** *(added)* — comfortable designing the component library and the one-off editorial moment. Your references span rigorous grids (`websiteinspo`) and loose illustration (`moodboard3`); own that range explicitly.
9. **Design for sustainability** *(added)* — `moodboard5`, `moodboard8`, `moodboard10`, and `websiteinspo` are *all* sustainability-oriented. That's not a coincidence in your taste; if you have the work to back it, it's a positioning, not just a value.

### 1.5 Voice

- Short declarative sentences. Lowercase is fine in UI labels; sentence case in prose.
- First person, contractions, no hedging.
- Section headers are phrases, not nouns: "what I'm good at," not "Expertise."
- Project captions are one line, plain, and specific: *"Cut onboarding drop-off by half by asking one fewer question."*

---

## 2. Color

### 2.1 Anchors (from your Figma — unchanged)

| Token | Hex | Role |
|---|---|---|
| `--moss` | `#AEC36C` | Logo / primary green |
| `--lichen` | `#ECECC6` | Logo background / lighter green |
| `--sand` | `#FFFBF4` | Page background |
| `--ink` | `#545454` | Body text |
| `--ember` | `#F66B10` | Orange accent |
| `--sky` | `#7FAFDD` | Secondary blue |

These held up against the references — `moodboard6` sampled at `#8CAF4F`/`#A8BC76` (your moss, almost
exactly), `moodboard1`'s sky reads `#6DA4DC` (your sky, one step deeper), and cream grounds across
`moodboard3`/`moodboard8`/`moodboard9` land at `#FDF6E4`–`#FFFBF0` (your sand). **Nothing needs to change.**
What's missing is *depth* — the references have dark and mid-tone anchors your palette currently lacks.

### 2.2 Additions (sampled from References)

| Token | Hex | Sampled from | Why you need it |
|---|---|---|---|
| `--forest` | `#2E4A32` | `moodboard2` `#306C48`, `moodboard4` `#305834`, `moodboard10` `#1A4740` | Your darker green. Dark sections, footer, inverted cards. Every reference has one; your palette doesn't. |
| `--olive` | `#6F8442` | `moodboard9` `#64852E`, `Portfolio-Soundarya` `#6C8430` | Mid-tone green. Moss is too light for text or small UI — this is the accessible workhorse. |
| `--paper` | `#F4EFE3` | `moodboard5` `#E8DFD4`, `Illustrations/` koi ground `#EDE2D0` | Second surface. Alternating bands, card fills, hover states — keeps the page from being one flat cream. |
| `--charcoal` | `#2A2A28` | `Portfolio-Emmi` `#332229`, `moodboard8` `#65534F` | True dark for display type and dark sections. `--ink` at `#545454` is right for body but soft for a 120px headline. |
| `--blush` | `#F3CFC9` | `Illustrations/` lotus `#F8D8D8`–`#F0B8B0` | Already in *your own* artwork. The softest accent — featured markers, quiet highlights. |
| `--clay` | `#C58E53` | `Illustrations/` koi `#C58E53`, `moodboard9` `#D7A95B` | Warm mid-tone between sand and ember. Borders, illustration shadows, dividers that shouldn't be grey. |
| `--ember-deep` | `#BF4C00` | Darkened `--ember`; Figma "Dark Orange" | Accessible orange. See 2.4 — `--ember` cannot carry small text. |
| `--sky-deep` | `#3E6E9E` | Darkened `--sky` | Accessible blue, same reason. |

### 2.3 Allocation

Discipline here is what keeps it out of "generic UX portfolio" territory.

```
70%   sand / paper            grounds
15%   moss / lichen / olive   primary green family
 8%   forest / charcoal       dark anchors
 5%   ink                     text
 2%   ember / sky / blush     accents — genuinely rare
```

**One accent per viewport.** If the ember CTA is on screen, the sky link isn't. `moodboard1` gets
away with orange, blue, and green at once because it's a single illustration; a whole page cannot.

### 2.4 Contrast — verified

Measured, not estimated. WCAG 2.1 AA = 4.5:1 body / 3:1 large (≥24px, or ≥19px bold).

| Foreground | on `--sand` | Verdict |
|---|---|---|
| `--ink` `#545454` | **7.34** | AAA — safe for all body copy |
| `--charcoal` `#2A2A28` | **13.94** | AAA |
| `--forest` `#2E4A32` | **9.50** | AAA |
| `--olive` `#6F8442` | **4.03** | Large text only (≥24px) |
| `--ember-deep` `#BF4C00` | **4.86** | AA — smallest usable orange; also clears 4.5 on `--amber-wash` and white |
| `--sky-deep` `#3E6E9E` | **5.18** | AA |
| `--ember` `#F66B10` | **2.90** | ✗ Display type ≥32px, icons, and fills only |
| `--sky` `#7FAFDD` | **2.24** | ✗ Fills and large shapes only |
| `--moss` `#AEC36C` | **1.88** | ✗ Never text on sand |

On `--forest` ground: `--sand` 9.50 (AAA), `--moss` 5.05 (AA), `--sky` 4.24 (large only).
On `--charcoal` ground: `--sand` 13.94, `--moss` 7.41 (AAA), `--ember` 4.81 (AA), `--sky` 6.22 (AA).

**The rule:** `--ember` and `--sky` are *shape* colors on light grounds and *text* colors on dark
grounds. The `-deep` variants exist for small text on sand. A button filled `--ember` needs
`--charcoal` or `--sand` label text, never `--ink`.

### 2.5 Tokens

```css
:root {
  /* grounds */
  --sand:        #FFFBF4;
  --paper:       #F4EFE3;
  --lichen:      #ECECC6;

  /* greens */
  --moss:        #AEC36C;
  --olive:       #6F8442;
  --forest:      #2E4A32;

  /* accents */
  --ember:       #F66B10;
  --ember-deep:  #BF4C00;
  --sky:         #7FAFDD;
  --sky-deep:    #3E6E9E;
  --blush:       #F3CFC9;
  --clay:        #C58E53;

  /* text */
  --ink:         #545454;
  --charcoal:    #2A2A28;
  --ink-muted:   #545454B3;   /* 70% — captions, meta */

  /* derived */
  --rule:        #54545426;   /* hairline dividers */
  --shadow-warm: 0 2px 20px rgba(84,67,40,0.07);

  /* case study surfaces — added with the Google Maps page (Figma 380:43) */
  --green:       #577F0F;   /* section eyebrows, 4.58 on sand */
  --green-deep:  #456B27;   /* insight icons */
  --stone:       #74746F;   /* quiet captions, 4.55 on sand */
  --border:      #E7E4DF;   /* card and panel hairlines */
  --amber-wash:  #FFF4E2;   /* "intentional AI" callouts */
  --amber-chip:  #FFF6EA;   /* matrix chips we didn't pursue */
  --chip-green:  #DDE8B9;   /* matrix chips we pursued */
  --sky-wash:    #E8F3FF;   /* panel behind a phone screen */
  --sage-wash:   #F2F4EC;   /* "fun finding" panel */
  --bone:        #FAFAFA;   /* cards on the blue band */
}
```

The blue deep-dive band reuses `--water-top`, so its wave edge matches the pond exactly.

### 2.6 Section rhythm

Alternate grounds so scroll has a pulse. From `Portfolio-Soundarya`, which does this well:

```
sand → paper → sand → [forest, full-bleed] → sand → lichen → sand → [forest footer]
```

Never more than two light bands in a row without a dark or tinted break.

---

## 3. Typography

> **The source of truth for fonts, sizes and usage is [`TYPE_STYLE_GUIDE.md`](TYPE_STYLE_GUIDE.md)**,
> and the values themselves live in `src/styles/tokens.css`. This section keeps the reasoning behind
> the choices. If anything here disagrees with the guide, the guide wins.

### 3.1 Families

Two typefaces, one job each. Weights and sizes are in the guide.

**Display — Cormorant Garamond Bold Italic**
High-contrast, small optical size, genuinely elegant at scale. Confirmed by
`Portfolio-Soundarya` ("Brand & Visual Designer," "Feel free to say hello") and `websiteinspo`'s
serif "re" lockup. Free via Google Fonts.

**Text — Instrument Sans**
Free via Google Fonts, weights 400/500/600. Clean and slightly condensed, which keeps long project
titles to two lines in the card grid, and quiet enough next to Cormorant's high-contrast serif that
the two never compete. It carries everything that isn't a headline: body, the hero line, nav, card
titles and labels.

*Instrument Sans replaced Figtree (2026-10), which had replaced Faro (Atipo, commercially licensed) — see §11.1.*

### 3.2 Rules

See [Rules in the guide](TYPE_STYLE_GUIDE.md#rules). In short: at most four sizes per screen,
Cormorant always bold italic and at least 32px, Instrument Sans for everything else, and weight or
color before a new size.

### 3.3 Scale

Six sizes: **16 · 18 · 20 · 28 · 44 · 68** (at 1440px), named after the Figma text styles. The full
table, minimum sizes and line heights are in the guide.

Earlier drafts of this document used a longer `--t-*` scale, and some sections below still name
those tokens. Read them as:

| Old token | Now |
|---|---|
| `--t-hero` | Display L (`--type-display-lg`) |
| `--t-display`, `--t-title` | Display M (`--type-display-md`) |
| `--t-head` | Title (`--type-title`) |
| `--t-lead`, `--t-body`, `--t-small` | Body (`--type-body`) |
| `--t-caption`, `--t-label` | Label (`--type-label`) |

### 3.4 Editorial moves worth stealing

- **Type as image** (`moodboard10`, `websiteinspo`) — one word at 8–11vw, overlapping an illustration or image, slightly cropped by the viewport edge. Reserve for the hero and maybe one other place.
- **Horizontal word marquee** (`websiteinspo`: *refill · rethink · reduce · recover*) — a slow scrolling band of your keywords in `--ember` at display size. Ties directly to §1.3. Pause on hover; respect `prefers-reduced-motion`.
- **Serif/sans mid-sentence swap** (`Portfolio-Belle`: "Let's make some *magic* happen") — set one word in Cormorant Italic inside an Instrument Sans line. Once per page, maximum.
- **Floating pill tags** (`Portfolio-Belle`, `websiteinspo`) — small `--t-label` capsules scattered around a heading (Research · Branding · Systems). Gives the hero texture without more prose.

---

## 4. Layout & Grid

### 4.1 Structure

- **12 columns**, `1.5rem` gutter, `max-width: 1280px`, page inset `clamp(1.25rem, 5vw, 5rem)`.
- **Spacing scale** (8px base): `4 · 8 · 16 · 24 · 40 · 64 · 104 · 168 · 264`. Fibonacci-ish — the jumps get dramatic at the top, which is what creates the whitespace you want.
- **Section padding:** `clamp(5rem, 14vh, 11rem)` block. `Portfolio-Itti` gets its calm almost entirely from enormous vertical gaps — that's the single cheapest way to hit "lots of white space."

### 4.2 Editorial layout patterns

Rotate between these rather than stacking identical rows — that repetition is what makes the
"generic UX portfolio" feel.

1. **Full-bleed hero** — illustration or texture edge to edge, type overlapping it.
2. **Asymmetric split** — 7 cols image / 4 cols text, offset vertically so they don't align at the top.
3. **Staggered pair** — two projects side by side, one pushed down 80–120px (`Portfolio-Belle` does exactly this).
4. **Single centered statement** — one Cormorant line on an otherwise empty band. Nothing else.
5. **Wide index** — text-only list of all work: title · role · year, hairline rules, hover reveals a thumbnail near the cursor.
6. **Inverted band** — `--forest` ground, full bleed, for the about or contact moment.

### 4.3 Project cards

From `Portfolio-Itti` and `Portfolio-Soundarya`, adapted to the pond motif:

- Fill `--paper` or a muted tint of the project's own color — **not** white.
- **Lily-pad corner:** `border-radius: 24px` with one corner notched or opened (`24px 24px 24px 4px`, or a clipped wedge). Consistent across all cards; the notch rotates by position.
- Image inset `12–16px` from the card edge — the visible frame reads as considered, not cropped.
- Below the frame: title in `--t-head`, one-line outcome in `--t-body`, meta in `--t-caption` `--ink-muted`.
- Client or context chip top-right, `--t-label`, on a translucent sand capsule (`Portfolio-Itti`).

### 4.4 Responsive

| Range | Behavior |
|---|---|
| ≥1024px | Full grid, asymmetric layouts, staggered offsets active. |
| 768–1023 | Collapse to 8 cols, halve the stagger, keep asymmetry. |
| <768 | Single column. Kill stagger. Display L floors at `44px` (see the type guide). Page inset `1.25rem` minimum on every side. Reduce ambient motion — no drifting koi on mobile. |

---

## 5. Visual Elements

### 5.1 Organic shapes

Sources: `moodboard2` (blob canopies), `moodboard1` (rolling hills), `moodboard6`/`moodboard7` (soft fields), `Illustrations/` (lily pads).

- **Blobs** — irregular, 4–6 control points, *never* a symmetric superellipse. Used as section backgrounds at 10–20% opacity, or as full-color illustration masses.
- **Hills and arcs** — wide, shallow SVG curves as section dividers. `Portfolio-Belle` uses a single curved sweep into its dark footer; do the same into `--forest`.
- **Ripple rings** — concentric offset circles from `moodboard7`. The click/reveal primitive.
- **Lily-pad silhouette** — circle with a wedge notch. Your card shape, your image mask, your avatar frame.
- **Rule:** organic shapes are *background and frame*. Content sits on rectangles. Don't put text inside a blob.

### 5.2 Illustration system

You already have the assets — `Illustrations/` is the style guide.

**Characteristics to preserve:** painted gouache fill · no outlines (or a soft darker-tone edge, never black) · visible paper grain inside every shape · rounded, slightly imperfect forms · flat lighting with one soft shadow tone.

**Palette within illustration:** moss `#AEC36C` · olive `#6F8442` · forest `#2E4A32` · blush `#F3CFC9` · clay `#C58E53` · ember `#F66B10` on sand `#FFFBF4`.

**Placement:** one illustrated moment per page, at most two. `Portfolio-Soundarya` illustrates only the hero and the contact block and it's plenty. Elsewhere, single small spot elements — a dragonfly beside a link, three lily pads in a margin.

**Explicit rejection:** `moodboard8`'s heavy-black-outline cartoon style is charming but fights "minimal but memorable" and your own gouache assets. Take its *character warmth* — faces, wobbly energy, things with personality — and not its outlines.

### 5.3 Marks and details

- **Sprinkled confetti marks** (`Portfolio-Itti`, `Portfolio-Belle`) — 4-point sparkles, tiny asterisks, dots, scattered in hero negative space at 6–10px. Adds life to whitespace at nearly zero cost. Drift ±4px on scroll.
- **Hairline rules** — `1px` `--rule`. Between index rows and around tags. Never a heavy border.
- **Capsule tags** — `999px` radius, `--t-label`, `1px` `--clay` border or `--lichen` fill.
- **Hand-drawn underline** — a slightly wavy SVG stroke under a key phrase, in `--ember`. Draws in on scroll reveal.
- **Cursor companion** *(optional, desktop only)* — the dragonfly trails the cursor with heavy easing and settles on hovered elements. High-charm, high-risk. Ship it only if it's smooth, and disable under `prefers-reduced-motion`.

### 5.4 Iconography

Drawn, not a library. 1.5–2px strokes, rounded caps, slight imperfection, `--olive` or `--ink`.
Systematic icon sets read corporate — the references have none.

---

## 6. Texture

This is the highest-leverage section. Texture is what will separate this from every other
cream-and-sage portfolio, and it's where your references are most consistent.

### 6.1 Paper grain — the base layer

From `moodboard5`, `moodboard9`, `Illustrations/`. A fine tooth over the entire page.

```css
body::before {
  content: '';
  position: fixed; inset: 0;
  pointer-events: none; z-index: 9999;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,...");  /* feTurbulence, baseFrequency 0.9 */
  mix-blend-mode: multiply;
}
```

Keep it at **3–5%**. Above that it reads as a dirty screen. Generate once as a tiling SVG
`feTurbulence` (`type="fractalNoise"`, `baseFrequency="0.9"`, `numOctaves="4"`) and inline it as a
data URI so there's no network request.

### 6.2 Riso halftone — the signature

From `moodboard5`'s green sprout and `moodboard9`'s ginkgo overprint. The most distinctive texture
in the folder and the least common on the web.

- **Dot screen:** `radial-gradient` dots at ~4px pitch, masked to a shape, 45° rotation.
- **Overprint:** two shapes in `--moss` and `--ember` at 85% opacity with `mix-blend-mode: multiply` — where they overlap you get a genuine third color, exactly like `moodboard9`'s leaves over fruit.
- **Misregistration:** offset one layer 2–3px. The slight wrongness is the whole point.
- **Where:** project thumbnails, section-opener graphics, the about photo. Not on type.

### 6.3 Grainy gradient — atmosphere

From `moodboard6` (moss-to-cream wash) and `moodboard7` (green-blue swirl). `Portfolio-Soundarya`
uses one as a full-bleed band behind its project grid and it's the best moment on that page.

- Soft multi-stop radial gradient, `--moss` → `--lichen` → `--sand`, plus a noise overlay at 8–12% so it never bands.
- **One per page**, full-bleed, behind a content band.
- Optionally animate the gradient center over 20–30s. Barely perceptible, and it makes the page feel alive.

### 6.4 Colored-pencil bloom

From `moodboard7`. Soft, directional, hand-drawn tonal shifts. Subtlest of the four.

Use behind the hero: 2–3 very large blurred radial blobs (`filter: blur(80px)`) in moss and sky at
10–15% opacity, over the grain layer. Gives the sand ground depth without reading as a gradient.

### 6.5 Depth instead of shadows

`box-shadow` with grey is the fastest way to look like corporate SaaS. Instead:

- **Warm shadow only:** `0 2px 20px rgba(84,67,40,0.07)` — brown-based, never neutral grey.
- **Preferred:** offset a `--lichen` or `--paper` shape 6–10px behind the card, like a print
  registration layer. Flat, warm, on-brand.
- **Never** glassmorphism, `backdrop-filter` frost, or any inner glow.

---

## 7. Motion & Interaction

### 7.1 Principles

1. **Ripple physics.** Motion starts fast and settles slowly, like something dropped in water. Default easing `cubic-bezier(0.22, 1, 0.36, 1)`.
2. **Never block reading.** Scroll reveals fire early (element 15% into viewport) and finish in ≤500ms. A reader who scrolls fast should never wait on an animation.
3. **One moment per screen.** If two things could animate, animate the more important one.
4. **`prefers-reduced-motion` is not optional.** Reduce to opacity-only fades at 150ms; kill all ambient motion, marquees, and the cursor companion.

### 7.2 Timing

| Class | Duration | Easing | Use |
|---|---|---|---|
| Instant | 120ms | `ease-out` | Color, opacity on hover |
| Quick | 240ms | `cubic-bezier(0.22,1,0.36,1)` | Transform on hover, tag states |
| Reveal | 450ms | `cubic-bezier(0.22,1,0.36,1)` | Scroll-in, staggered 60ms per sibling |
| Transition | 700ms | `cubic-bezier(0.65,0,0.35,1)` | Page and route changes |
| Ambient | 12–30s | `linear` / `ease-in-out` | Drifting koi, gradient shift, marquee |

### 7.3 Scroll reveals

- Default: `translateY(24px)` + `opacity 0` → settled. Stagger siblings 60ms.
- Display headings: mask-reveal per line, wiping upward. Cormorant at hero scale earns this.
- Illustrations: scale `0.96` → `1` alongside the fade. Reads as *growing*.
- Fire once. Re-animating on scroll-up is irritating.

### 7.4 Hover — the delightful moments

Ranked by value-to-effort. Pick four or five; shipping all of them is noise.

| Element | Behavior |
|---|---|
| **Project card** | Lifts 4px, the `--lichen` offset layer slides to 12px, image scales `1.03` inside a fixed frame. |
| **Frog** | Blinks. Idle blink every 6–9s; guaranteed blink on hover. One SVG path swap — trivially cheap, disproportionately charming. |
| **Lily pad** | Tilts 2–3° and bobs, as if something landed on it. |
| **Text link** | Hand-drawn wavy underline draws left-to-right over 240ms (SVG `stroke-dashoffset`). |
| **Primary button** | `--ember` fill wipes upward from the bottom edge; label crossfades `--charcoal` → `--sand`. |
| **Index row** | Row ground fades to `--paper`, title shifts right 8px, thumbnail fades in near the cursor. |
| **Dragonfly cursor** | Trails with heavy easing; settles onto the hovered element. Desktop only. |
| **Sparkle marks** | Nearby confetti drifts 4–6px away from the cursor. Nearly invisible, quietly alive. |

### 7.5 Ambient motion

Ration this hard — it's the difference between alive and distracting.

- Koi drifting slowly across one section's negative space (30s+ loop, ~15% opacity).
- Gradient band center shifting over 25s.
- Keyword marquee at ~40s per cycle, pausing on hover.
- **Two maximum per page.** Never in the same viewport.

### 7.6 Page transitions

A ripple or a sand-colored sweep that covers, then uncovers, on route change. 700ms total.
Keeps the "one continuous place" feeling from §1.1.

---

## 8. Components

| Component | Spec |
|---|---|
| **Nav** | Top-center or top-left, Body style (Instrument Sans). Transparent over hero, gains `--sand` ground with hairline bottom rule after 80px of scroll. Current page marked with an `--ember` dot, not an underline. |
| **Button — primary** | `--forest` fill, `--sand` label, `999px` radius, `14px 28px`. Hover: `--ember` wipe up. |
| **Button — secondary** | Transparent, `1px --clay` border, `--ink` label. Hover: `--lichen` fill. |
| **Tag / chip** | `--t-label`, `--lichen` fill or `1px --clay` border, `999px`, `6px 14px`. |
| **Project card** | §4.3. |
| **Index row** | Hairline-separated, `40px` tall min, title `--t-head` + meta `--t-caption`, cursor-following thumbnail on hover. |
| **Pull quote** | `--t-title` Cormorant Italic, centered, `--forest`, with a small ember mark above. Its own band with `168px` of vertical air. |
| **Footer** | Full-bleed `--forest`, entered via a curved hill divider (`Portfolio-Belle`). `--sand` text, `--moss` links. Illustration along the bottom edge. |
| **Case study hero** | Full-bleed image or illustration, title in `--t-display` overlapping the bottom edge, role/year/team as a `--t-caption` row beneath. |
| **Case study body** | Single 34rem column, broken every 2–3 sections by a full-bleed image, a pull quote, or a `--paper` band. |

---

## 9. Do / Avoid

**Do**
- Cream grounds, never `#FFFFFF`.
- Grain on every surface.
- Vertical space that feels almost excessive, then add a little more.
- One hero moment per page and genuine restraint everywhere else.
- Plain-language captions that name a real outcome.
- Warm, brown-based shadows — or offset flat layers instead.
- Test every accent against §2.4 before shipping it as text.

**Avoid**
- Glassmorphism, `backdrop-filter` frost, inner glows.
- Neon, or any accent outside the token list.
- Multi-stop rainbow gradients. The one grainy gradient in §6.3 is the exception, and it's two-to-three related hues.
- Neutral grey shadows and grey borders — `--rule` and `--clay` cover every case.
- Uniform card grids with identical thumbnails. Vary the layout (§4.2).
- Icon libraries (Material, Feather, Font Awesome) — draw them.
- Italic Cormorant below 32px.
- More than two ambient animations on a page.
- Section headers named "Selected Work," "About Me," "Get In Touch."

---

## 10. Reference Index

What each file contributed, for when you need to go back to the source.

| File | Contribution |
|---|---|
| `moodboard1.jpg` | Sky `#6DA4DC` confirmation · hill/landscape footer · orange-green-blue coexisting in illustration · full-bleed illustrated footer |
| `moodboard2.jpg` | Organic blob canopies · forest `#306C48` · cream `#FCFAED` · figure-in-landscape scale, negative space as sky |
| `moodboard3.jpg` | Crayon/pencil texture · characters with faces · cream `#FDF6E4` · charm without outlines |
| `moodboard4.jpg` | Illustrated inhabited world as a site hero · pill buttons · sparse centered type over a scene |
| `moodboard5.jpg` | **Riso halftone** · recycled-paper ground `#E8DFD4` · single-color print aesthetic · the sustainability visual |
| `moodboard6.jpg` | **Grainy gradient** · moss `#8CAF4F` confirmation · single white silhouette on a colored wash |
| `moodboard7.jpg` | **Colored-pencil bloom** · ripple rings · soft green-blue atmospheric field |
| `moodboard8.jpg` | Character warmth and personality — *style explicitly rejected* (§5.2) · cream `#FFFBF0` |
| `moodboard9.jpg` | **Overprint / misregistration** · olive `#64852E` · clay `#D7A95B` · organic leaf shapes over paper grain |
| `moodboard10.jpg` | **Type as image** · editorial poster scale · huge word + tiny paragraph, nothing between · forest `#1A4740` · ember `#E4600C` · wit in copy |
| `websiteinspo.jpg` | Serif display over image · **word marquee** · pill tags · tiny caption type · editorial ecommerce grid |
| `Portfolio-Belle.jpeg` | Doodles around the hero · floating skill tags · **curved hill divider into a dark footer** · serif/sans swap mid-sentence · staggered project pairs |
| `Portfolio-Emmi.png` | Collage hero (energy to borrow, density to avoid) · dark charcoal `#332229` |
| `Portfolio-Itti.jpeg` | **Extreme whitespace** · sprinkled confetti marks · client chip on project cards · tinted card grounds · dark secondary section |
| `Portfolio-Katherine.jpeg` | Illustrated header band · experience list layout |
| `Portfolio-Soundarya.png` | **Closest overall match** — cream ground, coral serif italic display, sage illustration, full-bleed grainy gradient band behind the project grid, white-framed cards, illustrated contact block |
| `Illustrations/*.png` | **The pond motif** (§1.2) · gouache style guide · blush `#F3CFC9` · clay `#C58E53` · frogs, lily pads, lotus, koi, dragonfly |

---

## 11. Open Decisions

Five things to settle before building:

1. **Text face — settled: Instrument Sans** (for all non-headline text; see `TYPE_STYLE_GUIDE.md`). Free, no licensing step, and condensed enough to keep long project titles tidy in the card grid. Figtree and Faro (Atipo, paid) were the earlier picks. The swap is one token if you revisit it.
2. **How far to push the pond — settled: full commitment on the home page, light touch inside case studies.** The Google Maps case study keeps the sand ground throughout and brings the pond back once, as a full-bleed band of `--water-top` behind the design deep dives, closed top and bottom with the same wave the "swim to the next project" section uses, with the frog resting on a lily pad in the corner. The work leads; the pond frames it.
3. **Dark mode.** The palette is deeply light-native. Either skip it (defensible — many illustration-led portfolios do) or build a `--forest`-grounded variant, which is a real design project, not a token swap. Recommendation: skip for v1.
4. **Illustration scope.** You have pond assets. Do case studies get custom illustration too, or only real work screens? Custom illustration throughout is the strongest version and the most work.
5. **Case study imagery.** Content imagery (phone mockups, posters, photographs, diagrams, the ice cream model) is exported from Figma as 2× WebP into `src/assets/<project>/` — the page chrome is real markup, the artifacts are pictures. The three Final Designs panels currently show poster stills of prototype recordings; the markup is ready for a looping `<video>` at 260×566 when there is one.
