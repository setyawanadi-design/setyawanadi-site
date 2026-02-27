---
date: 2024-09-15
---

Comparing rendering performance across different component libraries. Sometimes the overhead of a full framework isn't justified for simple data visualization. The raw DOM is faster than we give it credit for.

| Library | Size (KB) | Render (ms) |
|---|--:|--:|
| React Virtual | 12.4 | 45 |
| TanStack Table | 15.2 | 52 |
| Vanilla JS | 2.1 | 12 |
