# Interactive Diagram Validation

The rendered radio-to-Rust architecture diagram now has eight overlay markers mapped to its Jetpack Compose UI, RezvanRadioService, MeshCore/JNI, ActionDispatcher, RadioControllerImpl, MeshEngine, CryptoProvider, and boundary-contract components. Each marker is a focusable button that uses the site’s existing accessible tooltip primitive, so the explanation appears on hover and keyboard focus.

| View | Result | Key finding |
| --- | --- | --- |
| Desktop, 1280 × 720 | Pass | Hotspot markers are visible on the actual architecture nodes, use semantic Signal Field colors, and preserve the diagram’s existing engineering-record composition. |
| Mobile, 375 × 812 | Pass | Markers scale up to a 28px target and remain distinct over the rendered diagram; focusable button semantics retain keyboard access while mobile users can focus a marker through touch interaction. |

TypeScript checking and the production build passed after the interaction update. The independent visual review found the resulting layout consistent with the established Signal Field system.
