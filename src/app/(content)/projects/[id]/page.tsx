import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";

import BackButton from "@/src/components/button/backButton";
import ProjectHero from "@/src/components/projects/projectHero";
import ProjectGallery from "@/src/components/projects/projectGallery";
import ProjectInfo from "@/src/components/projects/projectInfo";
import ProjectLinks from "@/src/components/projects/projectLinks";
import { StarBackground } from "@/src/components/ui/startBackground";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) return notFound();

  return (
    <main className="container mx-auto px-4 py-12 space-y-20">
      <StarBackground />

      {/* Back button */}
      <div className="opacity-0 animate-fade-in">
        <BackButton />
      </div>

      {/* Hero */}
      <section className="opacity-0 animate-fade-in-delay-1">
        <ProjectHero project={project} />
      </section>

      {/* Info */}
      <section className="opacity-0 animate-fade-in-delay-2">
        <ProjectInfo project={project} />
      </section>

      {/* Gallery */}
      <section className="opacity-0 animate-fade-in-delay-3">
        <ProjectGallery project={project} />
      </section>

      {/* Links */}
      <section className="opacity-0 animate-fade-in-delay-4">
        <ProjectLinks project={project} />
      </section>

    </main>
  );
}
