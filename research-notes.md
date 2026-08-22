# Verified Content Notes — RezvanMesh

## Scope correction

The published RezvanMesh repository describes an **Android peer-to-peer, off-grid communication application**, not a mesh-processing or geometry software system. The production website must therefore present this actual system and avoid unverified geometry-processing claims.

## Repository evidence

- Project purpose: resilient device-to-device messaging that does not rely on cellular towers, internet connectivity, or centralized servers.
- Primary implementation boundary: Kotlin/Jetpack Compose and Android radio service on one side; Rust mesh engine and cryptography on the other; JNI is the explicit bridge.
- Radio layer: BLE scanning, advertising and GATT; Wi-Fi Direct group formation, server socket and client handling are implemented, but relay/forwarding over Wi-Fi Direct remains a documented gap.
- Core layer: BATMAN-Adv-style routing, packet processing, power logic, sessions, and crypto wrappers in the Rust workspace.
- Security layer: vodozemac-backed X3DH-style session establishment and Double Ratchet mechanics for unicast; XChaCha20-Poly1305 plus Ed25519 signatures for sender-key group/channel messages; SQLCipher data storage.
- Evidence: Rust unit tests, Android build workflow, interface verification script, integration test harness, diagnostic/log export, and documented known limitations.
- Status: beta / functional testing; physical 2-device GATT delivery, receiver-side voice playback, and real-world 3+ device stability remain pending according to the project README.

## IFEM relationship

IFEM is a methodology for defining interfaces, contracts, responsibilities, and verification boundaries before broad implementation. RezvanMesh relates through the visible Kotlin/Rust JNI boundary, discrete radio/core/crypto responsibilities, interface verification tooling, and CI/test evidence. The site must not claim an official affiliation or certification beyond this relationship.

## Visual reference findings

The personal portfolio uses a warm paper background, ink-black editorial typography, tight all-caps technical labels, generous vertical rules, and a dark technical visual panel. The IFEM Doctrine combines IFEM navy, mesh teal, blue, and warm orange with explicit boundary diagrams. The case study should remain visually compatible while preserving its own Coordinate Field system.

## Primary sources

1. https://github.com/SMozaff/RezvanMesh
2. https://smozaff.github.io/
3. https://ifem-doctrine.github.io/
