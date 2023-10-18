const express = require("express");
const alunosRoute = require("./alunos.route");
const professoresRoute = require("./professores.route");
const secretariaRoute = require("./secretaria.route");

const routes = express.Router();

routes.use("/alunos", alunosRoute);
routes.use("/professores", professoresRoute);
routes.use("/secretaria", secretariaRoute);


module.exports = routes;