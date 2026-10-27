import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="site-nav">
      <Link to="/" className="nav-brand">Giovanni Casiano</Link>
      <ul>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/work">Work</NavLink></li>
      </ul>
    </nav>
  );
}
