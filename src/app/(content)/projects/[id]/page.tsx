import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";

import BackButton from "@/src/components/button/backButton";
import ProjectHero from "@/src/components/projects/projectHero";
import ProjectGallery from "@/src/components/projects/projectGallery";
import ProjectInfo from "@/src/components/projects/projectInfo";
import { StarBackground } from "@/src/components/ui/startBackground";

import { Github, ExternalLink } from "lucide-react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <main className="relative container mx-auto px-4 py-20 space-y-32">
      <StarBackground />

      <div className="opacity-0 animate-fade-in">
        <BackButton />
      </div>

      <section className="opacity-0 animate-fade-in-delay-1">
        <ProjectHero project={project} />
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <section className="opacity-0 animate-fade-in-delay-2 space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Project Overview
        </h2>

        <div
          className="
            rounded-3xl border border-border
            bg-card/70 backdrop-blur
            px-6 py-10 md:px-12
          "
        >
          <ProjectInfo project={project} />
        </div>
      </section>

      <section className="opacity-0 animate-fade-in-delay-3 space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Screenshots
        </h2>

        <ProjectGallery project={project} />
      </section>

      <section className="opacity-0 animate-fade-in-delay-4">
        <div
          className="
            relative overflow-hidden
            rounded-[2.5rem]
            border border-border
            bg-card/85 backdrop-blur-xl
            px-8 py-16 md:px-20
          "
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
              Interested in This Project?
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              This project demonstrates my approach to system design,
              clean architecture, and real-world backend problem solving.
              You can review the source code or explore the live version below.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-2
                  px-8 py-3 rounded-full
                  border border-border
                  bg-background
                  text-sm font-medium
                  hover:border-primary/40
                  hover:bg-secondary
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                <Github size={18} />
                View Source Code
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2
                    px-8 py-3 rounded-full
                    bg-primary text-primary-foreground
                    text-sm font-medium
                    hover:shadow-[0_0_30px_rgba(139,92,246,0.45)]
                    hover:-translate-y-1
                    active:translate-y-0
                    transition-all duration-300
                  "
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
