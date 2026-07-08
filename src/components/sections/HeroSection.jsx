import { profile } from "../../data/profile"

function HeroSection() {
  return (
    <section
      id="inicio"
      className="mx-auto mb-20 grid max-w-6xl gap-10 rounded-[2rem] border border-slate-700/70 bg-gradient-to-br from-slate-900 to-slate-950 px-8 py-16 md:grid-cols-[1.4fr_0.6fr] md:px-12"
    >
      <div>
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
          Portfolio profesional IT
        </p>

        <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
          {profile.name}
        </h1>

        <h2 className="mt-5 text-xl font-medium text-slate-300 md:text-2xl">
          {profile.role}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          {profile.headline}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={profile.cv}
            download
            className="rounded-full bg-sky-400 px-6 py-3 font-bold text-slate-950 hover:bg-sky-300"
          >
            Descargar CV
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-600 px-6 py-3 font-bold text-white hover:border-sky-400 hover:text-sky-400"
          >
            GitHub
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-slate-600 px-6 py-3 font-bold text-white hover:border-sky-400 hover:text-sky-400"
          >
            Contacto
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex h-44 w-44 items-center justify-center rounded-full border border-sky-400/40 bg-slate-800 text-5xl font-black text-sky-400 shadow-2xl shadow-sky-950/50 md:h-56 md:w-56">
          FT
        </div>
      </div>
    </section>
  )
}

export default HeroSection