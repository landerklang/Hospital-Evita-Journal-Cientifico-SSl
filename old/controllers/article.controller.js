import { Article, ArticleVersion } from "../models/index.js";

export const submitArticle = async (req, res) => {
  try {
    // 1. Extraemos los datos del formulario de envío de artículo
    const { title, specialtyId, convocationId } = req.body;
    
    // Asumimos que el usuario está logueado y tenemos su ID (req.user.id en un futuro con Passport)
    // Para esta prueba, usaremos un ID hardcodeado o recibido en el body
    const responsibleId = req.body.responsibleId; 

    if (!title || !specialtyId || !responsibleId) {
      return res.status(400).json({ error: "Título, especialidad y autor son requeridos." });
    }

    // 2. Creamos el registro "padre" del Artículo
    const newArticle = await Article.create({
      title,
      responsibleId,
      specialtyId,
      convocationId,
      state: "pendiente" // Estado inicial según DER
    });

    // 3. Creamos automáticamente la "Versión 1" asociada al artículo
    // En un caso real, aquí iría la ruta del archivo subido con Multer
    const newVersion = await ArticleVersion.create({
      articleId: newArticle.id,
      version_number: 1,
      document_path: "/uploads/temp_file.pdf" // Dummy path para la prueba
    });

    // 4. Respondemos con éxito
    res.status(201).json({
      message: "Artículo y primera versión creados con éxito",
      article: newArticle,
      version: newVersion
    });

  } catch (error) {
    console.error("Error al enviar artículo:", error);
    res.status(500).json({ error: "Hubo un error al enviar el artículo." });
  }
};