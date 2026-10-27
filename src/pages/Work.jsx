import ExperienceCard from "../components/ExperienceCard";
import SkillsList from "../components/Skills";
import { experiences, skills } from "../data/experiences";

export default function Work() {
  return (
    <main className="page-content">
      <div className="content-section">
        <h2>Work Experience</h2>
        <div className="timeline">
          {experiences.map((e, i) => (
            <ExperienceCard key={`${e.company} ${e.role}`} {...e} isCurrent={i === 0} />
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2>Skills</h2>
        <SkillsList skills={skills} />
      </div>
    </main>
  );
}
