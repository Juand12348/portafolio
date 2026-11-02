import { useEffect, useRef } from 'react'

// Anillo Cobalto que sigue al mouse y crece sobre lo clicable. El cursor nativo sigue visible.
// También mueve --px/--py, que usa la cuadrícula iluminada del fondo.
export function Puntero() {
  const anillo = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const conMouse = matchMedia('(pointer: fine)').matches
    const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!conMouse || quieto) return

    const raiz = document.documentElement.style
    const destino = { x: -100, y: -100 }
    const actual = { ...destino }
    let cuadro = 0

    const mover = (e: PointerEvent) => {
      destino.x = e.clientX
      destino.y = e.clientY
      raiz.setProperty('--px', `${e.clientX}px`)
      raiz.setProperty('--py', `${e.clientY}px`)
      const sobreClicable = (e.target as Element).closest('a, button')
      anillo.current?.toggleAttribute('data-activo', Boolean(sobreClicable))
      anillo.current?.toggleAttribute('data-visible', true)
    }
    const salir = () => anillo.current?.toggleAttribute('data-visible', false)

    const seguir = () => {
      // el anillo alcanza al mouse con algo de retraso
      actual.x += (destino.x - actual.x) * 0.2
      actual.y += (destino.y - actual.y) * 0.2
      if (anillo.current) anillo.current.style.translate = `${actual.x}px ${actual.y}px`
      cuadro = requestAnimationFrame(seguir)
    }

    addEventListener('pointermove', mover)
    document.addEventListener('pointerleave', salir)
    cuadro = requestAnimationFrame(seguir)
    return () => {
      removeEventListener('pointermove', mover)
      document.removeEventListener('pointerleave', salir)
      cancelAnimationFrame(cuadro)
    }
  }, [])

  return (
    <div
      ref={anillo}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-50 opacity-0 transition-opacity duration-300 data-visible:opacity-100"
    >
      <div className="-mt-4 -ml-4 size-8 rounded-full border-2 border-cobalto transition-[scale,background-color] duration-300 ease-out-expo in-data-activo:scale-150 in-data-activo:bg-cobalto/15" />
    </div>
  )
}
