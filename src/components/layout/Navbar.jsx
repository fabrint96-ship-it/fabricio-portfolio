function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto mb-8 flex max-w-6xl items-center justify-between rounded-full border border-slate-700/70 bg-slate-950/80 px-6 py-4 backdrop-blur-xl">
      <a href="#inicio" className="text-lg font-extrabold tracking-tight">
        Fabricio<span className="text-sky-400">IT</span>
      </a>

      <nav className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
        <a className="hover:text-sky-400" href="#sobre-mi">Sobre mí</a>
        <a className="hover:text-sky-400" href="#proyectos">Proyectos</a>
        <a className="hover:text-sky-400" href="#tecnologias">Tecnologías</a>
        <a className="hover:text-sky-400" href="#formacion">Formación</a>
        <a className="hover:text-sky-400" href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}

export default Navbar