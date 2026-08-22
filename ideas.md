# RezvanMesh Case Study — Design Directions

## Approach 1
**Theme Name:** Coordinate Field

**Very Brief Intro:** A bright engineering notebook translated into a spatial interface, using measured alignment, dimensional notation, and geometry as the page’s visual language. It feels deliberate, clear, and built for technical reading rather than promotion.

**Probability:** 0.07

## Approach 2
**Theme Name:** Mineral Instrument

**Very Brief Intro:** A tactile research artefact with quiet paper textures, layered diagrams, and warm annotation cues. It frames software engineering as a disciplined, material practice.

**Probability:** 0.04

## Approach 3
**Theme Name:** Mesh Observatory

**Very Brief Intro:** A low-light analytical environment where illuminated mesh forms float in a deep viewing field. It emphasizes visual computation, but risks overshadowing the supplied identity with atmosphere.

**Probability:** 0.09

---

# Chosen Direction: Coordinate Field

## Design Movement
**Swiss International Typographic Style** interpreted through contemporary computational-geometry documentation. The interface is a measured technical composition—not a generic landing page—with structural rules and diagrams serving as the hero material.

## Core Principles
1. **Structure before ornament:** Every line, grid, and color change must describe hierarchy, a boundary, or a relationship.
2. **Evidence at the surface:** Repository facts, named source files, and practical links lead instead of speculative product claims.
3. **Spatial clarity:** Offset columns, generous exterior margins, and consistent alignment make long-form technical content easy to scan.
4. **Modular rhythm:** Each section acts like a documented subsystem, with a label, a concise statement, and supporting detail.

## Color Philosophy
The supplied identity sets the palette. **IFEM navy** is the primary technical ink and navigation field; **mesh teal** identifies the computational/geometry layer; **signal blue** identifies models and representations; **construction amber** marks interfaces and workflow steps. A near-white ground keeps the presentation open and research-oriented, while a midnight dark mode reverses the environment without muddying these semantic distinctions.

## Layout Paradigm
The page is organized along a persistent vertical **coordinate rail** rather than a centered marketing stack. A narrow metadata column carries index markers and section titles, while content blocks step across a wider editorial field. On compact screens, the coordinate rail collapses into an inline section label without breaking reading order.

## Signature Elements
1. **Layered mesh lozenges:** The provided identity’s stacked diamond forms are abstracted into a simple, recurring structural motif.
2. **Measurement rail:** A vertical numbered guide establishes the reading sequence and anchors modular sections.
3. **Technical brackets:** Precise navy corner rules and small datum dots punctuate hero, diagram, and footer compositions.

## Interaction Philosophy
Interactions should confirm navigation and reveal hierarchy without creating spectacle. Controls have crisp inset shifts, diagrams emphasize their active layer on hover or keyboard focus, and external references are visually explicit. Motion never conceals information.

## Animation
At first reveal, mesh layers enter with 45–70ms staggered vertical offsets and opacity transitions. The coordinate rail draws only once on load; subsequent hover states use short 160–220ms transform and color transitions with a snappy ease-out. All nonessential motion is disabled under `prefers-reduced-motion`.

## Typography System
**Space Grotesk** provides the technical display voice for titles, labels, and UI; **Source Serif 4** adds an editorial, research-paper reading texture for substantial prose. Small labels are uppercase with expanded tracking. Headings are compact and assured, while paragraph measure is intentionally narrow for focused technical reading.

## Brand Essence
**RezvanMesh is a modular geometry-engineering case study for teams that value explicit computational boundaries and verifiable software structure.**

Personality: **methodical, lucid, exacting**.

## Brand Voice
Headlines state what the system does; CTAs identify the evidence being opened. Avoid abstract promises and empty superlatives.

Example lines:

> Geometry processing, expressed as explicit engineering layers.

> Inspect the repository evidence.

## Wordmark & Logo
Use the supplied IFEM Doctrine mark as the authoritative graphic identity. In the site chrome, its stacked-layer emblem appears at a generous, recognizable scale beside a bespoke letterspaced `REZVANMESH` wordmark; it is not recreated as generic text. The emblem is also used as the favicon source.

## Signature Brand Color
**Mesh Teal — `#26947E`**. This is the system’s ownable computational signal: calm, precise, and distinct against technical navy.

## Style Decisions

- The coordinate rail remains visibly continuous across the case study; every major block is indexed against the same reading spine with rules and datum nodes.
- Serif italics act as sparing research annotations rather than the dominant driver of hierarchy; Space Grotesk scale, weight, and alignment carry primary hierarchy.
- Color semantics are fixed: Mesh Teal `#26947E` denotes computational mesh/layer logic, signal blue denotes models or representations, and construction amber denotes interfaces, workflow steps, and declared status.
