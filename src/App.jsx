import Header from "./components/Header";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import SkillsList from "./components/Skills";
import Footer from "./components/Footer";
import "./Style.css";


const sections = [
  { id: "experience", title: "Work Experience" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
];

const projects = [
  {
    title: "NextUp",
    technologies: "React, TypeScript, C#, .NET Core, Firestore",
    description: "Community-driven web app that allows users to share their favorite TV shows, movies, books, and music and discover recommendations from others.",
    link: "https://github.com/gcasiano21/NextUp",
    image: "images/NextUp.png",
  },
  {
    title: "Bagged",
    technologies: "JavaScript, React Native, Expo",
    description: "Mobile app for disc golf players to track the discs in their bag, log throws with max and average distances, and receive personalized disc recommendations based on bag composition.",
    link: "https://github.com/gcasiano21/Bagged",
    image: "images/Bagged.png",
  },
  {
    title: "PingMyApp",
    technologies: "C#, MySQL, ASP.NET MVC, AWS, Entity Framework",
    description: "Real-time website monitoring dashboard tracking uptime, response times, and service health. Features instant alerts and comprehensive activity logging.",
    link: "https://pingmyapp.com/",
    image: "images/PingMyApp.png",
  },
    {
    title: "MergeJam",
    technologies: "C#, MySQL, ASP.NET Core, AWS, JavaScript, React",
    description: "A free community platform where makers showcase their creative projects.",
    link: "https://mergejam.com/",
    image: "images/MergeJam.png",
  },
  {
    title: "Thea’s Pantry Capstone",
    technologies: "Node.js, MongoDB, Docker, RabbitMQ, Vue.js",
    description: "Contributed to a full-stack guest information system for a campus food pantry using microservices. Primarily developed the backend logging system utilizing RabbitMQ.",
    link: "https://gitlab.com/LibreFoodPantry/client-solutions/theas-pantry/guestinfosystem",
  },
  {
    title: "Pong",
    technologies: "Python, Pygame",
    description: "Developed a classic Pong game implementing real-time controls, collision detection, and game loop architecture using the Pygame library.",
    link: "https://github.com/gcasiano21/Pong",
    image: "images/pong.png",
  }
];

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "Web Surfing Studios (Remote)",
    years: "September 2025 – Present",
    description: "Full-stack software engineering in C# / .NET, React, AWS, and MySQL. Contributed to backend architecture improvements by refactoring controllers, clarifying naming conventions, and updating dependencies to support cleaner, maintainable code. Implemented new API endpoints and logic, including enforcing user service-creation limits. Enhanced UI/UX by modernizing dashboards and integrating icon-based status indicators."
  },
  {
    role: "Systems Analyst",
    company: "Blue Cross Blue Shield of Massachusetts (Boston, MA)",
    years: "June 2025 – Present",
    description:"Performed data validation and systems analysis for enterprise healthcare applications using SQL and Python. Developed Python scripts to generate large-scale test datasets and automate QA workflows, reducing manual testing effort and accelerating validation cycles. Investigated production issues through log analysis, SQL querying, and user-flow tracing to reproduce defects and support engineering fixes. Partnered closely with engineers to clarify requirements, edge cases, and business logic for new system enhancements."
  },
  {
    role: "Systems Analyst Intern",
    company: "Blue Cross Blue Shield of Massachusetts (Boston, MA)",
    years: "June 2024 – May 2025",
    description:"Supported enterprise systems analysis initiatives by assisting with cross-system data validation using SQL and contributing to production issue investigations. Partnered with senior analysts to gather stakeholder requirements and help document functional specifications for new features. Participated in refining technical requirements and validating system behavior through structured test plans, regression testing, and defect triage."
  }
];

const skills = [
  {
    category: "Languages",
    items: ["C# / .NET", "JavaScript", "TypeScript", "Python", "SQL", "Java", "HTML", "CSS"]
  },
  {
    category: "Frameworks",
    items: ["ASP.NET MVC", "ASP.NET Core", "Vue.js", "Tailwind CSS", "Express.js", "React Native", "Expo"]
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL Server", "Firebase", "PostgreSQL", "MongoDB", "SQLite"]
  },
  {
    category: "Libraries",
    items: ["React", "Pygame", "Pandas", "DbUp"]
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "GitLab", "Gitea"]
  },
  {
    category: "DevOps",
    items: ["GitHub Actions", "Gitea Actions", "Docker", "Azure DevOps"]
  },
  {
    category: "Miscellaneous",
    items: ["REST APIs", "Entity Framework", "RabbitMQ", "Node.js"]
  }
];

export default function App() {
  return (
    <>
      <Header />
      <Nav sections={sections} />

      <main>

        <h2 id="experience">Work Experience</h2>
        <div className="timeline">
          {experiences.map((e, i) => (
            <ExperienceCard
              key={i}
              years={e.years}
              role={e.role}
              company={e.company}
              description={e.description}
            />
          ))}
        </div>

        <h2 id="projects">Projects</h2>
        <div className="card-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

        <h2>Education</h2>
        <section id="education">
          <p>
            <strong>Worcester State University</strong> — Bachelors of Science, Computer Science (2025)
          </p>
          <p>GPA: 3.63</p>
        </section>

        <h2 id="skills" className="skills-title">Skills</h2>
        <SkillsList skills={skills} />

      </main>
      <Footer />
    </>
  );
}
