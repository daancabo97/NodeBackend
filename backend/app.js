const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
const DATABASE_NAME = "SegundoProyectoBackend";

console.log("Conectando a MongoDB en:", MONGO_URI);
console.log("Usando la base de datos:", DATABASE_NAME);

// Conexion a Mongo db :
    
mongoose.connect(process.env.MONGO_URI, {
  dbName: DATABASE_NAME
})
.then(() => console.log("Conectado a MongoDB"))
.catch((err) => console.error("Error de conexión:", err));

// Rutas:

const usuarioRouters = require("./routes/usuarioRouters");
app.use("/api/usuarios", usuarioRouters);                    // http://localhost:3000/api/usuarios

const books = [
    { id: 1, title: "El Señor de los Anillos", author: "J.R.R. Tolkien" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "El Principito", author: "Antoine de Saint-Exupéry" },
    { id: 4, title: "Cien años de soledad", author: "Gabriel García Márquez" },
    { id: 5, title: "Crimen y castigo", author: "Fiódor Dostoyevski" },
]


app.get("/api/books", (req, res) => {          /* http://localhost:3000/api/books */
    res.json(books);
})



app.listen(port, () => {
  console.log(`Servidor funcionando por el puerto:${port}`);
})

