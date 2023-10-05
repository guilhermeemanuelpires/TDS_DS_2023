const { buscaTodos, buscaAlunoPorId, inserir, atualizar, deletar } = require("../repository/alunos.repository")


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
    },
    atualizar: (request, response) => {

        const { id } = request.params;
        const data = request.body;

        if (data.id) {
            response.status(400).send({ message: "Não é permitido enviar o campo ID" });
        }

        atualizar(id, data).then((data) => {
            response.send({ message: "Aluno atualizado com sucesso" })
        }).catch((error) => {
            console.log(error);
            response.status(500).send({ message: "erro ao atualizar o aluno!" })
        })
    },
    deletar: (request, response) => {
        const { id } = request.params;

        deletar(id).then((data) => {
            response.send({ message: "Aluno deletado com sucesso!" });
        }).catch((error) => {

            console.log(error);
            response.status(500).send({ message: "erro ao deletar o aluno!" })
        });
    }
}