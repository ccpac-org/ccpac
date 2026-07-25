# CCPAC Official Website

Official website for the **Chittagong College Physics & Astronomy Club (CCPAC)**, built with **Astro**, **Tailwind CSS**, and **TypeScript**, managed using **Bun**.

---

## 🚀 Quick Start

### Prerequisites
Make sure you have [Bun](https://bun.sh/) installed on your machine.

```bash
bun --version
```

### Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ccpac-org/ccpac.git
   cd ccpac
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start the development server**
   ```bash
   bun run dev
   ```
   Open `http://localhost:4321` in your browser.

---

## 🛠 Available Scripts

All scripts should be executed using **`bun`**:

- `bun run dev` — Starts the local Astro development server with live reload.
- `bun run build` — Builds the static production site to the `dist/` directory.
- `bun run preview` — Previews the production build locally.

---

## 📁 Project Structure

```text
official-ccpac/
├── archive/               # Legacy raw HTML files (kept for reference)
├── public/                # Static public assets
│   └── images/            # Organized site image assets
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Header.astro           # Global sticky navigation bar
│   │   ├── Footer.astro           # Site footer & Quick links
│   │   ├── MembershipModal.astro  # Registration form modal
│   │   └── UpdateModal.astro      # Event feed & update detail popup
│   ├── data/              # Decoupled TypeScript data stores
│   │   └── updates.ts             # Live updates & announcements data
│   ├── layouts/           # Page layouts
│   │   └── BaseLayout.astro       # Master HTML shell (<head>, header, footer, modals)
│   ├── pages/             # File-based routes (.astro pages)
│   │   ├── index.astro            # Homepage
│   │   ├── about.astro            # About CCPAC
│   │   ├── events.astro           # Flagship events
│   │   ├── team.astro             # Executive panel & members
│   │   └── achievers-blueprint/   # Achievers' Blueprint sub-pages
│   └── styles/            # Styling
│       └── global.css             # Tailwind imports & custom glassmorphism styles
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind theme & custom color definitions
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

---

## 🤝 Collaborator's Guide

### 1. Adding or Editing Pages
- All pages live in `src/pages/`.
- Always wrap page content inside `<BaseLayout>`:
  ```astro
  ---
  import BaseLayout from '../layouts/BaseLayout.astro';
  ---

  <BaseLayout title="Page Title - CCPAC" activePage="explore">
    <section>
      <!-- Page content here -->
    </section>
  </BaseLayout>
  ```

### 2. Updating Feed & Announcements
- Edit `src/data/updates.ts` to add or modify announcements.
- The `UpdateModal` component reads directly from this data structure.

### 3. Adding Static Images
- Store all images in `public/images/`.
- Reference them with clean root paths: `/images/your-image.jpg`.

### 4. Code & Styling Standards
- Use **Tailwind CSS** utility classes for styling.
- Custom colors like `spaceDark`, `spaceCard`, `neonCyan`, and `neonBlue` are predefined in `tailwind.config.mjs`.
- Always run `bun run build` to test for build errors before pushing your code.
