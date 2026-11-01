// Fecha del certificado (no la de inicio), confirmada por él. Orden cronológico.
const cursos = [
  {
    nombre: 'Universidad Desarrollo Web - FrontEnd Web Developer!',
    instructor: 'Global Mentoring, Ing. Ubaldo Acosta',
    fecha: '22 de mayo de 2025',
    duracion: '30,5 h',
    url: 'https://www.udemy.com/certificate/UC-8fcac321-65ab-487f-b974-03bc16c99aba/',
  },
  {
    nombre: 'Ultimate GIT: gestiona tus proyectos y trabaja en equipo',
    instructor: 'Nicolas Schurmann',
    fecha: '26 de enero de 2026',
    duracion: '5,5 h',
    url: 'https://www.udemy.com/certificate/UC-ebd2d0fb-9a9b-4c26-bb3c-57bae2abd5fe/',
  },
  {
    nombre: 'NodeJS: De cero a experto',
    instructor: 'Fernando Herrera, {d/t} - DevTalles',
    fecha: '10 de julio de 2026',
    duracion: '37,5 h',
    url: 'https://www.udemy.com/certificate/UC-b5b204de-d6f6-4a13-a201-6ddd6d930e93/',
  },
]

// Parada de la línea: llena = terminada, hueca = en curso.
function Parada({ hecha }: { hecha: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute top-1.5 -left-[calc(1.5rem+11px)] size-[18px] rounded-full border-[3px] border-line ${hecha ? 'bg-line' : 'bg-ground'}`}
    />
  )
}

export function Formacion() {
  return (
    <section id="formacion" className="mx-auto max-w-7xl px-gutter py-section">
      <h2 className="text-sign font-extrabold">Formación</h2>

      <ol className="mt-10 ml-[9px] border-l-4 border-line pl-6">
        {cursos.map(({ nombre, instructor, fecha, duracion, url }) => (
          <li key={url} className="relative pb-10">
            <Parada hecha />
            <p className="text-sm font-semibold text-muted">
              {fecha} · Udemy · {duracion}
            </p>
            <h3 className="mt-1 max-w-[40ch] text-xl font-bold">{nombre}</h3>
            <p className="text-muted">{instructor}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-semibold text-line underline-offset-4 hover:underline"
            >
              Verificar certificado<span className="sr-only"> de {nombre} en Udemy (abre en pestaña nueva)</span> ↗
            </a>
          </li>
        ))}
        <li className="relative">
          <Parada hecha={false} />
          <p className="text-sm font-semibold text-line">En curso · último semestre</p>
          <h3 className="mt-1 max-w-[40ch] text-xl font-bold">Tecnología en Desarrollo de Software</h3>
          <p className="text-muted">Uniagustiniana · desde 2024</p>
        </li>
      </ol>
    </section>
  )
}
