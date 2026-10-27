export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Giovanni Casiano</span>
        <div className="footer-links">
          <a href="mailto:gcasiano21@gmail.com">gcasiano21@gmail.com</a>
          <a href="https://github.com/gcasiano21" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/giovannicasiano/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
