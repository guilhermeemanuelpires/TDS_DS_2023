const { buscaTodos } = require("../repository/secretaria.repository");

module.exports = {
    buscaTodos: (request, response) => {
        buscaTodos().then((data) => {
            response.send(data);
        }).catch((error) => {
            response.status(500).send({ message: "Erro ao consultar turma" });
        })
    }
}