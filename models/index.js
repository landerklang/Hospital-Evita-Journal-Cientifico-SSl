// models/index.js
import { sequelize } from "../config/database.js";
import UserModel from "./User.js";
import SpecialtyModel from "./Specialty.js";
// Importaremos los demás después

const User = UserModel(sequelize);
const Specialty = SpecialtyModel(sequelize);

// Asociaciones (por ahora vacías)
// User.hasMany(Article, { foreignKey: 'authorId' });
// etc.

export { sequelize, User, Specialty };