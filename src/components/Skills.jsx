export default function SkillsList({ id, title, skills }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill">{skill}</span>
        ))}
      </div>
    </section>
  );
}
