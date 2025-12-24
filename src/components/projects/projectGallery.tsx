import Image from "next/image";
import { Project } from "@/src/data/projects";

export default function ProjectGallery({ project }: { project: Project }) {
  if (!project.gallery && !project.video) return null;

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold">Preview</h2>

      {project.video && (
        <div className="aspect-video w-full rounded-xl overflow-hidden">
          <iframe
            src={project.video}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      )}

      {project.gallery && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((img, index) => (
            <div
              key={index}
              className="relative h-56 rounded-xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`${project.title} ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}