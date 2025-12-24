import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";

import ProjectHero from "@/src/components/projects/projectHero";
import ProjectInfo from "@/src/components/projects/projectInfo";
import ProjectGallery from "@/src/components/projects/projectGallery";
import ProjectLinks from "@/src/components/projects/projectLinks";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;

  const project = projects.find(p => p.id === id);
  if (!project) return notFound();

  return (
    <main className="container mx-auto px-4 py-16 space-y-20">
      <ProjectHero project={project} />
      <ProjectInfo project={project} />
      <ProjectGallery project={project} />
      <ProjectLinks project={project} />
    </main>
  );
}
