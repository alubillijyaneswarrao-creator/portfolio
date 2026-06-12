# Modern Premium Corporate Portfolio - Alubilli Jyaneswar Rao

A clean, premium, corporate-style personal portfolio website for a Software Engineer, AI/ML Engineer, and Full Stack Developer. Blends the aesthetics of Fortune 500 tech landing pages and top-tier tech portfolios.

---

## 🚀 Technology Stack

- **Core**: React (v19) + TypeScript + Vite
- **Styling**: Tailwind CSS (v4)
- **Animations**: Framer Motion (v12)
- **Icons**: Lucide React
- **Design System**: Dark/Light mode support, glassmorphic cards, smooth page scroll, dynamic progress indicators, responsive layouts.

---

## 📂 Folder Structure

```
portfolio/
├── dist/                     # Optimized production build bundles
├── public/                   # Static public assets
├── src/
│   ├── assets/               # Local images & vectors
│   ├── components/           # Modular UI section components
│   │   ├── Navbar.tsx        # Sticky glassmorphism header & responsive hamburger menu
│   │   ├── Hero.tsx          # Fullscreen splash section with role-typewriter rotation
│   │   ├── TechIllustration.tsx # Premium SVG vector tech/processor diagram
│   │   ├── About.tsx         # Educational records, core competency highlights
│   │   ├── Skills.tsx        # Technical arsenal split by category tabs and progress bars
│   │   ├── Experience.tsx    # Vertical career & training milestone timelines
│   │   ├── Projects.tsx      # Case studies grid with hover detail overlays & direct action links
│   │   ├── Certifications.tsx # Verifiable badge catalog cards
│   │   ├── Education.tsx     # Full academic history cards highlighting grades
│   │   ├── Achievements.tsx  # Scroll-activated stats counters
│   │   ├── Contact.tsx       # Secure messaging center with full validation forms
│   │   └── Footer.tsx        # Brand signature & network anchors
│   ├── App.tsx               # Entry coordinator, scroll progress context & theme provider
│   ├── index.css             # Directives & custom Tailwind v4 theme variables
│   └── main.tsx              # React mounting root
├── package.json              # Bundling configurations & dependency references
├── tsconfig.json             # Compiler target selections
└── vite.config.ts            # Vite compile plugins config
```

---

## 🛠️ Installation & Getting Started

1. Clone or navigate to the directory:
   ```bash
   cd portfolio
   ```

2. Install all development dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. Compile a production bundle:
   ```bash
   npm run build
   ```
   This generates an optimized, minified compilation inside the `dist/` directory.

---

## 🎨 Styling & Theme Adjustments

Tailwind v4 theme styling is configured directly in `src/index.css` under the `@theme` directive:

- **Primary Slate/Navy**: `#0F172A`
- **Secondary Royal Blue**: `#2563EB`
- **Accent Cyan**: `#06B6D4`

Dark mode class toggle adds `.dark` to the `html` document root. Local storage automatically tracks and persists user preferences between visits.
