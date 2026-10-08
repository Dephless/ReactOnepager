function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Portfolio Website',
      description:
        'Ein moderner Onepager für meine persönliche Präsentation und meine Projekte.',
      technologies: ['React', 'JavaScript', 'CSS'],
      link: '#',
    },
    {
      number: '02',
      title: 'SAP BTP DevOps Demo mit CI/CD Pipeline',
      description:
        'Entwicklung einer automatisierten CI/CD-Pipeline, die bei jedem Code-Push relevante Tests ausführt und die Qualität des Codes überprüft. Ergänzend wurde eine SAP Sales Order Application auf Basis von ABAP RAP entwickelt, die Geschäftsdaten in einem strukturierten Datenmodell verwaltet und durch implementierte Geschäftslogik und Validierungen absichert.',
      technologies: ['ABAP', 'APIs', 'ABAP CDS', 'JavaScript', 'ADT', 'abapGit'],
      link: 'https://github.com/Dephless/sap-btp-devops-demo',
    },
    {
      number: '03',
      title: 'AI-Powered Business Application · In Planung',
      description:
        'Entwicklung einer cloudbasierten Anwendung, die mithilfe eines LLM strukturierte Geschäftsdaten analysiert, relevante Informationen extrahiert und daraus automatisierte Handlungsempfehlungen ableitet. Der Fokus liegt auf einer sauberen Backend-Architektur, API-Integration, automatisiertem Testing und sicherer Verarbeitung von Daten.',
      technologies: ['Python', 'FastAPI', 'REST API', 'OpenAI', 'LLM' , 'PostgreSQL', 'Docker', 'CI/CD'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="section projects">
      <div className="section-label">
        <span>03</span>
        <span>PROJEKTE</span>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>

            <div className="project-info">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <a href={project.link} className="project-link">
              ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects