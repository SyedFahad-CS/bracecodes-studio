# Bracecodes Studio

A premium digital agency portfolio built with **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Sanity CMS**. Featuring cinematic animations, an editorial design aesthetic, and a headless content management system for blog posts and project case studies.

---

## ✨ Features

- **Sophisticated Minimalist Design** — Clean editorial typography, micro-animations, and a premium feel
- **Cinematic Animations** — Scroll-triggered reveals, text animations, and smooth page transitions powered by Framer Motion
- **Sanity CMS Integration** — Manage blog posts, projects, and case studies from an embedded Studio at `/studio`
- **Fully Responsive** — Optimized for every viewport from mobile to ultrawide
- **SEO Ready** — Dynamic meta tags, semantic HTML, and structured data via React Helmet
- **Performance Optimized** — Lazy-loaded routes, code-split bundles, and Sanity CDN-served images

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| CMS | Sanity.io (embedded Studio) |
| Routing | React Router v7 |
| Build | Vite 6 |
| Icons | Lucide React |

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**
- A [Sanity.io](https://www.sanity.io) project (free tier works)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/bracecodes-studio.git

# Navigate to the project
cd bracecodes-studio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.  
Open [http://localhost:3000/studio](http://localhost:3000/studio) to manage content in Sanity Studio.

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
bracecodes-studio/
├── components/          # Shared UI components
│   ├── animations/      # ScrollReveal, RevealText, etc.
│   └── layout/          # Navigation, Footer, Loader
├── features/            # Feature-based modules
│   ├── blog/            # Blog listing & post detail
│   ├── home/            # Hero, About sections
│   ├── services/        # Services showcase
│   ├── studio/          # Embedded Sanity Studio
│   ├── team/            # Team section
│   └── work/            # Projects, Case Studies, Detail pages
├── hooks/               # Custom React hooks (useSanity, etc.)
├── lib/                 # Sanity client & GROQ queries
├── sanity/schemas/      # Sanity document schemas
├── App.tsx              # Root app with routing
├── constants.ts         # Static data (services, nav, team)
└── types.ts             # TypeScript interfaces
```

## 📝 Content Management

All dynamic content is managed through Sanity Studio:

| Content Type | Description |
|---|---|
| **Blog Posts** | Rich text articles with categories, authors, and reading time |
| **Projects** | Portfolio entries with images, tech stack, challenge/solution narratives |
| **Case Studies** | Featured projects with key stats and deep-dive content |

Access the Studio at `/studio` after starting the dev server.

## 📄 License

This project is proprietary. All rights reserved.

---

<p align="center">
  Built with precision by <strong>Bracecodes Studio</strong>
</p>
