---
name: Mind Haven brand
description: User-approved Mind Haven logo, typography, and color palette.
---

Use the user-provided Mind Haven lockup with its maze-and-wave mark and “CHANGE BEGINS WITHIN” tagline as the brand logo. Keep Montserrat.

Approved palette and intended visual balance:
- Midnight Background: `#08111D` — about 70%
- Navy Depth: `#152743`
- Luminous Cyan: `#45C6CF` — about 20%
- Ice: `#EDF7F9`
- Pure White: `#FFFFFF` — together with Ice, about 8%
- Premium Gold: `#D9B968` — about 2%

**Why:** The user supplied the logo and this revised palette, and explicitly asked to use these colors for Mind Haven.

**How to apply:** Keep Montserrat and the revised colors consistent across Mind Haven pages, using Midnight for primary space, Navy for secondary structure, Cyan for highlights, Ice/White for legible text, and Gold sparingly for premium details.

**Compiled funnel constraint:** Tailwind arbitrary-color selectors and their HTML class names both contain literal palette colors, so they must stay aligned when the compiled funnel is recolored.

**Why:** In the landing funnel, changing only a generated CSS declaration leaves its color-specific selector unmatched and can cause sections to fall back to browser defaults.

**How to apply:** For runtime recoloring, update class tokens and their generated selectors together, preserve CSS color-function syntax, and verify computed styles; exact color overrides may need matching specificity or an inline override.

For future Mind Haven pages, aim for a premium blend of Apple's clarity, Brain.fm's focus-oriented framing, and Insight Timer's welcoming breadth. Use these as high-level references only; do not copy their layouts, copy, or assets.

**Why:** The user explicitly requested this direction for the Mind Haven redesign.

**How to apply:** Express those qualities through Mind Haven's own maze-and-wave identity, Italian content, real sessions, and approved palette.
