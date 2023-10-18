const express = require("express");
const { buscaTodos } = require("../controller/secretaria.controller")

const routes = new express.Router();

routes.get("/", buscaTodos);

module.exports = routes;