import { profile } from "../../data/profile"

function ContactSection() {
  return (
    <section id="contacto" className="section contact-section">
      <h2>Contacto</h2>

      <p>
        Estoy abierto a oportunidades como Técnico Informático, Administrador de
        Sistemas Junior, Soporte IT, Help Desk o perfiles relacionados con ASIR.
      </p>

      <div className="hero-actions">
        <a href={`mailto:${profile.email}`}>Enviar email</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  )
}

export default ContactSection