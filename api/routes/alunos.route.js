const express = require("express");
const { listaAlunos, buscaAlunoPorID, inserir, atualizar, deletar } = require("../controller/alunos.controller");

const routes = express.Router();

routes.get("/", listaAlunos);
routes.post("/", inserir);
routes.put("/(:id([0-9]+))", atualizar);
routes.get("/(:id([0-9]+))", buscaAlunoPorID);
routes.delete("/(:id([0-9]+))", deletar);
                

module.exports = routes;