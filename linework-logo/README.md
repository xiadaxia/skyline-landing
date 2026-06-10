# SKYLINE AI — Brand Kit

A complete brand identity built around a linework medallion: a circular badge with a centered city skyline, derived from an ornamental medallion reference and rebuilt as geometric line art. The skyline is the primary subject; the surrounding ring is supportive. A custom geometric wordmark extends the system into typography.

## Quick start

| Use case | File |
|---|---|
| Web / app logo (light background) | `logo-skyline.svg` |
| Web / app logo (dark background) | `logo-skyline-reverse.svg` |
| Avatar, watermark, rubber stamp, seal | `logo-stamp.svg` |
| Brand wordmark | `wordmark-skyline-ai.svg` |
| Full lockup (logo + wordmark + tagline) | `brand-lockup.svg` |
| Favicon 16×16 to 256×256 | `favicon-*.png` |
| Website header mockup | `header-mockup.html` |
| Email signature (3 variants) | `email-signature.html` |
| Type specimen | `type-specimen.html` |
| One-page kit overview | `showcase.html` |

Open `showcase.html` in a browser to see all logo variants side by side.
Open `type-specimen.html` to see the wordmark's character set and construction.
Open `header-mockup.html` or `email-signature.html` for in-context usage.

## Design system

### Logo (v8)

| Element | Role | Line weight |
|---|---|---|
| Outer ring (r=180) | Decorative boundary | 2.5px |
| 8 compass nodes (outer diamond ◇ + inner dot ·) | Industrial / precision feel | fill |
| 8 radial ticks (top one shorter) | Division marks | 1.5px |
| Inner ring (r=160) | Main boundary | 1.0px |
| Horizon line (y=300) | Ground line; anchors the city | 1.5px |
| City silhouette | Primary subject | 3.5px |
| Central spire + double diamond windows + trapezoid base | Hero element | 3.5px / fill |
| 8-point stars (4 total, asymmetric) | Sky decoration | fill |

**Color tokens**
- Light version: ink `#111` on cream `#f5f1e8`
- Reverse version: ink `#f5f1e8` on `#111`

### Wordmark (v2 bold)

| Property | Value |
|---|---|
| Cap height | 80 units |
| Stroke weight | 8 units (bold) |
| Line cap | square |
| Line join | miter (limit 6) |
| Tracking | 14 units (42 between words) |
| Case | all caps |

**Letters in the wordmark**
- S — 5-stroke geometric (square construction)
- K — left bar + 2 diagonals
- Y — 2 diagonals converging + tail
- L — left bar + baseline
- I — narrow (30u) with top/bottom serifs (echoes the logo's horizon)
- N — 2 bars + diagonal
- E — left bar + 3 horizontals (middle one shorter)
- A — apex mirrors the central spire

**Geometry**
- viewBox: `0 0 400 400` (logo) / `0 0 640 100` (wordmark)
- Building baseline: `y=300`; building footprint `x ∈ [91, 309]`
- Inner ring at `y=300` spans `x ∈ [75.1, 324.9]` — buildings sit at `[91, 309]`, leaving ~16px breathing room on each side
- Central spire tip at `y=44` (4px below inner ring top `y=40`) — contained, not piercing

## Iteration history

```
v1  Linework soft     — basic line art, rounded line caps
v2  Geometric feel    — diamond nodes, miter joins, double-diamond stars
v3  City as hero      — heavier stroke on city, lighter on rings
v4  Spire details     — diamond windows, finial, podium base
v5  Inner ring fit    — buildings pulled inside inner ring
v6  Bigger ring       — inner ring r=148 → 160
v7  Contain spire     — spire tip y=24 → 44 (no longer pierces ring)
v8  Design polish     — horizon line, compass nodes (◇·), trapezoid base, uniform window size
+   Bold wordmark     — stroke 6 → 8, tracking 12 → 14
+   Brand lockup      — logo + wordmark + tagline composition
+   Application kit   — header, email signature, favicons, type specimen
```

## Favicon strategy

Small sizes (16/32) need different line weights than the master SVG. The favicon set uses a **silhouette variant** with strokes ~3× heavier than the master, no nodes/ticks/stars, and a heavier horizon. This is what the favicon PNGs are derived from.

For sizes ≥ 128px, the simplified master (no compass dots, fewer stars) is preferred.

## Application guidelines

### Header
- Use 32px logo mark in the brand area; wordmark at 15px / 700 weight / 3px tracking
- Nav items: 12px / 500 weight / 1.5px tracking / uppercase
- CTA: 11px / 600 weight / 2px tracking, ink fill on cream
- Recommended header height: 72px

### Email signature
- Variant 1 (full): exec/external — 64px logo, name, role, separator, company, contact
- Variant 2 (minimal): reply chains — text only, 2px left rule
- Variant 3 (compact): brief emails / Slack — 22px mini-logo + wordmark + name + contact

## File inventory

```
logo-skyline.svg                — master logo, light
logo-skyline-reverse.svg        — master logo, dark
logo-stamp.svg                  — condensed stamp / seal
wordmark-skyline-ai.svg         — custom wordmark, bold
brand-lockup.svg                — full lockup (logo + wordmark + tagline)
favicon-16.png  ...  256.png    — favicon size variants
header-mockup.html              — website header + hero
email-signature.html            — 3 email signature variants
type-specimen.html              — wordmark character set + construction
showcase.html                   — single-page kit overview
README.md                       — this file

preview-skyline.png             — 800×800 render of master logo
preview-reverse.png             — 800×800 render of reverse logo
preview-stamp.png               — 800×800 render of stamp
preview-wordmark.png            — wordmark standalone
preview-brand-lockup.png        — lockup render
preview-header.png              — header mockup
preview-email-signature.png      — email signature mockup
preview-type-specimen.png       — type specimen page
showcase-preview.png            — showcase page render
```

## Notes

- All SVGs use `viewBox="0 0 400 400"` (logo) or `0 0 640 100` (wordmark) and inherit `stroke-linecap="square"`, `stroke-linejoin="miter"` for crisp geometric corners.
- The reverse version inlines a dark `<rect>` background; remove that rect if you want the lines to sit on whatever container background the SVG is dropped into.
- The stamp version uses a softer `stroke-linecap="round"` on the ring/horizon to feel more hand-stamped; switch to `square` if you want a crisper industrial look.
- The wordmark is a tuned display face, not a general-purpose typeface. The letterforms are drawn for the specific brand string "SKYLINE AI".
