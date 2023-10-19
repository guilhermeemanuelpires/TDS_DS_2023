const { buscaTodos, InserirTurma } = require("../repository/secretaria.repository");
const buscaProfessor = require("../repository/professores.repository").buscaPorId;
const buscaAluno = require("../repository/alunos.repository").buscaAlunoPorId;

module.exports = {
    buscaTodos: (request, response) => {
        buscaTodos().then((data) => {
            response.send(data);
        }).catch((error) => {
            response.status(500).send({ message: "Erro ao consultar turma" });
        })
    },
    vinculaProfAlunos: async (request, response) => {
        const { professor_id, aluno_id } = request.body;
        const data = { professor_id, aluno_id };

        const existProfessor = await buscaProfessor(professor_id);
        const existAlunos = await buscaAluno(aluno_id);

        if (existProfessor.length <= 0) {
            return response.status(404).send({ message: "ID do professor não existe na tabela professores!" });
        }

        if (existAlunos.length <= 0) {
            return response.status(404).send({ message: "ID do aluno não existe na tabela alunos!" });
        }

        await InserirTurma(data).then((data) => {
            return response.send({ message: "Vínculo realizado com sucesso!" });
        }).catch((error) => {
            console.log(error);
            return response.status(500).send({ message: "Erro ao realizar o vínculo da turma!" });
        });
    }
}