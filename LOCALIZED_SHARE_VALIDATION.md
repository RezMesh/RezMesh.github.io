# Localized Sharing Validation

The case study now provides stable language-specific URLs through `?lang=en` and `?lang=fa`. The query parameter is read before browser-locale detection, so a direct shared link deterministically opens its intended English or Farsi experience. Each active language updates the document title, description, Open Graph title, description, URL, locale, alternate locale, Twitter title and description, canonical URL, and `hreflang` alternates.

| Share URL | Result | Observation |
| --- | --- | --- |
| `/?lang=en` | Pass | The direct URL opens the English LTR version, with EN active in the language control. |
| `/?lang=fa` | Pass | The direct URL opens the Farsi RTL version, with Farsi active in the language control. |

The final visual pass confirmed that the English and Farsi direct share URLs keep the architecture diagram inside a low-light, labeled observation record. The Farsi version also renders its technical spine as the primary right-side inspection rail, while the English version preserves its left editorial index.

The fallback HTML head provides English metadata for non-JavaScript crawlers, while the client synchronizes localized tags and clean language URLs once loaded. The visual validation also identified and accepted refinements for the RTL inspection spine, Persian typography, dark diagram matting, and evidence-record treatment.
