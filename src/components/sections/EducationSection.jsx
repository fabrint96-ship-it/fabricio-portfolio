import { education } from "../../data/education"

function EducationSection() {
  return (
    <section id="formacion" className="section">
      <h2>Formación</h2>

      <div className="timeline">
        {education.map((item) => (
          <article className="timeline-card" key={item.title}>
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <strong>{item.center}</strong>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EducationSection