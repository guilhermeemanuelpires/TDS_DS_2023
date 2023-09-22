const express = require("express");
const routes = express.Router();


routes.get("/", (request, response)=>{
    response.send("Alunos");
});

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