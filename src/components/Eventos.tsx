export function Eventos() {
  return (
    <section id="eventos" className="mx-auto max-w-7xl px-gutter py-section">
      <h2 className="text-titulo font-extrabold">Eventos</h2>

      <article className="mt-10 border-t-4 border-cobalto pt-6">
        <p className="text-sm font-semibold text-niebla">2026 · categoría Semillero · por la Uniagustiniana</p>
        <h3 className="mt-1 max-w-[50ch] text-[clamp(1.5rem,3vw,2rem)] leading-tight font-extrabold text-balance">
          Encuentro de Investigadores de la Red de Programas de Ingeniería de Sistemas y Afines (REDIS)
        </h3>
        <p className="mt-4 max-w-[60ch] text-niebla">
          Presenté New Jahs con el póster «Desarrollo de una Aplicación web para New Jahs», del programa de
          Tecnología en Desarrollo de Software.
        </p>

        <img
          src="/images/feria-redis-2026-1600.webp"
          alt="Dos estudiantes junto al póster «Desarrollo de una Aplicación web para New Jahs» en el encuentro REDIS 2026, con un portátil que muestra la aplicación."
          width={1600}
          height={720}
          loading="lazy"
          className="mt-8 w-full border-2 border-trazo bg-plano object-cover"
        />
      </article>
    </section>
  )
}
