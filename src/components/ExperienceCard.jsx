export default function ExperienceCard({ role, company, years, responsibilities }) {
  return (
    <div className="experience-card">
      <p>
        <strong>{role}</strong> — {company} ({years})
      </p>
      <ul>
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
}
