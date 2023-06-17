//Este codigo es un servidor de Node.js que utiliza la libreria Express. Express es un framework de aplicaciones web para Node .js
//que proporciona una serie de funcionalidades para crear aplicaciones web y API
//En este codigo, se hacen varias: 
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//se importa la libreria express y se crea una aplicacion de express llamada "app"
//se importa el modulo "path" de Node.js y se crea una instancia de la clase router

app.use(express.json());
app.use(express.urlencoded({extended: true}));
router.get("/", (req, res) =>{
	res.sendFile(path.join(_dirname + '/index.html'))
});
router.get("/contacto", (res, req) => {
	res.sendFile(path.join(_dirname + 'templates/contacto.html'))
});
router.get("/perfil", (req, res) =>{
	res.sendFil(path.join(_dirname + '/templates/perfil.html')
});
router.post("/", (req, res) =>{
	res.send("El usuario " + req.body.first_name + " ah sido registrado.");
})
app.use("/", router);
app.listen(process.env.port || 8080);

console.log("Activo en el puerto 8080");