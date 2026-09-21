# Content editing guide

## Canonical identities

Do not change the visible creator name from **Soheil Mozaffari**.

Current public identity links are recorded in `docs/IDENTITY_LINKS.md`.

## Product naming

- Current product: **RezMesh**
- Historical/alternative product name: **RezvanMesh**

Use RezvanMesh primarily on the About page and structured identity context, not as a competing current product name.

## Beta wording

Approved public status:

> **RezMesh Beta is coming soon.**

and/or:

> **For Beta access, contact Soheil Mozaffari directly.**

Do not add a header `BETA` badge unless the availability model changes.

## Localized content

Editable structured copy for the detail pages is mirrored in:

- `src/content/en.json`
- `src/content/fa.json`
- `src/content/ar.json`

The generated HTML is already included in this handover package. When making future content changes, update the relevant language route and its metadata together. Persian and Arabic should be edited as native technical prose rather than mechanically mirroring English sentence structure.

## Homepage

The homepage keeps the approved interactive SVG/CSS/JavaScript visual system. English, Persian and Arabic homepages are independent static documents at `/`, `/fa/`, and `/ar/`.

## SEO

When adding a route, update all of the following together:

1. English page
2. Persian equivalent
3. Arabic equivalent
4. canonical URL
5. `hreflang` set
6. `sitemap.xml`
7. internal links
8. title / meta description / Open Graph metadata
