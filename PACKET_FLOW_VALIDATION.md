# Packet-Flow Animation Validation

The architecture diagram now offers two controlled high-level packet traces. The inbound path starts at the radio controller, crosses the Kotlin JNI wrapper, and ends at MeshEngine. The outbound path reverses through the native action result, ActionDispatcher, and Android radio queue. These flows align with the implemented service, JNI, and dispatcher responsibilities without claiming remote delivery.

| View | Result | Key finding |
| --- | --- | --- |
| Desktop, 1280 × 720 | Pass | The inbound/outbound controls, pause control, and user motion-preference control sit above the diagram without diluting the technical-record layout. The active packet route is visible over the real architecture nodes. |
| Mobile, 375 × 812 | Pass | Controls wrap into a compact, readable stack. The route overlay, hotspot markers, status badge, and surrounding captions remain visible without horizontal overflow. |

The animation does not run when the browser’s `prefers-reduced-motion` setting is active. It can also be paused and manually switched to a static view at any time. TypeScript checking and the production build passed; the independent visual review found the result consistent with the Signal Field system.
