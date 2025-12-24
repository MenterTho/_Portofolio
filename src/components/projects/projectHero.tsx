import Image from "next/image";
import { Project } from "@/src/data/projects";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
