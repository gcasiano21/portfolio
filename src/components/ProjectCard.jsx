import { Link } from "react-router-dom";
import { tagColor } from "../data/tagColors";

export default function ProjectCard({ slug, title, description, tags, link, linkLabel, image, live }) {
  return (
    <div className="project-card">
      {image ? (
        <div className="project-thumb">
          <img src={image} alt={title} />
        </div>
      ) : (
        <div className="project-thumb-empty" />
      )}
      <div className="project-body">
        <div className="project-title-row">
          <h3>{title}</h3>
          {live && (
            <span className="live-badge">
              <span className="live-dot" />
              Live
            </span>
          )}
        </div>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tags.map((t) => (
            <span key={t} className={`tag tag-${tagColor(t)}`}>{t}</span>
          ))}
        </div>
        {slug ? (
          <Link className="project-link" to={`/projects/${slug}`}>Read the story →</Link>
        ) : (
          <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
            {linkLabel} →
          </a>
        )}
      </div>
    </div>
  );
}
