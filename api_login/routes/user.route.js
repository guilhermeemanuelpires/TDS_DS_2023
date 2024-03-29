const express = require("express");
const { buscaUsuario, login } = require("../controller/user.controller");

const routes = new express.Router();

routes.get("/", buscaUsuario);

routes.post("/login", login);
routes.post("/esqueceuSenha", login);

module.exports = routes;