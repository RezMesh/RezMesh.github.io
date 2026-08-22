# Bilingual Update Validation

The case-study page now exposes a persistent top-level **فارسی / EN** language control. Each option switches all visitor-facing navigation, section, evidence, attribution, and footer copy while updating the document language and reading direction for Farsi (RTL) and English (LTR).

The developer attribution is standardized as **Soheil Mozaffari** and **Soheil.Mozaffari@gmail.com** in the page’s developer section. The existing JSON-LD author already names Soheil Mozaffari.

| View | Result | Observation |
| --- | --- | --- |
| Desktop, 1280 × 720 | Pass | The new language toggle is visibly placed in the top header beside theme and repository controls; the selected Farsi state is clear and does not disturb the original technical-header rhythm. |
| Mobile, 375 × 812 | Pass | The compact toggle remains visible above the fold with distinct Farsi and English selections, alongside theme and menu controls. The RTL hero remains readable without header overflow. |

TypeScript checking and the production build both passed after the bilingual implementation. The only remaining build output is the existing non-blocking bundle-size advisory.
