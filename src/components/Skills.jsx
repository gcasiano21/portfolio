import { tagColor } from "../data/tagColors";

export default function SkillsList({ skills }) {
  return (
    <div className="skills-section">
      {skills.map((group) => (
        <div key={group.category} className="skills-group">
          <span className="skills-category">{group.category}</span>
          <div className="skills-tags">
            {group.items.map((skill) => (
              <span key={skill} className={`tag tag-${tagColor(skill)}`}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
