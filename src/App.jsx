import { profile } from "./data/profile"
import { projects } from "./data/projects"
import "./index.css"

function App() {
  return (
    <main className="app">
      <section className="hero">
        <p className="tag">Portfolio profesional IT</p>

        <h1>{profile.name}</h1>

        <h2>{profile.role}</h2>

        <p className="headline">{profile.headline}</p>

        <div className="hero-actions">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Contacto</a>
        </div>
      </section>

      <section className="section">
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
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App