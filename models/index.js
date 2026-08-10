import { sequelize } from "../config/database.js";

// 1. Importar los inicializadores de modelos
import UserModelInit from "./user.model.js";
import SpecialtyModelInit from "./specialty.model.js";
import ConvocationModelInit from "./convocation.model.js";
import ArticleModelInit from "./article.model.js";
import ArticleVersionModelInit from "./article_version.model.js";
import CommitteeAssignmentModelInit from "./committee_assignment.model.js";
import ReviewModelInit from "./review.model.js";

// 2. Inicializar los modelos
const User = UserModelInit(sequelize);
const Specialty = SpecialtyModelInit(sequelize);
const Convocation = ConvocationModelInit(sequelize);
const Article = ArticleModelInit(sequelize);
const ArticleVersion = ArticleVersionModelInit(sequelize);
const CommitteeAssignment = CommitteeAssignmentModelInit(sequelize);
const Review = ReviewModelInit(sequelize);

// ==========================================
// 3. ASOCIACIONES (Traducción de tu DER a código)
// ==========================================

// Especialidad <-> Usuario (Un usuario/médico tiene una especialidad)
Specialty.hasMany(User, { foreignKey: "specialtyId" });
User.belongsTo(Specialty, { foreignKey: "specialtyId", as: "specialty" });

// Especialidad <-> Artículo (Un artículo pertenece a una especialidad)
Specialty.hasMany(Article, { foreignKey: "specialtyId" });
Article.belongsTo(Specialty, { foreignKey: "specialtyId", as: "specialty" });

// Convocatoria <-> Artículo (Un artículo pertenece a una convocatoria)
Convocation.hasMany(Article, { foreignKey: "convocationId" });
Article.belongsTo(Convocation, { foreignKey: "convocationId", as: "convocation" });

// Usuario (Autor Responsable) <-> Artículo
User.hasMany(Article, { foreignKey: "responsibleId", as: "myArticles" });
Article.belongsTo(User, { foreignKey: "responsibleId", as: "author" });

// Artículo <-> Artículo_Versionados (Un artículo tiene muchas versiones a lo largo del tiempo)
Article.hasMany(ArticleVersion, { foreignKey: "articleId", as: "versions" });
ArticleVersion.belongsTo(Article, { foreignKey: "articleId" });

// Asignaciones de Comité: Une a un Usuario (Revisor) con un Artículo
User.hasMany(CommitteeAssignment, { foreignKey: "reviewerId", as: "assignments" });
CommitteeAssignment.belongsTo(User, { foreignKey: "reviewerId", as: "reviewer" });

Article.hasMany(CommitteeAssignment, { foreignKey: "articleId", as: "assignments" });
CommitteeAssignment.belongsTo(Article, { foreignKey: "articleId" });

// Revisión (Dictamen): Se asocia a una Asignación y a una Versión específica del artículo
CommitteeAssignment.hasMany(Review, { foreignKey: "assignmentId", as: "reviews" });
Review.belongsTo(CommitteeAssignment, { foreignKey: "assignmentId" });

ArticleVersion.hasMany(Review, { foreignKey: "versionId", as: "reviews" });
Review.belongsTo(ArticleVersion, { foreignKey: "versionId" });


// 4. Exportar todo para usarlo en controladores y servicios
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