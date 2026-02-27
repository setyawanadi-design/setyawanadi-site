---
title: "The Architecture of a Map Projection"
date: 2023-08-30
category: Post
image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
description: "Understanding the mathematical trade-offs when translating a globe to a flat screen."
---

Every map lies. It is mathematically impossible to flatten a sphere without distorting at least one of these properties: area, shape, direction, or distance.

The Mercator projection preserves direction, making it excellent for navigation, but wildly distorts the size of landmasses near the poles (Greenland looks bigger than Africa).

The Robinson projection, while not perfectly preserving any single property, offers a visually pleasing compromise that looks 'right' to the human eye. 

When building web maps, we rely on Web Mercator (EPSG:3857) almost exclusively due to computationally efficient tile scaling, despite its geographic distortions.
