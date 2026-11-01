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

Qué usa a diario y qué conoce menos: **[confirmar]**. No mostrar porcentajes ni barras de nivel; es mejor agrupar por área y, si se puede, ligar cada tecnología a algo que haya construido.

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
- **Inicio del proyecto: julio de 2026** (dicho por él). Mostrar "desde julio de 2026" y calcular la duración a partir de esa fecha, para que no quede desactualizada.
- **Experiencia:** él pidió decir "5 meses de experiencia en backend" con este proyecto, pero desde julio a finales de octubre de 2026 son unos 4 meses. **[confirmar]** si cuenta desde antes de julio (por ejemplo, planeación) o si quiere otra redacción. Hasta resolverlo, usar la fecha de inicio y no un número fijo. Redactarlo ligado a New Jahs, no como empleo.
- ORM: **TypeORM** (confirmado). Resto del stack: **[confirmar]**.
- **Enlace al proyecto:** https://new-jahs-frontend.vercel.app/ — botón o enlace visible en la tarjeta del proyecto, que abra en pestaña nueva (`target="_blank"` con `rel="noopener noreferrer"`). El título de la pestaña dice "new-jahs-frontend" porque aún no se configura el dominio propio; es aceptable por ahora.
- **No mencionar** WhatsApp, Wompi ni otros detalles de integraciones. Solo lo listado arriba.
- Permiso del cliente para mostrar nombre y capturas: **[confirmar]**. El nombre ya es público en su póster, pero las capturas conviene validarlas.
- **Feria:** presentó el proyecto en el **Encuentro Académico REDIS 2026**, categoría Semillero, por la Uniagustiniana, con el póster "Desarrollo de una Aplicación web para New Jahs" (Tecnología en Desarrollo de Software). Datos leídos de la foto del póster. **[confirmar nombre exacto del evento]**.
- En la foto de la feria aparecen **dos personas**. Si va en el sitio, que la otra persona esté de acuerdo o recortar la imagen. **[confirmar]**
- El póster describe a New Jahs como una MiPyme de producción y venta de ropa para hombre, especialmente camisas.

### Sprints (metodología Scrumban)
La metodología que usó es **Scrumban** (el póster de la feria dice SCRUM, pero él aclaró que fue Scrumban; usar Scrumban en el sitio). Según él, el proyecto está organizado en 6 sprints. El póster parece listar 7, pero usar los 6 que él escribió. **[confirmar cuáles están terminados]**; no presentar como hecho lo que aún no lo está.
1. **Análisis y diseño:** requerimientos con el cliente, arquitectura, modelado de base de datos, wireframes y prototipo navegable, entorno de desarrollo, y contratos de las APIs.
2. **Autenticación, usuarios y catálogo:** JWT, roles con RBAC (minorista, mayorista, empleado, administrador), productos y categorías con tallas y colores, catálogo con filtros, búsqueda y detalle.
3. **Carrito, pedidos, checkout y pagos:** flujo de pedidos, bus de eventos para descontar stock al confirmar un pedido, checkout con pasarela de pagos (sin nombrar la pasarela).
4. **Inventario extendido y movimientos:** stock por referencia, talla y color, panel de administración, movimientos (entradas, salidas, ajustes) con historial de auditoría.
5. **Chatbot con IA y dashboard:** capa de agregación para reportes, chatbot con modelo de lenguaje (LLM) sobre productos e inventario, proyección básica de demanda, gráficas de ventas por periodo y de reabastecimiento sugerido.
6. **Integración, pruebas y despliegue:** integración de módulos, pruebas funcionales, de integración y de regresión, corrección de errores, despliegue a producción y validación con el usuario.

Estructura sugerida del caso de estudio: problema → qué construyó él → decisiones técnicas (con los sprints) → estado actual → qué sigue. Nada de métricas inventadas.

**Fuera del sitio por ahora:** Ciclo Dev y cualquier otro trabajo. No mencionarlos.

## 4. Enlaces y contacto

- GitHub: https://github.com/Juand12348
- LinkedIn: https://www.linkedin.com/in/juan-david-mart%C3%ADnez-ni%C3%B1o-879b89323/
- Correo de contacto: juandavidmn0819@gmail.com
- **Botón de descarga del CV** (PDF): `public/cv/CV_Juan_David_Martinez_Nino.pdf` (versión actualizada, una página). El PDF incluye teléfono y ciudad; **[confirmar]** si prefiere una versión pública sin teléfono.
- **Foto personal:** retrato con fondo claro y sudadera negra, recomendable para la sección de inicio o "Sobre mí". Guardar como `public/images/foto-perfil.jpg`.

## 5. Secciones propuestas (a discutir en el brainstorming)

1. **Inicio:** nombre completo, "(Software Developer)", una línea de qué hace, el dato de experiencia en backend (ver sección 3, pendiente de confirmar), botones de CV y contacto.
2. **Sobre mí:** historia corta, con un toque del gym y la tecnología.
3. **Tecnologías y práctica:** tecnologías agrupadas por área, más el bloque de arquitectura y buenas prácticas.
4. **Proyecto:** New Jahs como caso de estudio, con enlace al sitio.
5. **Formación:** estudios y cursos, tipo bitácora cronológica, con enlace de verificación por curso.
6. **Contacto:** GitHub, LinkedIn, correo y descarga del CV.

## 6. Identidad y detalles

**Regla principal:** profesional primero. Los guiños de gym y tecnología son pequeños, sutiles y nunca estorban la lectura ni la accesibilidad.

Ejemplo dado por él: en una lista desplegable, el ícono de abrir/cerrar en vez de un "+" puede ser una **mancuerna**.

La guía de diseño (`docs/DISENO.md`) pide gastar la audacia en un solo sitio y dejar lo demás sobrio. Por eso, **propuesta: máximo 3 guiños** **[confirmar]**:
- Ícono de **mancuerna** (SVG, nunca emoji) como control de abrir/cerrar en los acordeones.
- **Formación como bitácora de entrenamiento** ("sobrecarga progresiva": cada curso, un paso más). Aquí sí tiene sentido numerar tipo "serie", porque es una secuencia cronológica real.
- Pie de página **"Ahora mismo"**: qué está aprendiendo.

Dejados fuera por ahora (la guía los marca como adorno o señal de plantilla): numerar todas las secciones como "Set 01, Set 02", paleta de comandos `Ctrl + K` y una 404 temática. Se pueden retomar si sobra tiempo.

## 7. Referencia visual

- Le gusta la línea de https://jesusflorez.cloud/portfolio/ como guía de cómo se manejan hoy los portafolios.
- **No debe quedar parecido**: la idea es algo propio. Solo se pudo leer el título y que usa una base oscura (`#131312`); el resto no se pudo ver. Pedirle capturas o que nombre qué le gusta de ella **[pendiente]**.
- **Rediseño completo (1 nov 2026).** La primera versión (fondo casi negro + un solo acento amarillo + titular grande) le pareció genérica. Nueva dirección dada por él: **tema oscuro con azules y enfoque en tecnología**.
- Ojo: "oscuro + un acento" es una de las señales de página genérica de `docs/DISENO.md`. Evitarlo usando una **escala de azules con papeles distintos** (base, superficie, línea, acento, texto) y **un solo momento memorable** derivado del contenido real (por ejemplo, un diagrama de capas de arquitectura limpia), no un degradado ni neón decorativo.
- Paleta inicial de partida (**a ajustar en el plan visual**; contrastes ya medidos): tinta `#0b1220` (fondo), superficie `#111b2e`, línea `#22314d` (solo decorativa, 1.4:1; los bordes de componentes interactivos necesitan ≥ 3:1), texto `#e6edf7` (15.9:1), texto secundario `#9fb0c8` (8.5:1), azul principal `#4f8cff` (5.8:1), azul hielo `#9ec5ff` (10.6:1), verde de estado `#3ddc97` (10.6:1, solo para "activo / en desarrollo").
- Tipografía y layout: **[definir en el plan visual]**. No usar Syne ni DM Sans de la guía.
- Candidato de dirección para el momento memorable: **capas de arquitectura** (dominio, aplicación, infraestructura), porque es lo que él domina. La alternativa "planilla de entrenamiento" queda como detalle secundario. **[confirmar]**
- **No copiar la paleta ni las tipografías** de la guía de diseño (sección 14, son de otro portafolio) ni las del portafolio de referencia.

## 8. Requisitos técnicos

- React + TypeScript + Vite (ya creado en la carpeta `portafolio`).
- Estilos: **Tailwind CSS con tokens propios** como variables CSS (recomendado; **[confirmar]**).
- Reglas de diseño, accesibilidad y verificación: `docs/DISENO.md`.
- Responsive y accesible (contraste, teclado, `prefers-reduced-motion`).
- Rendimiento cuidado: pocas dependencias, imágenes optimizadas.
- Despliegue: **Vercel** (elegido por él), conectando el repositorio de GitHub.

### Dónde va cada archivo
- `docs/BRIEF.md`: este documento. Es contexto para Claude Code; no se publica en el sitio.
- `docs/DISENO.md`: reglas de diseño adaptadas (versión corta de la guía maestra). Se lee siempre.
- `docs/referencia/guia-maestra-diseno-web.pdf`: la guía completa de 40 páginas. **No cargarla entera**; consultar solo la sección que haga falta (índice en la página 1).
- `public/`: lo que el sitio sirve tal cual: `public/cv/CV_Juan_David_Martinez_Nino.pdf`, `public/images/foto-perfil.jpg` y, si va, `public/images/feria-redis-2026.jpg`.
- Certificados: enlazar a la URL de verificación de Udemy. Si además quiere ofrecer el PDF, va en `public/certificados/`.

## 9. Cómo trabajar con él

- Él prefiere **construir para entender**: avanzar en pasos pequeños, explicar el porqué de cada decisión y esperar su revisión de cada cambio.
- Que escriba él alguna parte (por ejemplo un componente) y se la revises.
- No inventar datos, métricas, nombres de clientes ni habilidades que no estén en este documento.
- Primero un plan por pasos; no generar todo el sitio de una vez.