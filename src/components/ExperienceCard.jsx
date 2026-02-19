export default function ExperienceCard({ role, company, years, responsibilities }) {
  return (
    <div className="timeline-card">
      <div className="timeline-header">
        <h3>{role}</h3>
        <span className="timeline-date">{years}</span>
      </div>
      <h4>{company}</h4>
      <ul>
        {responsibilities.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
