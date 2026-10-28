import { useEffect, useState } from 'react'

const estaciones = [
  { id: 'inicio', nombre: 'Inicio' },
  { id: 'tecnologias', nombre: 'Tecnologías' },
  { id: 'formacion', nombre: 'Formación' },
  { id: 'new-jahs', nombre: 'New Jahs' },
  { id: 'eventos', nombre: 'Eventos' },
]

// La estación activa es la sección que cruza la franja central de la pantalla.
function useEstacionActiva() {
  const [activa, setActiva] = useState(estaciones[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) if (e.isIntersecting) setActiva(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const { id } of estaciones) {
      const seccion = document.getElementById(id)
      if (seccion) observer.observe(seccion)
    }
    return () => observer.disconnect()
  }, [])

  return activa
}

export function Linea() {
  const activa = useEstacionActiva()

  return (
    <nav
      aria-label="Secciones"
      className="sticky top-0 z-10 border-y-2 border-rule bg-ground/95 backdrop-blur-sm"
    >
      <ol className="mx-auto flex max-w-7xl overflow-x-auto px-gutter pt-7 pb-3">
        {estaciones.map(({ id, nombre }, i) => {
          const aqui = id === activa
          return (
            <li key={id} className="relative min-w-28 flex-1">
              {/* tramo de línea: empieza en la primera estación y termina en la última */}
              <span
                aria-hidden
                className={`absolute top-[7px] h-1 bg-line ${i === 0 ? 'left-1/2' : 'left-0'} ${i === estaciones.length - 1 ? 'right-1/2' : 'right-0'}`}
              />
              <a
                href={`#${id}`}
                aria-current={aqui ? 'location' : undefined}
                className="group relative flex flex-col items-center gap-2 text-center"
              >
                <span
                  aria-hidden
                  className={`size-[18px] rounded-full border-[3px] border-line motion-safe:transition-colors motion-safe:duration-500 motion-safe:ease-out-expo ${aqui ? 'bg-line' : 'bg-ground group-hover:bg-panel'}`}
                />
                <span
                  className={`text-sm font-bold whitespace-nowrap ${aqui ? 'text-ink' : 'text-muted group-hover:text-ink'}`}
                >
                  {nombre}
                </span>
                {aqui && (
                  <span className="absolute -top-6 text-[0.6875rem] font-semibold tracking-wide text-line uppercase">
                    Estás aquí
                  </span>
                )}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
