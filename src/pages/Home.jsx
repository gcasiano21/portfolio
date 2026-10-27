import { Link } from "react-router-dom";
import Header from "../components/Header";
import SkillsList from "../components/Skills";
import projects from "../data/projects";
import { skills } from "../data/experiences";
import { tagColor } from "../data/tagColors";

const featured = projects.filter((p) => p.slug);

export default function Home() {
  return (
    <>
      <Header />

      <main className="page-content">
        <div className="content-section">
          <h2>Selected Work</h2>
          <div className="home-featured-grid">
            {featured.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="home-project-card">
                <div className="home-project-thumb">
                  {p.image && <img src={p.image} alt={p.title} />}
                </div>
                <div className="home-project-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className={`tag tag-${tagColor(t)}`}>{t}</span>
                    ))}
                  </div>
                  <span className="home-project-cta">Read the story →</span>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/projects" className="all-projects-link">All projects →</Link>
        </div>

        <div className="content-section">
          <h2>Skills</h2>
          <SkillsList skills={skills} />
        </div>

        <div className="content-section">
          <h2>Education</h2>
          <div className="edu-line">
            <span className="edu-school">Worcester State University</span>
            <span className="edu-detail">Bachelor of Science, Computer Science — 2025 &nbsp;·&nbsp; GPA 3.63</span>
          </div>
        </div>
      </main>
    </>
  );
}
