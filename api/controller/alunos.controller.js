const { buscaTodos, buscaAlunoPorId, inserir } = require("../repository/alunos.repository")


module.exports = {
    listaAlunos: (request, response) => {

        buscaTodos().then((data) => {
            response.send(data);
        }).catch((error) => {
            response.status(404).send({ message: "Erro ao consultar alunos!" })
        });
    },
    buscaAlunoPorID: (request, response) => {
        const { id } = request.params;

        buscaAlunoPorId(id).then((data) => {
            response.send(data);
        }).catch((error) => {
            response.status(500).send({ message: "Erro ao consultar o aluno por ID" })
        });
    },
    inserir: (request, response) => {
        const { nome, idade, email } = request.body;

        const data = { nome, idade, email };

        inserir(data).then((data) => {
            response.status(200).send({ message: "Aluno inserido com sucesso", data });
        }).catch((error) => {
            response.status(500).send({ message: "Erro ao inserir um novo aluno" });
        })
    }
}