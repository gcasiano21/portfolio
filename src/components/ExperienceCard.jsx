export default function ExperienceCard({ role, company, years, description, isCurrent }) {
  return (
    <div className={`exp-card${isCurrent ? " exp-card--current" : ""}`}>
      <div className="exp-header">
        <div>
          <span className="exp-company">{company}</span>
          <span className="exp-role">{role}</span>
        </div>
        <span className="exp-years">{years}</span>
      </div>
      <p className="exp-desc">{description}</p>
    </div>
  );
}
