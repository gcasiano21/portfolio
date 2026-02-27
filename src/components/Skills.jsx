export default function SkillsGrid({ skills }) {
  return (
      <div className="skills-grid">
        {skills.map((group, index) => (
          <div key={index} className="skills-card">
            <h3>{group.category}</h3>
            <div className="skills-list">
              {group.items.map((skill, i) => (
                <span key={i} className="skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
  );
}