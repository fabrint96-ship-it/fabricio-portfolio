import { projects } from "../../data/projects"

function ProjectsSection() {
  return (
    <section id="proyectos" className="section">
      <h2>Proyectos destacados</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <span>{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-list">
              {project.technologies.map((tech) => (
                <small key={tech}>{tech}</small>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  Repositorio
                </a>
              )}

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection