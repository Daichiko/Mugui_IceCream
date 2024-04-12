const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

// routes
// Consultas
router.get('/', controller.llamado);
router.get('/Recetas', controller.ConsultaRecetas);
router.get('/RecetaById', controller.ConsultaRecetaById);
router.get('/Ingredientes', controller.ConsultaIngredientes);
router.get('/IngredienteById', controller.ConsultaIngredienteById);
router.get('/IngredienteByReceta', controller.ConsultaIngredienteByReceta);

// Inserts
router.post('/Ingrediente', controller.InsertarIngrediente);
router.post('/Receta', controller.InsertarReceta);
router.post('/PrecioIngrediente', controller.InsertarPrecIng);
router.post('/IngredienteByReceta', controller.InsertarIngredienteEnReceta);

module.exports = router;