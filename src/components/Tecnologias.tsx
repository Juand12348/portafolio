import type { CSSProperties, PointerEvent } from 'react'
import {
  siCplusplus,
  siCss,
  siDocker,
  siHtml5,
  siJavascript,
  siJest,
  siMysql,
  siNeon,
  siNestjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siRailway,
  siReact,
  siRender,
  siSpringboot,
  siTypeorm,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from 'simple-icons'

type Tec = { nombre: string; icono: SimpleIcon; nivel?: string; newJahs?: boolean }

// Nivel solo donde él lo confirmó; "En New Jahs" solo donde lo usó en su backend.
const diario: Tec[] = [
  { nombre: 'Node.js', icono: siNodedotjs, newJahs: true },
  { nombre: 'TypeScript', icono: siTypescript, newJahs: true },
  { nombre: 'TypeORM', icono: siTypeorm, newJahs: true },
  { nombre: 'Jest', icono: siJest, newJahs: true },
]

const areas: { area: string; items: Tec[] }[] = [
  { area: 'Lenguajes', items: [{ nombre: 'JavaScript', icono: siJavascript }, { nombre: 'Java', icono: siOpenjdk, nivel: 'Manejo bien' }, { nombre: 'C++', icono: siCplusplus, nivel: 'Básico' }] },
  { area: 'Backend', items: [{ nombre: 'NestJS', icono: siNestjs }, { nombre: 'Spring Boot', icono: siSpringboot, nivel: 'Básico' }] },
  { area: 'Datos y contenedores', items: [{ nombre: 'PostgreSQL', icono: siPostgresql, newJahs: true }, { nombre: 'MySQL', icono: siMysql }, { nombre: 'Docker', icono: siDocker }] },
  { area: 'Despliegue', items: [{ nombre: 'Railway', icono: siRailway, newJahs: true }, { nombre: 'Neon', icono: siNeon, newJahs: true }, { nombre: 'Vercel', icono: siVercel }, { nombre: 'Render', icono: siRender }] },
  { area: 'Frontend', items: [{ nombre: 'HTML', icono: siHtml5, nivel: 'Básico' }, { nombre: 'CSS', icono: siCss, nivel: 'Básico' }, { nombre: 'React', icono: siReact, nivel: 'Básico' }] },
]

const practicas = [
  ['Arquitectura limpia', 'La lógica de negocio no depende del framework ni de la base de datos.'],
  ['Patrón adaptador', 'Los servicios externos entran por adaptadores, así se pueden cambiar sin tocar el dominio.'],
  ['Inyección de dependencias', 'Cada clase recibe lo que necesita en vez de crearlo; eso la hace fácil de probar.'],
  ['Pruebas con Jest', 'Pruebas automatizadas que comprueban que cada pieza hace lo que debe antes de desplegar.'],
  ['Manejo de excepciones', 'Errores con nombre propio y respuestas claras, manejados en un solo lugar.'],
  ['Objetos de valor', 'Datos como un correo o un precio se validan al crearse y no cambian después.'],
  ['DTOs', 'Lo que entra y sale de la API tiene una forma definida, separada de las entidades.'],
]

// Color de marca, salvo los logos oscuros que no se verían sobre Plano (contraste < 3:1).
function colorMarca(hex: string) {
  const lum = (h: string) => {
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
  return (lum(hex) + 0.05) / (lum('111b2e') + 0.05) < 3 ? 'var(--color-tiza)' : `#${hex}`
}

// La tarjeta se inclina hacia el mouse y una luz la sigue por dentro.
function inclinar(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== 'mouse') return
  const r = e.currentTarget.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width
  const y = (e.clientY - r.top) / r.height
  const s = e.currentTarget.style
  s.setProperty('--mx', `${x * 100}%`)
  s.setProperty('--my', `${y * 100}%`)
  s.setProperty('--rx', `${(0.5 - y) * 10}deg`)
  s.setProperty('--ry', `${(x - 0.5) * 12}deg`)
}
function soltar(e: PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

function Tarjeta({ tec, grande, retraso }: { tec: Tec; grande?: boolean; retraso: number }) {
  return (
    <li data-revelar style={{ '--retraso': `${retraso}ms` } as CSSProperties} className="[perspective:800px]">
      <article
        onPointerMove={inclinar}
        onPointerLeave={soltar}
        style={{ '--marca': colorMarca(tec.icono.hex) } as CSSProperties}
        className={`group relative h-full overflow-hidden rounded-capa border border-trazo bg-plano hover:border-cobalto motion-safe:transition-[transform,border-color] motion-safe:duration-300 motion-safe:ease-out-expo [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] ${grande ? 'p-6' : 'p-4'}`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_oklab,var(--marca)_22%,transparent),transparent_65%)]"
        />
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={`relative fill-current text-niebla group-hover:scale-110 group-hover:text-[var(--marca)] motion-safe:transition-[color,scale] motion-safe:duration-500 motion-safe:ease-out-expo [@media(hover:none)]:text-[var(--marca)] ${grande ? 'size-12' : 'size-9'}`}
        >
          <path d={tec.icono.path} />
        </svg>
        <h4 className={`relative mt-4 font-bold ${grande ? 'text-2xl' : 'text-lg'}`}>{tec.nombre}</h4>
        {(tec.nivel || tec.newJahs) && (
          <p className="relative mt-1 flex flex-wrap gap-x-3 text-sm font-semibold">
            {tec.nivel && <span className="text-niebla">{tec.nivel}</span>}
            {tec.newJahs && <span className="text-cobalto">En New Jahs</span>}
          </p>
        )}
      </article>
    </li>
  )
}

export function Tecnologias() {
  return (
    <section id="tecnologias" className="mx-auto max-w-7xl px-gutter py-section">
      <h2 data-revelar className="text-titulo font-extrabold">
        Tecnologías
      </h2>

      <h3 data-revelar className="mt-12 text-xl font-bold">
        Uso diario
      </h3>
      <p data-revelar className="mt-1 max-w-[60ch] text-niebla">
        Es el entorno con el que construí el backend de New Jahs, y donde me especializo.
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {diario.map((tec, i) => (
          <Tarjeta key={tec.nombre} tec={tec} grande retraso={i * 90} />
        ))}
      </ul>

      <div className="mt-16 space-y-10">
        {areas.map(({ area, items }) => (
          <div key={area} className="grid gap-4 md:grid-cols-[12rem_1fr] md:gap-8">
            <h3 data-revelar className="font-bold text-niebla md:pt-4">
              {area}
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {items.map((tec, i) => (
                <Tarjeta key={tec.nombre} tec={tec} retraso={i * 80} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 data-revelar className="mt-section text-[clamp(1.5rem,3vw,2rem)] font-extrabold">
        Cómo construyo software
      </h3>
      <dl className="mt-6 grid gap-x-12 md:grid-cols-2">
        {practicas.map(([nombre, frase], i) => (
          <div key={nombre} data-revelar style={{ '--retraso': `${(i % 2) * 90}ms` } as CSSProperties} className="border-t border-trazo py-5">
            <dt className="font-bold">{nombre}</dt>
            <dd className="mt-1 max-w-[52ch] text-niebla">{frase}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
