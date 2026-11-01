# DISENO — reglas de diseño del portafolio

Versión corta y adaptada de la "Guía maestra de diseño web" que le pasó un amigo a Juan David. La guía completa (PDF) va en `docs/referencia/` y se consulta **solo por sección** cuando haga falta (el índice está en la página 1). Este archivo es lo que se lee siempre.

La guía es **referencia de diseño**, no un flujo aparte: el orden de trabajo lo marca el plan de Superpowers.

## 1. Adaptaciones a este proyecto (lo que NO aplica o cambia)

1. **Despliegue en Vercel, no en GitHub Pages.** Ignorar la sección 13.13 (`%BASE_URL%`, rama `gh-pages`, GitHub Actions). El sitio vive en la raíz del dominio y las rutas son normales.
2. **Solo español.** Ignorar la sección 13.8 (sistema ES/EN). Usar `<html lang="es">`.
3. **No copiar la paleta ni las tipografías de la sección 14.** Son de otro portafolio y la propia guía lo advierte. Tampoco copiar el estilo del portafolio de referencia: el objetivo es que se vea propio.
4. **Estilos: Tailwind CSS con tokens propios** (recomendado; **[confirmar]**). Los tokens van como variables CSS y se enlazan al tema de Tailwind. No usar los colores por defecto de Tailwind tal cual ni hex sueltos en componentes.
5. **Las recetas de la sección 13 son ejemplos**, no código para pegar. Adaptarlas (el ejemplo del hero usa el nombre de otra persona).
6. **Iconos siempre SVG**, nunca emojis. Esto incluye la mancuerna de los acordeones.

## 2. Flujo de diseño

| Fase | Qué se hace | Sección de la guía |
|---|---|---|
| Entender | Producto, público y tarea principal (ya están en `BRIEF.md`) | 3, 4.1 |
| Plan visual | 4–6 colores con nombre y hex, fuentes y su papel, layout con bocetos ASCII, principios | 4.3, 4.4 |
| Revisar el plan | Compararlo con el brief y con las señales genéricas; decir qué se cambió y por qué | 4.4 |
| Construir | Fases pequeñas, un commit por fase; cuidar especificidad y orden del CSS | 5, 6, 13 |
| Textos | CTAs con verbo, errores con "qué pasó + cómo arreglarlo" | 7 |
| Verificar | Navegador real a 375, 768, 1024 y 1440 px | 16 |
| Criticar | Crítica de diseño + accesibilidad; quitar un elemento | 9, 10 |
| Entregar | Checklist final, commit, push y comprobar el despliegue en Vercel | 17 |

## 3. Identidad

- Partir del tema real (software backend, gym, New Jahs) y del contenido real del brief.
- **Gastar la audacia en un solo sitio.** Un elemento memorable; todo lo demás, sobrio y disciplinado.
- **Un solo momento orquestado de movimiento** (por ejemplo, la entrada del hero). El movimiento que responde a una acción (abrir, expandir) sí es bienvenido.
- Titulares de menos de ~80 caracteres. No resaltar una sola palabra del titular.
- Numerar (01/02/03) solo si es una secuencia real (pasos, línea de tiempo).
- Antes de entregar, **quitar un elemento**.

### Señales de página genérica (evitar salvo razón explícita)
- Fondo crema con serif y acento terracota.
- Fondo casi negro con un único acento verde ácido o bermellón.
- Layout de periódico: líneas finas, radio cero, columnas densas.
- Tarjetas SaaS iguales, misma sombra gris, degradados como decoración.
- Etiquetas en MAYÚSCULAS sobre cada título, textos "A · B · C", flecha "→" en enlaces y botones.
- Casi negro tintado (`#0B0B0B`, `#111`), monoespaciada para etiquetas, fuente Inter por defecto.
- Hover que eleva cada tarjeta, fade-and-slide en cada sección, degradados morados, todo centrado.

Decidir modo claro u oscuro **a propósito**, no por defecto.

## 4. Interfaz (mínimos)

**Accesibilidad y táctil**
- Todo usable con teclado, foco visible (`:focus-visible`), orden de foco lógico.
- Contraste ≥ 4.5:1 en texto y ≥ 3:1 en componentes; el color nunca es la única señal.
- Áreas táctiles ≥ 44 px en móvil; inputs ≥ 16 px.
- `alt` en imágenes con significado, `aria-label` en botones de solo icono, landmarks (`header`, `nav`, `main`, `footer`) y enlace "Saltar al contenido".
- Enlaces reales (`<a>`) para navegar, `<button>` para acciones. `cursor: pointer` en lo clicable.

**Animación**
- Siempre una variante con `prefers-reduced-motion` (incluidos los `transition-delay`).
- Animar solo `transform` y `opacity`. Nunca `transition: all`.
- Revelar una sola vez (no que desaparezca al subir); solo en títulos de sección, no en cada elemento.

**Layout y contenido**
- Sin scroll horizontal a 375, 768, 1024 y 1440 px.
- `scroll-margin-top` en los destinos de anclas (el menú fijo no debe tapar títulos).
- `<title>` y meta description fieles; `theme-color` y `color-scheme` correctos.
- Estados vacío, de carga y de error diseñados si aplican. Fechas y números con `Intl`.
- Ninguna instrucción de desarrollo visible en la UI.

**Rendimiento**
- Imágenes en WebP/AVIF con `width` y `height` (y `height: auto` en CSS), `loading="lazy"` por debajo del pliegue.
- Fuentes con `preconnect` y `<link>` en `index.html`, no con `@import` en CSS.

## 5. Textos

- CTAs que empiezan con verbo y son específicos: "Descargar CV", "Ver New Jahs", no "Enviar".
- La misma acción con el mismo nombre en todo el sitio.
- Voz activa, mayúscula solo inicial, sin jerga ni relleno.

## 6. Verificación antes de dar una fase por terminada

1. `npm run build` y `npx vite preview` (en otra terminal).
2. Capturas a 375, 768, 1024 y 1440 px; medir si hay scroll horizontal.
3. Consola sin errores y sin recursos 404.
4. Prueba con `prefers-reduced-motion` activado: el contenido debe verse.
5. Recorrer toda la página solo con Tab, Shift+Tab, Enter y Escape.
6. Lighthouse (DevTools) para rendimiento, accesibilidad y SEO.

La receta con `playwright-core` está en la sección 16 de la guía; instalarlo en una carpeta aparte, no dentro del proyecto. Corregir lo que muestren las capturas **antes** de hacer push.

## 7. Checklist final

- [ ] El diseño parte del tema del proyecto, no de una plantilla.
- [ ] Plan visual revisado contra el brief; ninguna señal genérica sin razón.
- [ ] Un solo elemento memorable; se quitó un elemento al final.
- [ ] Solo `transform` y `opacity` animados; reduced-motion respetado.
- [ ] Foco visible, teclado completo, contraste correcto, áreas táctiles ≥ 44 px.
- [ ] Sin scroll horizontal en 4 viewports; sin 404 ni errores en consola.
- [ ] Imágenes optimizadas; fuentes con `preconnect`.
- [ ] Colores, espaciado y tipografía como tokens; sin hex sueltos en componentes.
- [ ] CTAs con verbos concretos; sin texto de desarrollo visible.
- [ ] Tokens y decisiones documentados en el README.
- [ ] Commit, push y despliegue en Vercel comprobado.