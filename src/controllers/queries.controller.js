// const queries = {
//     // Consultas
//     obtenerTodasLasRecetas: 'SELECT * FROM Receta',
//     obtenerRecetaPorId: id => `SELECT * FROM Receta WHERE id = ${id}`,
//     obtenerTodosLosIngredientes: 'SELECET * FROM Ingrediente',
//     obtenerIngredientePorId: id => `SELECT * FROM Ingrediente WHERE id = ${id}`,
//     obternerIngredientesDeReceta: id => 
//         `SELECT Ing.Ing_Id ,Ing.Ing_nombre, Precio_Ing.Precio_Ing
//         FROM Detalle_Rec_Ing AS DetRI
//         JOIN Ingrediente AS Ing ON DetRI.Ing_Id = Ing.Ing_Id
//         JOIN (
//             SELECT Ing_Id, Precio_Ing
//             FROM Precio_Ing
//             WHERE (Ing_Id, Prec_Ing_Fecha) IN (
//                 SELECT Ing_Id, MAX(Prec_Ing_Fecha)
//                 FROM Precio_Ing
//                 GROUP BY Ing_Id
//             )
//         ) AS Precio_Ing ON DetRI.Ing_Id = Precio_Ing.Ing_Id
//         WHERE DetRI.Rec_Id = ${id};`,

//     // Insert
//     InsertReceta: nombre => `INSERT INTO Receta (Rec_nombre) VALUES (${nombre});`,
//     InsertIngrediente: nombre => `INSERT INTO Ingrediente (Ing_nombre) VALUES (${nombre});`,
//     InsertIngredienteEnReceta: (IdRec, IdIng) => `INSERT INTO Detalle_Rec_Ing (Rec_Id, Ing_Id) 
//                                                     VALUES (${IdRec}, ${IdIng});`,
//     InsertPrecioIng: (IdIng, Monto) => {
//         const Fecha = new Date();
//         return `INSERT INTO Precio_Ing (Ing_Id, Prec_Ing_Fecha, Precio_Ing) VALUES (${IdIng}, '${Fecha.toISOString()}', ${Monto});`
//         }
//     // Delete
// };

const queries = {
    // Selects
    obtenerTodasLasRecetas: 'SELECT * FROM Receta',
    obtenerRecetaPorId: 'SELECT * FROM Receta WHERE Rec_Id = $1',
    obtenerTodosLosIngredientes: 'SELECT * FROM Ingrediente',
    obtenerIngredientePorId: 'SELECT * FROM Ingrediente WHERE Ing_Id = $1',
    obternerIngredientesDeReceta: 
        `SELECT Ing.Ing_Id ,Ing.Ing_nombre, Precio_Ing.Precio_Ing
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
        WHERE DetRI.Rec_Id = $1;`,

    // Inserts
    InsertReceta: 'INSERT INTO Receta (Rec_nombre) VALUES ($1)',
    InsertIngrediente: 'INSERT INTO Ingrediente (Ing_nombre) VALUES ($1)',
    InsertIngredienteEnReceta: 'INSERT INTO Detalle_Rec_Ing (Rec_Id, Ing_Id) VALUES ($1, $2)',
    InsertPrecioIng: 'INSERT INTO Precio_Ing (Ing_Id, Prec_Ing_Fecha, Precio_Ing) VALUES ($1, NOW(), $2)'

    // Deletes

};


module.exports = queries;