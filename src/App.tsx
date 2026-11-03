import { useEffect } from 'react'
import { Eventos } from './components/Eventos'
import { Fondo } from './components/Fondo'
import { Formacion } from './components/Formacion'
import { Inicio } from './components/Inicio'
import { Navegacion } from './components/Navegacion'
import { NewJahs } from './components/NewJahs'
import { Pie } from './components/Pie'
import { Puntero } from './components/Puntero'
import { Tecnologias } from './components/Tecnologias'

// Cada [data-revelar] aparece la primera vez que entra en pantalla, y se queda.
function useRevelar() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue
          e.target.setAttribute('data-visible', '')
          observer.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    document.querySelectorAll('[data-revelar]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function App() {
  useRevelar()

  return (
    <>
      <Fondo />
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
      <Pie />
    </>
  )
}

export default App
