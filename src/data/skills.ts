export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Back-end Technologies",
    items: [
      "Node.js",
      "Express.js",
      "Socket.IO (Basic)",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    title: "Front-end Technologies",
    items: [
      "React.js",
      "Next.js",
      "HTML/CSS",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    title: "Database",
    items: [
      "MongoDB (Proficient)",
      "MS SQL",
      "PostgreSQL",
    ],
  },
  {
    title: "API Development",
    items: [
      "RESTful APIs",
      "WebSocket",
    ],
  },
  {
    title: "Cloud & DevOps Tools",
    items: [
      "Docker",
      "Render",
      "Cloudinary",
      "Jira",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Other Languages",
    items: ["C#","Java"]
  },
  {
    title: "Software Engineering",
    items: [
      "Design Patterns",
      "Microservices",
    ],
  },
];
