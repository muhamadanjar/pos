# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server
pnpm build        # tsc -b && vite build
pnpm lint         # eslint
```

No test suite configured yet.

## Stack

- **React 19** + **Vite 8** + **TypeScript** (strict)
- **Tailwind CSS v4** — config-less, uses `@theme inline` in `src/index.css`; no `tailwind.config.js`
- **Shadcn** (radix-nova style) — components land in `src/components/ui/`
- **Zustand v5** — state stores
- **lucide-react** for icons, **radix-ui** for primitives

## Path Alias

`@/` → `src/`. Configured in both `tsconfig.app.json` (`paths`) and `vite.config.ts` (`resolve.alias`). Shadcn CLI will install components to `src/components/ui/` correctly because of this.

## Architecture

```
src/
├── layouts/        # page-level layout wrappers (e.g. pos-layout.tsx)
├── pages/
│   └── pos/
│       ├── index.tsx          # page entry, composes layout + panels
│       ├── components/        # UI components scoped to this page
│       ├── store/             # Zustand store for this page
│       └── data/              # static mock data
├── components/ui/  # shadcn primitives
└── lib/utils.ts    # cn() helper
```

No router installed. `App.tsx` directly renders the active page.

## TypeScript

`tsconfig.app.json` enforces `noUnusedLocals` and `noUnusedParameters` — all imports and parameters must be used. `verbatimModuleSyntax` is on: use `import type` for type-only imports.

## Styling

Design tokens (colors, radius, fonts) live in `src/index.css` under `@theme inline`. Do not add a `tailwind.config.*` file — v4 reads config from CSS. Shadcn CSS variables follow oklch color space.

Custom Style in folder `src/styles/`

### State Management
- **Selector pattern mandatory** — Zustand state queries must use selectors, never destructure
- **Async IIFE for side effects** — Fire-and-forget async in Zustand stores

### Package 
- Always use `pnpm` instead of `npm` for package management

## Rules

- **FORBIDDEN: ALL git write operations** — `git commit`, `git push`, `git merge`, `git rebase`, `git reset`, `git checkout`, `git branch -D`, `git rm`, `git add`, etc. but you can suggest commit message
- **Git read-only ONLY:** `git log`, `git status`, `git diff`, `git show`
- **NO --force, --no-verify, --amend, or workarounds** — Never attempt to bypass restrictions

- for files use `kebab-case` but component use `PascalCase`
- **No `any` types** — Use proper TypeScript types unless unavoidable (document why)
- **Icons:** Use `Icon` component from `@/components/icons/index.tsx` (all-in-one dynamic wrapper)
  ```typescript
  // ✅ Good
  import Icon from '@/components/icons'
  <Icon name="chevron-down" className="w-4 h-4" />
  <Icon name="settings" className="w-5 h-5" />
  
  // ❌ Bad
  import { ChevronDown, Settings } from 'lucide-react'
  import Icon from '@/components/icons/ChevronDown'
