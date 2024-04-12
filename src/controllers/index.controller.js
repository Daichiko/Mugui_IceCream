const databaseManager = require('./databaseManager.controller');
const queries = require('./queries.controller');

const controller = {};

controller.llamado = (req, res) => {
    res.status(200).json({"title": "conexion generada desde controller.routes"});
};

// Consultas
controller.ConsultaRecetas = async (req, res) => {
    try {
        const consulta = await databaseManager.consulta(queries.obtenerTodasLasRecetas);
        res.status(200).json({consulta});
    } catch (error) {
        res.status(404).json({"error": error});
    }
}

controller.ConsultaRecetaById = async (req, res) => {
    let data = [req.query.id];
    console.log(data);
    try {
        const consulta = await databaseManager.consultaByData(queries.obtenerRecetaPorId, data);
        res.status(200).json({consulta});
    } catch (error) {
        res.status(404).json({"error": error});
    }
}

controller.ConsultaIngredientes = async (req, res) => {
    try {
        const consulta = await databaseManager.consultaByData(queries.obtenerTodosLosIngredientes);
        res.status(200).json({consulta});
    } catch (error) {
        res.status(404).json({"error": error});
    }
}

controller.ConsultaIngredienteById = async (req, res) => {
    let data = [req.query.id];
    try {
        const consulta = await databaseManager.consultaByData(queries.obtenerIngredientePorId, data);
        res.status(200).json({consulta});
    } catch (error) {
        res.status(404).json({"error": error});
    }
}

controller.ConsultaIngredienteByReceta = async (req, res) => {
    let data = [req.query.id];
    try {
        const consulta = await databaseManager.consultaByData(queries.obternerIngredientesDeReceta, data);
        res.status(200).json({consulta});
    } catch (error) {
        res.status(404).json({"error": error});
    }
}


// Inserts
controller.InsertarReceta = async (req, res) => {
    let data = [req.body.name];
    try {
        await databaseManager.consultaByData(queries.InsertReceta, data);
        res.status(200).json({data: "Insertado"});
    } catch (error) {
        res.status(404).json({"error": error});
    }
}

controller.InsertarIngrediente = async (req, res) => {
    let data = [req.body.name];
    try {
        await databaseManager.consultaByData(queries.InsertIngrediente, data);
        res.status(200).json({data: "Insertado"});
    } catch (error) {
        res.status(404).json({"error": error});
    }
}

controller.InsertarIngrediente = async (req, res) => {
    let data = [req.body.name];
    try {
        await databaseManager.consultaByData(queries.InsertIngrediente, data);
        res.status(200).json({data: "Insertado"});
    } catch (error) {
        res.status(404).json({"error": error});
    }
}

controller.InsertarIngredienteEnReceta = async (req, res) => {
    let data = [req.body.IdRec, req.body.IdIng];
    try {
        await databaseManager.consultaByData(queries.InsertIngredienteEnReceta, data);
        res.status(200).json({data: "Insertado"});
    } catch (error) {
        res.status(404).json({"error": error});
    }
}

controller.InsertarPrecIng = async (req, res) => {
    let data = [req.body.IdIng, req.body.Precio];
    try {
        await databaseManager.consultaByData(queries.InsertPrecioIng, data);
        res.status(200).json({data: "Insertado"});
    } catch (error) {
        res.status(404).json({"error": error});
    }
}

module.exports = controller;

