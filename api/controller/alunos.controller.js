const { buscaTodos } = require("../repository/alunos.repository")


module.exports = {
    listaAlunos: (request, response) => {

        buscaTodos().then((data) => {
            response.send(data);
        }).catch((error) => {
            response.status(404).send({ message: "Erro ao consultar alunos!" })
        });
    },
    listaAlunos_teste: async (request, response) => {
        const data = await buscaTodos();

        response.send(data);
    }
}