import { useEffect, useRef, type CSSProperties } from 'react'
import { IconoExterno } from './IconoExterno'

type Paso = { fecha: string; titulo: string; detalle: string; duracion?: string; url?: string; enCurso?: boolean }

// Fecha del certificado (no la de inicio), confirmada por él. Orden cronológico; la carrera sigue abierta.
const pasos: Paso[] = [
  {
    fecha: '22 de mayo de 2025',
    titulo: 'Universidad Desarrollo Web - FrontEnd Web Developer!',
    detalle: 'Global Mentoring, Ing. Ubaldo Acosta',
    duracion: '30,5 h en Udemy',
    url: 'https://www.udemy.com/certificate/UC-8fcac321-65ab-487f-b974-03bc16c99aba/',
  },
  {
    fecha: '26 de enero de 2026',
    titulo: 'Ultimate GIT: gestiona tus proyectos y trabaja en equipo',
    detalle: 'Nicolas Schurmann',
    duracion: '5,5 h en Udemy',
    url: 'https://www.udemy.com/certificate/UC-ebd2d0fb-9a9b-4c26-bb3c-57bae2abd5fe/',
  },
  {
    fecha: '10 de julio de 2026',
    titulo: 'NodeJS: De cero a experto',
    detalle: 'Fernando Herrera, {d/t} - DevTalles',
    duracion: '37,5 h en Udemy',
    url: 'https://www.udemy.com/certificate/UC-b5b204de-d6f6-4a13-a201-6ddd6d930e93/',
  },
  {
    fecha: 'Desde 2024',
    titulo: 'Tecnología en Desarrollo de Software',
    detalle: 'Uniagustiniana',
    enCurso: true,
  },
]

// La línea central se llena a medida que la sección pasa por la pantalla.
function useAvance() {
  const lista = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const el = lista.current
    if (!el) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--avance', '1')
      return
    }
    let cuadro = 0
    const medir = () => {
      cuadro = 0
      const r = el.getBoundingClientRect()
      const avance = Math.min(Math.max((innerHeight * 0.65 - r.top) / r.height, 0), 1)
      el.style.setProperty('--avance', avance.toFixed(3))
    }
    const alMover = () => {
      if (!cuadro) cuadro = requestAnimationFrame(medir)
    }
    medir()
    addEventListener('scroll', alMover, { passive: true })
    addEventListener('resize', alMover)
    return () => {
      removeEventListener('scroll', alMover)
      removeEventListener('resize', alMover)
      cancelAnimationFrame(cuadro)
    }
  }, [])

  return lista
}

export function Formacion() {
  const lista = useAvance()

  return (
    <section id="formacion" className="mx-auto max-w-7xl overflow-x-clip px-gutter py-section">
      <h2 data-revelar className="text-titulo font-extrabold md:text-center">
        Formación
      </h2>

      <ol ref={lista} className="relative mt-14">
        {/* riel de la línea de tiempo y su relleno según el scroll */}
        <span aria-hidden className="absolute inset-y-0 left-[9px] w-0.5 -translate-x-1/2 bg-trazo md:left-1/2" />
        <span
          aria-hidden
          className="absolute inset-y-0 left-[9px] w-0.5 origin-top -translate-x-1/2 scale-y-(--avance) bg-cobalto md:left-1/2"
        />

        {pasos.map((paso, i) => {
          const derecha = i % 2 === 0
          return (
            <li
              key={paso.titulo}
              data-revelar
              style={{ '--revelar-desde': `translateX(${derecha ? '' : '-'}2.5rem)` } as CSSProperties}
              className="group relative grid pb-12 pl-10 last:pb-0 md:grid-cols-2 md:gap-x-20 md:pl-0"
            >
              {/* punto: se llena al aparecer; hueco con latido verde si sigue en curso */}
              <span
                aria-hidden
                className={`absolute top-6 left-0 size-[18px] rounded-full border-[3px] md:left-1/2 md:-translate-x-1/2 motion-safe:transition-[background-color,scale] motion-safe:delay-300 motion-safe:duration-500 ${
                  paso.enCurso
                    ? 'border-senal bg-noche'
                    : 'scale-75 border-cobalto bg-noche group-data-visible:scale-100 group-data-visible:bg-cobalto'
                }`}
              >
                {paso.enCurso && <span className="absolute inset-0 rounded-full bg-senal/60 motion-safe:animate-ping" />}
              </span>

              {/* fecha al otro lado de la línea en escritorio */}
              <p
                className={`hidden pt-5 text-2xl font-extrabold tracking-tight md:block ${paso.enCurso ? 'text-senal' : 'text-cobalto'} ${
                  derecha ? 'text-right' : 'md:col-start-2 md:row-start-1'
                }`}
              >
                {paso.fecha}
              </p>

              <article
                className={`rounded-capa border bg-plano p-5 sm:p-6 ${paso.enCurso ? 'border-senal/60' : 'border-trazo'} ${
                  derecha ? '' : 'md:col-start-1 md:row-start-1'
                }`}
              >
                <h3 className="text-xl leading-snug font-bold">{paso.titulo}</h3>
                <p className={`mt-1 font-semibold md:hidden ${paso.enCurso ? 'text-senal' : 'text-cobalto'}`}>{paso.fecha}</p>
                <p className="mt-2 text-niebla">{paso.detalle}</p>
                {paso.duracion && <p className="text-niebla">{paso.duracion}</p>}
                {paso.enCurso && <p className="mt-2 font-semibold text-senal">En curso, último semestre</p>}
                {paso.url && (
                  <a
                    href={paso.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-cobalto hover:text-tiza motion-safe:transition-colors"
                  >
                    Verificar certificado
                    <IconoExterno />
                    <span className="sr-only"> de {paso.titulo} en Udemy (abre en pestaña nueva)</span>
                  </a>
                )}
              </article>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
