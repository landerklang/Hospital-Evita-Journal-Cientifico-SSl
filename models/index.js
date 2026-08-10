import { sequelize } from "../config/database.js";

import UserModelInit from "./user.model.js";
import SpecialtyModelInit from "./specialty.model.js";
import ConvocationModelInit from "./convocation.model.js";
import ArticleModelInit from "./article.model.js";
import ArticleVersionModelInit from "./article_version.model.js";
import CommitteeAssignmentModelInit from "./committee_assignment.model.js";
import ReviewModelInit from "./review.model.js";

// 1. Inicializamos todos los modelos y los guardamos en un objeto "db"
const db = {
  User: UserModelInit(sequelize),
  Specialty: SpecialtyModelInit(sequelize),
  Convocation: ConvocationModelInit(sequelize),
  Article: ArticleModelInit(sequelize),
  ArticleVersion: ArticleVersionModelInit(sequelize),
  CommitteeAssignment: CommitteeAssignmentModelInit(sequelize),
  Review: ReviewModelInit(sequelize)
};

// 2. Iteramos sobre el objeto para ejecutar las funciones "associate"
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// 3. Exportación explícita de los modelos con sequelize para facilitar su importación
const { User, Specialty, Convocation, Article, ArticleVersion, CommitteeAssignment, Review } = db;

export { 
  sequelize, 
  User, 
  Specialty, 
  Convocation, 
  Article, 
  ArticleVersion, 
  CommitteeAssignment, 
  Review 
};