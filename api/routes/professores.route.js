const express = require("express");
const { buscaTodos, buscaPorId, inserir, atualizar, deletar } = require("../controller/professores.controller");
const routes = new express.Router();


routes.get("/", buscaTodos);
routes.get("/(:id([0-9]+))", buscaPorId);
routes.post("/", inserir);
routes.put("/(:id([0-9]+))", atualizar);
routes.delete("/(:id([0-9]+))", deletar);


module.exports = routes;    