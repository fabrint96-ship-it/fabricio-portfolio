import { technologies } from "../../data/technologies"

function TechnologiesSection() {
  return (
    <section id="tecnologias" className="section">
      <h2>Tecnologías</h2>

      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-card" key={tech}>
            {tech}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesSection