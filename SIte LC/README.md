# LeukoCheck Design System

> AI-скрининг риска сердечно-сосудистых заболеваний

## About the product

**LeukoCheck** is medical software (HealthTech / AI) for the early prediction of risk of ischemic heart disease (IHD) and ischemic stroke. The model is built on **leukocyte indices** (NLR — neutrophil-to-lymphocyte ratio, MLR — monocyte-to-lymphocyte ratio, ИСНМ — systemic index of neutrophil-monocyte inflammation) together with standard **hemodynamic parameters** (BP, heart rate).

Under the hood, a multi-layer neural network analyzes routine complete blood count (CBC / ОАК) values plus blood pressure. Reported accuracy: **AUC 0.82**.

**Primary audience:** therapists, cardiologists, neurologists, private clinics and laboratories (Russian-speaking medical market).

**Maturity:** TRL 6 — clinically validated research prototype with patents and a training database; not yet a mass-market shipped product.

## Product surfaces covered in this system

- **Marketing / product landing page** — the public site that explains LeukoCheck to doctors and clinics and drives CTA (request a demo / pilot / partnership). This is the primary surface this design system targets, based on the brief.

Other surfaces (clinician dashboard, lab integration UI, patient report) are **not yet designed** and should be added once the product team provides references.

## Sources

This design system was **bootstrapped from a written brief only** — no codebase, Figma, slide deck, or screenshots were attached. All visual decisions were derived from:

1. The product description (HealthTech / AI / CBC-based risk screening).
2. A color palette stated in the brief:
   - Primary blue `#2563EB` — trust, medicine
   - Accent teal `#14B8A6` — innovation, technology
   - Background light gray / white — cleanliness, safety
   - Text dark gray `#1F2937`
3. Stated structural preferences: clean minimal design, 8–12 px rounded cards, medical + tech icons, data viz, trust elements (patents, registrations, scientific publications).

> ⚠️ **If a real product site, app, or Figma exists, please attach it** — this system will be a much tighter recreation once a real source of truth is available.

---

## Index

| File | What's in it |
|---|---|
| `README.md` | This file — brand context, content rules, visual foundations, iconography |
| `colors_and_type.css` | All CSS custom properties — colors, typography scale, spacing, radii, shadow |
| `fonts/` | Font notes — we use Google Fonts (Inter Tight + IBM Plex Sans) via CDN |
| `assets/` | Logo marks, favicon, trust badges |
| `preview/` | Small HTML cards that populate the Design System tab |
| `ui_kits/landing/` | LeukoCheck marketing landing page — components + full composition |
| `SKILL.md` | Agent Skill manifest (works in Claude Code) |

---

## CONTENT FUNDAMENTALS

LeukoCheck speaks to **doctors and lab directors**, not consumers. Copy should feel like a conference poster or a clinical white-paper summary — never like a B2C SaaS landing.

### Language & tone
- **Russian-first.** This is a Russian medical market product. All public copy is in Russian. English is only used for globally recognized scientific terms (AUC, NLR, MLR, CBC) and for product UI chrome when necessary.
- **Expert but accessible.** Assume the reader is a practicing clinician: they know what a CBC is, they may not know what NLR is. Define abbreviations on first use: *«NLR (нейтрофильно-лимфоцитарное отношение)»*.
- **Evidence-led.** Lead with numbers, cohort sizes, AUC, p-values — not adjectives. *«AUC 0.82 на когорте 1 240 пациентов»*, not *«высокая точность»*.
- **Third-person clinical, not marketing "we love you."** *«LeukoCheck рассчитывает индивидуальный риск…»* — the product is the subject. Avoid *«мы делаем»* / *«мы верим»* phrasing.
- **"Вы" (polite you)** when addressing the clinician directly in CTAs: *«Запросите демо»*, *«Подключите вашу лабораторию»*. Never *«ты»*.
- **No emoji.** Medical software; emoji undermine trust. Icons only.
- **No hype verbs.** Avoid *«революционный»*, *«прорывной»*, *«меняет всё»*. Prefer *«валидирован»*, *«рассчитывает»*, *«прогнозирует»*, *«снижает»*.
- **Hedged, not absolute.** Medical claims are always framed with scope: *«по данным мета-анализа…»*, *«в исследовательской когорте…»*, *«как инструмент поддержки принятия решений»* — never *«ставит диагноз»*.

### Casing
- **Sentence case** for headings and buttons. *«Как работает LeukoCheck»*, not *«Как Работает LeukoCheck»*.
- **Product name** is always written `LeukoCheck` — one word, camel-cased L and C. Never *Leukocheck* or *LEUKOCHECK*.
- **Abbreviations** stay uppercase: NLR, MLR, ИСНМ, ОАК, ИБС, AUC, TRL.

### Numbers & units
- Use **non-breaking spaces** inside numeric ranges and units: `AUC 0,82`, `1 240 пациентов`, `TRL 6`.
- **Decimal comma in Russian copy** (0,82), decimal point only inside code / English fragments.
- **Always cite the denominator.** *«Точность 82 %»* alone is meaningless — write *«AUC 0,82 (n = 1 240, внешняя валидация)»*.

### Example copy — good vs. bad

| ❌ Bad | ✅ Good |
|---|---|
| «Революционный AI меняет кардиологию» | «Скрининг риска ИБС и ишемического инсульта по данным ОАК» |
| «Супер-точный алгоритм» | «AUC 0,82 на внешней валидационной когорте» |
| «Мы поможем вам спасать жизни» | «Инструмент поддержки принятия решений для терапевта» |
| «Попробуй бесплатно!» | «Запросите пилот для вашей клиники» |

---

## VISUAL FOUNDATIONS

The system is deliberately **calm, high-contrast, and data-forward**. It should feel like a modern clinical dashboard or a peer-reviewed journal's website — not a consumer wellness app.

### Color
- **Primary blue `#2563EB`** — used for the logo mark, primary CTA, active link, and key data highlights. Never used as a page-wide background.
- **Accent teal `#14B8A6`** — used for *positive / AI / technology* signals: the neural network diagram, success ticks on charts, accent strokes. Used sparingly (~5 % of any given screen).
- **Neutral ramp** — a 10-step slate ramp from `#F8FAFC` (surface) to `#0F172A` (ink). Backgrounds live in 50–100, borders in 200, muted text in 500, primary text in `#1F2937` / 800–900.
- **Semantic** — red `#DC2626` for *elevated risk*, amber `#D97706` for *borderline*, green `#059669` for *low risk*. These mirror medical conventions (red = danger, green = normal) and are reserved for data, never for page chrome.
- **No gradients** on surfaces. A single subtle hero gradient (white → `#EFF6FF`) is allowed once per page, as a page-top wash. No purple→blue SaaS gradients.

### Typography
- **Display / headings:** *Inter Tight* (weights 500, 600, 700). Tight tracking (`-0.02em` on h1/h2), generous line-height (1.1 on h1, 1.2 on h2).
- **Body / UI:** *IBM Plex Sans* (400, 500, 600). Slightly humanist, reads well at small sizes, carries a scientific-paper feel without being cold like Helvetica.
- **Mono / data:** *IBM Plex Mono* for lab values, indices, AUC numbers, and code-like tokens.
- **Cyrillic support** is non-negotiable — both families above have full Cyrillic coverage.
- **Scale:** 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60. Body default 16 px, reading measure capped at ~68 ch.

### Backgrounds, imagery & texture
- **Surfaces are flat.** White `#FFFFFF` or slate-50 `#F8FAFC`. Section alternation is allowed (white → slate-50 → white).
- **No hand-drawn illustrations.** No blobs, no isometric doctors. The product is clinical; imagery is either (a) a real product screenshot, (b) a schematic data-flow diagram, or (c) a clinical photo treated cool-and-clean.
- **Imagery vibe:** cool, desaturated, blue-leaning. Never warm/orange. If photos are used, prefer real lab / hospital imagery. For now the kit uses **subtle geometric placeholders** where photos would go — flagged for replacement.
- **One permitted pattern:** a very faint 32 px dot-grid (slate-200 dots at 0.4 opacity) used only on the hero background. No other textures.

### Corner radius
- **`--radius-sm` 6 px** — inputs, small chips, badges
- **`--radius-md` 10 px** — buttons, small cards (brief says 8–12; 10 is the default)
- **`--radius-lg` 12 px** — content cards, modals
- **`--radius-xl` 16 px** — hero cards, feature blocks
- **Pills (9999 px)** only for status chips ("TRL 6", "Патент RU", risk-level tags).

### Borders & shadow (elevation)
- **Borders first, shadows second.** Cards default to a 1 px slate-200 border and *no shadow*. Clinical UIs prefer crisp borders over soft drop-shadows.
- **Shadow scale** (used sparingly, hover only or for floating menus):
  - `--shadow-xs` — 0 1px 2px rgb(15 23 42 / 0.04)
  - `--shadow-sm` — 0 1px 3px rgb(15 23 42 / 0.06), 0 1px 2px rgb(15 23 42 / 0.04)
  - `--shadow-md` — 0 4px 12px rgb(15 23 42 / 0.06), 0 2px 4px rgb(15 23 42 / 0.04)
  - `--shadow-lg` — 0 12px 32px rgb(15 23 42 / 0.08)
- **No inner shadows, no glow.** No neon. No colored shadows.

### Spacing & layout
- **4 px base grid.** Tokens: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128.
- **Page max-width 1200 px.** Content column 720 px for prose; 1120 px for feature grids.
- **Section vertical rhythm** — 96–128 px between major landing sections; 64 px inside a section.
- **12-column grid** with 24 px gutter on desktop.

### Motion
- **Minimal and functional.** No bouncy springs. No parallax. No scroll-jacking.
- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` (ease-out-quint-ish) for enters, `cubic-bezier(0.4, 0, 1, 1)` for exits.
- **Durations:** 120 ms (hover / press), 200 ms (reveals), 320 ms (modal / drawer).
- **Reveal pattern:** 8 px translateY + fade-in as sections enter the viewport. That's it.
- Charts animate once, on mount, with a 400 ms stroke-draw. Never looping.

### Hover & press states
- **Primary button** hover: background shifts one step darker (blue-600 → blue-700). No scale, no shadow bump.
- **Secondary button** hover: background slate-50 → slate-100, border unchanged.
- **Link** hover: underline appears (was `text-decoration: none`).
- **Press:** `transform: translateY(1px)` + slight darken. No scale-down.
- **Cards** (when clickable): border slate-200 → slate-300, background unchanged. No lift.
- **Focus:** 2 px ring in `#2563EB` at 40 % opacity, 2 px offset. Always visible — accessibility is non-negotiable for medical software.

### Transparency & blur
- **Used almost never.** One exception: the sticky top nav uses `backdrop-filter: blur(12px)` with a 80 % white background once scrolled, so content reads through cleanly.
- No frosted cards. No modal backdrop blur beyond a flat `rgb(15 23 42 / 0.4)` scrim.

### Cards
Default card = **white background + 1 px slate-200 border + `--radius-lg` (12 px) + 24 px padding + no shadow.**
- A clickable card upgrades the border to slate-300 on hover.
- A "highlighted" card (e.g. the recommended plan, the featured study) swaps the border for a 1 px `#2563EB` border and adds a small blue tick in the corner — no color fill on the body.

### Data visualization
- **Axes, gridlines:** slate-200, 1 px.
- **Primary series:** `#2563EB`.
- **Secondary series:** `#14B8A6`.
- **Risk bands:** red / amber / green at 12 % opacity fills over the plot area.
- **Labels:** IBM Plex Mono, 12 px, slate-600.
- Never use rainbow palettes. Two series max per chart; add a third only if semantically unavoidable.

---

## ICONOGRAPHY

LeukoCheck uses **Lucide** (`https://lucide.dev`) via CDN as its primary icon set. Lucide is:
- Open-source, MIT, 1 400+ icons
- 24 × 24 grid, 2 px stroke, rounded caps — matches the clean clinical feel
- Has the medical / lab / data icons the product needs (`heart-pulse`, `activity`, `stethoscope`, `test-tube`, `microscope`, `brain`, `line-chart`, `shield-check`, `file-text`).

> ⚠️ **Substitution flagged.** No custom icon set was provided. Lucide is chosen as a close stylistic match. If the product has an in-house icon set, please attach it and this will be replaced.

### Rules
- **Size tokens:** 16 (inline with body), 20 (buttons), 24 (feature cards), 32–40 (hero / section headers).
- **Stroke weight** 2 px everywhere — do not mix stroke weights on the same screen.
- **Color** inherits `currentColor`. Default slate-600; primary-blue only when the icon itself is the focal point (e.g. feature card hero icons).
- **No emoji, ever.**
- **Unicode chars as icons:** allowed only for mathematical / clinical symbols inside prose (≥, ≤, ±, →, μ).
- **Medical-specific icons** the kit reaches for most:
  `heart-pulse`, `activity`, `stethoscope`, `test-tube-2`, `microscope`, `brain-circuit`, `shield-check`, `line-chart`, `bar-chart-3`, `trending-up`, `file-text`, `users`, `hospital`, `flask-conical`, `clipboard-list`, `award` (for patents), `book-open` (for publications).

CDN usage:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="heart-pulse"></i>
<script>lucide.createIcons();</script>
```

---

## Known caveats

1. **No source of truth was attached.** The entire system is inferred from a written brief. Once a real site / Figma / slide deck is attached, this needs a rebuild pass.
2. **Fonts are Google Fonts substitutes.** Inter Tight + IBM Plex Sans/Mono are chosen as strong, free, Cyrillic-capable defaults. If the brand owns specific fonts (e.g. a commissioned face, a PT Root, a Manrope), please provide them.
3. **No real product screenshots.** The UI kit landing uses placeholders for the product dashboard image.
4. **Icon set is Lucide (substitute).** Replace if an in-house set exists.
