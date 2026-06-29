# Project Guidelines (GEMINI.md)

This document defines the foundational mandates and workflows for this project. Adhere to these rules to ensure consistency, accessibility, and maintainability.

## 1. Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Library**: React 19 (Server Components first)
- **Language**: TypeScript (Strict Mode)
- **Styling**: CSS Modules or global.css with CSS Variables

## 2. Architecture & Directory Structure
- `src/app/`: Page components and routing.
- `src/components/ui/`: Reusable, atomic UI components. (Naming: `PascalCase.tsx`)
- `src/server/`: Edge-compatible logic and server-only utilities.
- `src/domain/`: Domain models and type definitions.
- `public/`: Static assets (images, fonts, etc.).

## 3. Coding Conventions

### 3.1 TypeScript & React
- **General Components**: 再利用可能なコンポーネントは、一貫性と名前付きエクスポートの利点を活かし `export const ComponentName = ({ props }: Props) => { ... }`を使用する。
- **Routing Files (Page/Layout etc.)**: Next.jsの規約に従い `export default (async) function PageName() { ... }` を許容する。
- **Types**: Define `interface` in the same file as the component.
- **Client Components**: Only use `"use client";` when browser APIs (`window`, `localStorage`) or React hooks (`useState`, `useEffect`) are required.
- **Next.js API**: Always treat `params` and `searchParams` as `Promise` and `await` them.

### 3.2 Styling
- Use CSS Variables defined in `DESIGN.md` for all styling.

## 4. Quality & Accessibility (a11y)
- **a11y First**: Target WCAG AA compliance. Use semantic HTML (`<main>`, `<header>`, `<nav>`, `<section>`).
- **ESLint**: Ensure `npm run lint` passes before any major change. Do not ignore a11y warnings.
- **Performance**: Leverage Next.js optimizations for Images, Fonts, and Server Components.

## 5. Workflow
- Follow the **Research -> Strategy -> Execution (Plan -> Act -> Validate)** cycle.
- Prioritize visual polish and interactive feedback.
