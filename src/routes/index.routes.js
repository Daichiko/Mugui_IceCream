const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

// routes
router.get('/', controller.llamado);
router.get('/Consulta', controller.PruebaConsulta);

module.exports = router;