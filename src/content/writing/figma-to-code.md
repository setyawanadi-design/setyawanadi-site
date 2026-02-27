---
title: "Figma to Code: A Minimalist Approach"
date: 2024-01-22
category: Note
image: https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop
---

Translating a Figma mockup directly into a working Astro site is a fascinating exercise in reduction.

Often, designers over-specify in Figma (using exact pixel widths, fixed heights, or redundant auto-layouts). The challenge as a developer is to look at those exact coordinates and distill them back into flexible CSS box models.

![Figma wireframes](https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop)

## The Problem with Pixel Perfection

"Pixel perfect" is a myth in modern web development. You don't know if your user is on a 4K monitor, a 5-year-old iPhone, or reading via an RSS parser. 

Instead of chasing pixels, we should chase **proportions**.

```css
/* Bad */
.card { width: 320px; height: 400px; }

/* Good */
.card { width: 100%; max-width: 24rem; aspect-ratio: 3/4; }
```

Using Tailwind CSS v4 makes this process much smoother. By defining our pure design tokens (colors, base typography) in `global.css`, we can rapidly scaffold the structural grid using generic utilities, knowing the site will adhere to the core aesthetic without manual intervention.

### Design Tokens vs Hardcoded Values

If you find yourself constantly typing `text-[#1a1a1a]` or `p-[20px]`, you are fighting the framework. A good design system should have a predefined scale.

* **Colors:** Backgrounds, Foreground, Accents
* **Typography:** Display, Prose, Mono
* **Spacing:** A rhythmic scale (usually based on 4px or 8px increments)

By strictly adhering to the tokens we established in Tailwind v4, translating the Figma file took minutes instead of days. The brutalist aesthetic, characterized by absolute lack of border radius and high-contrast monochrome, means we rely entirely on typography and white space to establish hierarchy.
