const queries = {
    obtenerTodasLasRecetas: 'SELECT * FROM receta',
    obtenerUsuarioPorId: id => `SELECT * FROM usuarios WHERE id = ${id}`,
    // Agrega más queries según tus necesidades...
};

module.exports = queries;