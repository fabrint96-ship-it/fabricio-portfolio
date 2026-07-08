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
    <section id="tecnologias" className="mx-auto mb-20 max-w-6xl">
      <h2 className="mb-8 text-3xl font-black text-white">Tecnologías</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {technologies.map((tech) => (
          <div
            key={tech.id ?? tech.name}
            className="rounded-2xl border border-slate-700/70 bg-slate-900 px-5 py-4 text-center font-bold text-slate-200"
          >
            {tech.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesSection