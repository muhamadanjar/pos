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

### Git Operations — STRICTLY FORBIDDEN

**NO git write operations allowed:**
- ❌ `git commit` — FORBIDDEN
- ❌ `git push` — FORBIDDEN
- ❌ `git add` — FORBIDDEN
- ❌ `git rm` — FORBIDDEN
- ❌ `git merge` — FORBIDDEN
- ❌ `git rebase` — FORBIDDEN
- ❌ `git reset` — FORBIDDEN
- ❌ `git checkout` — FORBIDDEN
- ❌ `--force`, `--no-verify`, `--amend` flags — FORBIDDEN
- ❌ Any submodule operations — FORBIDDEN

**Only read-only operations allowed:**
- ✅ `git log` — View commit history
- ✅ `git status` — Check working tree status
- ✅ `git diff` — View changes
- ✅ `git show` — View commit details

**Why:** Part of multi-service monorepo with git submodules. All git operations coordinated at root by authorized personnel.

### Code Style

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
- Always use `@components/ui` for base components
