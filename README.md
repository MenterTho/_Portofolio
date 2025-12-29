# My Portfolio

This is my personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.  
The website showcases my projects, technical skills, and experience as a Full-stack (Backend-oriented) Developer, and provides a simple way to get in touch.

Live Demo: 

---

## Features

- Modern tech stack using Next.js 16, React 19, and TypeScript
- Clean and modern UI built with Tailwind CSS and shadcn/ui
- Smooth and lightweight animations using Framer Motion
- Multi-language support (English / Vietnamese)
- Light and dark theme support
- Project showcase with detailed project pages
- Fully responsive design for all screen sizes

---

## Tech Stack

### Core
- Next.js
- React 19
- TypeScript

### UI & UX
- Tailwind CSS
- shadcn/ui (Radix UI + Tailwind)
- Framer Motion
- Lucide Icons / React Icons
- next-themes

---

## Project Structure

    ```bash
    mentertho-portfolio/
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
        │   ├── (landing)/
        │   │   └── page.tsx
        │   └── (content)/
        │       ├── about/
        │       ├── contact/
        │       └── projects/
        │           ├── page.tsx
        │           └── [id]/page.tsx
        ├── components/
        │   ├── button/
        │   ├── projects/
        │   ├── sections/
        │   ├── ui/
        │   └── ui-navbar/
        ├── data/
        │   ├── projects.ts
        │   └── skills.ts
        ├── hook/
        │   └── use_toast.tsx
        └── lib/
            └── utils.ts

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
---

## Project Structure

    - Link: https://portofolio-six-kohl-99.vercel.app

---

## Contact 
 

    - Email: tuantho.work@gmail.com
    - GitHub: https://github.com/MenterTho
    - LinkedIn: http://www.linkedin.com/in/tuantho

