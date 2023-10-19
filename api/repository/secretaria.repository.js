const conn = require("../mysql.knex");

module.exports = {
    buscaTodos: async () => {
        return await conn.select(
            ["turmas.id as turma_id",
                "professor.id as professor_id",
                "professor.nome as nome_professor",
                "alunos.id as aluno_id",
                "alunos.nome as aluno_nome"]
        )
            .from("turmas")
            .innerJoin("professor", "turmas.professor_id", "professor.id")
            .innerJoin("alunos", "turmas.aluno_id", "alunos.id");
    },
    InserirTurma : async(data)=>{
        return await conn.insert(data).from("turmas");
    }
    
}