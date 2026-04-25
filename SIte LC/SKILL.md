---
name: leukocheck-design
description: Use this skill to generate well-branded interfaces and assets for LeukoCheck (AI-скрининг риска ССЗ), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `preview/`, `ui_kits/landing/`).

LeukoCheck is a Russian-market medical-AI product for early prediction of IHD and ischemic stroke risk from CBC (ОАК) leukocyte indices (NLR, MLR, ИСНМ) plus blood pressure. Tone is expert, evidence-led, Russian-first, no emoji. The visual system is calm, border-first (not shadow-heavy), with blue `#2563EB` as the trust primary and teal `#14B8A6` as the AI accent.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and import `colors_and_type.css` for tokens. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, Russian vs English copy, which product surface), and act as an expert designer who outputs HTML artifacts or production code, depending on the need.
