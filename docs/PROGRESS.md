# PROGRESS — Portafolio de Juan David Martínez Niño

Última actualización: 3 de noviembre de 2026.

## Dónde estamos

**Rediseño completo en curso**, en la rama `feat/rediseno` (sale de `feat/inicio-y-tecnologias`). La primera versión ("Señalética de línea", amarillo sobre casi negro) le pareció genérica; la nueva dirección es **"Plano de arquitectura"**: tema oscuro con azules, enfoque en tecnología y **una app muy dinámica** (decisión de él).

| Fase | Estado | Commit |
|---|---|---|
| 1. Tokens azules, Schibsted Grotesk, navegación, landmarks | Hecha | `384f28d` |
| 2. Inicio con diagrama de capas + anillo Cobalto + cuadrícula | Hecha | `64cb8b3` |
| 3. Tecnologías con logos interactivos + revelado al hacer scroll | Hecha | `d8b2492` |
| 4. Formación como línea de tiempo central | Hecha | `826927b` |
| 5. New Jahs | **Siguiente** | — |
| 6. Eventos (barra horizontal) y pie de página | Pendiente: falta decidir contenido | — |

Cada fase se verifica con `npm run build`, lint y capturas a 375, 768, 1024 y 1440 px (sin scroll horizontal, sin errores de consola ni 404). El script de capturas usa `playwright-core` instalado **fuera** del proyecto (carpeta temporal) y el Chrome del equipo.

## Pendiente de respuesta de Juan David

1. ~~Eventos como barra horizontal~~ **Resuelto (3 nov 2026):** fila horizontal tipo Netflix con 1 tarjeta (REDIS); cada evento nuevo se agrega al arreglo `eventos` en `Eventos.tsx`.
2. **Nombres de las entidades** en el diagrama: se escribieron como identificadores (`productos-variante`, `pedidos-item`…; "productso" se corrigió). Confirmar que así se llaman en su código.
3. **Nombre en el inicio:** a 1024 y 1440 px "Martínez / Niño" se parte en dos líneas. ¿Se queda o se achica?
4. **Guiños de gym** (máx. 3, sin confirmar): mancuerna SVG en desplegables, Formación como bitácora ("Serie 1, 2, 3"), pie "Ahora mismo" (¿qué está aprendiendo?).

## Sistema del rediseño (en `src/index.css`)

| Token | Valor | Uso |
|---|---|---|
| `noche` | `#0b1220` | fondo |
| `plano` | `#111b2e` | superficies, tarjetas, capas del diagrama |
| `trazo` | `#22314d` | solo líneas decorativas (1.4:1); nunca bordes de controles |
| `tiza` | `#e6edf7` | texto principal (15.9:1) |
| `niebla` | `#9fb0c8` | texto secundario (8.5:1) |
| `cobalto` | `#4f8cff` | acción, enlaces, foco, núcleo del diagrama (5.8:1) |
| `senal` | `#3ddc97` | **solo estados**: en desarrollo, en curso, pendiente |
| `font-sans` | Schibsted Grotesk Variable (Fontsource) | toda la tipografía |
| `text-hero` / `text-titulo` | tamaños fluidos | nombre del inicio / título de sección |
| `rounded-capa` | 10 px | tarjetas y capas |

Movimiento: `ease-out-expo`; keyframes `aparecer`, `subir`, `armar`, `fluir`, `desplegar`. Todo lo marcado con `data-revelar` aparece una vez al entrar en pantalla (`useRevelar` en `App.tsx`; `--retraso` y `--revelar-desde` lo ajustan). Todo se apaga con `prefers-reduced-motion`.

Piezas: `Navegacion.tsx` (barra que se desliza + menú bajo 1024 px), `Puntero.tsx` (anillo Cobalto, solo con mouse; mueve `--px/--py` para la cuadrícula iluminada), `Diagrama.tsx` (Infraestructura > Aplicación > Dominio con las 9 entidades), `IconoExterno.tsx`, logos de `simple-icons` (Java usa OpenJDK porque Oracle no permite el oficial).

## Decisiones tomadas por Juan David

- **Rediseño (1 nov 2026):** tema oscuro con azules, enfoque en tecnología; paleta aprobada; Fontsource se mantiene; diagrama de capas en el **inicio**; la app debe ser **muy dinámica** (registrado en `docs/DISENO.md`); puntero: **anillo Cobalto**.
- **Tecnologías:** contenedores con el logo de cada tecnología, interactivos.
- **Formación:** línea de tiempo en el centro que aparece al hacer scroll.
- **Entidades del dominio de New Jahs:** usuarios, categorias, productos, productos-variante, pedidos, pedidos-item, shipment, payment, movimientos-inventario.
- **Estilos:** Tailwind CSS con tokens propios; nunca la paleta por defecto de Tailwind.
- **Despliegue del portafolio:** Vercel.
- **Orden de secciones:** Inicio → Tecnologías → Formación → New Jahs → Eventos (REDIS).
- **New Jahs:** desde **junio de 2026**; **Scrumban**; sprints 1–5 terminados y el 6 pendiente; él hizo **solo el backend**; **sin capturas**, solo el enlace. Stack: Node.js, TypeScript, PostgreSQL, TypeORM, Jest y Groq AI; despliegue en Railway (backend y Redis), Neon (base de datos) y Vercel (frontend).
- **Nivel en tecnologías:** fuerte en Node.js, TypeScript, TypeORM y Jest; maneja bien Java; básico en Spring Boot, C++ y frontend.
- **Evento:** REDIS 2026; la otra persona de la foto está de acuerdo.
- **Correo del backend:** Resend (no Nodemailer).
- **Sprints:** ya no son línea de tiempo (se parecía a Formación); ahora barra segmentada + tarjetas numeradas.
- **CV:** se publica con el teléfono 3102225646.

## Qué falta además

- **Revisar textos propuestos por Claude:** frase del inicio, textos de cada capa del diagrama, las 7 frases de "Cómo construyo software", textos de New Jahs la frase de Eventos, el mensaje de WhatsApp y el pie ("¿Construimos algo juntos?" y su frase).
- **Niveles sin confirmar:** JavaScript, NestJS, MySQL, PostgreSQL, Docker.
- **Originales pesados en `public/`:** `foto-perfil.jpg` (8 MB, sin commitear) y `feria-redis-2026.jpg` (1,3 MB) ya no se usan (el sitio usa las versiones WebP) pero se copian al build; pedir permiso para borrarlos o moverlos.
- **Cierre:** crítica de diseño y accesibilidad, quitar un elemento, `DESIGN.md`, tokens en el README, Lighthouse, merge y despliegue en Vercel.

## Siguiente paso

**3 nov 2026:** hechos Resend en el diagrama, sprints en tarjetas, Eventos en fila horizontal tipo Netflix, fondo de trazas tipo circuito con pulsos (reemplazó la cuadrícula; a él le gustó) y contacto por WhatsApp + "Copiar correo" (él probó que funciona). Pie de página hecho (contacto, enlaces, crédito; sin "Ahora mismo" porque falta saber qué está aprendiendo). Falta: él revisa textos propuestos y el cierre (ver "Qué falta además").
