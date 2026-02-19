export default function ProjectCard({ title, description, technologies, link }) {
  return (
    <section className="project-card">
       <h3>{title}</h3>
        <p><em>{technologies}</em></p>
        <p>{description}</p>
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </p>
    </section>
  );
}
