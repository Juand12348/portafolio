import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const secciones = [
  { id: 'tecnologias', nombre: 'Tecnologías' },
  { id: 'formacion', nombre: 'Formación' },
  { id: 'new-jahs', nombre: 'New Jahs' },
  { id: 'eventos', nombre: 'Eventos' },
]

// La sección activa es la que cruza la franja central de la pantalla.
function useSeccionActiva() {
  const [activa, setActiva] = useState('inicio')

  useEffect(() => {
    // el navegador intenta saltar al #ancla antes de que React pinte las secciones
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView()

    const observer = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) if (e.isIntersecting) setActiva(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of ['inicio', ...secciones.map((s) => s.id)]) {
      const seccion = document.getElementById(id)
      if (seccion) observer.observe(seccion)
    }
    return () => observer.disconnect()
  }, [])

  return activa
}

// Una sola barra que se desliza bajo el enlace activo (translate + scale, nada de width).
function useIndicador(activa: string) {
  const lista = useRef<HTMLOListElement>(null)
  const [barra, setBarra] = useState({ x: 0, ancho: 0 })

  useLayoutEffect(() => {
    const medir = () => {
      const enlace = lista.current?.querySelector<HTMLElement>(`[data-id="${activa}"]`)
      setBarra(enlace ? { x: enlace.offsetLeft, ancho: enlace.offsetWidth } : { x: 0, ancho: 0 })
    }
    medir()
    window.addEventListener('resize', medir)
    return () => window.removeEventListener('resize', medir)
  }, [activa])

  return { lista, barra }
}

const cv = 'rounded-md border border-cobalto px-4 py-2 font-semibold text-tiza hover:bg-cobalto hover:text-noche motion-safe:transition-colors motion-safe:duration-300'

// Menú del celular: los 4 enlaces no caben en 375 px.
function MenuMovil({ activa }: { activa: string }) {
  const [abierto, setAbierto] = useState(false)
  const boton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!abierto) return
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAbierto(false)
        boton.current?.focus()
      }
    }
    document.addEventListener('keydown', alTeclear)
    return () => document.removeEventListener('keydown', alTeclear)
  }, [abierto])

  return (
    <div className="lg:hidden">
      <button
        ref={boton}
        type="button"
        aria-expanded={abierto}
        aria-controls="menu-movil"
        onClick={() => setAbierto(!abierto)}
        className="flex min-h-11 items-center gap-2 rounded-md px-3 font-semibold"
      >
        <svg aria-hidden viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 6h14" className={`origin-center [transform-box:fill-box] motion-safe:transition-transform motion-safe:duration-300 ${abierto ? 'translate-y-1 rotate-45' : ''}`} />
          <path d="M3 14h14" className={`origin-center [transform-box:fill-box] motion-safe:transition-transform motion-safe:duration-300 ${abierto ? '-translate-y-1 -rotate-45' : ''}`} />
        </svg>
        Menú
      </button>

      <div
        id="menu-movil"
        hidden={!abierto}
        className="absolute inset-x-0 top-full border-b border-trazo bg-noche px-gutter pb-6 motion-safe:animate-[desplegar_400ms_var(--ease-out-expo)]"
      >
        <ol>
          {secciones.map(({ id, nombre }) => (
            <li key={id} className="border-t border-trazo">
              <a
                href={`#${id}`}
                aria-current={id === activa ? 'location' : undefined}
                onClick={() => setAbierto(false)}
                className={`block py-3.5 text-lg font-semibold ${id === activa ? 'text-cobalto' : 'text-tiza'}`}
              >
                {nombre}
              </a>
            </li>
          ))}
        </ol>
        <a href="/cv/CV_Juan_David_Martinez_Nino.pdf" download className={`mt-4 inline-block ${cv}`}>
          Descargar CV
        </a>
      </div>
    </div>
  )
}

export function Navegacion() {
  const activa = useSeccionActiva()
  const { lista, barra } = useIndicador(activa)

  return (
    <nav aria-label="Secciones" className="relative mx-auto flex max-w-7xl items-center justify-between gap-x-8 px-gutter">
      <a href="#inicio" className="py-3 font-bold tracking-tight">
        Juan David Martínez Niño
      </a>

      <MenuMovil activa={activa} />

      <ol ref={lista} className="relative hidden flex-1 lg:flex">
        {secciones.map(({ id, nombre }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              data-id={id}
              aria-current={id === activa ? 'location' : undefined}
              className={`block px-3 py-3 font-semibold whitespace-nowrap motion-safe:transition-colors motion-safe:duration-300 ${id === activa ? 'text-tiza' : 'text-niebla hover:text-tiza'}`}
            >
              {nombre}
            </a>
          </li>
        ))}
        <span
          aria-hidden
          className="absolute bottom-1 left-0 h-0.5 w-px origin-left bg-cobalto motion-safe:transition-[transform,opacity] motion-safe:duration-500 motion-safe:ease-out-expo"
          style={{
            transform: `translateX(${barra.x + 12}px) scaleX(${Math.max(barra.ancho - 24, 0)})`,
            opacity: barra.ancho ? 1 : 0,
          }}
        />
      </ol>

      <a
        href="/cv/CV_Juan_David_Martinez_Nino.pdf"
        download
        className={`hidden lg:inline-block ${cv}`}
      >
        Descargar CV
      </a>
    </nav>
  )
}
