# SevaLink Landing – Development Task (Day 2)

## Objective

Continue building the SevaLink landing page by implementing the first two core sections: **Hero Section** and **Features Section**. These sections will appear on the homepage (`/`) and should follow the existing component structure.

The goal is to keep the design modular so each section can be reused and maintained independently.

---

# Task 1: Implement Hero Section

## File Location

Create the following file:

```
components/sections/hero.tsx
```

## Purpose

The **Hero Section** is the first section visible when users open the website.
It should clearly communicate what SevaLink does and provide a primary call-to-action.

## Requirements

The section should contain the following elements:

1. **Main Heading**

   * A clear message describing the product.
   * Example:
     *“Emergency Healthcare When You Need It Most”*

2. **Subheading / Description**

   * Brief explanation of SevaLink.
   * Example:
     “SevaLink connects patients, hospitals, and ambulance services for faster emergency medical transportation.”

3. **Call-to-Action Buttons**

   * Primary button → “Book Ambulance”
   * Secondary button → “Learn More”

4. **Illustration / Image**

   * Ambulance or healthcare-related image.
   * Place assets in:

```
public/images/
```

Example:

```
public/images/hero-ambulance.svg
```

5. **Responsive Design**

   * Mobile → stacked layout
   * Desktop → text on left, image on right

Suggested layout:

```
-----------------------------------------
| Heading                               |
| Description                           |
|                                       |
| [Book Ambulance]   [Learn More]       |
|                                       |
|             Ambulance Image           |
-----------------------------------------
```

## Expected Output

```
components/sections/hero.tsx
```

---

# Task 2: Implement Features Section

## File Location

```
components/sections/features.tsx
```

## Purpose

This section highlights the key benefits of SevaLink to users.

## Requirements

Create a grid layout containing **4 feature cards**.

Each feature should contain:

* Icon
* Title
* Short description

Suggested features:

1. **Real-Time Tracking**

   * Track ambulance location live.

2. **Fast Emergency Response**

   * Quick dispatch and arrival.

3. **Verified Hospitals**

   * Network of trusted hospitals.

4. **24/7 Availability**

   * Emergency support anytime.

Icons can be imported from:

```
lucide-react
```

Example layout:

```
-------------------------------------
| Feature | Feature | Feature | Feature |
-------------------------------------
```

On smaller screens:

```
Feature
Feature
Feature
Feature
```

---

# Task 3: Integrate Sections into Homepage

Update the homepage file:

```
app/page.tsx
```

Import the newly created sections.

Example structure:

```tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
      </main>

      <Footer />
    </>
  );
}
```

---

# Development Guidelines

1. Use **Tailwind CSS** for styling.
2. Prefer **Server Components** unless interactivity is required.
3. Reuse components from:

```
components/ui
```

Examples:

* `Button`
* `Card`

4. Follow existing folder structure.

---

# Deliverables

By the end of the task, the following should be completed:

```
components/
 └ sections/
     ├ hero.tsx
     └ features.tsx
```

And integrated in:

```
app/page.tsx
```

---

# Acceptance Criteria

The task will be considered complete when:

* Hero section renders correctly on the homepage.
* Features section displays 4 feature cards.
* Layout is responsive for mobile and desktop.
* Code follows project structure and lint rules.
* No console errors or build issues.

---

# Estimated Effort

Total expected time:

```
6 – 7 hours
```

Breakdown:

* Hero Section → ~3–4 hours
* Features Section → ~2–3 hours
* Integration + responsiveness → ~1 hour

---

# Notes

* Keep components modular.
* Avoid hardcoding repeated UI.
* Use existing UI components from `components/ui`.

If any design or content decision is unclear, ask before implementing.
