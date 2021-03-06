const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Example collection and inserts some test documents below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/finalclassproject"
);

let supplierSeed = [
  {
    nombre_compania: "Proveedor 1",
    direccion: "Ejemplo direccion 1 Colonia 1",
    estado: "Nuevo leon",
    telefono: 1234567890,
    correo: "ejemplo1@ejemplo.com",
    sector: "aserradero"
  },
  {
    nombre_compania: "Proveedor 2",
    direccion: "Ejemplo direccion 2 Colonia 2",
    estado: "Tamaulipas",
    telefono: 1234567890,
    correo: "ejemplo2@ejemplo.com",
    sector: "aserradero"
  },
  {
    nombre_compania: "Proveedor 3",
    direccion: "Ejemplo direccion 3 Colonia 3",
    estado: "San Luis Potosi",
    telefono: 1234567890,
    correo: "ejemplo3@ejemplo.com",
    sector: "aserradero"
  },
  {
    nombre_compania: "Proveedor 4",
    direccion: "Ejemplo direccion 4 Colonia 4",
    estado: "Guadalajara",
    telefono: 1234567890,
    correo: "ejemplo4@ejemplo.com",
    sector: "aserradero"
  },
  {
    nombre_compania: "Proveedor 5",
    direccion: "Ejemplo direccion 5 Colonia 5",
    estado: "Aguascalientes",
    telefono: 1234567890,
    correo: "ejemplo5@ejemplo.com",
    sector: "aserradero"
  },
  {
    nombre_compania: "Proveedor 6",
    direccion: "Ejemplo direccion 6 Colonia 6",
    estado: "Jalisco",
    telefono: 1234567890,
    correo: "ejemplo6@ejemplo.com",
    sector: "aserradero"
  }
];

//database.Product de models product.js.productos.
db.Supplier.remove({})
  .then(() => db.Supplier.insertMany(supplierSeed))
  .then(data => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
