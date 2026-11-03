import { mesesDesdeJunio2026 } from '../fechas'
import { boton, CopiarCorreo, cv, enlace, github, linkedin, whatsapp } from './Contacto'
import { Diagrama } from './Diagrama'

// Cada línea del nombre sube desde detrás de su propio borde.
function Linea({ texto, retraso }: { texto: string; retraso: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <span
        className="block motion-safe:animate-[subir_1s_var(--ease-out-expo)_both]"
        style={{ animationDelay: `${retraso}ms` }}
      >
        {texto}
      </span>
    </span>
  )
}

export function Inicio() {
  const meses = mesesDesdeJunio2026()

  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-7xl items-center gap-x-16 gap-y-14 px-gutter py-section lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]"
    >
      <div>
        <img
          src="/images/foto-perfil-900.webp"
          alt="Retrato de Juan David Martínez Niño"
          width={900}
          height={1195}
          className="size-20 rounded-full border-2 border-cobalto bg-plano object-cover object-top motion-safe:animate-[aparecer_700ms_var(--ease-out-expo)_both] sm:size-24"
        />

        <h1 className="mt-6 text-hero font-extrabold">
          <Linea texto="Juan David" retraso={100} />
          <Linea texto="Martínez Niño" retraso={220} />
        </h1>
        <p
          className="mt-3 text-2xl font-bold text-cobalto motion-safe:animate-[aparecer_700ms_var(--ease-out-expo)_both]"
          style={{ animationDelay: '450ms' }}
        >
          (Software Developer)
        </p>

        <p
          className="mt-6 max-w-[46ch] text-lg text-niebla motion-safe:animate-[aparecer_700ms_var(--ease-out-expo)_both]"
          style={{ animationDelay: '550ms' }}
        >
          Desarrollador de software orientado al backend. Construyo el backend de New Jahs con Node.js,
          TypeScript y TypeORM desde junio de 2026 ({meses} {meses === 1 ? 'mes' : 'meses'}).
        </p>

        <ul
          className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 motion-safe:animate-[aparecer_700ms_var(--ease-out-expo)_both]"
          style={{ animationDelay: '650ms' }}
        >
          <li>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={`${boton} bg-cobalto text-noche hover:bg-tiza`}>
              Escríbeme por WhatsApp<span className="sr-only"> (abre en pestaña nueva)</span>
            </a>
          </li>
          <li>
            <CopiarCorreo />
          </li>
          <li>
            <a
              href={cv}
              download
              className={`${boton} border border-cobalto hover:bg-cobalto hover:text-noche`}
            >
              Descargar CV
            </a>
          </li>
          <li>
            <a className={enlace} href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn<span className="sr-only"> (abre en pestaña nueva)</span>
            </a>
          </li>
          <li>
            <a className={enlace} href={github} target="_blank" rel="noopener noreferrer">
              GitHub<span className="sr-only"> (abre en pestaña nueva)</span>
            </a>
          </li>
        </ul>
      </div>

      <Diagrama />
    </section>
  )
}
