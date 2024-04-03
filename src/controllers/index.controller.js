const databaseManager = require('./databaseManager.controller');
const queries = require('./queries.controller');

const controller = {};

controller.llamado = (req, res) => {
    res.status(200).json({"title": "conexion generada desde controller.routes"});
};

controller.PruebaConsulta = async (req, res) => {
    try {
        const consulta = await databaseManager.consulta(queries.obtenerTodasLasRecetas);
        res.status(200).json({consulta});
    } catch (error) {
        res.status(404).json({"error": error});
    }
};



module.exports = controller;

