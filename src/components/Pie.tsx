import { boton, CopiarCorreo, cv, enlace, github, linkedin, whatsapp } from './Contacto'
import { secciones } from '../secciones'

export function Pie() {
  return (
    <footer className="border-t border-trazo bg-noche/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-gutter pt-section pb-10">
        {/* textos propuestos por Claude, pendientes de que él los revise */}
        <h2 data-revelar className="max-w-[18ch] text-titulo leading-tight font-extrabold text-balance">
          ¿Construimos algo juntos?
        </h2>
        <p data-revelar className="mt-4 max-w-[46ch] text-lg text-niebla">
          Escríbeme por WhatsApp o copia mi correo. También puedes descargar mi CV.
        </p>

        <ul data-revelar className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <li>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={`${boton} bg-cobalto text-noche hover:bg-tiza`}>
              Escríbeme por WhatsApp<span className="sr-only"> (abre en pestaña nueva)</span>
            </a>
          </li>
          <li>
            <CopiarCorreo />
          </li>
          <li>
            <a href={cv} download className={`${boton} border border-cobalto hover:bg-cobalto hover:text-noche`}>
              Descargar CV
            </a>
          </li>
        </ul>

        <div className="mt-section grid gap-8 border-t border-trazo pt-8 text-sm md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-bold">Juan David Martínez Niño</p>
            <p className="mt-1 text-niebla">© 2026 · Hecho con React, TypeScript y Tailwind CSS · Desplegado en Vercel</p>
          </div>

          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {secciones.map((s) => (
                <li key={s.id}>
                  <a className={enlace} href={`#${s.id}`}>
                    {s.nombre}
                  </a>
                </li>
              ))}
              <li>
                <a className={enlace} href={linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn<span className="sr-only"> (abre en pestaña nueva)</span>
                </a>
              </li>
              <li>
                <a className={enlace} href={github} target="_blank" rel="noopener noreferrer">
                  GitHub<span className="sr-only"> (abre en pestaña nueva)</span>
                </a>
              </li>
              <li>
                <a className={`${enlace} text-cobalto`} href="#inicio">
                  Volver arriba ↑
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
