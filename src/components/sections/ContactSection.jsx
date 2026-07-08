import { profile } from "../../data/profile"

function ContactSection() {
  return (
    <section
      id="contacto"
      className="mx-auto max-w-6xl rounded-[2rem] border border-slate-700/70 bg-gradient-to-br from-slate-900 to-slate-950 px-8 py-12"
    >
      <h2 className="text-3xl font-black text-white">Contacto</h2>

      <p className="mt-5 max-w-3xl leading-8 text-slate-400">
        Estoy abierto a oportunidades como Técnico Informático, Administrador de
        Sistemas Junior, Soporte IT, Help Desk o perfiles relacionados con ASIR.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-sky-400 px-6 py-3 font-bold text-slate-950 hover:bg-sky-300"
        >
          Enviar email
        </a>

        <a
          href={profile.cv}
          download
          className="rounded-full border border-slate-600 px-6 py-3 font-bold text-white hover:border-sky-400 hover:text-sky-400"
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
      </div>
    </section>
  )
}

export default ContactSection