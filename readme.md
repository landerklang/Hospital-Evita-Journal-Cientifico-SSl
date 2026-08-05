# HIEF Journal – Sistema de Gestión Editorial

Plataforma web para la gestión y publicación de artículos científicos de la revista del
**Hospital Interdistrital Evita (HIEF)**. Permite el envío de manuscritos, revisión por
pares, publicación en acceso público y monitoreo de métricas (visitantes, descargas).

Desarrollado como proyecto final de la carrera **Desarrollo de Software Multiplataforma**.

---

##  Tecnologías y dependencias

| Dependencia            | Descripción breve |
|------------------------|-------------------|
| **express**            | Servidor HTTP que recibe peticiones y envía respuestas (HTML, JSON, archivos). |
| **sequelize**          | ORM que permite trabajar con la base de datos usando JavaScript en lugar de SQL puro. |
| **sqlite3**            | Driver que conecta Sequelize con archivos SQLite (base de datos local para desarrollo). |
| **ejs**                | Motor de plantillas que genera HTML desde el servidor; ideal para crear layouts reutilizables. |
| **express-session**    | Guarda información del usuario en una cookie cifrada; el servidor mantiene el almacén de sesiones. |
| **passport**           | Middleware modular de autenticación que “engancha” estrategias de login (local, Google, etc.). |
| **passport-local**     | Estrategia de Passport que verifica credenciales (email/contraseña) contra la base de datos local. |
| **connect-flash**      | Mensajes temporales (flash) que se borran tras mostrarse una vez. Útiles para avisos como “Artículo enviado” o “Credenciales inválidas”. |
| **nodemailer**         | Envío de correos electrónicos desde Node.js (soporta SMTP, Gmail, Mailtrap, adjuntos, HTML). |
| **express-async-errors** | Parche para que Express capture automáticamente errores lanzados dentro de funciones `async`, sin necesidad de `try/catch`. |

 **Próximas incorporaciones:** `bcrypt` (hasheo seguro de contraseñas) y `multer` (subida de archivos de manuscritos).

---

##  Estructura del proyecto
hief-journal/
├── config/
│ ├── database.js ← Conexión y configuración de Sequelize
│ ├── passport.js ← Estrategia de autenticación (passport-local)
│ └── admin.js ← Configuración de AdminJS (recursos, branding, etc.)
│
├── models/
│ ├── index.js ← Inicializa Sequelize, importa y asocia todos los modelos
│ ├── User.js
│ ├── Specialty.js
│ ├── Article.js
│ └── ReviewAssignment.js
│
├── seeders/
│ └── seed.js ← Script para crear datos de prueba (admin, especialidades, revisores)
│
├── routes/
│ ├── index.js ← Ruta principal (página pública)
│ ├── auth.js ← Login, logout, registro (si corresponde)
│ ├── author.js ← Rutas del autor: bandeja de envíos, nuevo envío, subir corrección
│ ├── ddi.js ← Rutas del DDI: listar envíos, asignar revisores, rechazar en escritorio
│ ├── reviewer.js ← Rutas del revisor: artículos asignados, emitir dictamen
│ └── publisher.js ← Rutas del encargado de publicación: listar aceptados, publicar
│
├── controllers/
│ ├── authorController.js
│ ├── ddiController.js
│ ├── reviewerController.js
│ └── publisherController.js
│
├── middlewares/
│ ├── auth.js ← Verifica si el usuario está logueado
│ └── role.js ← Verifica que el usuario tenga un rol específico (admin, ddi, etc.)
│
├── views/
│ ├── layouts/
│ │ └── main.ejs ← Plantilla base con header, footer, menú según rol
│ ├── partials/ ← Componentes reutilizables (navbar, alertas)
│ ├── public/ ← Vistas públicas: listado de artículos publicados, detalle
│ ├── author/ ← Vistas del autor: formulario de envío, lista de mis envíos
│ ├── ddi/ ← Vistas del DDI: bandeja de pendientes, asignar revisores
│ ├── reviewer/ ← Vistas del revisor: artículos asignados, formulario de dictamen
│ └── publisher/ ← Vistas del publicador: lista de aprobados, previsualizar
│
├── public/
│ ├── css/ ← Estilos personalizados (azul y blanco)
│ ├── js/ ← JavaScript de frontend (validaciones, confirmaciones)
│ └── uploads/ ← (Opcional) archivos subidos en desarrollo
│
├── app.js ← Punto de entrada: configura Express, middlewares, rutas, AdminJS
├── package.json
└── .gitignore

