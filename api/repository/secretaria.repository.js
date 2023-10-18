const conn = require("../mysql.knex");

module.exports = {
    buscaTodos: async () => {
        return await conn.from("turmas")
        .innerJoin("professor", "turmas.professor_id", "professor.id");
    }
}