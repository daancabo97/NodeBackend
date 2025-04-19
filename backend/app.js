const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


// Conexion a la base de datos con mongoose:
  const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
  const DATABASE_NAME = "SegundoProyectoBackend";

  console.log("Conectando a MongoDB en:", MONGO_URI);
  console.log("Usando la base de datos:", DATABASE_NAME);

  mongoose.connect(process.env.MONGO_URI, {
    dbName: DATABASE_NAME
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error de conexión:", err));


// Api Rest usuarios: http://localhost:3000/api/usuarios
  const usuarioRouters = require("./routes/usuarioRouters");
  app.use("/api/usuarios", usuarioRouters);


app.listen(port, () => {
  console.log(`Servidor funcionando por el puerto:${port}`);
})

