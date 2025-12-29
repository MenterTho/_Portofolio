My Portfolio

This is a personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. It showcases my skills, projects, and provides a way to contact me.

Features

- Modern Tech Stack: Built with Next.js 16, React 19, and TypeScript.
- Beautiful UI: Styled with Tailwind CSS and shadcn/ui components.
- Smooth Animations: Animations powered by Framer Motion.
- Language Support: Switch between English and Vietnamese.
- Theming: Light and dark mode support.
- Project Showcase: Sections for featured and other projects.
- Responsive Design: Looks great on all devices.
---
Tech Stack

- Next.js - React framework for production.
- TypeScript - Typed JavaScript at scale.
- Tailwind CSS - A utility-first CSS framework.
- shadcn/ui - Re-usable components built using Radix UI and Tailwind CSS.
- Framer Motion - A production-ready motion library for React.
- React Icons - SVG react icons of popular icon packs.
- Next-Themes - An abstraction for themes in your Next.js app.

**Project Structure** 

Directory structure:
└── mentertho-_portofolio/
    ├── README.md
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tsconfig.json
    └── src/
        ├── app/
        │   ├── globals.css
        │   ├── layout.tsx
        │   ├── (content)/
        │   │   ├── about/
        │   │   │   └── page.tsx
        │   │   ├── contact/
        │   │   │   └── page.tsx
        │   │   └── projects/
        │   │       ├── page.tsx
        │   │       └── [id]/
        │   │           └── page.tsx
        │   └── (landing)/
        │       └── page.tsx
        ├── components/
        │   ├── button/
        │   │   └── backButton.tsx
        │   ├── projects/
        │   │   ├── projectGallery.tsx
        │   │   ├── projectHero.tsx
        │   │   ├── projectInfo.tsx
        │   │   └── projectLinks.tsx
        │   ├── sections/
        │   │   ├── heroSections.jsx
        │   │   └── skillSections.jsx
        │   ├── ui/
        │   │   ├── startBackground.tsx
        │   │   └── themeToggle.tsx
        │   └── ui-navbar/
        │       └── navBar.tsx
        ├── data/
        │   ├── projects.ts
        │   └── skills.ts
        ├── hook/
        │   └── use_toast.tsx
        └── lib/
            └── utils.ts

---
**Key Features**
    - Responsive UI with light/dark theme support.
    - Lightweight animations using Framer Motion.
    - Toast/notification support (using `@radix-ui/react-toast`).
    - Projects pages are populated from `src/data/projects.ts`.
    - Uses Google Fonts (Geist) and Tailwind-based custom CSS utilities.

    **Highlighted Projects (summary)**

    - SMART CINEMA — Cinema booking platform with AI-based recommendations. Live: https://zero-movie-fe-v2.onrender.com · Repo: https://github.com/MenterTho/Zero_Movie
    - STEAMHUB — Modern e-commerce platform for game purchases and rentals. Live: https://steamhub.vercel.app · Repo: https://github.com/MenterTho/SteamClone
    - REALTIME CHAT APPLICATION — Real-time chat app built with Socket.IO. Live: https://realtime-chat-oo5w.onrender.com · Repo: https://github.com/MenterTho/Realtime_chat
    - TODO LIST — WORKSPACE MANAGEMENT SYSTEM — Task/workspace management with RBAC and realtime notifications. Live: https://todolist-lac-ten.vercel.app/ · Repo: https://github.com/MenterTho/Todolist

    **Getting Started**

    1. Install dependencies:

    ```bash
    npm install
    ```

    2. Run development server:

    ```bash
    npm run dev
    ```

    Open http://localhost:3000 to view the site.

**Tech stack & main libraries**
    - Next.js 16, React 19, TypeScript
    - Tailwind CSS, PostCSS
    - Framer Motion, Lucide/React Icons
    - @radix-ui/react-toast, class-variance-authority, clsx, zod

---

**Deployment**
    - Link: 

---

**Contact / Author**

    - Email: tuantho.work@gmail.com
    - GitHub: https://github.com/MenterTho
    - LinkedIn: http://www.linkedin.com/in/tuantho

