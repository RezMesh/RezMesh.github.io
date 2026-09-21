# Homepage Overhaul — Phase 0 Baseline

**Recorded:** 2026-09-21  
**Repository:** `RezMesh/RezMesh.github.io`  
**Baseline main commit:** `7ed98abdda9148240f2bb7507ff14422b6857edc`  
**Backup branch:** `homepage-overhaul-baseline-2026-09-21`

## Baseline purpose

This snapshot freezes the homepage state immediately before the cinematic RezMesh homepage overhaul. The backup branch points to the exact baseline commit so the homepage can be restored without reverting unrelated future work.

## Files in scope

The following baseline files are preserved by the backup branch:

| File | Baseline blob SHA |
| --- | --- |
| `index.html` | `9a077035d5310165f5ba2048e3a52c0c99ee8d61` |
| `fa/index.html` | `b5bc359b97f72493078c36f96b6083ef3684b33a` |
| `ar/index.html` | `205db97755efe195588d3a955577393afb581200` |
| `assets/home.css` | `3b139264149fcabda42c9455a76706ebbcce8f69` |
| `assets/home.js` | `745edd2c89ca4955b42106c1fb2c7d69ed48e51e` |

No deeper product route is part of the homepage-overhaul rollback scope unless explicitly changed later.

## Current visual captures

Baseline captures were produced at:

- **Desktop:** 1440 × 900 — `homepage-desktop-baseline.png`
- **Mobile:** 390 × 844 — `homepage-mobile-baseline.png`

The image files are retained in the Phase 0 handover bundle. They were rendered from the baseline homepage source corresponding to the backup snapshot.

## GitHub Pages workflow

Workflow: `.github/workflows/static.yml`

Current workflow name:

> Deploy RezMesh static site to Pages

The workflow:

1. checks out `main`;
2. prepares a static `_site` artifact;
3. explicitly copies the homepage, 404, robots, sitemap, assets, product routes, Persian routes and Arabic routes;
4. asserts the existence of:
   - `_site/index.html`
   - `_site/fa/index.html`
   - `_site/ar/index.html`
   - `_site/robots.txt`
   - `_site/sitemap.xml`
5. uploads the Pages artifact;
6. deploys it with `actions/deploy-pages@v5`.

The workflow run for the baseline commit was:

- Run ID: `35592776819`
- Head SHA: `7ed98abdda9148240f2bb7507ff14422b6857edc`
- Status: **completed**
- Conclusion: **success**

All deploy job steps, including **Prepare static site artifact**, **Upload Pages artifact**, and **Deploy to GitHub Pages**, completed successfully.

## EN / FA / AR baseline status

The baseline commit contains all three homepage entry points:

- English: `/index.html`
- Persian: `/fa/index.html`
- Arabic: `/ar/index.html`

The successful Pages workflow explicitly verifies those three entry files before deployment, and the deployment completed successfully.

A fresh external HTTP GET from this execution environment is not available, so this check is based on the exact deployed artifact workflow rather than a separate third-party network probe.

## Rollback instructions

### Preferred full homepage rollback

If the overhaul changes only the homepage files listed above, restore each file from:

`homepage-overhaul-baseline-2026-09-21`

This preserves unrelated commits made elsewhere after the baseline.

### Git CLI equivalent

```bash
git fetch origin
git checkout main
git checkout origin/homepage-overhaul-baseline-2026-09-21 -- \
  index.html \
  fa/index.html \
  ar/index.html \
  assets/home.css \
  assets/home.js

git commit -m "revert: restore pre-overhaul RezMesh homepage"
git push origin main
```

### Emergency whole-branch restore

Only if the homepage overhaul is the sole work performed after the baseline and a complete rollback is intentionally required:

```bash
git reset --hard 7ed98abdda9148240f2bb7507ff14422b6857edc
```

Do **not** force-push this reset if unrelated work has landed after the baseline. Restore the scoped files instead.

## Phase 0 exit gate

**PASS**

- baseline commit recorded;
- exact backup branch created;
- five homepage implementation files preserved;
- desktop/mobile baseline captures created;
- GitHub Pages workflow verified;
- EN/FA/AR entry points verified in the successful deployment artifact;
- scoped rollback procedure documented.

Phase 1 may begin without risking the deeper RezMesh routes.
