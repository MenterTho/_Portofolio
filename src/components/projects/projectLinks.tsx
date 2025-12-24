import { Project } from "@/src/data/projects";

export default function ProjectLinks({ project }: { project: Project }) {
  return (
    <section className="flex flex-wrap gap-6">
      <a
        href={project.repo}
        target="_blank"
        className="px-6 py-3 rounded-lg bg-black text-white"
      >
        View Source Code
      </a>

      {project.live && (
        <a
          href={project.live}
          target="_blank"
          className="px-6 py-3 rounded-lg border"
        >
          Live Demo
        </a>
      )}
    </section>
  );
}
