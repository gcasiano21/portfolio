import { useState } from "react";

export default function ProjectCard({ title, description, technologies, link, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="project-card">
        {image && (
          <div className="project-image-container">
            <img
              src={image}
              alt={title}
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}

        <div className="project-content">
          <h3>{title}</h3>
          <p className="project-technologies">
            {technologies.split(", ").map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </p>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </section>

      {isOpen && (
        <div className="project-image-overlay" onClick={() => setIsOpen(false)}>
          <img src={image} alt={title} />
        </div>
      )}
    </>
  );
}
