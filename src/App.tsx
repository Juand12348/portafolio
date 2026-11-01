import { Eventos } from './components/Eventos'
import { Formacion } from './components/Formacion'
import { Inicio } from './components/Inicio'
import { Linea } from './components/Linea'
import { NewJahs } from './components/NewJahs'
import { Tecnologias } from './components/Tecnologias'

function App() {
  return (
    <main>
      <Inicio />
      <Linea />
      <Tecnologias />
      <Formacion />
      <NewJahs />
      <Eventos />
    </main>
  )
}

export default App
