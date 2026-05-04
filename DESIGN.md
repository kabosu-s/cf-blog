# Design System & Implementation Rules (DESIGN.md)

This document outlines the design philosophy, tokens, and implementation rules for UI components.

## 1. Design Philosophy
> "Build a UI that makes the user feel like they are working with a high-quality professional."
- **Precision**: Consistent spacing and typography.
- **Visual Polish**: Standardize dark mode support and responsive layouts.
- **Minimalism**: Avoid overusing shadows and primary colors.

## 2. Design Tokens (CSS Variables)
Implementation: `src/app/styles/tokens.css` (or within `globals.css`)

```css
:root {
  /* Colors */
  --color-primary: #009aa3;      /* Peacock Blue */
  --color-navy: #102a43;
  --color-gold: #f2b63d;
  --color-bg-section: #f5f7f8;
  --color-border: #e3e8ee;

  /* Typography */
  --font-family-base: "Noto Sans JP", sans-serif;
  --fs-hero: 3.2rem;
  --fs-section: 2.4rem;
  --fs-sub: 1.8rem;
  --fs-body: 1.6rem;
  --fs-caption: 1.3rem;
  --lh-base: 1.8;

  /* Layout */
  --container-width: 1200px;
  --container-padding: 40px;
  --section-padding: 120px;
}
```

## 3. Global Layout & Typography
- **Hierarchy**: Create hierarchy using font size, not weight.
- **Container**: Use `.container` for max-width and centered alignment.
- **Sections**: Default padding is `var(--section-padding)`. Use `.section--alt` for alternating backgrounds.

## 4. UI Components

### Button
- **Variants**: `primary` (filled), `outline` (bordered).
- **Interaction**: Color inversion on hover.

### Card
- **Style**: Subtle border (`--color-border`), white background.
- **Interaction**: Border color changes to `--color-primary` on hover.

### Navigation
- **Style**: Text-only links.
- **Interaction**: Underline animation that expands from left to right on hover.

## 5. Specific Implementation Rules
- **Hero Section**:
    - Layout: Text (Left) / Image (Right).
    - Image: Must have a Peacock Blue (`--color-primary`) overlay with 60% opacity.
    - CTA: One Primary button + one Outline button.
- **NG Items**:
    - Do NOT overuse shadows.
    - Do NOT overuse the Primary color.
    - Do NOT use hardcoded colors in components; always use CSS variables.

## 6. Interaction Map
| Element | Interaction |
| :--- | :--- |
| Button | Hover color inversion |
| Link | Underline animation |
| Card | Border color shift to primary |
