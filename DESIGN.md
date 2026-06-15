---
name: Precision Editorial POS
colors:
  surface: '#f2fdec'
  surface-dim: '#d3ddce'
  surface-bright: '#f2fdec'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ecf7e7'
  surface-container: '#e7f1e1'
  surface-container-high: '#e1ebdc'
  surface-container-highest: '#dbe6d6'
  on-surface: '#151e14'
  on-surface-variant: '#3d4a3b'
  inverse-surface: '#2a3328'
  inverse-on-surface: '#e9f4e4'
  outline: '#6c7b69'
  outline-variant: '#bbcbb6'
  surface-tint: '#006e21'
  primary: '#006e21'
  on-primary: '#ffffff'
  primary-container: '#47e660'
  on-primary-container: '#00631d'
  inverse-primary: '#42e35d'
  secondary: '#246c2c'
  on-secondary: '#ffffff'
  secondary-container: '#a8f5a5'
  on-secondary-container: '#2b7232'
  tertiary: '#865138'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffba9a'
  on-tertiary-container: '#7a482f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6eff7c'
  primary-fixed-dim: '#42e35d'
  on-primary-fixed: '#002105'
  on-primary-fixed-variant: '#005317'
  secondary-fixed: '#a8f5a5'
  secondary-fixed-dim: '#8dd88b'
  on-secondary-fixed: '#002105'
  on-secondary-fixed-variant: '#005316'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#fcb797'
  on-tertiary-fixed: '#341101'
  on-tertiary-fixed-variant: '#6a3a23'
  background: '#f2fdec'
  on-background: '#151e14'
  surface-variant: '#dbe6d6'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 57px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  title-lg:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  title-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
---

# Design System: Precision Editorial POS

## 1. Overview & Creative North Star: "The Kinetic Ledger"
In the world of Point of Sale systems, "standard" usually means a cluttered grid of buttons and harsh borders. This design system rejects the "calculator" aesthetic in favor of **The Kinetic Ledger**. 

Our North Star is a high-end, editorial-inspired interface that treats transactional data with the same reverence as a luxury magazine layout. We prioritize **Tonal Depth over Structural Lines**. By utilizing intentional asymmetry, breathing room, and sophisticated layering, we create an environment where high-velocity retail feels calm, focused, and premium. We don't just "process sales"; we curate the checkout experience.

---

## 2. Color & Surface Architecture
We move beyond flat UI by treating the screen as a series of physical, layered surfaces. The palette has shifted to a botanical, earthy scheme that feels organic yet professional.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning. 
Structure must be defined by background shifts. To separate a sidebar from a main feed, place a `surface-container-low` panel against a `surface` background. If an element needs to stand out, use a shift in tonal value, not a stroke.

### Surface Hierarchy & Nesting
Use the `surface-container` tiers to create "nested" depth. This mimics stacked sheets of fine paper.
*   **Base Layer:** `surface` (#f9faf8) – The primary canvas, now tinted with a hint of sage.
*   **Secondary Zones:** `surface-container-low` (#f1f3ef) – Used for utility sidebars or non-primary navigation.
*   **Active Workspaces:** `surface-container-lowest` (#ffffff) – Reserved for the most critical interactive areas, like the active cart or "Total" summary, to give them a natural "lift."
*   **Emphasis Zones:** `surface-container-high` (#e8ece6) – Used for contextual overlays or inactive states that require a "recessed" feel.

### The "Glass & Gradient" Rule
To inject "soul" into the POS, use Glassmorphism for floating modals or quick-action overlays.
*   **Floating Elements:** Use `surface-container-lowest` with an 80% opacity and `backdrop-blur-xl`.
*   **Signature Gradients:** For primary CTAs (e.g., "Complete Transaction"), transition from `primary` (#06c342) to a lighter variant at a 135-degree angle. This provides a tactile, luminous quality that feels energetic and decisive.

---

## 3. Typography: Authority Through Scale
We use **Inter** not just for legibility, but as a brand signifier. The hierarchy is designed to guide the eye through complex transactional data without overwhelming the operator.

*   **The Power Value (`display-lg`):** Reserved exclusively for the "Grand Total." It should feel authoritative and unmissable.
*   **The Editorial Header (`headline-sm`):** Use for category headers (e.g., "Apparel," "Accessories"). These should be set with slightly tighter letter-spacing (-0.02em) for a custom, bespoke feel.
*   **Data Pairs:** Use `title-sm` for labels (e.g., "Subtotal") and `title-lg` for values. This creates a clear rhythmic contrast.
*   **Micro-Copy:** `label-sm` is used for metadata (SKUs, tax rates) in `on_surface_variant` (#707a6d). Never use pure black; use our sage-tinted neutrals to maintain the organic editorial sophistication.

---

## 4. Elevation & Depth: Tonal Layering
Traditional POS systems use shadows to hide poor layout. We use elevation to imply importance.

*   **The Layering Principle:** Depth is achieved by stacking. A `surface-container-lowest` card sitting on a `surface-container-low` section creates a soft, natural lift.
*   **Ambient Shadows:** If a "floating" effect is required (e.g., a "Quick Look" product card), use an extra-diffused shadow: `shadow-[0_24px_48px_-12px_rgba(112,122,109,0.12)]`. The shadow must be tinted with our `on_surface` color to look natural, never a neutral grey.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline-variant` (#707a6d) at **15% opacity**. It should be a whisper, not a shout.

---

## 5. Components

### The "Signature" Button
*   **Primary:** High-gloss gradient (`primary` #06c342 to a lighter green), `rounded-lg`, with a subtle `white/10%` inner top-border to mimic a light source.
*   **Secondary:** `surface-container-highest` background with `on_surface` text. No border.

### Transactional Lists
*   **Forbid Divider Lines:** Separate line items using `py-4` vertical spacing and a subtle background hover state shift to `surface-container-low`. 
*   **Visual Hierarchy:** Item names use `title-md`, while modifiers (e.g., "Extra Large," "Gift Wrap") use `body-sm` in `secondary` (#3f8643).

### Interactive Input Fields
*   **Stateful Design:** Default state is a `surface-container-high` fill. On focus, the background shifts to `surface-container-lowest` and gains a `primary` ghost-border (20% opacity).
*   **Typeface:** Use `body-lg` for input text to ensure touch-target legibility and high visual comfort for long shifts.

### Chips & Status
*   **Inventory/Status:** Use `tertiary_container` (#ffba9a) for "Low Stock" and `secondary_container` (#e0eadf) for "In Stock." These should be `rounded-full` with `label-md` typography, acting as small editorial callouts.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use whitespace as a functional tool. If the UI feels crowded, increase the `surface` padding rather than adding a border.
*   **Do** use asymmetrical layouts for the dashboard. A wider "Product Grid" paired with a slimmer "Cart" creates a modern, editorial balance.
*   **Do** prioritize `on_surface` (#181d17) for primary text to maintain the professional botanical aesthetic.

### Don't:
*   **Don't** use 100% opaque borders. They break the fluid, layered illusion of the system.
*   **Don't** use standard "Success Green." Use our specific `primary` botanical green or `tertiary` apricot accents to maintain the sophisticated palette.
*   **Don't** use standard "drop shadows." If it doesn't look like ambient light hitting a surface, it’s too heavy.
*   **Don't** use dividers in the cart. Let the alignment of the numbers and the weight of the typography create the columns.

---

## 7. Tailwind CSS v4 Implementation Note
Leverage the `@theme` block to map these Material tokens. Use the `spacing` scale to ensure touch-targets are always at least `48px` high, even when the visual container appears smaller through tonal shifts.
