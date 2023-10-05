const conn = require("../mysql.knex");

module.exports = {
    buscaTodos: async () => {
        return await conn.select().from("alunos");
        //SELECT * FROM alunos;
    },
    buscaAlunoPorId: async (id) => {
        return await conn.select().from("alunos").where({ id: id });
        // SELECT * FROM alunos WHERE id = 1;
    },
    inserir: async(data)=>{
        return await conn.insert(data).into("alunos");
        //INSERT INTO ALUNOS (id,nome,idade, email) values(null,"Guilherme Pires",25,"guilherme.pires@arcansistemas.com.br");
    },
    atualizar:async()=>{
        //UOPDATE ALUNOS (nome,idade,email) SET("Guilherme","25","novo.email@escola.pr.gov.br")
    },
    deletar: async()=>{

    }
};