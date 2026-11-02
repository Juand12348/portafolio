import { useState, type PointerEvent, type ReactNode } from 'react'

type Capa = 'infraestructura' | 'aplicacion' | 'dominio'

// Piezas reales del backend de New Jahs (entidades confirmadas por él; stack de su package.json).
const capas: Record<Capa, { nombre: string; piezas: string[]; explicacion: string }> = {
  infraestructura: {
    nombre: 'Infraestructura',
    piezas: ['Express', 'TypeORM + PostgreSQL', 'Redis', 'Groq AI', 'Nodemailer', 'JWT'],
    explicacion:
      'Los adaptadores hacia afuera: HTTP, base de datos, caché, IA y correo. Se pueden cambiar sin tocar el dominio.',
  },
  aplicacion: {
    nombre: 'Aplicación',
    piezas: ['Casos de uso', 'DTOs', 'Bus de eventos'],
    explicacion:
      'Orquesta lo que el sistema hace: recibe DTOs, ejecuta los casos de uso y emite eventos, como descontar el stock al confirmar un pedido.',
  },
  dominio: {
    nombre: 'Dominio',
    piezas: [
      'usuarios',
      'categorias',
      'productos',
      'productos-variante',
      'pedidos',
      'pedidos-item',
      'shipment',
      'payment',
      'movimientos-inventario',
    ],
    explicacion: 'El núcleo: entidades y objetos de valor con las reglas del negocio. No dependen de ningún framework.',
  },
}

// Flechas que apuntan hacia la capa interna: las dependencias van hacia adentro.
function HaciaAdentro() {
  return (
    <svg aria-hidden viewBox="0 0 48 12" className="mx-auto mb-2 h-3 w-12 text-cobalto">
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${6 + i * 16} 2l4 6 4-6`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="motion-safe:animate-[fluir_1.6s_ease-in-out_infinite]"
          style={{ animationDelay: `${i * 160}ms` }}
        />
      ))}
    </svg>
  )
}

function Bloque({
  capa,
  activa,
  elegir,
  orden,
  children,
}: {
  capa: Capa
  activa: Capa
  elegir: (c: Capa) => void
  orden: number
  children?: ReactNode
}) {
  const { nombre, piezas } = capas[capa]
  const esActiva = capa === activa
  const nucleo = capa === 'dominio'
  // con el mouse basta pasar por encima; stopPropagation para que gane la capa más interna
  const alPasar = (e: PointerEvent) => {
    e.stopPropagation()
    if (e.pointerType === 'mouse') elegir(capa)
  }

  return (
    <div
      onPointerOver={alPasar}
      className={`rounded-capa border p-3 motion-safe:animate-[armar_900ms_var(--ease-out-expo)_both] sm:p-4 ${
        nucleo ? 'border-cobalto bg-cobalto text-noche' : 'bg-plano'
      } ${esActiva && !nucleo ? 'border-cobalto' : nucleo ? '' : 'border-trazo'} motion-safe:transition-colors motion-safe:duration-300`}
      style={{ animationDelay: `${orden * 220}ms` }}
    >
      <button
        type="button"
        aria-pressed={esActiva}
        onClick={() => elegir(capa)}
        className={`flex min-h-11 w-full items-center gap-3 text-left font-bold ${nucleo ? 'text-noche' : ''}`}
      >
        <span
          aria-hidden
          className={`size-2.5 rounded-full motion-safe:transition-transform motion-safe:duration-300 ${
            nucleo ? 'bg-noche' : 'bg-cobalto'
          } ${esActiva ? 'scale-150' : ''}`}
        />
        {nombre}
      </button>
      <ul className={`mt-1 flex flex-wrap gap-1.5 ${nucleo ? '' : 'text-niebla'}`}>
        {piezas.map((pieza, i) => (
          <li
            key={pieza}
            className={`rounded-md px-2 py-0.5 text-sm font-semibold motion-safe:animate-[aparecer_500ms_var(--ease-out-expo)_both] ${
              nucleo ? 'bg-noche/10' : 'bg-noche/60'
            }`}
            style={{ animationDelay: `${orden * 220 + 300 + i * 60}ms` }}
          >
            {pieza}
          </li>
        ))}
      </ul>
      {children && (
        <div className="mt-4">
          <HaciaAdentro />
          {children}
        </div>
      )}
    </div>
  )
}

export function Diagrama() {
  const [activa, setActiva] = useState<Capa>('dominio')

  return (
    <figure aria-labelledby="diagrama-titulo">
      <figcaption id="diagrama-titulo" className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <span className="text-xl font-bold">Así está construido el backend de New Jahs</span>
        <span className="flex items-center gap-2 text-sm font-semibold text-senal">
          <span aria-hidden className="relative flex size-2">
            <span className="absolute inset-0 rounded-full bg-senal motion-safe:animate-ping" />
            <span className="relative size-2 rounded-full bg-senal" />
          </span>
          En desarrollo
        </span>
      </figcaption>

      {/* Orden 2-1-0: el diagrama se arma del núcleo hacia afuera */}
      <Bloque capa="infraestructura" activa={activa} elegir={setActiva} orden={2}>
        <Bloque capa="aplicacion" activa={activa} elegir={setActiva} orden={1}>
          <Bloque capa="dominio" activa={activa} elegir={setActiva} orden={0} />
        </Bloque>
      </Bloque>

      <p aria-live="polite" className="mt-4 min-h-[3lh] max-w-[60ch] text-niebla">
        <strong className="text-tiza">{capas[activa].nombre}.</strong> {capas[activa].explicacion}
      </p>
    </figure>
  )
}
