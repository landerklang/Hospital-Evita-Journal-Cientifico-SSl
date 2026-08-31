// app.js
import express from "express";
import session from "express-session";
import { start } from "../config/database.js";
import { sequelize } from "../models/index.js"; // importamos sequelize y los modelos

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Configurar motor de plantillas
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. Servir archivos estáticos (CSS, imágenes, JS de front)
app.use(express.static("public"));

// 3. Leer datos de formularios
app.use(express.urlencoded({ extended: true }));

// 4. Configurar sesión (necesaria para passport después)
app.use(
  session({
    secret: "secreto-temporal-cambiar-en-produccion",
    resave: false,
    saveUninitialized: false,
  }),
);

// 5. Ruta de prueba pública
app.get("/", (req, res) => {
  res.render("index", { title: "Hospital Interdistrital Evita - Journal" });
});

// 6. Iniciar base de datos y luego el servidor
start()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("No se pudo iniciar el servidor:", err);
  });
