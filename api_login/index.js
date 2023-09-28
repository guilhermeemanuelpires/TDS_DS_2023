const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index.routes");

const app = new express();

app.use(bodyParser.json());
app.use(routes);

app.listen(8080, () => {
    console.log("Servidor está rodando na porta 8080 👍");
});