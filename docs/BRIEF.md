# BRIEF — Portafolio de Juan David Martínez Niño

> Documento de contexto para Claude Code (`/impeccable init` y brainstorming con Superpowers).
> Los datos personales, de estudios, cursos, tecnologías y New Jahs los dio el propio Juan David. Las secciones (5) y los detalles candidatos (6) son propuestas para discutir. Lo marcado **[confirmar]** o **[pendiente]** no está resuelto: no lo inventes ni lo des por hecho.

## 1. Qué es y para qué sirve

Portafolio / hoja de vida web de un desarrollador de software en formación, construido en React. Debe sentirse **auténtico y personal**, no una plantilla. Tiene que servir para que un reclutador o un cliente entienda en menos de un minuto quién es, qué sabe hacer y qué ha construido.

- Idioma: **solo español** (Colombia).
- Tono: cercano y directo, profesional. Sin exageraciones ni frases infladas.
- Audiencia: reclutadores, empresas y posibles clientes.

## 2. Quién es

- **Nombre en el sitio:** Juan David Martínez Niño, con el rol entre paréntesis: **(Software Developer)**. No usar apodos ni diminutivos en ningún texto del sitio.
- Perfil: desarrollador de software, orientado al **backend**; practica frontend con React.
- Intereses fuera del código: **el gym** y la tecnología. Quiere que se note en detalles pequeños (ver sección 6).

### Estudios
- Tecnología en Desarrollo de Software, **Uniagustiniana**.
- Inició a comienzos de 2024 y está en el **último semestre**.
- **No mostrar fecha de grado** (todavía no la tiene). Usar "último semestre" o "en curso".

### Cursos (los tres en Udemy, con certificado de finalización)
| Curso | Instructor(es) | Fecha del certificado | Duración | Verificación (Udemy) |
|---|---|---|---|---|
| Universidad Desarrollo Web - FrontEnd Web Developer! | Global Mentoring, Ing. Ubaldo Acosta | 22 de mayo de 2025 | 30,5 h | https://www.udemy.com/certificate/UC-8fcac321-65ab-487f-b974-03bc16c99aba/ |
| Ultimate GIT: gestiona tus proyectos y trabaja en equipo | Nicolas Schurmann | 26 de enero de 2026 | 5,5 h | https://www.udemy.com/certificate/UC-ebd2d0fb-9a9b-4c26-bb3c-57bae2abd5fe/ |
| NodeJS: De cero a experto | Fernando Herrera, {d/t} - DevTalles | 10 de julio de 2026 | 37,5 h | https://www.udemy.com/certificate/UC-b5b204de-d6f6-4a13-a201-6ddd6d930e93/ |

Notas:
- Usar siempre la **fecha del certificado** (confirmado por él). Para frontend es el 22 de mayo de 2025.
- Cada curso enlaza a su URL de verificación, abriendo en pestaña nueva (`target="_blank"` con `rel="noopener noreferrer"`).

### Tecnologías que maneja (lista dada por él)
- **Lenguajes:** Java, C++, JavaScript, TypeScript
- **Frontend:** HTML, CSS, React
- **Backend:** Spring Boot, Node.js, NestJS
- **Datos / ORM:** MySQL, PostgreSQL, TypeORM
- **Pruebas y despliegue:** Jest, Docker
- **Plataformas de despliegue:** Railway y Neon (las que más maneja, usadas en New Jahs); también Vercel y Render

Qué usa a diario y qué conoce menos (confirmado por él):
- **Fuerte, uso diario:** Node.js, TypeScript, TypeORM y Jest — el entorno con el que construyó el backend de New Jahs. Se especializa en **backend**.
- **Maneja bien:** Java.
- **Nivel básico:** Spring Boot, C++ y el frontend (HTML, CSS, React).

 No mostrar porcentajes ni barras de nivel; es mejor agrupar por área y, si se puede, ligar cada tecnología a algo que haya construido.

### Arquitectura y buenas prácticas (que él maneja)
- **Arquitectura limpia** (Clean Architecture)
- **Patrón adaptador** (Adapter)
- **Inyección de dependencias**
- **Pruebas con Jest**, **manejo de excepciones**, **objetos de valor** y **DTOs** (elegidos por él; no agregar otras).

Mostrarlas como un bloque propio ("Cómo construyo software"), con una frase corta por cada una, no como una lista de siglas.

## 3. Proyecto principal: New Jahs

Es el único proyecto por ahora, y **sigue en desarrollo**. Contarlo como un caso de estudio, con honestidad sobre su estado.

- Aplicación web **personalizada** para una empresa de ropa; el catálogo está construido a partir de sus prendas reales.
- Tres piezas:
  1. **Ecommerce**, para que la empresa entre al mercado electrónico.
  2. **Inventario**, para ordenar el stock.
  3. **Chatbot asistente disponible 24/7** para clientes, administradores y empleados.
- **Inicio del proyecto: junio de 2026** (corregido por él; antes decía julio por error). Mostrar "desde junio de 2026" y calcular la duración a partir de esa fecha, para que no quede desactualizada.
- **Experiencia:** experiencia en backend calculada desde junio de 2026 (cuadra con los "5 meses" que él pidió a finales de octubre). Usar la fecha de inicio, no un número fijo. Redactarlo ligado a New Jahs, no como empleo.
- **Qué hizo él:** **solo el backend.** El frontend (con Tailwind CSS) no lo hizo él; no atribuírselo.
- **Despliegue de New Jahs:** backend y Redis en **Railway**, base de datos PostgreSQL en **Neon**, frontend en **Vercel**.
- **Stack de New Jahs (confirmado por él):** Node.js, TypeScript, PostgreSQL, TypeORM, Jest y Groq AI (para el chatbot).
- **Librerías del backend** (de su `package.json`): Express, JSON Web Token (`jsonwebtoken`), bcryptjs, CORS, ioredis (Redis), Multer, Nodemailer, uuid; pruebas con Jest, ts-jest y Supertest; calidad con ESLint y Prettier; desarrollo con ts-node / ts-node-dev.
- **Enlace al proyecto:** https://new-jahs-frontend.vercel.app/ — botón o enlace visible en la tarjeta del proyecto, que abra en pestaña nueva (`target="_blank"` con `rel="noopener noreferrer"`). El título de la pestaña dice "new-jahs-frontend" porque aún no se configura el dominio propio; es aceptable por ahora.
- **No mencionar** WhatsApp, Wompi ni otros detalles de integraciones. Solo lo listado arriba.
- **Sin capturas de la app** (decisión de él): solo el enlace a New Jahs. El nombre ya es público en su póster.
- **Feria:** presentó el proyecto en el **Encuentro de Investigadores de la Red de Programas de Ingeniería de Sistemas y Afines (REDIS) 2026**, categoría Semillero, por la Uniagustiniana, con el póster "Desarrollo de una Aplicación web para New Jahs" (Tecnología en Desarrollo de Software). Nombre del evento confirmado por él.
- En la foto de la feria aparecen **dos personas**; la otra persona **está de acuerdo** (confirmado por él), así que puede usarse completa.
- El póster describe a New Jahs como una MiPyme de producción y venta de ropa para hombre, especialmente camisas.

### Sprints (metodología Scrumban)
La metodología que usó es **Scrumban** (el póster de la feria dice SCRUM, pero él aclaró que fue Scrumban; usar Scrumban en el sitio). Según él, el proyecto está organizado en 6 sprints. El póster parece listar 7, pero usar los 6 que él escribió. **Sprints 1 a 5 terminados; el sprint 6 está pendiente** (confirmado por él). No presentar el 6 como hecho.
1. **Análisis y diseño:** requerimientos con el cliente, arquitectura, modelado de base de datos, wireframes y prototipo navegable, entorno de desarrollo, y contratos de las APIs.
2. **Autenticación, usuarios y catálogo:** JWT, roles con RBAC (minorista, mayorista, empleado, administrador), productos y categorías con tallas y colores, catálogo con filtros, búsqueda y detalle.
3. **Carrito, pedidos, checkout y pagos:** flujo de pedidos, bus de eventos para descontar stock al confirmar un pedido, checkout con pasarela de pagos (sin nombrar la pasarela).
4. **Inventario extendido y movimientos:** stock por referencia, talla y color, panel de administración, movimientos (entradas, salidas, ajustes) con historial de auditoría.
5. **Chatbot con IA y dashboard:** capa de agregación para reportes, chatbot con modelo de lenguaje (LLM) sobre productos e inventario, proyección básica de demanda, gráficas de ventas por periodo y de reabastecimiento sugerido.
6. **[Pendiente] Integración, pruebas y despliegue:** integración de módulos, pruebas funcionales, de integración y de regresión, corrección de errores, despliegue a producción y validación con el usuario.

Estructura sugerida del caso de estudio: problema → qué construyó él → decisiones técnicas (con los sprints) → estado actual → qué sigue. Nada de métricas inventadas.

**Fuera del sitio por ahora:** Ciclo Dev y cualquier otro trabajo. No mencionarlos.

## 4. Enlaces y contacto

- GitHub: https://github.com/Juand12348
- LinkedIn: https://www.linkedin.com/in/juan-david-mart%C3%ADnez-ni%C3%B1o-879b89323/
- Correo de contacto: juandavidmn0819@gmail.com
- **Botón de descarga del CV** (PDF): `public/cv/CV_Juan_David_Martinez_Nino.pdf` (versión actualizada, una página). Incluye teléfono (3102225646, ya actualizado por él) y ciudad; se publica así.
- **Foto personal:** retrato con fondo claro y sudadera negra, recomendable para la sección de inicio o "Sobre mí". Guardar como `public/images/foto-perfil.jpg`.

## 5. Secciones propuestas (a discutir en el brainstorming)

1. **Inicio:** nombre completo, "(Software Developer)", una línea de qué hace, el dato de experiencia en backend (desde junio de 2026, ver sección 3), botones de CV y contacto.
2. **Sobre mí:** historia corta, con un toque del gym y la tecnología.
3. **Tecnologías y práctica:** tecnologías agrupadas por área, más el bloque de arquitectura y buenas prácticas.
4. **Proyecto:** New Jahs como caso de estudio, con enlace al sitio.
5. **Formación:** estudios y cursos, tipo bitácora cronológica, con enlace de verificación por curso.
6. **Contacto:** GitHub, LinkedIn, correo y descarga del CV.

## 6. Identidad y detalles

**Regla principal:** profesional primero. Los guiños de gym y tecnología son pequeños, sutiles y nunca estorban la lectura ni la accesibilidad.

Ejemplo dado por él: en una lista desplegable, el ícono de abrir/cerrar en vez de un "+" puede ser una **mancuerna**.

Candidatos (elegir pocos, máximo 4 o 5):
- Ícono de mancuerna como control de acordeones.
- Formación presentada como bitácora de entrenamiento ("sobrecarga progresiva": cada curso, un paso más).
- Numeración de secciones como "series" (Set 01, Set 02) **[opcional]**.
- Pie de página "Ahora mismo": qué está aprendiendo.
- Paleta de comandos con `Ctrl + K` para navegar **[opcional]**.
- Página 404 o indicador de carga con un guiño discreto.

## 7. Referencia visual

- Le gusta la línea de https://jesusflorez.cloud/portfolio/ como guía de cómo se manejan hoy los portafolios.
- **No debe quedar parecido**: la idea es algo propio. Solo se pudo leer el título y que usa una base oscura (`#131312`); el resto no se pudo ver. Pedirle capturas o que nombre qué le gusta de ella **[pendiente]**.
- Dirección de color, tipografía y modo claro/oscuro: **[definir en el brainstorming]**

## 8. Requisitos técnicos

- React + TypeScript + Vite (ya creado en la carpeta `portafolio`).
- Estilos: **Tailwind CSS** (confirmado). Colores, tipografías y espaciados como **tokens propios** definidos a partir de PRODUCT.md y la dirección visual; **no usar la paleta por defecto de Tailwind tal cual**.
- Responsive y accesible (contraste, teclado, `prefers-reduced-motion`).
- Rendimiento cuidado: pocas dependencias, imágenes optimizadas.
- Despliegue del portafolio: **Vercel** (confirmado).

### Dónde va cada archivo
- `docs/BRIEF.md`: este documento. Es contexto para Claude Code; no se publica en el sitio.
- `public/`: lo que el sitio sirve tal cual: `public/cv/CV_Juan_David_Martinez_Nino.pdf`, `public/images/foto-perfil.jpg` y, si va, `public/images/feria-redis-2026.jpg`.
- Certificados: enlazar a la URL de verificación de Udemy. Si además quiere ofrecer el PDF, va en `public/certificados/`.

## 9. Cómo trabajar con él

- Él prefiere **construir para entender**: avanzar en pasos pequeños, explicar el porqué de cada decisión y esperar su revisión de cada cambio.
- Que escriba él alguna parte (por ejemplo un componente) y se la revises.
- No inventar datos, métricas, nombres de clientes ni habilidades que no estén en este documento.
- Primero un plan por pasos; no generar todo el sitio de una vez.
