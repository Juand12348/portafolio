# PROGRESS — Portafolio de Juan David Martínez Niño

Última actualización: 1 de noviembre de 2026.

## Qué hicimos

1. **Contexto de producto** (`/impeccable init`): se creó `PRODUCT.md` con los datos confirmados y se actualizó `docs/BRIEF.md`.
2. **Plan del inicio** (`/impeccable shape inicio`): se eligió la dirección visual y se registró su contrato en `.impeccable/surfaces/src-app-tsx.md`.
3. **Base técnica**: Tailwind CSS v4 (`@tailwindcss/vite`) y la fuente Overpass (`@fontsource-variable/overpass`), con tokens propios en `src/index.css`. Se borraron los archivos de la plantilla de Vite.
4. **Sección Inicio** (`src/components/Inicio.tsx`): nombre, "(Software Developer)", frase de presentación con los meses en New Jahs calculados solos, contacto (correo, LinkedIn, GitHub, CV) y foto.
5. **Línea de navegación** (`src/components/Linea.tsx`): las 5 estaciones, fija arriba al hacer scroll, con "Estás aquí" que sigue a la sección visible.
6. **Sección Tecnologías** (`src/components/Tecnologias.tsx`): uso diario, tecnologías por área con nivel solo donde está confirmado y el bloque "Cómo construyo software".
7. **Foto optimizada**: `public/images/foto-perfil-900.jpg` (70 KB) a partir de la original de 8 MB.
8. **Sección Formación** (`src/components/Formacion.tsx`): los 3 cursos de Udemy como paradas llenas en orden cronológico, con enlace de verificación, y la carrera como última parada hueca ("en curso").
9. **Sección New Jahs** (`src/components/NewJahs.tsx`): problema, enlace al sitio, las 3 piezas, los 6 sprints en la línea (1–5 llenos, 6 hueco), stack y despliegue. El cálculo de meses vive en `src/fechas.ts`.
10. **Sección Eventos** (`src/components/Eventos.tsx`): REDIS 2026 con la foto optimizada `public/images/feria-redis-2026-1600.jpg` (190 KB).

## Decisiones tomadas por Juan David

- **Estilos:** Tailwind CSS con colores, tipografías y espaciados como tokens propios; nunca la paleta por defecto de Tailwind.
- **Despliegue del portafolio:** Vercel.
- **Estilo visual:** base oscura, limpio y sobrio, que no parezca plantilla. Dirección elegida: **Señalética de línea** (el sitio es una línea de metro; cada sección es una estación).
- **Orden de secciones:** Inicio (sobre + contacto) → Tecnologías → Formación → New Jahs → Eventos (REDIS).
- **Foto de perfil** en el inicio.
- **New Jahs:** empezó en **junio de 2026**; metodología **Scrumban**; sprints 1–5 terminados y el 6 pendiente; él hizo **solo el backend** (el frontend con Tailwind no es suyo); **sin capturas**, solo el enlace.
- **Stack de New Jahs:** Node.js, TypeScript, PostgreSQL, TypeORM, Jest y Groq AI; despliegue en Railway (backend y Redis), Neon (base de datos) y Vercel (frontend).
- **Nivel en tecnologías:** fuerte en Node.js, TypeScript, TypeORM y Jest; maneja bien Java; básico en Spring Boot, C++ y frontend. Plataformas: Railway y Neon (las que más maneja), también Vercel y Render.
- **Evento:** Encuentro de Investigadores de la Red de Programas de Ingeniería de Sistemas y Afines (REDIS) 2026; la otra persona de la foto está de acuerdo.
- **CV:** se publica con el teléfono 3102225646 (ya actualizado).

## Tokens del sistema (en `src/index.css`)

| Token | Valor | Uso |
|---|---|---|
| `ground` | `#0f1317` | fondo |
| `panel` | `#1d242b` | superficies, foto sin cargar |
| `rule` | `#2e3740` | reglas de 2 px |
| `ink` | `#eef0f2` | texto principal |
| `muted` | `#a3adb8` | texto secundario |
| `line` | `#f2b705` | la línea amarilla, botón principal |
| `line-ink` | `#1a1400` | texto sobre amarillo |
| `font-sign` | Overpass Variable | toda la tipografía |
| `gutter` / `section` | espaciados fluidos | márgenes laterales / entre secciones |
| `text-station` / `text-sign` | tamaños fluidos | nombre del inicio / título de sección |

Nota: no nombrar un token de espaciado `block`; choca con la clase `inline-block` de Tailwind.

## Qué falta

- **Revisar textos propuestos por Claude** (cámbialos con tus palabras):
  - la frase de presentación del inicio;
  - las 7 frases de "Cómo construyo software";
  - los textos de New Jahs (problema, piezas y sprints) y la frase de Eventos.
- **Niveles sin confirmar:** JavaScript, NestJS, MySQL, PostgreSQL, Docker.
- **Detalles de gym** (máx. 4–5, sutiles): por ejemplo la mancuerna como control de desplegables.
- **Originales pesados en `public/`**: `foto-perfil.jpg` (8 MB) y `feria-redis-2026.jpg` (1,3 MB) se copian al build sin usarse; sacarlos o borrarlos.
- **Cierre del proyecto:** revisión final del diseño (`impeccable-finish-reviewer`), `DESIGN.md` y despliegue en Vercel.

## Siguiente paso

Revisar los textos propuestos, limpiar los originales pesados de `public/` y cerrar: revisión final del diseño, `DESIGN.md` y despliegue en Vercel.
