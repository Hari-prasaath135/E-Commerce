# Eco-Friendly E-Commerce UI Transformation Plan

## Purpose

Transform the visual identity and product presentation of the e-commerce website into a clearly eco-friendly shopping experience while preserving the application's existing functionality and user flows.

This document describes the proposed changes for review. No application code or behavior should be changed until this plan is approved.

## Non-Negotiable Requirement: Preserve the Existing Flow

The current application flow must remain exactly as it is:

- Existing routes and URLs must continue to work.
- Existing authentication, sign-up, sign-in, OTP, password reset, and Google login flows must remain unchanged.
- Existing product browsing, category, subcategory, search, filtering, sorting, reviews, cart, wishlist, checkout, payment, order tracking, and account flows must remain unchanged.
- Existing API contracts and backend behavior must not be altered for visual changes.
- Existing form fields, validation rules, submission behavior, and error handling must continue to work.
- Existing responsive behavior must be preserved and improved only where necessary for the new visual design.
- Existing payment options, including Stripe and payment on delivery, must remain available.
- Existing user data, cart data, wishlist data, order data, and review data must not be lost or restructured as part of the UI work.

The implementation should be presentation-focused. Any new product metadata required for the eco score should be introduced in a backward-compatible way.

## New Visual Direction

### Brand concept

The website should communicate:

- Sustainable shopping
- Natural materials
- Responsible production
- Low-waste living
- Transparent product information
- Trustworthy and calm purchasing

The visual language should feel modern and clean rather than overly decorative or cartoon-like.

### Color palette

Use a green-centered palette with accessible contrast:

- Deep forest green for primary navigation, headings, and strong calls to action.
- Natural leaf green for highlights, active states, and positive eco indicators.
- Sage green for secondary surfaces and soft backgrounds.
- Warm cream or off-white for page backgrounds.
- Earth brown or muted terracotta for natural accent details.
- Charcoal text instead of pure black for softer readability.
- Red and amber should remain reserved for errors, warnings, and cautionary eco-score states.

Colors should be centralized in the existing styling system so the palette can be adjusted without editing individual components.

### Typography and visual hierarchy

- Use a highly readable sans-serif typeface for body content.
- Use stronger, slightly softer headings for product and sustainability messaging.
- Increase whitespace around product information and major page sections.
- Keep price, availability, and purchase actions visually prominent.
- Make sustainability information visible without overpowering the core shopping experience.

## Global UI Changes

### Header and navigation

- Update the header to use the green theme.
- Add subtle natural visual cues such as leaf-inspired accents or restrained botanical shapes.
- Preserve all existing navigation items, account access, cart access, and search behavior.
- Keep the mobile menu structure and interaction behavior unchanged.
- Ensure active navigation states are clear and accessible.

### Homepage

Reframe the homepage around eco-friendly shopping:

- Update the hero section to communicate sustainable products and responsible purchasing.
- Retain existing banners, deals, trending products, and best-seller sections.
- Add sustainability-focused supporting copy around existing sections rather than removing current commerce content.
- Add a compact “Why shop sustainably?” section covering reusable materials, responsible sourcing, reduced waste, or long product life.
- Include an eco-score explanation link or expandable panel.
- Preserve existing homepage data loading and product selection behavior.

### Product cards

Every product card should visually support eco-friendly product discovery:

- Keep the existing image, title, price, rating, and purchase interactions.
- Add a compact eco-score badge.
- Use a consistent badge location across home, category, search, subcategory, and recommendation lists.
- Use visual states that distinguish high, medium, and low scores without relying on color alone.
- Show a short sustainability label, such as “Low impact” or “Responsible materials,” when the data is available.
- Keep product cards readable on mobile and avoid making the eco metadata push essential pricing or purchase controls below the fold.

### Product detail pages

Add an eco-information section to the existing product detail layout:

- Display the product's eco score near the primary product information.
- Add a breakdown of the factors contributing to the score.
- Show sustainability attributes such as material, packaging, durability, recyclability, production, or shipping impact when available.
- Use plain language and avoid unsupported environmental claims.
- Preserve existing variant selection, quantity controls, reviews, wishlist, cart, and checkout actions.
- Ensure the eco section does not block or delay the existing purchase flow.

### Category, subcategory, and search pages

- Apply the same green visual system to filters, sorting controls, pagination, and empty states.
- Add an optional eco-score filter or sorting option only if it can be implemented without changing existing filter behavior.
- Preserve all current price, rating, category, and product filters.
- Make eco-score information visible in result cards so users can compare products quickly.

### Cart and checkout

- Apply the green theme to the cart and checkout surfaces.
- Preserve every current checkout step, validation rule, payment method, address flow, and confirmation page.
- Add a small sustainability reminder or packaging note only where it does not distract from payment completion.
- Do not change totals, fees, payment calculations, order creation, or payment status handling as part of the UI work.

### Account, orders, reviews, and support

- Update account settings, orders, order details, reviews, contact, and support pages to use the same visual system.
- Preserve all existing controls and data interactions.
- Allow users to see eco-related product information in order details where the product data already supports it.
- Keep review submission and review editing behavior unchanged.

## Eco Score Feature

### Purpose

The eco score gives shoppers a simple, transparent way to understand the environmental characteristics of a product.

It should be presented as guidance rather than a guarantee or certification.

### Recommended display

Use a score from `0` to `100`:

- `80–100`: Excellent
- `60–79`: Good
- `40–59`: Moderate
- `0–39`: Needs improvement

The display should include:

- Numeric score
- Descriptive rating
- Accessible text label
- Tooltip, drawer, or expandable explanation
- Optional factor breakdown

Color must not be the only indicator. Each state should also include a text label and, where appropriate, an icon or pattern.

### Suggested score factors

The score may be calculated from product attributes such as:

- Recycled, organic, renewable, or responsibly sourced materials
- Product durability and expected lifespan
- Reusability
- Recyclability at end of life
- Packaging impact
- Manufacturing and production practices
- Shipping or delivery impact
- Certifications or verified sustainability claims

The exact weighting should be confirmed before implementation. Scores must not be invented from missing data.

### Data and backward compatibility

The preferred approach is to support optional eco-score fields while keeping all existing product data valid:

- `ecoScore`
- `ecoRating`
- `ecoSummary`
- `ecoFactors`
- `sustainabilityTags`

If a product does not yet have eco-score data:

- Do not display a fabricated score.
- Display a neutral “Eco details coming soon” state, or omit the badge based on the approved UX decision.
- Keep the product fully purchasable and compatible with the existing flow.

Any backend or database changes required to provide these fields must be separately reviewed. The UI implementation should tolerate both enriched products and legacy products.

## Product Content Direction

Product presentation should prioritize environmentally responsible categories, for example:

- Reusable kitchen and household products
- Organic or recycled textile products
- Sustainable personal-care products
- Low-waste storage and travel products
- Recycled, biodegradable, or responsibly sourced accessories
- Energy-efficient or long-life products

Existing product records should not be silently renamed or deleted. Product imagery, descriptions, and sustainability claims should be updated through the appropriate content/data process.

## Accessibility and Usability Requirements

- Maintain keyboard navigation and visible focus states.
- Preserve sufficient contrast between text, backgrounds, badges, and buttons.
- Provide meaningful alternative text for product and decorative images.
- Do not communicate the score through color alone.
- Ensure badges and sustainability panels work on mobile and desktop.
- Avoid excessive animation or motion that distracts from shopping.
- Respect reduced-motion preferences where animation is introduced.
- Keep loading, empty, validation, and error states understandable in the new theme.

## Implementation Boundaries

### Included

- Theme and visual styling updates
- Layout and component presentation changes
- Eco-score badges and detail displays
- Sustainability labels, explanatory UI, and supporting copy
- Responsive and accessibility refinements related to the new design
- Product presentation updates using optional eco metadata

### Excluded unless separately approved

- Rewriting the backend architecture
- Changing authentication or authorization
- Changing payment calculations or payment providers
- Changing order creation or order status logic
- Replacing the database
- Removing existing pages or routes
- Removing existing filters, product options, reviews, or account features
- Adding environmental claims without supporting product data

## Validation Plan After Approval

The implementation should be validated in the following areas:

1. Existing routes still render correctly.
2. Sign-in, sign-up, password reset, and Google authentication still work.
3. Product browsing, search, category pages, filters, and sorting still work.
4. Cart and wishlist behavior is unchanged.
5. Both checkout paths remain functional.
6. Order confirmation, order status, and order detail pages remain functional.
7. Eco-score data is displayed correctly when present.
8. Products without eco-score data remain usable.
9. Desktop, tablet, and mobile layouts remain usable.
10. Keyboard navigation, contrast, labels, and responsive behavior are checked.
11. Client build and existing available checks complete successfully.

## Approval Decision

Before implementation, confirm:

- The proposed green visual direction.
- The score range and labels.
- The eco-score factors and weighting.
- The fallback behavior for products without eco-score data.
- Whether eco-score filtering or sorting should be added.
- Which product imagery and descriptions should be updated first.

