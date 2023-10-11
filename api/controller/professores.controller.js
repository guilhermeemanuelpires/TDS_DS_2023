const { buscaTodos, buscaPorId, inserir, atualizar, deletar } = require("../repository/professores.repository");

module.exports = {
    buscaTodos: (request, response) => {
        buscaTodos().then((data) => {
            response.send(data);
        }).catch((error) => {
            response.status(500).send({ message: "Erro ao consultar todos os professores!" });
        });
    },
    buscaPorId: (request, response) => {
        const { id } = request.params;
        buscaPorId(id).then((data) => {

            if (data.length > 0) {
                response.send(data);
            } else {
                response.status(400).send({ message: `Nenhum professor encontrado com o ID:${id}` });
            }

        }).catch((error) => {
            response.status(500).send({ message: "Erro ao consultar professor por ID!" });
        })
    },
    inserir: (request, response) => {
        const { nome, materia } = request.body;

        const data = { nome, materia };

        inserir(data).then((data) => {
            response.send({ message: "Professor inserido com sucesso!" });
        }).catch((error) => {
            response.status(500).send({ message: "Erro ao inserir um novo professor!" });
        });
    },
    atualizar: (request, response) => {
        const { id } = request.params;
        const { nome, materia } = request.body;
        const data = { nome, materia };

        atualizar(id, data).then((data) => {
            response.send({ message: "Professor, atualizado com sucesso!" });
        }).catch((error) => {
            response.status(500).send({ message: "Erro ao atualizar o professor!" });
        });
    },
    deletar: (request, response) => {
        const { id } = request.params;

        deletar(id).then((data) => {
            response.send({ message: "Professor delatado com sucesso!" });
        }).catch((error) => {
            console.log(error);
            response.status(500).send({ message: "Erro ao deletar professor" });
        })
    }
}