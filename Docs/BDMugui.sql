CREATE TABLE Receta (
    Rec_Id SERIAL PRIMARY KEY,
    Rec_nombre VARCHAR(255)
);

CREATE TABLE Ingrediente (
    Ing_Id SERIAL PRIMARY KEY,
    Ing_nombre VARCHAR(255)
);

CREATE TABLE Precio_Ing (
    Ing_Id INT,
    Prec_Ing_Fecha DATE,
    Precio_Ing REAL,
    PRIMARY KEY (Ing_Id, Prec_Ing_Fecha),
    FOREIGN KEY (Ing_Id) REFERENCES Ingrediente(Ing_Id)
);

CREATE TABLE Detalle_Rec_Ing (
    Rec_Id INT,
    Ing_Id INT,
    PRIMARY KEY (Rec_Id, Ing_Id),
    FOREIGN KEY (Rec_Id) REFERENCES Receta(Rec_Id),
    FOREIGN KEY (Ing_Id) REFERENCES Ingrediente(Ing_Id)
);



