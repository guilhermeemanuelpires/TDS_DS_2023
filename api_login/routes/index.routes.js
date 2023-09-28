const express = require("express");
const userRoute = require("./user.route");

const routes = new express.Router();

routes.use("/usuario",userRoute);

module.exports = routes;