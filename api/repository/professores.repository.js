const conn = require("../mysql.knex");

module.exports = {
    buscaTodos: async () => {
        return await conn.select().from("professor");
    },
    buscaPorId: async (id) => {
        return await conn.select().from("professor").where({ id: id })
    },
    inserir: async (data) => {
        return await conn.insert(data).from("professor");
    },
    atualizar: async (id, data) => {
        return await conn("professor").update(data).where({ id: id });
    },
    deletar: async (id)=>{
        return await conn("professor").where({id :id}).del();
    }
}