import { education } from "../../data/education"

function EducationSection() {
  return (
    <section id="formacion" className="mx-auto mb-20 max-w-6xl">
      <h2 className="mb-8 text-3xl font-black text-white">Formación</h2>

      <div className="grid gap-5">
        {education.map((item) => (
          <article
            className="rounded-3xl border border-slate-700/70 bg-slate-900 p-6"
            key={item.title}
          >
            <span className="text-sm font-extrabold text-sky-400">
              {item.year}
            </span>

            <h3 className="mt-3 text-2xl font-black text-white">
              {item.title}
            </h3>

            <strong className="mt-2 block text-slate-200">{item.center}</strong>

            <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EducationSection