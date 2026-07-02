----
name: Precision Editorial POS
colors:
  surface: '#faf9f8'
  surface-dim: '#dadad9'
  surface-bright: '#faf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e7'
  surface-container-highest: '#e3e2e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#414845'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#727975'
  outline-variant: '#c1c8c4'
  surface-tint: '#2c6958'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#002018'
  on-primary-container: '#538f7d'
  inverse-primary: '#96d3be'
  secondary: '#4e635d'
  on-secondary: '#ffffff'
  secondary-container: '#d0e8e0'
  on-secondary-container: '#546963'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002019'
  on-tertiary-container: '#00957a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1efda'
  primary-fixed-dim: '#96d3be'
  on-primary-fixed: '#002018'
  on-primary-fixed-variant: '#0d5041'
  secondary-fixed: '#d0e8e0'
  secondary-fixed-dim: '#b5cbc4'
  on-secondary-fixed: '#0a1f1a'
  on-secondary-fixed-variant: '#364b45'
  tertiary-fixed: '#7cf8d6'
  tertiary-fixed-dim: '#5ddbba'
  on-tertiary-fixed: '#002019'
  on-tertiary-fixed-variant: '#005141'
  background: '#faf9f8'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e1'
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
We move beyond flat UI by treating the screen as a series of physical, layered surfaces. The palette has shifted to a **Deep Forest and Mint** scheme that feels authoritative, cool, and professional.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning. 
Structure must be defined by background shifts. To separate a sidebar from a main feed, place a `surface-container-low` panel against a `surface` background. If an element needs to stand out, use a shift in tonal value, not a stroke.

### Surface Hierarchy & Nesting
Use the `surface-container` tiers to create "nested" depth. This mimics stacked sheets of fine paper.
*   **Base Layer:** `surface` (#f5fbf7) – The primary canvas, now tinted with a hint of cool forest air.
*   **Secondary Zones:** `surface-container-low` (#eff5f1) – Used for utility sidebars or non-primary navigation.
*   **Active Workspaces:** `surface-container-lowest` (#ffffff) – Reserved for the most critical interactive areas, like the active cart or "Total" summary, to give them a natural "lift."
*   **Emphasis Zones:** `surface-container-high` (#e4eae5) – Used for contextual overlays or inactive states that require a "recessed" feel.

### The "Glass & Gradient" Rule
To inject "soul" into the POS, use Glassmorphism for floating modals or quick-action overlays.
*   **Floating Elements:** Use `surface-container-lowest` with an 80% opacity and `backdrop-blur-xl`.
*   **Signature Gradients:** For primary CTAs (e.g., "Complete Transaction"), transition from `primary` (#00493A) to a slightly lighter forest green variant at a 135-degree angle. This provides a tactile, luminous quality that feels energetic and decisive.

---

## 3. Typography: Authority Through Scale
We use **Inter** not just for legibility, but as a brand signifier. The hierarchy is designed to guide the eye through complex transactional data without overwhelming the operator.

*   **The Power Value (`display-lg`):** Reserved exclusively for the "Grand Total." It should feel authoritative and unmissable.
*   **The Editorial Header (`headline-sm`):** Use for category headers (e.g., "Apparel," "Accessories"). These should be set with slightly tighter letter-spacing (-0.02em) for a custom, bespoke feel.
*   **Data Pairs:** Use `title-sm` for labels (e.g., "Subtotal") and `title-lg` for values. This creates a clear rhythmic contrast.
*   **Micro-Copy:** `label-sm` is used for metadata (SKUs, tax rates) in `on-surface-variant` (#404944). Never use pure black; use our professional neutrals to maintain editorial sophistication.

---

## 4. Elevation & Depth: Tonal Layering
Traditional POS systems use shadows to hide poor layout. We use elevation to imply importance.

*   **The Layering Principle:** Depth is achieved by stacking. A `surface-container-lowest` card sitting on a `surface-container-low` section creates a soft, natural lift.
*   **Ambient Shadows:** If a "floating" effect is required (e.g., a "Quick Look" product card), use an extra-diffused shadow: `shadow-[0_24px_48px_-12px_rgba(64,73,68,0.15)]`. The shadow must be tinted with our `on-surface` color to look natural, never a neutral grey.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline-variant` (#bfc9c2) at **15% opacity**. It should be a whisper, not a shout.

---

## 5. Components

### The "Signature" Button
*   **Primary:** High-gloss gradient (`primary` #00493A to a lighter forest green), `rounded-lg`, with a subtle `white/10%` inner top-border to mimic a light source.
*   **Secondary:** Uses the `tertiary` (#00A385) mint teal to highlight secondary actions like "Add to Cart" or "Apply Discount."

### Transactional Lists
*   **Forbid Divider Lines:** Separate line items using `py-4` vertical spacing and a subtle background hover state shift to `surface-container-low`. 
*   **Visual Hierarchy:** Item names use `title-md`, while modifiers (e.g., "Extra Large," "Gift Wrap") use `body-sm` in `secondary` (#4e635d).

### Interactive Input Fields
*   **Stateful Design:** Default state is a `surface-container-high` fill. On focus, the background shifts to `surface-container-lowest` and gains a `primary` ghost-border (20% opacity).
*   **Typeface:** Use `body-lg` for input text to ensure touch-target legibility and high visual comfort for long shifts.

### Chips & Status
*   **Inventory/Status:** Use `tertiary-container` (#00c09d) for "In Stock" and `secondary-container` (#d1e8e0) for "Partial Stock." These should be `rounded-full` with `label-md` typography, acting as small editorial callouts.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use whitespace as a functional tool. If the UI feels crowded, increase the `surface` padding rather than adding a border.
*   **Do** use asymmetrical layouts for the dashboard. A wider "Product Grid" paired with a slimmer "Cart" creates a modern, editorial balance.
*   **Do** prioritize `on-surface` (#171d1a) for primary text to maintain the professional aesthetic.

### Don't:
*   **Don't** use 100% opaque borders. They break the fluid, layered illusion of the system.
*   **Don't** use standard "Success Green." Use our specific `primary` forest green or `tertiary` mint accents to maintain the sophisticated palette.
*   **Don't** use standard "drop shadows." If it doesn't look like ambient light hitting a surface, it’s too heavy.
*   **Don't** use dividers in the cart. Let the alignment of the numbers and the weight of the typography create the columns.

---

## 7. Tailwind CSS v4 Implementation Note
Leverage the `@theme` block to map these Material tokens. Use the `spacing` scale to ensure touch-targets are always at least `48px` high, even when the visual container appears smaller through tonal shifts.
