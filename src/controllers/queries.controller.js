const queries = {
    // Consultas
    obtenerTodasLasRecetas: 'SELECT * FROM Receta',
    obtenerRecetaPorId: id => `SELECT * FROM Receta WHERE id = ${id}`,
    obtenerTodosLosIngredientes: 'SELECET * FROM Ingrediente',
    obtenerIngredientePorId: id => `SELECT * FROM Ingrediente WHERE id = ${id}`,
    obternerIngredientesDeReceta: id => 
        `SELECT Ing.Ing_nombre, Precio_Ing.Precio_Ing
        FROM Detalle_Rec_Ing AS DetRI
        JOIN Ingrediente AS Ing ON DetRI.Ing_Id = Ing.Ing_Id
        JOIN (
            SELECT Ing_Id, Precio_Ing
            FROM Precio_Ing
            WHERE (Ing_Id, Prec_Ing_Fecha) IN (
                SELECT Ing_Id, MAX(Prec_Ing_Fecha)
                FROM Precio_Ing
                GROUP BY Ing_Id
            )
        ) AS Precio_Ing ON DetRI.Ing_Id = Precio_Ing.Ing_Id
        WHERE DetRI.Rec_Id = ${id};`,

    // Insert
    

    // Delete


};

module.exports = queries;