const express = require("express");
const alunosRoute = require("./alunos.route");
const professoresRoute = require("./professores.route");
const somaRoute = require("./soma.route");

const routes = express.Router();

routes.use("/alunos", alunosRoute);
routes.use("/professores", professoresRoute);
routes.use("/soma", somaRoute);


module.exports = routes;