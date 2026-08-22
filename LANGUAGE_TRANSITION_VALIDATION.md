# Language Transition Validation

The Farsi/English control now changes language and direction immediately, then applies a 280ms direction-aware opacity and horizontal-transition treatment to the header and main content. The direction of motion matches the entering layout: toward the right for Farsi RTL and toward the left for English LTR. The animation is omitted when the browser indicates `prefers-reduced-motion`.

| View | Result | Key finding |
| --- | --- | --- |
| Desktop, 1280 × 720 | Pass | The refined system preserves the bilingual top control, promotes the RezvanMesh hero lockup, and frames the rendered diagram as a dark technical observation record. |
| Mobile, 375 × 812 | Pass | The language buttons remain clear, while the additional product lockup fits the narrow hero without overflow or competing with the primary action. |

The implementation preserves manual language selection and compiles successfully. The previously captured independent visual review confirmed the broader Signal Field design system before the accepted right-rail, observation-record, mesh-thread, and product-identity refinements were applied.
