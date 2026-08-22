# Locale-Aware Language Validation

The case-study initializes its language from the browser’s preferred locales. If any locale has the `fa` language subtag, the first view loads in Farsi with RTL direction. All other locale sets—including unavailable, unknown, or unsupported locales—fall back to English with LTR direction. The existing top-level language toggle remains available for immediate manual switching.

| View | Result | Key finding |
| --- | --- | --- |
| Desktop, 1280 × 720 | Pass | The preview browser resolved to English and rendered the complete LTR case study with the EN language control active. |
| Mobile, 375 × 812 | Pass | The English fallback and compact Farsi/EN control remain visible and usable above the fold without header overflow. |

TypeScript checking and the production build passed. The independent visual review found no design amendments needed.
