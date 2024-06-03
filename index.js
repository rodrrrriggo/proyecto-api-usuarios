const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2999;

//----------------------------------------------------

const{getUsuarios, getUsuarioById} = require ("./controlador/usuarios.controlador")

app.use(cors());

app.get("/" , getUsuarios)

app.get("/:id" , getUsuarioById)

//---------------------------------------------------



app.listen( puerto , ()=>{
    console.log(`Hola, servidor funcionando correctamente.`);
    console.log(`Servidor ${puerto} conectado correctamente `);

});