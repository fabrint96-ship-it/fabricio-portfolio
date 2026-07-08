import { profile } from "../../data/profile"

function HeroSection() {
  return (
    <section id="inicio" className="hero">
      <p className="tag">Portfolio profesional IT</p>

      <h1>{profile.name}</h1>

      <h2>{profile.role}</h2>

      <p className="headline">{profile.headline}</p>

      <div className="hero-actions">
        <a href={profile.github} target="_blank" rel="noreferrer">
          Ver GitHub
        </a>
        <a href={`mailto:${profile.email}`}>Contactar</a>
      </div>
    </section>
  )
}

export default HeroSection