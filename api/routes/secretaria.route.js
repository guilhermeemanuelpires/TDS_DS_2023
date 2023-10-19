const express = require("express");
const { buscaTodos, vinculaProfAlunos } = require("../controller/secretaria.controller")

const routes = new express.Router();

routes.get("/", buscaTodos);
routes.post("/turma", vinculaProfAlunos);

module.exports = routes;