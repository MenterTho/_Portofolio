import { Project } from "@/src/data/projects";

export default function ProjectInfo({ project }: { project: Project }) {
  return (
    <section className="grid md:grid-cols-3 gap-10">
      <div className="space-y-2">
        <h3 className="font-semibold">Role</h3>
        <p>{project.role}</p>

        <h3 className="font-semibold pt-4">Duration</h3>
        <p>{project.duration}</p>

        <h3 className="font-semibold pt-4">Team</h3>
        <p>{project.teamSize}</p>
      </div>

      <div className="md:col-span-2 space-y-4">
        <h3 className="font-semibold">Key Achievements</h3>
        <ul className="list-disc list-inside space-y-2">
          {project.achievements.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
