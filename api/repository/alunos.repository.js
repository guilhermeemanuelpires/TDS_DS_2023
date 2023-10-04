const conn = require("../mysql.knex");

module.exports = {
    buscaTodos: async () => {
        return await conn.select().from("alunos");
    }
};