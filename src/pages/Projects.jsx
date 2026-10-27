import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <main className="page-content">
      <h2>Projects</h2>
      <div className="card-grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </main>
  );
}
