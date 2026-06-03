# Justin Best — Portfolio Site ("Sleek")

A dark, cinematic concept-art portfolio site, built as **plain static HTML/CSS/JS**
(no build step, no framework, no dependencies beyond two Google Fonts). It is aimed at
an industry audience — studios, publishers, and recruiters.

This is the working source, not a throwaway prototype: open `Sleek.html` in any
browser and it runs. Drop it in the repo and edit it directly.

---

## Files

| File | What it is |
|------|------------|
| `Sleek.html`       | The main gallery page — hero slideshow + filterable grid + lightbox. |
| `Resume.html`      | The resume / CV page (linked from the nav). Editable placeholder text. |
| `gallery-data.js`  | **The content file.** Edit this to add / remove / reorder images. This is the only file you touch for content. |
| `images/`          | Put web-sized image files here (see workflow below). |

`Sleek.html` loads `gallery-data.js` and builds the hero + grid from it at runtime.

---

## How content works (important)

You do **not** hand-edit the HTML to change images. Everything is driven by two
lists in `gallery-data.js`:

### `window.HERO_SLIDES`
An array. Each entry is either:
- an **image path** (e.g. `"images/spire-plaza.jpg"`) → shows that image full-bleed, or
- **plain text** (e.g. `"Hero slot 2"`) → shows a labeled placeholder slot.

The slideshow cross-fades between entries every 6 seconds with a slow Ken-Burns
zoom, and shows clickable navigation dots when there are 2+ slides.

### `window.GALLERY`
An array of card objects. Each card:
```js
{
  title:    "Spire Plaza",        // shown on hover
  project:  "Futurist",           // shown on hover
  category: "Keyframe",           // label text
  cat:      "key",                // filter code: env | veh | char | key
  year:     "2026",
  thumb:    "images/spire.jpg",   // grid thumbnail (web-sized)
  full:     "images/spire-hi.jpg" // OPTIONAL hi-res shown in the lightbox; defaults to thumb
}
```
Order in the array = order on the page. Clicking a card opens a lightbox with
keyboard nav (←/→/Esc). The filter buttons (All / Environments / Vehicles /
Characters / Keyframes) match on the `cat` code.

---

## Image workflow (for Claude Code)

Source art is large PNG (10–12 MB each). For the web, generate optimized copies:

1. For each piece, export a **web thumbnail**: JPG, ~2000–2500px on the long edge,
   quality ~0.85 → lands ~0.5–2 MB. Save into `images/`.
2. (Optional) Export a **hi-res** JPG (full resolution, quality ~0.92) for the
   lightbox / hero, save into `images/`, and reference it as `full:` / in
   `HERO_SLIDES`.
3. Add/update the entry in `gallery-data.js`.

Claude Code can do the resize/compress step locally (e.g. with `sharp` or
ImageMagick) — there is no file-size limit on your machine.

Keep filenames simple and lowercase: `desert-convoy.jpg`, not `Desert Convoy FINAL.png`.

---

## Design system (recreate exactly if porting to a framework)

The look is defined by CSS custom properties at the top of `Sleek.html`:

### Color (OKLCH)
| Token | Value | Use |
|-------|-------|-----|
| `--bg`        | `oklch(0.155 0.006 265)` | page background (near-black, faint blue) |
| `--bg-2`      | `oklch(0.195 0.007 265)` | card / image placeholder background |
| `--bg-3`      | `oklch(0.235 0.008 265)` | raised surfaces |
| `--line`      | `oklch(0.32 0.008 265 / 0.6)`  | borders |
| `--line-soft` | `oklch(0.32 0.008 265 / 0.28)` | hairline dividers |
| `--fg`        | `oklch(0.955 0.004 265)` | primary text (near-white) |
| `--fg-2`      | `oklch(0.70 0.007 265)`  | secondary text |
| `--fg-3`      | `oklch(0.55 0.008 265)`  | muted labels |
| `--accent`    | `oklch(0.76 0.12 62)`    | warm amber accent (hover hairline, active dot, links) |

### Type
- **Display / UI:** `Space Grotesk` (Google Fonts), weights 400–700.
- **Labels / mono accents:** `Space Mono`, used uppercase with wide letter-spacing
  (~0.14–0.22em) for eyebrows, categories, metadata.

### Layout
- Full-bleed page (no max-width container); content sits **10px** in from the
  left/right page edges.
- Gallery is a **3-column CSS grid**, equal-size cards (`aspect-ratio: 4/3`),
  **5px** gaps. Collapses to 2 columns under 880px.
- Sticky header is **transparent over the hero** and fades in a blurred dark
  background once you scroll past the hero (`header.scrolled`).
- A soft dark top gradient (`.hero-show::before`) keeps nav text legible over
  bright images **without** dimming the rest of the artwork.

### Motion
- Hero slides: 1.4s opacity cross-fade + 7s Ken-Burns zoom; 6s interval.
- Cards: image scales to 1.05 on hover; an accent inset hairline appears; the
  title/metadata caption slides up over a bottom scrim.
- All respects `prefers-reduced-motion`.

---

## Fidelity

**High-fidelity.** Colors, type, spacing, and interactions are final. If porting
into a framework (React/Vue/etc.), recreate the UI pixel-for-pixel using these
tokens. If you keep it as static HTML, just edit the files directly — that is the
intended workflow.

---

## Running it

No build. Open `Sleek.html` in a browser, or serve the folder:
```
npx serve .      # or: python3 -m http.server
```
(Serving via http rather than file:// is recommended so `gallery-data.js` loads
cleanly.)
