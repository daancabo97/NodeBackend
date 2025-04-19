const express = require("express");
const app = express();
const port = 3000;


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

