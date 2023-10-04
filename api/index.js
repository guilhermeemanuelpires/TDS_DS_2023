const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes/index.routes");

const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(routes);

app.listen(8080, () =>
    console.log("O servidor está rodando na porta 8080! 👍")
);