import { useEffect, useState } from "react"
import { getTechnologies } from "../../lib/api"
import { technologies as fallbackTechnologies } from "../../data/technologies"

function TechnologiesSection() {
  const [technologies, setTechnologies] = useState(
    fallbackTechnologies.map((name) => ({ name }))
  )

  useEffect(() => {
    getTechnologies().then((data) => {
      if (data.length > 0) setTechnologies(data)
    })
  }, [])

  return (
    <section id="tecnologias" className="section">
      <h2>Tecnologías</h2>

      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-card" key={tech.id ?? tech.name}>
            {tech.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesSection