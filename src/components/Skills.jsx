function Skills() {
  const skills = [
    'React',
    'JavaScript',
    'HTML & CSS',
    'Git & GitHub',
    'Python',
    'SAP Development',
    'Full-Stack Entwicklung',
    'Datenbanken',
    'APIs',
  ]

  return (
    <section className="section skills">
      <div className="section-label">
        <span>02</span>
        <span>SKILLS</span>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills