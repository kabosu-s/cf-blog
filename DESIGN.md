# Design System & Implementation Rules (DESIGN.md)
This document outlines the design philosophy, tokens, and implementation rules for UI components.

## 1. Design Philosophy
"Build a UI that makes the user feel like they are working with a high-quality professional."

- **Precision**: Consistent spacing and typography.
- **Visual Polish**: Standardize dark mode support and responsive layouts.

---

## 2. Color Tokens (CSS Variables)

Implementation: `src/app/globals.css`

### Color Theme

ミズクラゲ（Moon Jelly）をモチーフとしたデザイン。

### Colors

:root {
  --background: oklch(0.978 0.005 247.9);
  --foreground: oklch(0.241 0.042 256.3);
  --card: oklch(0.945 0.012 259.8 / 0.7);
  --card-foreground: oklch(0.241 0.042 256.3);
  --popover: oklch(0.945 0.012 259.8);
  --popover-foreground: oklch(0.241 0.042 256.3);
  --primary: oklch(0.765 0.095 297.3);
  --primary-foreground: oklch(0.978 0.005 247.9);
  --secondary: oklch(0.959 0.010 252.8);
  --secondary-foreground: oklch(0.414 0.069 240.2);
  --muted: oklch(0.954 0.010 261.8);
  --muted-foreground: oklch(0.414 0.069 240.2);
  --accent: oklch(0.845 0.060 205.4);
  --accent-foreground: oklch(0.241 0.042 256.3);
  --border: oklch(0.886 0.017 259.4);
  --input: oklch(0.886 0.017 259.4);
  --ring: oklch(0.764 0.091 243.8);
  --chart-1: oklch(0.765 0.095 297.3);
  --chart-2: oklch(0.764 0.091 243.8);
  --chart-3: oklch(0.845 0.060 205.4);
  --chart-4: oklch(0.575 0.150 294.6);
  --chart-5: oklch(0.414 0.069 240.2);
  --bar: oklch(0.956 0.010 252.8);
  --bar-foreground: oklch(0.241 0.042 256.3);
  --bar-primary: oklch(0.765 0.095 297.3);
  --bar-primary-foreground: oklch(0.978 0.005 247.9);
  --bar-accent: oklch(0.922 0.020 279.9);
  --bar-accent-foreground: oklch(0.765 0.095 297.3);
  --bar-border: oklch(0.886 0.017 259.4);
  --bar-ring: oklch(0.764 0.091 243.8);
}

.dark {
  --background: oklch(0.241 0.042 256.3);
  --foreground: oklch(0.978 0.005 247.9);
  --card: oklch(0.358 0.059 242.7 / 0.7);
  --card-foreground: oklch(0.978 0.005 247.9);
  --popover: oklch(0.358 0.059 242.7);
  --popover-foreground: oklch(0.978 0.005 247.9);
  --primary: oklch(0.764 0.091 243.8);
  --primary-foreground: oklch(0.241 0.042 256.3);
  --secondary: oklch(0.497 0.059 240.1);
  --secondary-foreground: oklch(0.978 0.005 247.9);
  --muted: oklch(0.497 0.059 240.1);
  --muted-foreground: oklch(0.889 0.014 258.3);
  --accent: oklch(0.845 0.060 205.4);
  --accent-foreground: oklch(0.241 0.042 256.3);
  --border: oklch(1 0 0 / 12%);
  --input: oklch(1 0 0 / 16%);
  --ring: oklch(0.764 0.091 243.8);
  --chart-1: oklch(0.764 0.091 243.8);
  --chart-2: oklch(0.765 0.095 297.3);
  --chart-3: oklch(0.845 0.060 205.4);
  --chart-4: oklch(0.575 0.150 294.6);
  --chart-5: oklch(0.780 0.025 259.8);
  --bar: oklch(0.323 0.055 246.4);
  --bar-foreground: oklch(0.978 0.005 247.9);
  --bar-primary: oklch(0.764 0.091 243.8);
  --bar-primary-foreground: oklch(0.241 0.042 256.3);
  --bar-accent: oklch(0.497 0.059 240.1);
  --bar-accent-foreground: oklch(0.978 0.005 247.9);
  --bar-border: oklch(1 0 0 / 12%);
  --bar-ring: oklch(0.764 0.091 243.8);
}

---

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

---

## 4. Interaction & Texture (Morphous Specs)

### Glassy Membrane (カード/ポップオーバー)

- **Radius:** 一律 `0.5rem (8px)`。
- **Background:** `oklch(... / 0.7)` 等のアルファ値を用い、`backdrop-blur-md` を併用する。
- **Shadow:** 物理的な影ではなく、`Rim Blue` の微かなグロー（外光）を `0 0 15px` 程度で適用。

### Tentacle Dividers (境界線)

- 境界線は `oklch(... / 0.12)` 程度の極めて薄いラインを使用。

### Interaction States

- **Hover:** 背後の光が強まる（`brightness-110`）ような変化。
- **Active:** `Soft Lavender` が内側から発光するようなグラデーションの変化を許容。

---

## 5. Component-Level Rules

### Styling Implementation
- **Standard:** 原則として **CSS Modules** (`.module.css`) を使用する。
- **Restriction:** インラインスタイル (`style={{...}}`) は、動的に値が確定する計算（プログレスバーの幅など）を除き、**原則禁止**。
- **Naming:** ローカルスコープを活かし、簡潔なクラス名（`.root`, `.container`, `.button` 等）を推奨。


### Anatomy and Variants

- **Spacing**: 定義された Spacing Scale からトークンを使用すること。

### States and Interaction

全てのコンポーネントは以下の状態を定義・処理すること：
- **Default**: 基本の見た目。
- **Hover**: 影のシフト、または背景色の鮮やかな変化。
- **Focus-visible**: 視認性の高い `Rim Blue` のグロー（外光）を持つこと。
- **Active**: 「押された」エフェクト（グローの反転など）。
- **Disabled**: 不透明度を下げるかグレースケールにするが、境界線の視認性は維持。
- **Loading**: スケルトンまたは専用インジケータ。
- **Error**: 高コントラストなエラー状態。

### Behavior
- **Pointer/Touch**: ヒットターゲットは最小 44x44px。
- **Keyboard**: 完全にキーボード操作可能であること。
- **Responsive**: ビューポートサイズごとの挙動を指定すること。
- **Edge Cases**: 長いコンテンツの省略・折り返し、オーバーフロー、空状態のハンドリング。

---

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

---

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

---

## 8. QA Checklist

- [ ] コントラスト比が WCAG 2.2 AA を満たしている。
- [ ] フォーカス状態が可視化され、キーボード操作が可能。
- [ ] タイポグラフィとスペーシングが定義に従っている。
- [ ] インラインスタイルが排除され、CSS Modules に移行されている。
- [ ] レスポンシブ挙動とエッジケースが考慮されている。
- [ ] 生のHex値やマジックナンバーが使われていない。
