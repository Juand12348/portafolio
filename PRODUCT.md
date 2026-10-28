# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Reclutadores y empresas** que revisan candidatos para roles de desarrollo (sobre todo backend). Tienen poco tiempo: en menos de un minuto deben entender quién es, qué sabe hacer y qué ha construido.
- **Posibles clientes** que evalúan si puede construir una aplicación web para su negocio.

## Product Purpose

Portafolio / hoja de vida web de Juan David Martínez Niño (Software Developer), desarrollador orientado al backend que practica frontend con React. Éxito: el visitante entiende su perfil, ve New Jahs como prueba real de trabajo y lo contacta o descarga el CV.

## Positioning

Un estudiante en último semestre con un proyecto real para un cliente real (New Jahs), contado con honestidad sobre su estado, y con prácticas de arquitectura nombradas por él mismo. No es una plantilla genérica: debe sentirse auténtico y personal.

## Operating Context

- Idioma: **solo español (Colombia)**.
- Se revisa en escritorio y en móvil, a menudo desde un enlace en LinkedIn, GitHub o el CV.
- Acciones clave: abrir New Jahs, verificar cursos en Udemy, descargar el CV, ir a GitHub / LinkedIn / correo.

## Capabilities and Constraints

**Identidad**
- Nombre en el sitio: **Juan David Martínez Niño (Software Developer)**. Sin apodos ni diminutivos.

**Estudios**
- Tecnología en Desarrollo de Software, Uniagustiniana. Inició a comienzos de 2024; está en **último semestre**. **No mostrar fecha de grado.**

**Cursos** (Udemy, con certificado; usar la fecha del certificado; cada uno enlaza a su verificación en pestaña nueva con `rel="noopener noreferrer"`)
| Curso | Instructor(es) | Certificado | Duración | Verificación |
|---|---|---|---|---|
| Universidad Desarrollo Web - FrontEnd Web Developer! | Global Mentoring, Ing. Ubaldo Acosta | 22 may 2025 | 30,5 h | https://www.udemy.com/certificate/UC-8fcac321-65ab-487f-b974-03bc16c99aba/ |
| Ultimate GIT: gestiona tus proyectos y trabaja en equipo | Nicolas Schurmann | 26 ene 2026 | 5,5 h | https://www.udemy.com/certificate/UC-ebd2d0fb-9a9b-4c26-bb3c-57bae2abd5fe/ |
| NodeJS: De cero a experto | Fernando Herrera, {d/t} - DevTalles | 10 jul 2026 | 37,5 h | https://www.udemy.com/certificate/UC-b5b204de-d6f6-4a13-a201-6ddd6d930e93/ |

**Tecnologías** (agrupadas por área; sin porcentajes ni barras de nivel; ligar a lo construido cuando se pueda)
- Lenguajes: Java, C++, JavaScript, TypeScript
- Frontend: HTML, CSS, React
- Backend: Spring Boot, Node.js, NestJS
- Datos / ORM: MySQL, PostgreSQL, TypeORM
- Pruebas y despliegue: Jest, Docker
- Plataformas de despliegue: Railway y Neon (las que más maneja); también Vercel y Render
- Nivel (no mostrar como porcentajes; usarlo para el orden y el énfasis): **fuerte y de uso diario** Node.js, TypeScript, TypeORM, Jest (su entorno de New Jahs; se especializa en backend) · **maneja bien** Java · **básico** Spring Boot, C++ y el frontend (HTML, CSS, React).

**Cómo construyo software** (bloque propio, una frase corta por práctica; no agregar otras)
Arquitectura limpia, patrón adaptador, inyección de dependencias, pruebas con Jest, manejo de excepciones, objetos de valor, DTOs.

**Proyecto: New Jahs** (único proyecto; caso de estudio: problema → qué construyó → decisiones técnicas → estado → qué sigue)
- App web personalizada para una MiPyme de producción y venta de ropa para hombre (especialmente camisas); catálogo con sus prendas reales.
- Tres piezas: ecommerce, inventario, chatbot asistente 24/7 para clientes, administradores y empleados.
- **Inicio: junio de 2026** (corregido por él). Mostrar "desde junio de 2026" y calcular la duración en tiempo de ejecución; redactarlo ligado a New Jahs, no como empleo.
- **Él hizo solo el backend.** El frontend de New Jahs (Tailwind CSS) es de otra persona: no atribuírselo.
- Despliegue: backend y Redis en Railway, PostgreSQL en Neon, frontend en Vercel.
- Stack: Node.js, TypeScript, PostgreSQL, TypeORM, Jest y Groq AI (chatbot).
- Librerías del backend: Express, jsonwebtoken, bcryptjs, CORS, ioredis (Redis), Multer, Nodemailer, uuid; pruebas con Jest, ts-jest y Supertest; ESLint y Prettier; ts-node / ts-node-dev.
- Metodología **Scrumban** (no Scrum, aunque el póster diga SCRUM), 6 sprints. **Sprints 1–5 terminados; el sprint 6 (integración, pruebas y despliegue) está pendiente.**
  1. Análisis y diseño
  2. Autenticación (JWT), roles RBAC (minorista, mayorista, empleado, administrador) y catálogo
  3. Carrito, pedidos, bus de eventos para stock, checkout con pasarela de pagos
  4. Inventario extendido, panel admin, movimientos con auditoría
  5. Chatbot con LLM, capa de reportes, proyección básica de demanda, gráficas
  6. Integración, pruebas, despliegue a producción y validación — **pendiente**
- Enlace: https://new-jahs-frontend.vercel.app/ (pestaña nueva, `rel="noopener noreferrer"`).
- **Prohibido mencionar:** WhatsApp, Wompi, el nombre de la pasarela ni otras integraciones.
- **Fuera del sitio:** Ciclo Dev y cualquier otro trabajo.

**Técnicas**
- React + TypeScript + Vite (proyecto existente). Pocas dependencias, imágenes optimizadas.
- Estilos: **Tailwind CSS**, con colores, tipografías y espaciados como tokens propios del proyecto; nunca la paleta por defecto de Tailwind tal cual.
- Despliegue del portafolio: **Vercel**.

## Brand Commitments

- Tono: cercano, directo, profesional. Sin exageraciones ni frases infladas.
- Profesional primero. Guiños pequeños al **gym** y la tecnología (máx. 4–5, p. ej. mancuerna como control de acordeón, idea dada por él); nunca estorban la lectura ni la accesibilidad.
- Referencia que le gusta: https://jesusflorez.cloud/portfolio/ como idea de cómo se hacen hoy los portafolios. **No debe parecerse**; el resultado debe ser propio.

## Evidence on Hand

- `public/images/foto-perfil.jpg`: retrato (fondo claro, sudadera negra).
- `public/images/feria-redis-2026.jpg`: presentación de New Jahs en el **Encuentro de Investigadores de la Red de Programas de Ingeniería de Sistemas y Afines (REDIS)** 2026, categoría Semillero, por la Uniagustiniana; póster "Desarrollo de una Aplicación web para New Jahs". Aparecen dos personas; la otra persona está de acuerdo, así que puede usarse completa.
- `public/cv/CV_Juan_David_Martinez_Nino.pdf`: CV de una página, ya actualizado con el teléfono 3102225646; se publica así.
- Contacto: GitHub https://github.com/Juand12348 · LinkedIn https://www.linkedin.com/in/juan-david-mart%C3%ADnez-ni%C3%B1o-879b89323/ · juandavidmn0819@gmail.com
- **No hay** capturas de New Jahs (decisión: solo el enlace), testimonios, métricas ni clientes adicionales. No inventarlos.

## Product Principles

1. **Verdad antes que impresión:** solo lo confirmado; el estado de New Jahs se cuenta tal cual (sprint 6 pendiente).
2. **Un minuto para entenderlo:** quién es, qué sabe, qué construyó y cómo contactarlo, sin buscar.
3. **Prueba sobre lista:** cada tecnología y práctica se ancla en New Jahs o en un curso verificable.
4. **Profesional primero, personal en los detalles:** los guiños de gym nunca compiten con el contenido.
5. **Datos que no caducan:** duraciones calculadas desde fechas, no números fijos.

## Accessibility & Inclusion

Responsive y accesible: contraste suficiente, navegación completa por teclado, respeto a `prefers-reduced-motion`, enlaces externos claramente indicados.
