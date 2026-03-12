# 019 — Streetwear Drop Culture Brand

> *Not for everyone. Made for you.*

![019 Brand](reve-images-1/Male_Model_1.png)

---

## What is 019?

**019** is a concept streetwear brand website built around **drop culture** — limited releases, no restocks, high anticipation. The brand targets a young, fashion-forward audience drawn to oversized silhouettes, techwear aesthetics, and editorial street photography.

The name means nothing — and everything. **019 is a number with no history. We gave it one.**

One drop at a time. Pieces designed to outlast the algorithm that pushed them to you.

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home — product grid with filter, hero card, intro |
| `men.html` | Men's collection — minimal title reveal, flip cards with video |
| `women.html` | Women's collection — editorial strip header, flip cards with video |
| `about.html` | Brand story, manifesto, editorial images, numbers |
| `new-drops.html` | Live countdown timer — products locked until drop goes live |

---

## Features

- 🔴 **Live countdown drop system** — products unlock the moment the drop goes live
- 🃏 **3D vertical flip cards** — hover reveals a product video preview on back face
- 🖱️ **Custom red cursor** — expands to hollow ring on interactive elements
- 🔤 **Logo flipper animation** — digits animate in with elastic bounce on page load
- 📜 **Scroll reveal** — sections fade up as you scroll into them
- 📡 **Marquee ticker** — red announcement strip at the top
- 🔍 **Product filter** — filter by Hoodies, Jackets, Bottoms
- 📱 **Responsive** — works across desktop, tablet, mobile

---

## Tech Stack

**Languages**
- HTML5
- CSS3
- JavaScript ES6+

**Fonts** — Google Fonts
- `Bebas Neue` — display, headings, logo
- `Space Mono` — labels, IDs, monospace details
- `Barlow` — body text

**CSS Features**
- CSS Custom Properties (variables)
- CSS Grid & Flexbox
- CSS Keyframe Animations
- CSS 3D Transforms — `perspective`, `rotateX`, `preserve-3d`, `backface-visibility`
- `aspect-ratio`, `backdrop-filter`, `mix-blend-mode`
- Pseudo-elements `::before` / `::after` for decorative effects
- `IntersectionObserver` driven scroll reveals

**JavaScript Features**
- DOM Manipulation — `createElement`, `appendChild`, `innerHTML`
- `setInterval` for live countdown timer
- `IntersectionObserver` for scroll animations
- Event Listeners — `mouseenter`, `mouseleave`, `mousemove`
- Array methods — `.filter()`, `.forEach()`
- Template Literals for dynamic HTML rendering
- `HTMLVideoElement.play()` / `.pause()` for video on hover

> **Zero frameworks. Zero libraries. Zero dependencies.**
> Built entirely in vanilla HTML5, CSS3, and ES6+ JavaScript.

---

## Design System

### Color Theory

019 uses a **two-color dominant palette** — a deliberate choice rooted in contrast theory.

| Role | Color | Hex |
|------|-------|-----|
| Background | Near Black | `#0a0a0a` |
| Surface | Dark Grey | `#111111` |
| Surface 2 | Lifted Dark | `#161616` |
| Border | Subtle | `#1f1f1f` |
| Text | Off White | `#f0ece4` |
| Text Muted | Mid Grey | `#555555` |
| Accent / Primary | Red | `#e01a1a` |

**Why this palette?**

The near-black (`#0a0a0a`) is not pure black — pure black (`#000000`) feels flat and digital. `#0a0a0a` has depth, warmth, and feels closer to fabric than a screen.

The off-white text (`#f0ece4`) has a slight warm tone — again, not pure white. Pure white screams clinical. Off-white feels like aged paper, premium printing, editorial fashion.

The red (`#e01a1a`) is used as a **single accent** — never background, never body text. Only used for:
- Active states
- IDs and labels
- Hover reveals
- The one word in a headline that matters

This is called **accent dominance** — one color does all the emotional work. Everything else steps back.

---

### Typography

**Three-font system — each font has one job:**

| Font | Use | Why |
|------|-----|-----|
| `Bebas Neue` | Logo, headings, titles | Condensed, tall, commanding. Takes up space confidently. |
| `Space Mono` | IDs, labels, prices, nav | Monospaced — feels like a tag, a code, a serial number. Clinical contrast to the loud headings. |
| `Barlow` | Body text, descriptions | Clean, modern, readable. Fades into the background — lets the other two fonts lead. |

**The pairing logic:** Bebas shouts. Space Mono whispers precisely. Barlow just speaks. Three different voices, one conversation.

---

### UI/UX Principles

**1. Restraint over decoration**
Every element earns its place. No gradients, no shadows, no rounded corners (border-radius stays at 1–2px). The design is sharp because the brand is sharp.

**2. Motion with purpose**
Every animation communicates something:
- Logo flipper → the brand is revealing itself
- Page load stagger → things arrive, not appear
- Card flip → there's more beneath the surface
- Countdown unlock → the drop is an event, not a listing

**3. Tension through contrast**
Large Bebas Neue headlines next to tiny `10px` Space Mono labels. `260px` MEN title next to `10px` metadata. The tension between loud and quiet creates visual hierarchy without needing color.

**4. The cursor as brand element**
The custom cursor (red dot → red ring on hover) makes the interface feel owned. It's not a default arrow — it's part of the identity.

---

## Project Structure

```
019/
├── index.html          — Home
├── about.html          — Brand Story
├── men.html            — Men's Collection
├── women.html          — Women's Collection
├── new-drops.html      — Drop Countdown
├── style.css           — Shared styles
├── script.js           — Shared scripts
├── reve-images-1/      — Product images
└── videos/             — Product preview videos
```

---

## How to Set a Drop Date

In `new-drops.html`, find this line and change the date:

```js
const DROP_DATE = new Date('2025-06-01T12:00:00');
//                              YYYY-MM-DD  HH:MM:SS
```

Past the date → products unlock automatically. Future date → countdown runs.

---

## License

This is a concept/portfolio project. All design, code, and content is original.

---

*019 — Drop culture. No restocks. No explanations.*
