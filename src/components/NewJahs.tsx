import { mesesDesdeJunio2026 } from '../fechas'

const piezas = [
  ['Ecommerce', 'Para que la empresa venda en línea, con un catálogo hecho a partir de sus prendas reales.'],
  ['Inventario', 'Stock por referencia, talla y color, con movimientos y historial de auditoría.'],
  ['Chatbot 24/7', 'Un asistente con IA para clientes, administradores y empleados.'],
]

// Sprints 1–5 terminados; el 6 sigue pendiente (confirmado por él).
const sprints = [
  ['Análisis y diseño', 'Requerimientos con el cliente, arquitectura, modelo de base de datos, prototipo y contratos de las APIs.'],
  ['Autenticación, usuarios y catálogo', 'JWT, roles con RBAC (minorista, mayorista, empleado, administrador), productos con tallas y colores, filtros y búsqueda.'],
  ['Carrito, pedidos y pagos', 'Flujo de pedidos, bus de eventos que descuenta el stock al confirmar y checkout con pasarela de pagos.'],
  ['Inventario extendido', 'Stock por referencia, talla y color, panel de administración y movimientos con auditoría.'],
  ['Chatbot con IA y dashboard', 'Capa de reportes, chatbot con un LLM sobre productos e inventario, proyección básica de demanda y gráficas.'],
  ['Integración, pruebas y despliegue', 'Integración de módulos, pruebas funcionales, de integración y de regresión, despliegue y validación con el cliente.'],
]
const terminados = 5

const stack = [
  ['Stack', 'Node.js, TypeScript, Express, PostgreSQL, TypeORM, Redis, Jest, Supertest y Groq AI'],
  ['Despliegue', 'Backend y Redis en Railway, PostgreSQL en Neon y el frontend en Vercel'],
  ['Metodología', 'Scrumban, en 6 sprints'],
]

export function NewJahs() {
  const meses = mesesDesdeJunio2026()

  return (
    <section id="new-jahs" className="mx-auto max-w-7xl px-gutter py-section">
      <h2 className="text-titulo font-extrabold">New Jahs</h2>
      <p className="mt-3 text-sm font-semibold text-niebla">
        Desde junio de 2026 ({meses} {meses === 1 ? 'mes' : 'meses'}) · en desarrollo · yo hice el backend
      </p>

      <p className="mt-8 max-w-[60ch] text-lg">
        New Jahs es una MiPyme que produce y vende ropa para hombre, sobre todo camisas. Necesitaba vender en
        línea y ordenar su inventario, así que construimos una aplicación web a su medida. Yo hice todo el
        backend; el frontend lo hizo otra persona.
      </p>

      <a
        href="https://new-jahs-frontend.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block bg-cobalto px-5 py-3 font-semibold text-noche hover:bg-tiza"
      >
        Ver New Jahs<span className="sr-only"> (abre en pestaña nueva)</span> ↗
      </a>

      <dl className="mt-14 grid gap-x-12 md:grid-cols-3">
        {piezas.map(([nombre, frase]) => (
          <div key={nombre} className="border-t-4 border-cobalto py-5">
            <dt className="font-bold">{nombre}</dt>
            <dd className="mt-1 text-niebla">{frase}</dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-section text-[clamp(1.5rem,3vw,2rem)] font-extrabold">Sprints</h3>
      <p className="mt-2 text-niebla">
        {terminados} de {sprints.length} terminados.
      </p>
      <ol className="mt-8 ml-[9px] border-l-4 border-cobalto pl-6">
        {sprints.map(([nombre, frase], i) => {
          const hecho = i < terminados
          return (
            <li key={nombre} className="relative pb-8 last:pb-0">
              {/* parada: llena = terminado, hueca = pendiente */}
              <span
                aria-hidden
                className={`absolute top-1.5 -left-[calc(1.5rem+11px)] size-[18px] rounded-full border-[3px] border-cobalto ${hecho ? 'bg-cobalto' : 'bg-noche'}`}
              />
              <p className={`text-sm font-semibold ${hecho ? 'text-niebla' : 'text-cobalto'}`}>
                Sprint {i + 1} · {hecho ? 'terminado' : 'pendiente'}
              </p>
              <h4 className="mt-1 text-xl font-bold">{nombre}</h4>
              <p className="max-w-[60ch] text-niebla">{frase}</p>
            </li>
          )
        })}
      </ol>

      <dl className="mt-section">
        {stack.map(([nombre, valor]) => (
          <div key={nombre} className="grid gap-2 border-t-2 border-trazo py-4 md:grid-cols-[16rem_1fr] md:gap-8">
            <dt className="font-semibold text-niebla">{nombre}</dt>
            <dd className="font-semibold">{valor}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
