import { Eventos } from './components/Eventos'
import { Formacion } from './components/Formacion'
import { Inicio } from './components/Inicio'
import { Navegacion } from './components/Navegacion'
import { NewJahs } from './components/NewJahs'
import { Puntero } from './components/Puntero'
import { Tecnologias } from './components/Tecnologias'

function App() {
  return (
    <>
      <div aria-hidden className="cuadricula pointer-events-none fixed inset-0 -z-10 [--c:color-mix(in_oklab,var(--color-trazo)_55%,transparent)]" />
      <div
        aria-hidden
        className="cuadricula pointer-events-none fixed inset-0 -z-10 [--c:color-mix(in_oklab,var(--color-cobalto)_35%,transparent)] [mask-image:radial-gradient(circle_260px_at_var(--px,-999px)_var(--py,-999px),black,transparent)]"
      />
      <Puntero />
      <a
        href="#contenido"
        className="fixed top-2 left-2 z-30 -translate-y-20 rounded-md bg-cobalto px-4 py-2 font-semibold text-noche focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <header className="sticky top-0 z-20 border-b border-trazo bg-noche/85 backdrop-blur-md">
        <Navegacion />
      </header>
      <main id="contenido">
        <Inicio />
        <Tecnologias />
        <Formacion />
        <NewJahs />
        <Eventos />
      </main>
    </>
  )
}

export default App
