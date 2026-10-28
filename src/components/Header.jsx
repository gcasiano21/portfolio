import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="hero">
      <h1 className="hero-name">
        <span className="name-primary">Giovanni</span>
        <span className="name-accent">Casiano.</span>
      </h1>
      <p className="hero-tagline">
        Full-stack developer building backends in{" "}
        <span className="tag tag-violet">C#/.NET</span> and frontends in{" "}
        <span className="tag tag-sky">React</span>.
      </p>
      <p className="hero-meta">Based in Massachusetts. CS, Worcester State &apos;25.</p>
      <div className="hero-ctas">
        <Link to="/projects" className="btn-primary">See the Projects →</Link>
        <a href="mailto:gcasiano21@gmail.com" className="btn-outline">Email me</a>
      </div>
      <div className="hero-social">
        <a href="https://github.com/gcasiano21" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/giovannicasiano/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}
