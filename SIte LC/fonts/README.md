# Fonts

LeukoCheck uses Google-hosted webfonts (full Cyrillic support, free to embed).

| Role | Family | Loaded via |
|---|---|---|
| Display / headings | **Inter Tight** (500, 600, 700) | Google Fonts CDN |
| Body / UI | **IBM Plex Sans** (400, 500, 600, 700) | Google Fonts CDN |
| Mono / data | **IBM Plex Mono** (400, 500, 600) | Google Fonts CDN |

The `@import` lives at the top of `../colors_and_type.css` and covers the Cyrillic and Latin subsets.

> ⚠️ **Substitution flagged.** No brand-owned font files were attached. These three families are strong, free, Cyrillic-capable defaults but should be swapped for real brand fonts if any exist. Drop `.woff2` files into this folder and swap the `@import` for `@font-face` declarations to move offline.
