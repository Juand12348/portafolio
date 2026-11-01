import { mesesDesdeJunio2026 } from '../fechas'

const enlace = 'underline decoration-2 underline-offset-4 decoration-trazo hover:decoration-cobalto'

export function Inicio() {
  const meses = mesesDesdeJunio2026()

  return (
    <section id="inicio" className="mx-auto grid max-w-7xl gap-10 px-gutter py-section md:min-h-[calc(100svh-5.5rem)] md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <h1 className="text-hero font-extrabold text-balance">Juan David Martínez Niño</h1>
        <p className="mt-5 inline-block bg-cobalto px-3 py-1 text-lg font-bold text-noche">(Software Developer)</p>

        <p className="mt-8 max-w-[46ch] text-lg text-niebla">
          Desarrollador de software orientado al backend. Construyo el backend de New Jahs con Node.js,
          TypeScript y TypeORM desde junio de 2026 ({meses} {meses === 1 ? 'mes' : 'meses'}).
        </p>

        <div className="mt-10 border-t-2 border-trazo pt-5">
          <h2 className="text-sm font-semibold text-niebla">Conexiones</h2>
          <ul className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-4 font-semibold">
            <li>
              <a
                href="mailto:juandavidmn0819@gmail.com"
                className="inline-block bg-cobalto px-5 py-3 text-noche hover:bg-tiza"
              >
                Escríbeme
              </a>
            </li>
            <li>
              <a className={enlace} href="https://www.linkedin.com/in/juan-david-mart%C3%ADnez-ni%C3%B1o-879b89323/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className={enlace} href="https://github.com/Juand12348" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a className={enlace} href="/cv/CV_Juan_David_Martinez_Nino.pdf" download>
                Descargar CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <img
        src="/images/foto-perfil-900.jpg"
        alt="Retrato de Juan David Martínez Niño"
        width={900}
        height={1195}
        className="aspect-[3/4] w-full max-w-52 border-2 border-trazo bg-plano object-cover object-top md:w-80 md:max-w-none"
      />
    </section>
  )
}
