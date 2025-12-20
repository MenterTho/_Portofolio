export type Project = {
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

    image: "../../public/images/zeroMovie",
    gallery: [
      "/projects/smart-cinema/1.png",
      "/projects/smart-cinema/2.png",
      "/projects/smart-cinema/3.png"
    ],
    video: "https://www.youtube.com/watch?v=Hv5FI1u5by8",

    repo: "https://github.com/MenterTho/Zero_Movie",
    live: "https://zero-movie-fe-v2.onrender.com"
  },

  {
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

    image: "../../public/images/steamClone/homepage.png",
    gallery: [
      "/projects/steamhub/1.png",
      "/projects/steamhub/2.png"
    ],
    video: "https://youtu.be/zZd_RgvPfic",

    repo: "https://github.com/MenterTho/SteamClone",
    live: "https://steamhub.vercel.app"
  },

  {
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

    image: "../../public/images/realtimeChat/homepage.png",
    gallery: [
      "/projects/realtime-chat/1.png",
      "/projects/realtime-chat/2.png"
    ],
    video: "https://www.youtube.com/embed/VIDEO_ID",

    repo: "https://github.com/MenterTho/Realtime_chat",
    live: "https://realtime-chat-oo5w.onrender.com"
  }
];
