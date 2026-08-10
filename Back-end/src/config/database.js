import Sequelize from "sequelize";
// Leemos las variables del archivo .env
const sequelize = new Sequelize(
  process.env.DB_NAME, // journal_hief
  process.env.DB_USER, // root
  process.env.DB_PASSWORD, // tu contraseña
  {
    host: process.env.DB_HOST, // localhost
    dialect: "mysql",
    logging: false, // Desactiva los mensajes SQL en consola (opcional)
  },
);

module.exports = sequelize;
