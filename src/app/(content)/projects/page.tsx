"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "@/src/data/projects";

export function ProjectSection() {
  const router = useRouter();

  return (
    <section id="projects" className="relative py-28 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Selected projects showcasing backend systems, real-time applications,
            and scalable architectures.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => router.push(`/projects/${project.id}`)}
              className="
                group relative cursor-pointer overflow-hidden rounded-xl
                border border-border bg-card/80 backdrop-blur
                opacity-0 translate-y-8 animate-fade-in
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
              style={{
                animationDelay: `${index * 120}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-xl
                  opacity-0 group-hover:opacity-100 transition-opacity
                  before:absolute before:inset-0 before:rounded-xl
                  before:bg-primary/20 before:blur-xl
                "
              />

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions (STOP propagation) */}
                <div className="flex gap-4 text-sm">
                  <a
                    href={project.repo}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="text-primary hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
