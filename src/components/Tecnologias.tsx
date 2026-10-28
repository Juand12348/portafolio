// Nivel solo donde él lo confirmó; sin porcentajes ni barras.
const areas = [
  { area: 'Lenguajes', items: [['TypeScript'], ['JavaScript'], ['Java', 'manejo bien'], ['C++', 'básico']] },
  { area: 'Backend', items: [['Node.js'], ['NestJS'], ['Spring Boot', 'básico']] },
  { area: 'Datos y ORM', items: [['PostgreSQL'], ['TypeORM'], ['MySQL']] },
  { area: 'Pruebas y contenedores', items: [['Jest'], ['Docker']] },
  { area: 'Despliegue', items: [['Railway'], ['Neon'], ['Vercel'], ['Render']] },
  { area: 'Frontend', items: [['HTML', 'básico'], ['CSS', 'básico'], ['React', 'básico']] },
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

export function Tecnologias() {
  return (
    <section id="tecnologias" className="mx-auto max-w-7xl px-gutter py-section">
      <h2 className="text-sign font-extrabold">Tecnologías</h2>

      <div className="mt-10 border-t-4 border-line pt-6">
        <h3 className="text-sm font-semibold text-muted">Uso diario</h3>
        <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-[clamp(1.75rem,4vw,3rem)] leading-tight font-bold">
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>TypeORM</li>
          <li>Jest</li>
        </ul>
        <p className="mt-4 max-w-[60ch] text-muted">Es el entorno con el que construí el backend de New Jahs, y donde me especializo.</p>
      </div>

      <dl className="mt-14">
        {areas.map(({ area, items }) => (
          <div key={area} className="grid gap-2 border-t-2 border-rule py-4 md:grid-cols-[16rem_1fr] md:gap-8">
            <dt className="font-semibold text-muted">{area}</dt>
            <dd className="flex flex-wrap gap-x-7 gap-y-1">
              {items.map(([nombre, nivel]) => (
                <span key={nombre} className="font-semibold">
                  {nombre}
                  {nivel && <span className="ml-2 text-sm font-normal text-muted">{nivel}</span>}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-section text-[clamp(1.5rem,3vw,2rem)] font-extrabold">Cómo construyo software</h3>
      <dl className="mt-6 grid gap-x-12 md:grid-cols-2">
        {practicas.map(([nombre, frase]) => (
          <div key={nombre} className="border-t-2 border-rule py-5">
            <dt className="font-bold">{nombre}</dt>
            <dd className="mt-1 max-w-[52ch] text-muted">{frase}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
