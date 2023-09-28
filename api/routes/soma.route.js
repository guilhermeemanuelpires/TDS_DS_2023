const express = require("express");
const { soma, somaParametos } = require("../controller/soma.controller")

const routes = new express.Router();

routes.get("/", soma);

routes.post("/parametros", somaParametos);


module.exports = routes;