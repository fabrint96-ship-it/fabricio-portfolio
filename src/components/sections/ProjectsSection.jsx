import { useEffect, useState } from "react"
import { getProjects } from "../../lib/api"
import { projects as fallbackProjects } from "../../data/projects"

function ProjectsSection() {
  const [projects, setProjects] = useState(fallbackProjects)

  useEffect(() => {
    getProjects().then((data) => {
      if (data.length > 0) setProjects(data)
    })
  }, [])

  return (
    <section id="proyectos" className="mx-auto mb-20 max-w-6xl">
      <h2 className="mb-8 text-3xl font-black text-white">Proyectos destacados</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id ?? project.title}
            className="rounded-3xl border border-slate-700/70 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-sky-400/70"
          >
            <span className="text-sm font-bold text-sky-400">{project.type}</span>

            <h3 className="mt-3 text-2xl font-black text-white">{project.title}</h3>

            <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <small
                  key={tech}
                  className="rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-sky-300"
                >
                  {tech}
                </small>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm font-bold text-sky-400 hover:border-sky-400"
                >
                  Repositorio
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm font-bold text-sky-400 hover:border-sky-400"
                >
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