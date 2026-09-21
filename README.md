# RezMesh website

## Public languages
- English: `/`
- Persian: `/fa/`
- Arabic: `/ar/`

Each substantive product route has language equivalents and self-referencing canonical metadata.

## Identity
- Soheil Mozaffari: https://smozaff.github.io/
- LinkedIn: https://www.linkedin.com/in/sohmozaffari/
- ORCID: https://orcid.org/0009-0001-2428-1295
- BOUND Method: https://bound-method.github.io/
- BOUND DOI: https://doi.org/10.5281/zenodo.22257583

## Deployment
This package is ready for the `RezMesh/RezMesh.github.io` repository. Copy the **contents of this directory** to the repository root on the `main` branch (do not upload the enclosing folder as a subdirectory).

The included `.github/workflows/static.yml` replaces the previous pnpm/Vite Pages workflow and deploys the static site directly. GitHub Pages must remain configured to use **GitHub Actions** as its source.

If replacing the existing repository contents locally, keep the repository's `.git` directory/history but remove obsolete application/build files that are no longer part of this static site before copying this package in.

## Important
The homepage contains the existing contextual SVG/CSS/JavaScript animations. Localized pages are real static routes rather than JavaScript-only language swaps.
