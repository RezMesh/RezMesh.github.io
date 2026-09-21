# RezMesh Website — Multi-Phase Implementation & Handover Plan

**Project:** RezMesh public website redesign  
**Primary property:** `RezMesh.github.io`  
**Canonical product name:** RezMesh  
**Historical/alternative product name:** RezvanMesh  
**Primary language:** English  
**Localized languages:** Persian (`fa`) and Arabic (`ar`)  
**Primary contact:** `Soheil.Mozaffari@gmail.com`  
**Implementation intent:** Production-ready, multilingual, motion-led product website for GitHub Pages  
**Source design brief:** `RezMesh_Complete_Website_Redesign_Blueprint.md`

---

# 1. Purpose of This Plan

This document converts the approved RezMesh website redesign blueprint into an implementation program that can be handed directly to a designer, frontend engineer, AI coding agent, or delivery team.

The work is intentionally phased. The team must not begin by decorating the existing site or independently building isolated sections. The correct order is:

**audit → foundation → content/SEO → static product experience → diagram system → motion system → localization → optimization → release**

The website succeeds only when the product story, diagrams, motion, multilingual structure, SEO identity, and technical implementation reinforce the same message:

> **Communicate without cellular service or internet infrastructure.**

The central visual narrative is:

> **Conventional infrastructure disappears. Devices remain. RezMesh communication continues.**

---

# 2. Fixed Product and Editorial Decisions

These requirements are approved and should be treated as constraints rather than open design questions.

## 2.1 Hero

The hero is exclusively about **RezMesh**.

Do not feature Soheil Mozaffari, BOUND Method, ORCID, Zenodo, GitHub, source code, engineering evidence, architecture details, or development methodology in the hero.

Approved hero direction:

# RezMesh

## Communication beyond infrastructure.

**Communicate without cellular service or internet infrastructure.**

Supporting idea:

> RezMesh is designed for resilient device-to-device communication when conventional networks are unavailable, disrupted, overloaded, or out of reach.

Primary actions:

- **Explore RezMesh**
- **See How It Works**

Availability note:

> **Beta release coming soon. For Beta access, contact Soheil Mozaffari directly.**

Email:

`Soheil.Mozaffari@gmail.com`

## 2.2 Public product positioning

RezMesh is positioned primarily as **resilient civilian/off-grid communication**.

Approved scenario families include:

- earthquakes;
- floods;
- wildfires;
- infrastructure outages;
- remote hiking;
- expeditions;
- crowded events;
- conflict and communications disruption.

Conflict-related material must focus on civilian continuity, families, shelters, humanitarian coordination, and communications disruption. Do not turn the website into military/tactical branding.

## 2.3 BOUND relationship

The site must explicitly state:

> **RezMesh is developed using BOUND Method v3.0 — Boundary-Oriented Unified Development.**

This belongs below the main product narrative in an **Engineering behind RezMesh** section and on the dedicated BOUND bridge page.

## 2.4 Creator relationship

The visible professional name is always:

**Soheil Mozaffari**

The RezMesh site should connect RezMesh to Soheil Mozaffari naturally but should not turn the product homepage into a personal portfolio.

Use authoritative links to the professional website, LinkedIn, ORCID, BOUND Method website, and the BOUND DOI/Zenodo record.

Alternative transliterations/spelling variants belong in appropriate metadata/identity data where accurate, not awkward visible keyword repetition.

## 2.5 Public engineering disclosure

Do **not** create public sections centered on:

- test deficiencies;
- validation gaps;
- architecture evidence;
- internal engineering status;
- source contribution;
- open-source participation;
- internal Beta engineering checklists.

The public availability statement is simply that the **Beta release is coming soon**, with direct email contact for Beta access.

## 2.6 Languages

English is the canonical/indexable primary brand language.

The website must also provide complete:

- Persian localization;
- Arabic localization.

Persian and Arabic are first-class RTL experiences, not partially translated overlays.

---

# 3. Delivery Principles

## 3.1 Meaning before motion

Every animation must communicate a product concept. Decorative motion is not sufficient.

Approved animation purposes include:

- infrastructure disappearing;
- devices discovering one another;
- a local path forming;
- a message traveling;
- an alternate route becoming available;
- an emergency alert propagating;
- radio activity changing with power state;
- a scenario changing from centralized connectivity to local communication.

If a motion element cannot explain something, remove it.

## 3.2 Static truth first

Every animated diagram must first work as a clear static diagram.

Implementation sequence for every major visualization:

1. define the information;
2. create the static composition;
3. validate labels and relationships;
4. make it responsive;
5. make it accessible;
6. only then animate it.

This prevents motion from hiding weak information design.

## 3.3 Mobile is a separate composition problem

Do not simply shrink desktop diagrams.

For each signature visualization, create:

- desktop composition;
- tablet adaptation;
- mobile composition;
- reduced-motion final state.

## 3.4 Claims remain restrained

Avoid claims such as:

- guaranteed delivery;
- unlimited range;
- universal compatibility;
- unbreakable communication;
- precise battery/runtime gains unless separately approved;
- automatic neighbor-density adaptation.

Prefer:

- resilient;
- local;
- device-to-device;
- infrastructure-independent;
- power-aware;
- designed for disruption;
- designed for continuity.

---

# 4. Target Public Information Architecture

The English site should ship with the following route model:

```text
/
/how-it-works/
/emergency-communication/
/power-management/
/scenarios/
/scenarios/disaster-response/
/scenarios/remote-hiking/
/scenarios/infrastructure-outage/
/scenarios/conflict-communications-disruption/
/about-rezmesh/
/bound-method/
/contact/
```

Localized equivalents:

```text
/fa/...
/ar/...
```

At minimum, every substantive English page must have a planned Persian and Arabic equivalent. If localization is staged internally, untranslated localized URLs must not be published as empty/thin placeholders.

---

# 5. Phase 0 — Repository, Runtime, and Content Audit

## Objective

Establish the real implementation baseline before redesign work changes the repository.

## Tasks

### Repository audit

Document:

- current framework/build system;
- GitHub Pages deployment method;
- current routing model;
- existing components;
- existing styles/tokens;
- current language implementation;
- current assets;
- current animation libraries or custom animation code;
- metadata generation;
- sitemap/robots behavior;
- current analytics, if any;
- current dependencies;
- current accessibility behavior;
- current responsive breakpoints.

### Preserve useful assets

Inventory the current site and classify every relevant asset:

```text
KEEP
REWORK
REPLACE
ARCHIVE
```

Do not preserve something merely because it already exists.

### Baseline captures

Capture:

- desktop homepage;
- mobile homepage;
- current Lighthouse/performance baseline;
- current page titles/descriptions;
- current structured data;
- current indexed URL structure;
- current language behavior.

### Deployment safety

Before major changes:

- confirm the production branch;
- confirm GitHub Pages deployment workflow;
- confirm whether the site uses a custom domain/CNAME;
- establish a preview/staging method;
- ensure redesign work cannot accidentally replace production before release approval.

## Deliverables

```text
/docs/implementation/current-state-audit.md
/docs/implementation/asset-inventory.md
/docs/implementation/route-inventory.md
/docs/implementation/deployment-notes.md
```

## Exit gate

Phase 0 is complete when another engineer can answer:

- how the current site builds;
- how it deploys;
- what can safely be removed;
- what assets are reusable;
- how preview deployments will be reviewed.

Do not begin large visual implementation before this gate.

---

# 6. Phase 1 — Technical Foundation and Design System

## Objective

Create the foundation that every page, diagram, language, and animation will share.

## 6.1 Semantic design tokens

Create centralized tokens for:

- background surfaces;
- elevated surfaces;
- primary text;
- secondary text;
- communication-path emphasis;
- emergency warning;
- critical state;
- success/reachable state;
- inactive infrastructure;
- borders;
- typography;
- spacing;
- radii;
- shadows;
- motion duration;
- motion easing;
- layout widths;
- breakpoints.

Do not scatter raw values across components.

## 6.2 Typography

The typography system must support:

- English;
- Persian;
- Arabic;
- numerals;
- technical labels;
- short diagram labels;
- long editorial content.

Typography must remain readable over cinematic/dark sections.

RTL fonts and line heights must be validated independently rather than assumed to match English metrics.

## 6.3 Layout primitives

Implement reusable primitives such as:

```text
PageShell
SiteHeader
SiteFooter
Section
SectionHeader
ContentGrid
MediaFrame
DiagramFrame
ScenarioFrame
CTAGroup
LanguageSwitcher
IdentityLinks
BetaContactCTA
```

Exact component names may differ, but the responsibilities should remain centralized.

## 6.4 Accessibility foundation

Before animation work:

- semantic headings;
- keyboard-visible focus;
- skip navigation;
- meaningful landmarks;
- accessible language selector;
- sufficient contrast;
- SVG titles/descriptions where needed;
- non-color-only state distinctions;
- reduced-motion infrastructure.

## 6.5 Motion infrastructure

Create a small motion orchestration layer rather than section-specific ad hoc timers.

It should support:

- activation when a section becomes relevant;
- pause when offscreen;
- replay where useful;
- reduced-motion final states;
- deterministic timelines;
- cleanup on route/language changes.

Prefer:

- SVG;
- CSS transforms;
- opacity;
- masks;
- stroke/path progression;
- small JavaScript orchestration;
- `IntersectionObserver`.

Avoid making WebGL a baseline dependency.

## Deliverables

```text
/design/tokens
/design/type-scale
/design/layout-spec
/components/foundation/*
/components/motion/*
/docs/implementation/accessibility-rules.md
/docs/implementation/motion-rules.md
```

## Exit gate

Build a small internal showcase page demonstrating:

- typography in EN/FA/AR;
- LTR and RTL layout;
- buttons;
- focus states;
- diagram container;
- reduced-motion behavior;
- mobile/desktop section layouts.

No homepage polish is required yet.

---

# 7. Phase 2 — Content Model, SEO, and Entity Foundation

## Objective

Make search identity and page semantics part of the architecture before visual implementation hardens.

## 7.1 Canonical entity model

Primary product:

**RezMesh**

Historical/alternative name:

**RezvanMesh**

Creator:

**Soheil Mozaffari**

Method:

**BOUND Method v3.0 — Boundary-Oriented Unified Development**

Relationship:

> **RezMesh is developed using BOUND Method v3.0 — Boundary-Oriented Unified Development.**

## 7.2 Three-site authority model

Use the sites for distinct authority roles:

### `RezMesh.github.io`

Product authority:

- RezMesh;
- how it works;
- emergency communication;
- power management;
- scenarios;
- Beta contact.

### `smozaff.github.io`

Person/professional authority:

- Soheil Mozaffari;
- professional profile;
- projects;
- publications/research;
- ORCID;
- RezMesh relationship;
- BOUND relationship.

### `bound-method.github.io`

Methodology authority:

- BOUND Method v3.0;
- Boundary-Oriented Unified Development;
- scholarly explanation;
- DOI/Zenodo;
- relationship to RezMesh.

Do not duplicate whole articles between the three domains.

## 7.3 Metadata templates

Define templates for:

- `<title>`;
- meta description;
- canonical URL;
- Open Graph;
- social preview;
- `hreflang`;
- language;
- robots;
- structured data.

Example title patterns:

```text
RezMesh — Communication Beyond Infrastructure
How RezMesh Works | Off-Grid Device-to-Device Communication
Emergency Communication Without Internet | RezMesh
Power-Aware Off-Grid Communication | RezMesh
RezMesh for Infrastructure Outages
RezMesh and BOUND Method v3.0
```

Avoid mechanical keyword stuffing.

## 7.4 Structured data

Implement only factually supported schema.

Potential entities:

- `SoftwareApplication` for RezMesh where appropriate;
- `Person` for Soheil Mozaffari on relevant identity/about content;
- `WebSite`;
- `WebPage`;
- breadcrumb structures where useful.

Use `sameAs` carefully for authoritative identity connections.

Do not manufacture:

- reviews;
- ratings;
- awards;
- user counts;
- affiliations;
- download counts.

## 7.5 Search-topic clusters

Content should naturally establish relevance around:

- RezMesh;
- RezvanMesh;
- resilient communication;
- off-grid communication;
- offline Android communication;
- device-to-device communication;
- emergency communication without internet;
- disaster communication;
- infrastructure outage communication;
- mesh communication;
- emergency mesh communication;
- internet shutdown communication;
- hiking without cellular coverage;
- civilian resilient communication;
- power-aware mesh communication;
- BOUND Method;
- Boundary-Oriented Unified Development;
- Soheil Mozaffari;
- Soheil Mozaffari AI;
- Soheil Mozaffari software engineering.

Do not create thin pages solely for keywords.

## Deliverables

```text
/content/content-model.md
/content/seo-keyword-map.md
/content/entity-map.md
/content/page-metadata.csv or equivalent data source
/seo/structured-data/*
/seo/hreflang-plan.md
```

## Exit gate

Before Phase 3:

- every English route has one search intent;
- every page has a unique title and description;
- RezMesh/RezvanMesh naming rules are documented;
- Soheil/BOUND connections have assigned locations;
- no page competes unnecessarily with another page for the same primary query.

---

# 8. Phase 3 — Homepage Static Experience

## Objective

Build the entire homepage as a complete, responsive, accessible static narrative before signature animations are introduced.

## Required homepage order

### 1. Hero

Message:

> **Communicate without cellular service or internet infrastructure.**

Static composition must already show the distinction between conventional infrastructure and local devices even before animation is enabled.

### 2. The problem

Headline direction:

> **Infrastructure can disappear. The need to communicate does not.**

### 3. What RezMesh changes

Before/after communication model:

```text
Conventional:
Phone → Tower → Carrier/Internet → Service → Phone

RezMesh:
Phone ↔ Nearby Device ↔ Nearby Device ↔ Destination
```

### 4. How RezMesh works

Four conceptual stages:

```text
Discover → Connect → Route → Adapt
```

### 5. Emergency communication

Headline:

> **One urgent message. A community of reachable devices.**

### 6. Smart power

Headline:

> **Communication resilience also means protecting the battery.**

Core line:

> **Spend energy when communication matters. Conserve it when survival time matters.**

### 7. Real-world scenarios

Feature:

- disaster response;
- flood;
- wildfire;
- infrastructure blackout;
- hiking/expedition;
- crowded events;
- conflict and communications disruption.

### 8. Device already in your pocket

Core message:

> **The network begins with the devices people already carry.**

### 9. Engineering behind RezMesh

Required copy:

> **RezMesh is developed using BOUND Method v3.0 — Boundary-Oriented Unified Development.**

Then connect RezMesh to Soheil Mozaffari and authoritative professional/research identities.

### 10. Availability

Headline:

> **RezMesh Beta is coming soon.**

CTA:

**Contact for Beta Access**

Email:

`Soheil.Mozaffari@gmail.com`

## Deliverables

- production-quality static homepage;
- desktop/tablet/mobile layouts;
- reduced-motion meaningful states;
- final section order;
- no placeholder copy;
- no decorative animation dependency.

## Exit gate

The homepage must make sense with:

- JavaScript disabled where practical;
- animations disabled;
- reduced motion enabled;
- mobile viewport;
- keyboard navigation.

Only after this gate should signature motion be added.

---

# 9. Phase 4 — Core Product Pages

## Objective

Build search-addressable pages that expand the homepage rather than repeat it.

## 9.1 `/how-it-works/`

Purpose:

Explain RezMesh conceptually to an intelligent non-engineer.

Structure:

1. infrastructure-independent premise;
2. device discovery;
3. local connection;
4. routing through available participating devices;
5. changing paths;
6. local communication without cellular/internet as the starting requirement;
7. links to emergency and power pages.

Primary diagram:

**Discover → Connect → Route → Adapt**

Do not expose internal source architecture.

## 9.2 `/emergency-communication/`

Purpose:

Own the emergency communication narrative.

Structure:

1. why conventional communications may fail;
2. originating emergency alert;
3. reachable peers;
4. propagation through participating devices;
5. community/shelter/medical-point scenario;
6. responsible wording about reachable local networks;
7. related disaster scenarios;
8. Beta contact.

Avoid guaranteed-delivery language.

## 9.3 `/power-management/`

Purpose:

Explain that battery survival is part of communication resilience.

Present the approved power states:

- Emergency;
- Active;
- Balanced;
- Power Saver;
- Minimal;
- Hibernation;
- Dead.

Explain conceptually that states alter communication activity and resource usage.

Do not publish precise battery-life gains without separately approved evidence.

Do not claim current neighbor-density adaptation.

## 9.4 `/about-rezmesh/`

Purpose:

Establish product identity and naming continuity.

Include:

- RezMesh mission;
- RezMesh current name;
- RezvanMesh as historical/alternative name;
- creator relationship;
- high-level product philosophy;
- BOUND relationship;
- authoritative external identity links.

This is the primary visible page for resolving the RezMesh/RezvanMesh entity relationship.

## 9.5 `/bound-method/`

Purpose:

A concise bridge from product to methodology.

Required statement:

> **RezMesh is developed using BOUND Method v3.0 — Boundary-Oriented Unified Development.**

Then direct readers to the canonical BOUND site and scholarly record.

Do not duplicate the complete BOUND methodology website.

## 9.6 `/contact/`

Purpose:

Clear Beta and professional contact.

Primary action:

`mailto:Soheil.Mozaffari@gmail.com`

Copy should state that the Beta release is coming soon and interested organizations/users can contact Soheil Mozaffari directly.

## Exit gate

All core pages:

- have unique search intent;
- have unique metadata;
- work responsively;
- cross-link logically;
- have final English copy;
- contain no internal engineering disclosure prohibited by the brief.

---

# 10. Phase 5 — Signature Diagram System

## Objective

Create a reusable visual language that makes RezMesh understandable without relying on technical source architecture.

Do not begin with animation. Produce static master diagrams first.

## 10.1 Diagram A — Infrastructure → RezMesh

### State A

```text
Phone
  │
Tower
  │
Internet
  │
Service
```

### Disruption

Tower/internet route becomes unavailable.

### State B

```text
Phone A ↔ Phone B ↔ Phone C
```

Purpose:

Teach the central RezMesh concept in one transformation.

Used in:

- hero;
- homepage problem section;
- infrastructure-outage scenario;
- conflict/disruption scenario;
- how-it-works page.

## 10.2 Diagram B — Discover / Connect / Route / Adapt

One continuous environment.

Sequence concept:

1. a device enters;
2. nearby devices are discovered;
3. local connections become available;
4. destination is outside immediate reach;
5. intermediate device participates;
6. route forms;
7. topology changes;
8. viable path changes.

Purpose:

Explain mesh behavior without exposing implementation architecture.

## 10.3 Diagram C — Emergency Broadcast

Geographic community composition:

- origin;
- residents;
- shelter;
- medical point;
- volunteers/responders;
- disconnected conventional infrastructure.

Propagation stages:

```text
T+0   Origin
T+1   Immediate reachable peers
T+2   Next reachable devices
T+3   Wider reachable local mesh
```

Final state must show finite reachable coverage, not universal/global propagation.

## 10.4 Diagram D — Smart Power

Show one device with:

- battery;
- radio activity;
- current power state;
- scan/activity rhythm.

Conceptual activity pattern:

```text
ACTIVE        frequent
BALANCED      moderate
POWER SAVER   sparse
MINIMAL       very sparse
HIBERNATION   sleeping
```

Emergency is shown as a deliberate priority state rather than a normal descending-battery step.

## 10.5 Diagram E — Scenario map grammar

Create a common visual vocabulary for:

- people/devices;
- infrastructure;
- unavailable infrastructure;
- reachable local path;
- message;
- emergency message;
- shelter;
- medical point;
- terrain;
- blocked/disrupted area.

This prevents every scenario from looking like a different product.

## Deliverables

```text
/assets/diagrams/source/*
/assets/diagrams/export/*
/docs/visual/diagram-language.md
```

Every master diagram must have:

- desktop version;
- mobile version;
- EN label set;
- localization-safe label strategy;
- reduced-motion/static final state;
- accessible description.

## Exit gate

A reviewer should understand each concept from a screenshot alone.

---

# 11. Phase 6 — Motion Implementation

## Objective

Turn the approved diagrams into purposeful explanatory motion.

## 11.1 Hero animation — “The Network Disappears”

### Narrative

1. city/landscape begins with conventional connectivity;
2. tower/cloud paths are visible;
3. a restrained disruption removes those paths;
4. devices remain;
5. two nearby devices form a local connection;
6. another device joins;
7. a message moves;
8. RezMesh proposition reaches its resting state.

### Important

No explosion.

No full-screen red alarm.

No decorative particles.

The final state must show **communication continuing while conventional infrastructure remains absent**.

## 11.2 Infrastructure transformation

A message initially attempts the conventional path.

The centralized path becomes unavailable.

The visual model reorganizes around local devices.

The message travels through the viable local path.

The same animation grammar should recur across the site so visitors learn it.

## 11.3 How-it-works motion

Animate the single continuous Discover → Connect → Route → Adapt environment.

Do not use four disconnected animated cards.

## 11.4 Emergency broadcast motion

1. origin creates alert;
2. immediate peers receive;
3. participating devices propagate;
4. reached areas remain distinguishable;
5. expansion stops naturally;
6. final state displays reachable local coverage.

The visual metaphor is **information spreading through a community**, not blast radius or infection.

## 11.5 Smart power motion

Transition through power states by visibly changing radio activity frequency.

The visitor should understand duty cycling before reading the technical term.

Emergency must be demonstrated separately as a high-priority mode.

## 11.6 Scenario motions

Each scenario uses the same product grammar in a different environment.

### Earthquake

Infrastructure disappears across an urban neighborhood. A local status message moves toward a shelter through available devices.

### Flood

A flooded area divides roads/groups. Communication follows reachable devices around the disrupted environment.

### Wildfire

An urgent local warning moves through participating devices in a rural/trail environment.

### Infrastructure outage

Central paths disappear block by block. Local device paths emerge.

### Hiking

No cellular layer exists. Hikers separated along a trail form a local communication chain through available devices.

### Crowded event

Centralized network is visually congested/unreliable; local participating devices communicate without every interaction traversing distant infrastructure.

### Conflict and communications disruption

Civilian infrastructure fades. Families, shelters, humanitarian personnel, and local coordination points remain. Local information continues moving. No weapons or targeting visuals.

## Motion engineering rules

- pause offscreen;
- avoid permanent CPU/GPU activity;
- use deterministic timelines;
- support replay only where it improves comprehension;
- respect `prefers-reduced-motion`;
- reduced motion shows the meaningful final state;
- animations must survive route/language changes;
- no layout shifts when animation begins;
- no motion-dependent access to essential text.

## Exit gate

Every animation must pass this review question:

> **What exact RezMesh concept does this motion explain?**

If the answer is vague, redesign or remove it.

---

# 12. Phase 7 — Scenario Content Expansion

## Objective

Turn scenarios into search-relevant, human-readable narratives rather than icon cards.

## Scenario hub

`/scenarios/`

Introduce the shared premise:

> Infrastructure conditions change, but the need for local communication remains.

Then route to detailed scenario pages.

## Disaster response

`/scenarios/disaster-response/`

Cover:

- earthquakes;
- floods;
- wildfires;
- shelters;
- local medical/volunteer coordination;
- disrupted conventional networks.

Do not imply RezMesh replaces official emergency systems.

## Remote hiking

`/scenarios/remote-hiking/`

Cover:

- trails outside cellular coverage;
- separated group members;
- local participating devices;
- battery awareness;
- no satellite-like range implication.

## Infrastructure outage

`/scenarios/infrastructure-outage/`

Cover:

- cellular/internet interruption;
- congestion;
- blackout;
- centralized-service unavailability;
- local communication continuity.

## Conflict and communications disruption

`/scenarios/conflict-communications-disruption/`

Focus on:

- civilians;
- families;
- shelters;
- humanitarian/local coordination;
- infrastructure disruption;
- local information exchange.

No tactical targeting, combat operations, weapons, or offensive framing.

## Exit gate

Each scenario page must have:

- one concrete communication problem;
- one RezMesh conceptual response;
- one purpose-built diagram/motion;
- one clear limitation-safe message;
- links to how-it-works/emergency/power where relevant.

---

# 13. Phase 8 — Persian and Arabic Localization

## Objective

Create complete first-class localized experiences.

## 13.1 Routing

English:

```text
/
```

Persian:

```text
/fa/
```

Arabic:

```text
/ar/
```

Maintain equivalent localized route trees.

## 13.2 Translation workflow

Do not translate directly inside components.

Use a structured content/localization source so:

- copy is reviewable;
- diagrams can consume translated labels;
- metadata is localized;
- URLs and navigation remain consistent;
- missing translations can be detected automatically.

## 13.3 RTL implementation

For Persian and Arabic:

- set correct document language;
- set `dir="rtl"`;
- mirror layout where appropriate;
- do not blindly mirror protocol/causal arrows;
- validate punctuation;
- validate numerals;
- validate mixed Latin technical terms;
- validate email/URL display;
- validate mobile navigation;
- validate diagram label collisions.

## 13.4 `hreflang`

Every translated page must declare its equivalents:

```text
en
fa
ar
x-default
```

English remains the default brand route.

## 13.5 Diagram localization

Do not bake English text into raster artwork.

Use:

- live SVG text where reliable;
- HTML overlays;
- separate language-safe vector variants where necessary.

## Exit gate

Localization is complete only when Persian and Arabic can be reviewed independently as websites—not merely as translations of screenshots.

---

# 14. Phase 9 — SEO, Identity, and Cross-Site Integration

## Objective

Strengthen the relationship between RezMesh, RezvanMesh, Soheil Mozaffari, and BOUND without damaging the product-first narrative.

## 14.1 RezMesh ↔ RezvanMesh

On `/about-rezmesh/`, establish clearly that **RezvanMesh is the historical/alternative product name associated with RezMesh**.

Use this relationship in metadata/structured identity where appropriate.

Do not repeatedly insert “RezvanMesh” into every visible page.

## 14.2 RezMesh ↔ Soheil Mozaffari

Use:

- creator attribution;
- Engineering behind RezMesh;
- contact page;
- authoritative profile links;
- structured data where appropriate.

Do not move personal branding into the hero.

## 14.3 RezMesh ↔ BOUND

Use the exact approved relationship:

> **RezMesh is developed using BOUND Method v3.0 — Boundary-Oriented Unified Development.**

Cross-link to `bound-method.github.io`.

## 14.4 Soheil identity references

Use verified/current destinations for:

- `smozaff.github.io`;
- LinkedIn;
- ORCID;
- BOUND Method;
- BOUND DOI/Zenodo record as presented in ORCID.

Do not hard-code a DOI until it has been verified against the intended ORCID record during implementation.

## 14.5 Sitemap and crawl controls

Generate:

- XML sitemap;
- correct canonical tags;
- localized alternates;
- robots rules;
- clean 404 behavior.

Ensure obsolete URLs are handled intentionally if route structure changes.

## 14.6 Internal linking

Create semantic links between:

```text
Home
→ How It Works
→ Emergency Communication
→ Power Management
→ Scenarios
→ About RezMesh
→ BOUND bridge
→ Contact
```

Scenario pages should link back into product explanations rather than becoming isolated SEO islands.

## Exit gate

Run an SEO crawl and verify:

- no duplicate titles;
- no duplicate descriptions where avoidable;
- no broken canonicals;
- no invalid `hreflang`;
- no orphan pages;
- no accidental `noindex`;
- no conflicting product naming;
- no broken authoritative identity links.

---

# 15. Phase 10 — Performance, Accessibility, and Resilience Hardening

## Objective

Ensure cinematic motion does not undermine the website's usability or discoverability.

## Performance

Audit:

- JavaScript bundle size;
- animation CPU usage;
- SVG complexity;
- font loading;
- image formats;
- lazy loading;
- offscreen animation pause;
- layout shifts;
- first contentful rendering;
- mobile network behavior.

Do not preload every scenario animation on the homepage.

## Accessibility

Verify:

- keyboard navigation;
- focus visibility;
- heading hierarchy;
- landmark structure;
- alt/accessible descriptions;
- diagram alternatives;
- language attributes;
- RTL reading order;
- contrast;
- reduced motion;
- touch target sizes;
- no information communicated only by color;
- no essential content requiring hover.

## Progressive resilience

The core product message and page content must remain understandable if:

- animation fails;
- JavaScript is delayed;
- motion is disabled;
- connection is slow;
- user is on a small mobile screen.

## Browser/device matrix

At minimum test current mainstream:

- Chrome desktop;
- Firefox desktop;
- Safari desktop where available;
- Edge;
- Chrome Android;
- Safari iOS.

Include at least one lower-powered mobile device/emulation profile for animation review.

## Exit gate

No known critical accessibility issue, broken layout, runaway animation, or major mobile performance regression remains.

---

# 16. Phase 11 — Content and Claim QA

## Objective

Review the public site as a product publication, not just a frontend build.

## Mandatory editorial checks

Search the rendered site for prohibited or risky wording.

Review all occurrences of terms such as:

```text
guarantee
guaranteed
unlimited
always
unbreakable
unstoppable
military-grade
validated
tested
battery life
hours
percent
range
coverage
```

Every occurrence must be intentional and supportable.

## Product naming QA

Visible current product name:

**RezMesh**

Historical context only where appropriate:

**RezvanMesh**

Creator:

**Soheil Mozaffari**

Method:

**BOUND Method v3.0 — Boundary-Oriented Unified Development**

## Contact QA

Exact public email:

`Soheil.Mozaffari@gmail.com`

## Availability QA

Approved public availability:

> **RezMesh Beta is coming soon.**

and/or:

> **For Beta access, contact Soheil Mozaffari directly.**

Do not expose internal Beta status details.

## Exit gate

A final content reviewer signs off the rendered EN site and localized sites, not just source strings.

---

# 17. Phase 12 — Pre-Release QA and Launch

## Objective

Release deliberately and leave the project maintainable.

## Pre-release checklist

### Functional

- all navigation works;
- language switch preserves sensible page context;
- email CTA works;
- all external links work;
- no console errors;
- no broken assets;
- 404 works;
- deep links work on GitHub Pages.

### Visual

- desktop reviewed;
- tablet reviewed;
- mobile reviewed;
- RTL reviewed;
- long translated headings reviewed;
- all diagrams readable;
- all signature animations reviewed at least once in real time.

### SEO

- canonical tags correct;
- `hreflang` correct;
- sitemap generated;
- robots correct;
- structured data validates;
- titles/descriptions final;
- social preview images final.

### Motion

- offscreen pause works;
- reduced motion works;
- mobile simplifications work;
- no continuous meaningless animation;
- no animation blocks reading/navigation.

### Content

- no placeholder text;
- no obsolete RezvanMesh branding presented as current;
- no accidental source/contribution CTA;
- no test-deficiency content;
- no architecture/evidence dashboard;
- Beta wording correct;
- BOUND statement exact;
- email correct.

## Launch sequence

1. freeze release candidate;
2. run full QA;
3. deploy preview;
4. approve EN;
5. approve FA;
6. approve AR;
7. verify production GitHub Pages configuration;
8. deploy production;
9. immediately smoke-test production URLs;
10. submit/update sitemap where applicable;
11. monitor first production sessions/errors.

---

# 18. Recommended Implementation Workstreams

The phases are sequential at the gate level, but work can be divided into controlled parallel workstreams after the foundation is stable.

## Workstream A — Product content

Owns:

- page copy;
- scenarios;
- metadata;
- localization source text;
- terminology.

## Workstream B — UI system

Owns:

- tokens;
- typography;
- layouts;
- navigation;
- responsive behavior;
- RTL foundations.

## Workstream C — Diagrams

Owns:

- diagram language;
- static SVGs;
- mobile variants;
- accessible descriptions;
- localization-safe labels.

## Workstream D — Motion

Owns:

- timelines;
- animation orchestration;
- performance;
- reduced-motion states;
- viewport activation.

Motion work starts only after corresponding static diagrams are approved.

## Workstream E — SEO/identity

Owns:

- structured data;
- canonicals;
- `hreflang`;
- sitemap;
- metadata;
- cross-site identity links;
- RezMesh/RezvanMesh relationship.

## Workstream F — QA/release

Owns:

- regression;
- accessibility;
- responsive review;
- localization review;
- performance;
- release checklist.

---

# 19. Dependency Map

```text
Phase 0 Audit
    ↓
Phase 1 Foundation
    ├───────────────┐
    ↓               ↓
Phase 2 SEO       Content preparation
    ↓               ↓
Phase 3 Static Homepage
    ↓
Phase 4 Core Pages
    ↓
Phase 5 Static Diagram System
    ↓
Phase 6 Motion
    ├───────────────┐
    ↓               ↓
Phase 7 Scenarios   Motion optimization
    └───────┬───────┘
            ↓
Phase 8 Localization
            ↓
Phase 9 SEO/Identity Integration
            ↓
Phase 10 Hardening
            ↓
Phase 11 Claim/Content QA
            ↓
Phase 12 Release
```

Critical rule:

> **Do not allow animation implementation to outrun approved information design.**

---

# 20. Suggested Repository Organization

Adapt this to the existing framework rather than forcing a rewrite solely for folder aesthetics.

```text
src/
  components/
    foundation/
    navigation/
    diagrams/
    motion/
    scenarios/
    seo/
  pages/ or routes/
  content/
    en/
    fa/
    ar/
  assets/
    brand/
    diagrams/
    environments/
    social/
  styles/
    tokens/
    global/
    rtl/
  lib/
    motion/
    i18n/
    seo/

docs/
  implementation/
  visual/
  content/
  qa/

public/
  sitemap.xml or generated equivalent
  robots.txt
  social/
```

Keep content, diagram semantics, and motion logic separable.

Do not embed large blocks of marketing copy directly inside animation code.

---

# 21. Component Acceptance Contracts

These contracts make the handover safer for human or AI implementers.

## `LanguageSwitcher`

Must:

- expose EN / فارسی / العربية;
- be keyboard accessible;
- preserve equivalent route when available;
- correctly update `lang` and `dir`;
- not rely on JavaScript-only hidden content for indexing.

## `DiagramFrame`

Must:

- support a static state;
- support localized labels;
- expose an accessible description;
- support desktop/mobile composition;
- support reduced motion;
- avoid layout shift.

## `MotionScene`

Must:

- start only when appropriate;
- pause offscreen;
- clean up timers/observers;
- provide deterministic restart;
- render a meaningful reduced-motion state;
- never contain essential copy only inside canvas pixels.

## `BetaContactCTA`

Must always use:

`Soheil.Mozaffari@gmail.com`

Approved meaning:

**Beta release coming soon / Contact for Beta access.**

## `IdentityLinks`

Must be visually subordinate to the product story and use verified canonical destinations only.

---

# 22. Animation Storyboard Deliverables

Before coding each signature animation, create a storyboard document containing:

```text
Scene name
Purpose
Question answered
Static starting state
State changes
Final resting state
Desktop composition
Mobile composition
Reduced-motion state
Labels/copy
Interaction, if any
Loop/replay behavior
Accessibility description
Performance notes
```

Required storyboard set:

1. Hero — The Network Disappears
2. Infrastructure → RezMesh
3. Discover / Connect / Route / Adapt
4. Emergency Broadcast
5. Smart Power
6. Earthquake/Disaster
7. Flood
8. Wildfire
9. Infrastructure Outage
10. Hiking/Expedition
11. Crowded Event
12. Conflict and Communications Disruption

Do not approve an animation from a verbal description alone.

---

# 23. Definition of Done by Phase

## Foundation DoD

- reusable tokens;
- responsive primitives;
- RTL-capable layout;
- accessibility baseline;
- motion infrastructure;
- preview deployment.

## Homepage DoD

- final English content;
- responsive static narrative;
- no placeholders;
- no dependency on motion for comprehension.

## Diagram DoD

- static meaning validated;
- mobile variant;
- localized-label strategy;
- accessible description.

## Motion DoD

- explains an approved concept;
- offscreen pause;
- reduced-motion state;
- mobile-safe;
- no performance regression that makes the section unpleasant.

## Localization DoD

- complete route;
- reviewed translation;
- RTL validated;
- metadata translated;
- diagrams reviewed;
- `hreflang` valid.

## SEO DoD

- unique page intent;
- canonical;
- metadata;
- structured data;
- sitemap;
- internal links;
- cross-site identity links;
- RezMesh/RezvanMesh relationship handled consistently.

## Release DoD

- production smoke test;
- no critical accessibility defects;
- no broken links;
- no accidental prohibited content;
- all three languages operational;
- handover documentation complete.

---

# 24. Final Handover Package

At project completion, the implementation team must hand over more than source code.

Required package:

```text
1. Production source
2. Build/deployment instructions
3. Route map
4. Content map
5. SEO/entity map
6. Localization workflow
7. Design tokens
8. Diagram source assets
9. Animation storyboards
10. Motion implementation notes
11. Accessibility notes
12. Performance notes
13. External identity-link registry
14. Release checklist
15. Known maintenance considerations
16. Final screenshots for EN/FA/AR desktop + mobile
```

Also document where the following can be changed without reverse-engineering the site:

- email;
- Beta availability copy;
- social links;
- ORCID;
- BOUND DOI;
- BOUND site URL;
- professional site URL;
- page metadata;
- translations;
- scenario copy;
- diagram labels.

---

# 25. Handover Instructions for the Implementing Team

The implementing team should treat the approved redesign blueprint as the **creative/product specification** and this document as the **delivery specification**.

When the two documents are read together:

- the blueprint defines **what the website should communicate and feel like**;
- this plan defines **how the work should be sequenced, verified, and handed over**.

Do not independently change the following without explicit approval:

- product name;
- hero positioning;
- BOUND relationship wording;
- public Beta positioning;
- multilingual model;
- contact email;
- civilian-first scenario framing;
- prohibition on public engineering-deficiency/source-contribution content;
- central motion narrative.

If an implementation constraint makes an approved design infeasible, do not silently substitute decorative effects. Escalate the constraint and preserve the informational purpose.

---

# 26. Final Project Principle

The finished website should make one transformation unmistakable:

```text
Conventional infrastructure available
                ↓
Conventional infrastructure unavailable
                ↓
Devices remain
                ↓
Local RezMesh relationships form
                ↓
Information continues moving
```

Everything—copy, SEO, diagrams, motion, localization, and interaction—should reinforce that transformation.

The implementation is complete when a visitor can understand **what RezMesh is, why it matters, and how its communication model differs** before they need to understand any underlying engineering terminology.
