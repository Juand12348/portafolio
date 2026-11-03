import { useState } from 'react'

export const correo = 'juandavidmn0819@gmail.com'
// Mensaje que ya aparece escrito al abrir el chat (propuesto por Claude; él puede cambiarlo).
export const whatsapp = `https://wa.me/573102225646?text=${encodeURIComponent('Hola Juan David, vi tu portafolio y me gustaría hablar contigo.')}`
export const linkedin = 'https://www.linkedin.com/in/juan-david-mart%C3%ADnez-ni%C3%B1o-879b89323/'
export const github = 'https://github.com/Juand12348'
export const cv = '/cv/CV_Juan_David_Martinez_Nino.pdf'

// Subrayado que se dibuja de izquierda a derecha al pasar el mouse.
export const enlace =
  'relative font-semibold after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-cobalto hover:after:scale-x-100 motion-safe:after:transition-transform motion-safe:after:duration-500 motion-safe:after:ease-out-expo'

export const boton =
  'inline-flex min-h-12 items-center rounded-md px-5 font-semibold motion-safe:transition-[background-color,color,translate] motion-safe:duration-300 active:translate-y-px'

// mailto no abre nada si no hay app de correo configurada; copiar sirve con cualquier proveedor.
export function CopiarCorreo() {
  const [copiado, setCopiado] = useState<'no' | 'si' | 'error'>('no')

  async function copiar() {
    try {
      await navigator.clipboard.writeText(correo)
      setCopiado('si')
    } catch {
      setCopiado('error') // sin permiso de portapapeles: se muestra el correo para copiarlo a mano
    }
    setTimeout(() => setCopiado('no'), 2500)
  }

  return (
    <>
      <button type="button" onClick={copiar} className={`${boton} border border-cobalto hover:bg-cobalto hover:text-noche`}>
        {copiado === 'si' ? '¡Copiado!' : copiado === 'error' ? correo : 'Copiar correo'}
      </button>
      <span role="status" className="sr-only">
        {copiado === 'si' ? `Correo ${correo} copiado` : ''}
      </span>
    </>
  )
}
