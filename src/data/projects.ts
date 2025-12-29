  export type Project = {
    id: string;              
    title: string;
    role: string;
    duration: string;
    teamSize: string;

    description: string;
    achievements: string[];
    techStack: string[];

    image: string;             
    gallery?: string[];        
    video?: string;            

    repo: string;
    live?: string;
  };

  export const projects: Project[] = [
    {
      id: "smart-cinema",
      title: "SMART CINEMA",
      role: "Back-end Developer",
      duration: "Feb 2025 – May 2025",
      teamSize: "Group project · 3 members",

      description:
        "A scalable cinema booking platform featuring AI-driven movie recommendations, 360-degree cinema previews, and an AI chatbot to enhance personalization and visualization beyond traditional ticket booking systems.",

      achievements: [
        "Designed and implemented scalable RESTful APIs using Node.js, Express.js, and TypeScript for movie, booking, and payment modules.",
        "Architected efficient MongoDB schemas for managing users, movies, and bookings.",
        "Implemented secure authentication and authorization using JWT and Bcrypt.",
        "Integrated PayPal SDK for secure online payment processing.",
        "Implemented file uploads for movie assets using Multer.",
        "Automated scheduled background jobs using node-cron for system maintenance."
      ],

      techStack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Bcrypt",
        "PayPal SDK",
        "Multer",
        "node-cron",
        "Git"
      ],

      image: "/images/zeroMovie/movie_pagehome.png",
      gallery: [
        "/images/zeroMovie/trailerMovie_pagetrailer.png",
        "/images/zeroMovie/detailMovie_pagedetail.png",
        "/images/zeroMovie/roomDetail_pageroom.png",
        "/images/zeroMovie/commentMovie_pagecomment.png"
      ],
      video: "https://www.youtube.com/embed/Hv5FI1u5by8",

      repo: "https://github.com/MenterTho/Zero_Movie",
      live: "https://zero-movie-fe-v2.onrender.com"
    },

    {
      id: "steamhub",
      title: "STEAMHUB",
      role: "Back-end Developer",
      duration: "Jun 2024 – Sep 2024",
      teamSize: "Group project · 3 members",

      description:
        "A modern e-commerce platform for game purchases and rentals, featuring a flexible rental workflow and enhanced user experience compared to local competitors.",

      achievements: [
        "Developed RESTful APIs using Node.js and Express.js for authentication, game management, and payment workflows.",
        "Designed MongoDB schemas using Mongoose for users, games, and reviews.",
        "Integrated PayPal SDK for payments and Nodemailer for email notifications.",
        "Implemented JWT and Bcrypt for secure authentication.",
        "Maintained code quality using Prettier and Husky."
      ],

      techStack: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Bcrypt",
        "PayPal SDK",
        "Nodemailer",
        "Prettier",
        "Husky",
        "Git"
      ],

      image: "/images/steamClone/homeSteam_pagehome.png",
      gallery: [
        "/images/steamClone/authSteam_pageauth.png",
        "/images/steamClone/detailSteam_pagedetail.png"
      ],
      video: "https://www.youtube.com/embed/zZd_RgvPfic",

      repo: "https://github.com/MenterTho/SteamClone",
      live: "https://steamhub.vercel.app"
    },

    {
      id: "realtime-chat",
      title: "REALTIME CHAT APPLICATION",
      role: "Full-stack Developer",
      duration: "Jun 2025 – Present",
      teamSize: "Individual project",

      description:
        "A real-time chat application built with the MERN stack, supporting instant messaging, online/offline presence, and media sharing, deployed for scalability and performance.",

      achievements: [
        "Built real-time messaging using Socket.IO with online/offline presence.",
        "Implemented JWT & Bcrypt authentication and user profile management.",
        "Enabled media sharing (images, PDFs, documents) via Cloudinary & Multer.",
        "Designed MongoDB schemas using Mongoose.",
        "Deployed with Docker on Render for scalability."
      ],

      techStack: [
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB",
        "Socket.IO",
        "JWT",
        "Bcrypt",
        "Cloudinary",
        "Docker",
        "Render",
        "Git"
      ],

      image: "/images/realtimeChat/chat_pagehome.png",
      gallery: [
        "/images/realtimeChat/profileChat_pageprofile.png",
        "/images/realtimeChat/detailChat_pagedetail.png"
      ],
      video: "https://www.youtube.com/embed/VIDEO_ID",

      repo: "https://github.com/MenterTho/Realtime_chat",
      live: "https://realtime-chat-oo5w.onrender.com"
    },
    {
    id: "todolist-workspace",
    title: "TODO LIST — WORKSPACE MANAGEMENT SYSTEM",
    role: "Full-stack Developer",
    duration: "Jan 2025 – Mar 2025",
    teamSize: "Individual project",

    description:
      "A full-stack task management system built to organize work using a Workspace – Project – Task model. The application supports team collaboration, role-based access control, real-time notifications, and drag-and-drop task management to improve productivity and workflow visibility.",

    achievements: [
      "Designed a scalable RESTful API using Node.js, Express.js, and TypeScript following modular architecture.",
      "Implemented role-based access control (RBAC) for workspace members using JWT authentication.",
      "Built task management features with drag-and-drop support and real-time state synchronization.",
      "Integrated Redis for caching and request rate limiting to improve performance and security.",
      "Implemented real-time notifications using Firebase Cloud Messaging (FCM).",
      "Handled file uploads and media management using Multer and Cloudinary.",
      "Wrote unit and integration tests using Jest to ensure API reliability."
    ],

    techStack: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "JWT",
      "Firebase (FCM)",
      "Cloudinary",
      "Multer",
      "Jest",
      "Next.js",
      "Tailwind CSS",
      "React Query"
    ],

    image: "/images/todoList/home_page.png",
    gallery: [
      "/images/todoList/login_page.png",
      "/images/todoList/register_page.png",
      "/images/todoList/information_page.png",
      "/images/todoList/project_page.png",
      "/images/todoList/workspace_page.png",
      "/images/todoList/task_page.png",
      "/images/todoList/detailTask_page.png",
      "/images/todoList/detailWorkspace_page.png",
      "/images/todoList/notification_page.png"
    ],

    repo: "https://github.com/MenterTho/Todolist",
    live: "https://todolist-lac-ten.vercel.app/"
  }

];
