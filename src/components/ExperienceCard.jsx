export default function ExperienceCard({ role, company, years, description }) {
  return (
    <div className="timeline-card">
      <div className="timeline-header">
        <h3>{role}</h3>
        <span className="timeline-date">{years}</span>
      </div>
      <h4>{company}</h4>
      <p className="timeline-description">{description}</p>
    </div>
  );
}
