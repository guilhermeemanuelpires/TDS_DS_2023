const express = require("express");
const { listaAlunos } = require("../controller/alunos.controller");

const routes = express.Router();

routes.get("/", listaAlunos);

routes.get("/notas", (request, response)=>{
    response.send("Notas");
});

routes.get("/livros", (request, response)=>{
    response.send("livros");
});


routes.get("/perfil", (request, response)=>{
    response.send("Perfil");
});

module.exports = routes;