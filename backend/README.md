# SegundoProyectoBackend

---

## Tecnologias usadas

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- CORS
- express-validator

---

## instalacion de dependencias

npm install express mongoose dotenv cors express-validator

---

## Dependencias

express: Permite importar express y configurar un servidor basico

mongoose: Libreria para conectarse y trabajar con MongoDB usando modelos

dotenv: Permite cargar variables de entorno desde un archivo .env

cors: Permite solicitudes desde otros orígenes (cross-origin)

express.json(): Permite recibir datos tipo JSON en las solicitudes

---

## .env

MONGO_URI=mongodb://localhost:27017/SegundoProyectoBackend

---

## Ejecucion

node app.js
localhost:3000

---

## Endpoints

POST     ->   localhost:3000/api/usuarios/crear               ->    Crea un nuevo usuario
GET      ->   localhost:3000/api/usuarios/obtener             ->    Obtiene todos los usuarios
GET      ->   localhost:3000/api/usuarios/obtener/:id         ->    Obtiene un usuario por ID
PUT      ->   localhost:3000/api/usuarios/actualizar/:id      ->    Actualiza un usuario por ID
DELETE   ->   localhost:3000/api/usuarios/eliminar/:id        ->    Elimina un usuario por ID
