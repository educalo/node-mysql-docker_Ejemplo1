import express from "express";
//para poderme conectar a base de datos mysql dentro de docker
import { pool } from "./database.js";

const app = express();

//para ver las variables de entorno
/*
console.log({
  host: process.env.MYSQLDB_HOST,
  password: process.env.MYSQLDB_PASSWORD,
  port: process.env.MYSQLDB_PORT,

})
*/

//Servidor basico escuchando en el puerto 3000
//app.listen(3000)
//console.log("Servidor en el puerto, 3000")

//se accedemos al localhost puerto 3000 se nos motrará ese mensaje
app.get('/', (req,res) => {
  res.send("hola mundo");
})


app.get("/ping", async (req, res) => {
  try {
    //devuelvo la fecha de la consulta que hago a la bd
    const [result] = await pool.query(`SELECT NOW() as now`);
    return res.json(result[0]);
  } catch (error) {
    console.log(error);
  }
});

export default app;
