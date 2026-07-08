function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="navbar-logo">
        Fabricio<span>IT</span>
      </a>

      <nav className="navbar-links">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#formacion">Formación</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}

export default Navbar