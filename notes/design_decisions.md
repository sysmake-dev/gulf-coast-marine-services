# Design Decisions

---

## About

This document records the design decisions made throughout the development of
the Gulf Coast Marine Services website, along with the reasoning behind each
choice. Its purpose is to document the rationale behind implementation
decisions and provide a reference for future maintenance, redesigns, or feature
additions.

---

## Color Decisions

### Primary Color

**Decision:** Use Deep Teal Blue (`#176B87`) as the primary brand color.

**Reasoning:**

Deep teal blue establishes a strong connection to the marine environment while
maintaining a professional and trustworthy appearance. The color evokes coastal
waters without relying on a stereotypical bright blue palette. It provides a
distinct visual identity that is appropriate for a marine service company while
remaining versatile across navigation, buttons, headings, and other primary
interface elements.

---

### Secondary Color

**Decision:** Use Dark Marine Blue (`#124B63`) as the secondary color.

**Reasoning:**

Dark marine blue provides additional depth to the primary teal palette while
reinforcing the company's connection to the water. Its darker value creates a
natural visual hierarchy and provides a strong complementary color for elements
that require greater visual weight without competing with the primary brand
color.

---

### Accent Color

**Decision:** Use Muted Sand (`#D9B36C`) as the accent color.

**Reasoning:**

Muted sand introduces a warm coastal element into the otherwise cool color
palette. The color is inspired by Florida's beaches and shoreline environments,
creating a subtle connection to Southwest Florida without making the interface
feel overly tropical or decorative.

Its muted appearance allows it to function as an accent without overwhelming
the primary teal and marine blue colors. This creates a balanced palette that
reflects the local environment while maintaining a professional presentation.

---

### Primary Text Color

**Decision:** Use Dark Slate (`#26383D`) as the primary text color.

**Reasoning:**

A dark slate color provides strong readability without relying on pure black.
The slight blue-green undertone complements the site's marine color palette and
creates a softer visual relationship between the text and surrounding interface
elements.

This is particularly useful for longer sections of service information where
excessive contrast could make the interface feel unnecessarily harsh.

---

### Secondary Text Color

**Decision:** Use Neutral Gray (`#5F6368`) as the secondary text color.

**Reasoning:**

Secondary gray provides visual separation between primary content and
supporting information without requiring additional colors. It is used for
elements such as descriptions, supporting text, and other information that
should remain readable while carrying less visual weight than headings and
primary content.

---

### Surface Background

**Decision:** Use White (`#FFFFFF`) as the primary surface background.

**Reasoning:**

White provides a clean and neutral surface for the site's content. It allows
the marine-inspired brand colors to remain visually prominent while providing
sufficient contrast for text and interface elements.

The neutral surface also helps maintain consistency across the site's different
service pages and content sections.

---

### Surface Border

**Decision:** Use Light Gray (`#DADCE0`) for interface borders.

**Reasoning:**

A restrained light gray provides separation between interface elements without
introducing unnecessary visual weight. Borders can establish structure between
cards, navigation elements, and other components while allowing the primary
color palette to remain the dominant visual identity.

---

### Page Background

**Decision:** Use Off-White (`#F5F7F6`) as the page background.

**Reasoning:**

The slightly tinted background prevents large areas of the interface from
appearing visually flat while remaining close enough to white to preserve a
clean and professional appearance. The subtle green-gray undertone also
complements the site's coastal color palette without competing with the
content.

---

## Site Architecture Decisions

### React-Based Component Architecture

**Decision:** Build the website using React and TypeScript rather than
implementing the site as a collection of independent static pages.

**Reasoning:**

The hypothetical business is expected to expand its services over time. Each
service requires its own page with structured content, making maintainability
an important consideration from the beginning of the project.

React allows recurring interface elements and page structures to be represented
as reusable components. TypeScript provides additional structure around the
application's data and component interfaces.

The decision to use React is therefore based on the problem the architecture
solves rather than the popularity of the technology.

---

### Reusable Service Page

**Decision:** Use a reusable service page structure populated by
service-specific data.

**Reasoning:**

Each service requires a consistent presentation while containing different
information. Creating a separate page implementation for every service would
unnecessarily duplicate structure and increase maintenance requirements.

Instead, the service information is separated from the page structure. The
reusable service page receives the appropriate service data and presents it
using the same underlying architecture.

This allows new services to be added without creating an entirely new page
implementation.

---

### Centralized Service Data

**Decision:** Store the service catalog in a centralized `services.ts` data
file.

**Reasoning:**

The service catalog represents the actual services offered by the organization
and should therefore have a single source of truth.

Components such as the service cards, service pages, and navigation service
panel can consume the same data rather than maintaining separate hardcoded
lists.

This reduces duplication and makes adding or modifying services more
straightforward.

---

### Service Navigation Overlay Panel

**Decision:** Use a dropdown overlay panel for service navigation rather than a
conventional expanding dropdown list.

**Reasoning:**

The business is expected to add additional services over time. A conventional
dropdown can become increasingly long as the service catalog expands,
particularly on mobile devices.

The overlay panel provides a contained interface for accessing services without
pushing other navigation elements down the page. The panel overlays the
remaining navigation items and can be opened or closed independently.

The approach maintains the existing hamburger navigation architecture while
providing a scalable way to present an expanding service catalog.

---

### Mobile-First Navigation

**Decision:** Use a hamburger navigation interface across both mobile and
desktop layouts.

**Reasoning:**

The website is designed primarily with mobile usage in mind. A consistent
hamburger navigation keeps the navigation structure predictable across screen
sizes and avoids introducing a large horizontal navigation system that becomes
increasingly difficult to accommodate as the service catalog grows.

The navigation can also be expanded without requiring a complete redesign of
the header when additional services are introduced.

---

### Service-Specific Hero Images

**Decision:** Use a different hero background image for each individual service
page.

**Reasoning:**

Each service represents a different aspect of the organization's work. Using
service-specific imagery allows the visual introduction of each page to
reinforce the particular service being presented.

The image is selected from the service's data rather than being hardcoded
directly into the reusable service hero component. This preserves the reusable
structure while allowing each service page to maintain its own visual identity.

---

### Concise Service Content

**Decision:** Keep individual service pages concise and organized into clearly
defined sections.

**Reasoning:**

The purpose of a service page is to help a prospective customer understand what
the service is, what Sysmake offers through the service, what the process
involves, and what outcome they can expect.

The pages therefore avoid excessive paragraphs and large lists of features.
Information is divided into focused sections so visitors can understand the
service without having to read an unnecessarily long document.

This supports the site's broader goal of communicating the organization's
services clearly and professionally.

---

### Service-Specific Approach Data

**Decision:** Store the development or service approach as structured data
rather than hardcoding the steps directly into the reusable component.

**Reasoning:**

Different services may require different approaches while still following the
same general presentation structure.

Separating the approach content from the `ServiceApproach` component allows
each service to define its own steps while the component remains responsible
only for rendering them.

This preserves consistency while allowing the process to adapt as the service
catalog expands.

---

### Accessibility and Interaction

**Decision:** Maintain accessible and predictable navigation interactions
throughout the site.

**Reasoning:**

The navigation system includes keyboard interaction such as closing the menu
with the `Escape` key, automatically closing the menu after navigation, and
communicating menu state through `aria-expanded`.

These behaviors ensure that the navigation remains usable beyond simple pointer
interaction while keeping the implementation relatively simple and
maintainable.

---

### Maintainability and Longevity

**Decision:** Prioritize reusable components, centralized data, consistent page
structures, and separation of content from presentation.

**Reasoning:**

The hypothetical organization is expected to grow beyond its initial service
catalog. The website therefore needs to accommodate future additions without
requiring substantial restructuring.

The architecture is designed so that recurring structures are implemented once
and reused, while service-specific information is stored separately. This
reduces duplication, simplifies future modifications, and allows the website to
grow alongside the organization without requiring unnecessary redevelopment.

The central design principle is that the website should remain precise and
maintainable as its requirements evolve.
