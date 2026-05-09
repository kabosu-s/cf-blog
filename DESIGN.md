# Design System & Implementation Rules (DESIGN.md)

This document outlines the design philosophy, tokens, and implementation rules for UI components.

## 1. Design Philosophy

"Build a UI that makes the user feel like they are working with a high-quality professional."

- **Precision**: Consistent spacing and typography.
- **Visual Polish**: Standardize dark mode support and responsive layouts.

## 2. Color Tokens (CSS Variables)

Implementation: `src/app/globals.css`

### Color Theme

ミズクラゲ（Moon Jelly）をモチーフとした、静謐で分析的なUI。

### Base Colors

- **Background:** `Moon Pearl` (Light: `oklch(0.978 0.005 247.9)`)
  - 清潔感のあるベース。わずかに青みを含んだ白。
- **Foreground:** `Bay Ink` (Light: `oklch(0.241 0.042 256.3)`)
  - 深い海の底を思わせるネイビーブラック。可読性を担保する主軸。

### Accent & Brand

- **Primary:** `Soft Lavender` (Light: `oklch(0.765 0.095 297.3)`)
  - クラゲの核心部（生殖腺）をイメージ。主要なアクション要素。
- **Secondary / Highlight:** `Rim Blue` (Light: `oklch(0.845 0.060 205.4)`)
  - 傘の外縁が光を反射した際の発光色。ホバーや選択状態に使用。
- **Data Accents:** `Quiet Cyan`, `Signal Violet`
  - グラフやステータス表示に使用する、彩度を抑えたプロフェッショナルな配色。

## 3. Global Layout & Typography

Implementation: `src/app/globals.css`

### Typography
- **Latin:** `Inter`
- **Japanese**: Noto Sans JP (Weights: 400-700)
- **Base Style**: `size: 16px/1rem`, `weight: 400`, `line-height: 24px`
- **Scale**:
  - `xs`: 12px/0.75rem
  - `sm`: 14px/0.875rem
  - `base`: 16px/1rem (Base)
  - `md`: 20px/1.25rem
  - `lg`: 24px/1.5rem
  - `xl`: 30px/1.875rem
  - `2xl`: 36px/2.25rem
  - `3xl`: 72px/4.5rem
  - `4xl`: 88px/5.5rem

### Spacing Scale

- `xs`: 4px
- `sm`: 8px
- `md`: 12px
- `base`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 40px
- `3xl`: 64px

## 4. Interaction & Texture (Morphous Specs)

### Glassy Membrane (カード/ポップオーバー)

- **Radius:** 一律 `0.5rem (8px)`。
- **Background:** `oklch(... / 0.7)` 等のアルファ値を用い、`backdrop-blur-md` を併用する。
- **Shadow:** 物理的な影ではなく、`Rim Blue` の微かなグロー（外光）を `0 0 15px` 程度で適用。

### Tentacle Dividers (境界線)

- 境界線は `oklch(... / 0.12)` 程度の極めて薄いラインを使用。
- 「区切る」のではなく「境界を示す」程度の繊細さを維持する。

### Interaction States

- **Hover:** 要素が浮き上がるのではなく、背後の光が強まる（`brightness-110`）ような変化。
- **Active:** `Soft Lavender` が内側から発光するようなグラデーションの変化を許容。

## 5. Component-Level Rules

### Anatomy and Variants

- **Spacing**: Must use tokens from the defined spacing scale.

### States and Interaction

Every component must define and handle the following states:

- **Default**: Base appearance.
- **Hover**: Shift shadow (e.g., shadow disappears) or change background color vividly.
- **Focus-visible**: Must have a distinct, thick outline (e.g., `発光を伴う ring-offset と ring-4`).
- **Active**: "Pressed" effect (shadow disappears or reverses).
- **Disabled**: Lower opacity or grayscale, but must maintain border visibility.
- **Loading**: Use specific loading indicators or skeletons.
- **Error**: High-contrast error states using `feedback.danger`.

### Behavior

- **Pointer/Touch**: Hit targets must be minimum 44x44px.
- **Keyboard**: Must be fully keyboard-operable.
- **Responsive**: Must specify behavior for different viewport sizes.
- **Edge Cases**: Must handle long-content (truncation or wrapping), overflow, and empty-states.

## 6. Accessibility / Content Standards

### Accessibility Requirements

- **Target**: WCAG 2.2 AA.
- **Keyboard-First**: All interactive elements must be keyboard-accessible.
- **Focus Indicators**: Focus states must be highly visible; hidden indicators are prohibited.
- **Contrast**: All color combinations must meet AA contrast standards.
- **Acceptance Criteria**: Accessibility rules must be testable in implementation.

### Content and Tone Standards

- **Tone**: Concise, confident, and implementation-focused.
- **Labels**: Use descriptive actions (e.g., "Save Changes" instead of "Submit").

## 7. Constraints & Do/Don't

- **Do:**
  - `z-index` を意識し、膜が重なっているような階層構造を CSS で表現すること。
  - グラフの線は `stroke-width: 1.5` 程度にし、繊細さを保つこと。
- **NG Items**:
  - Do NOT overuse shadows.
  - Do not use blurred shadows or gradients.
  - Do not allow low-contrast text.
  - Do not introduce one-off spacing or typography exceptions.
  - Do not use ambiguous labels or non-descriptive actions.

## 8. QA Checklist

- [ ] Contrast ratios meet WCAG 2.2 AA standards.
- [ ] Focus states are highly visible and keyboard-operable.
- [ ] Typography follows the defined scale and base styles.
- [ ] Spacing uses only the defined tokens.
- [ ] All component states (hover, focus, disabled, etc.) are implemented.
- [ ] Responsive behavior and edge cases are handled.
- [ ] No one-off exceptions or raw hex values are used in guidance.
