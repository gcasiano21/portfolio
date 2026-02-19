import Header from "./components/Header";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import SkillsList from "./components/Skills";
import Footer from "./components/Footer";
import "./Style.css";


const sections = [
  { id: "languagesSkills", title: "Languages" },
  { id: "frameworksTools", title: "Frameworks/Tools" },
  { id: "education", title: "Education" },
  { id: "experience", title: "Work Experience" },
  { id: "projects", title: "Projects" },
];

const projects = [
  {
    title: "Thea’s Pantry Capstone",
    tech: "Node.js, MongoDB, Docker, RabbitMQ, Vue.js",
    description: "Contributed to a full-stack guest information system for a campus food pantry using microservices. Primarily developed the backend logging system utilizing RabbitMQ.",
    link: "https://gitlab.com/LibreFoodPantry/client-solutions/theas-pantry",
  },
  {
    title: "NextUp",
    tech: "React (TypeScript), C#, Firestore",
    description: "Community-driven web app developed as part of an hackathon. The app allows users to share their favorite TV shows, movies, books, and music and discover recommendations from others.",
    link: "https://github.com/gcasiano21/NextUp",
  },
  {
    title: "Bagged",
    tech: "JavaScript, React Native, Expo",
    description: "Mobile app for disc golf players to track the discs in their bag, log throws with max and average distances, and receive personalized disc recommendations based on bag composition.",
    link: "https://github.com/gcasiano21/Bagged",
  },
  {
    title: "LoR Database Filter Program",
    tech: "Java, MySQL",
    description: "Built a CLI tool to simulate combat and filter cards in Legends of Runeterra. Demonstrated SQL integration and object-oriented design.",
    link: "https://github.com/gcasiano21/LoR-Database-Filter-Program",
  },
  {
    title: "Pong",
    tech: "Python, Pygame",
    description: "Developed a classic Pong game implementing real-time controls, collision detection, and game loop architecture using the Pygame library.",
    link: "https://github.com/gcasiano21/Pong",
  },
  {
    title: "LiftLogr",
    tech: "Java",
    description: "Developed an Android mobile app allowing users to track their lifting routines, nutritional intake, and cardio.",
    link: "https://github.com/gcasiano21/LiftLogr",
  },
];

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "Web Surfing Studios (Remote)",
    years: "September 2025 – Present",
    responsibilities: [
      "Contributed to full-stack development for nonprofit web applications using .NET and C#.",
      "Enhanced UI/UX by adding icon-based status indicators and modernizing dashboard styles.",
      "Refactored controllers to improve naming clarity, update dependencies, and support cleaner architecture.",
      "Implemented new backend endpoints and added logic to enforce service-creation limits for users.",
      "Completed optimization and bug-fix tickets by identifying inefficient code and applying targeted improvements.",
      "Collaborated via Git and Azure DevOps, working through assigned tickets and participating in code reviews."
    ],
  },
  {
    role: "Systems Analyst",
    company: "Blue Cross Blue Shield of Massachusetts (Boston, MA)",
    years: "June 2025 – Present",
    responsibilities: [
      "Used SQL to validate data extracts exchanged between systems, ensuring integrity and accurate transformations.",
      "Built Python scripts to generate complex test datasets and automate QA workflows, reducing manual testing time and accelerating validation cycles.",
      "Collaborated with engineers to clarify technical requirements, edge cases, and business logic for new features.",
      "Investigated production issues through log analysis, SQL queries, and user-flow tracing to reproduce bugs and support fixes.",
      "Executed test plans, validated system functionality, and participated in defect triage and regression testing."
    ],
  }
];

const languageSkills = ["HTML", "JavaScript", "TypeScript", "Python", "Java", "C#", "SQL"];
const frameworkTools = ["Git", "Docker", "RestAPIs", "RabbitMQ", "Vue.js", "React", "React Native / Expo", ".NET", "Node.js", "MongoDB", "PostgreSQL", "Firestore"];

export default function App() {
  return (
    <>
      <Header />
      <Nav sections={sections} />

      <main>
        <SkillsList id="languagesSkills" title="Languages" skills={languageSkills} />
        <SkillsList id="frameworksTools" title="Frameworks/Tools" skills={frameworkTools} />
        
        <section id="education">
          <h2>Education</h2>
          <p>
            <strong>Worcester State University</strong> — Bachelors of Science, Computer Science (2025)
          </p>
          <p>GPA: 3.63</p>
        </section>

        <section id="experience">
          <h2>Work Experience</h2>
          {experiences.map((e) => (
            <ExperienceCard key={e.role + e.company} {...e} />
          ))}
        </section>

        <section id="projects">
          <h2>Projects</h2>
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
