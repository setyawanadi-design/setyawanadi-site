---
date: 2024-10-18
---

Quick snippet for a resilient clamp function I've been using in typography scaling. It handles the fluid transition between viewports without needing a dozen media queries.

```css
.fluid-type {
  font-size: clamp(1rem, 0.5rem + 1vw, 2rem);
  line-height: 1.5;
}
```
