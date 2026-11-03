// Cada evento nuevo se agrega aquí y aparece como otra tarjeta a la derecha de la fila.
const eventos = [
  {
    anio: '2026',
    nombre: 'Encuentro REDIS',
    detalle: 'Categoría Semillero · por la Uniagustiniana',
    resumen:
      'Presenté New Jahs con el póster «Desarrollo de una Aplicación web para New Jahs», del programa de Tecnología en Desarrollo de Software.',
    titulo: 'Encuentro de Investigadores de la Red de Programas de Ingeniería de Sistemas y Afines (REDIS)',
    foto: '/images/feria-redis-2026-1600.webp',
    alt: 'Dos estudiantes junto al póster «Desarrollo de una Aplicación web para New Jahs» en el encuentro REDIS 2026, con un portátil que muestra la aplicación.',
  },
]

export function Eventos() {
  return (
    <section id="eventos" className="mx-auto max-w-7xl px-gutter py-section">
      <h2 data-revelar className="text-titulo font-extrabold">
        Eventos
      </h2>

      {/* fila horizontal con scroll y snap; enfocable para moverla con las flechas del teclado */}
      <ul
        tabIndex={0}
        aria-label="Eventos, desliza hacia los lados"
        className="-mx-gutter mt-10 flex snap-x snap-mandatory scroll-px-gutter gap-5 overflow-x-auto px-gutter pb-4 focus-visible:outline-2 focus-visible:outline-cobalto"
      >
        {eventos.map((e) => (
          <li
            key={e.titulo}
            data-revelar
            className="group w-[85%] shrink-0 snap-start overflow-hidden rounded-capa border border-trazo bg-plano sm:w-[26rem]"
          >
            <div className="overflow-hidden">
              <img
                src={e.foto}
                alt={e.alt}
                width={1600}
                height={720}
                loading="lazy"
                className="aspect-video w-full object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-105"
              />
            </div>
            <article className="p-5">
              <p className="text-sm font-semibold text-cobalto">
                {e.anio} · {e.nombre}
              </p>
              <h3 className="mt-1 text-lg leading-snug font-bold">{e.titulo}</h3>
              <p className="mt-1 text-sm font-semibold text-niebla">{e.detalle}</p>
              <p className="mt-3 text-niebla">{e.resumen}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
