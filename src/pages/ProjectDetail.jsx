import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { tagColor } from "../data/tagColors";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="page-content">
        <Link to="/projects" className="detail-back">← Projects</Link>
        <p className="detail-not-found">Project not found.</p>
      </main>
    );
  }

  const { title, image, tags, link, linkLabel, live, story } = project;

  return (
    <main className="page-content">
      <Link to="/projects" className="detail-back">← Projects</Link>

      <div className="detail-header">
        <div className="project-title-row">
          <h1 className="detail-title">{title}</h1>
          {live && (
            <span className="live-badge">
              <span className="live-dot" />
              Live
            </span>
          )}
        </div>
        <div className="project-tags detail-tags">
          {tags.map((t) => (
            <span key={t} className={`tag tag-${tagColor(t)}`}>{t}</span>
          ))}
        </div>
      </div>

      {image && (
        <img src={image} alt={title} className="detail-hero-image" />
      )}

      {story && (
        <div className="detail-story">
          <div className="story-block">
            <h3>Why I built it</h3>
            <p>{story.why}</p>
          </div>
          <div className="story-block">
            <h3>What it does</h3>
            <p>{story.what}</p>
          </div>
          <div className="story-block">
            <h3>What I learned</h3>
            <p>{story.learned}</p>
          </div>
        </div>
      )}

      <div className="detail-links">
        <a href={link} className="btn-primary" target="_blank" rel="noopener noreferrer">
          {linkLabel} →
        </a>
      </div>
    </main>
  );
}
