const { loginUsuario } = require("./../repository/user.repository");

const usuario = {
    id: 1,
    nome: "Guilherme Pires",
    user_name: "guilherme.pires",
    senha: "gui@123"
};

module.exports = {
    buscaUsuario: (request, response) => {
        const { nome, user_name } = usuario;
        response.send({ nome, user_name });
        // response.send(`Nome: ${nome}, Usuário: ${user_name}`);
    },
    login: async (request, response) => {
        const { user_name, senha } = request.body;

        //Fazer uma consulta no banco de dados para retornar as informaçoes
        const user = await loginUsuario()

        if (user_name == usuario.user_name) {
            if (senha == usuario.senha) {
                response.send("Login efetuado com sucesso!");
            } else {
                response.send("Senha inválida!");
            }
        } else {
            response.send("Usuário inválido!");
        };
    },
    esqueceuSenha: (request, response) => {
        const { email } = request.body;
        //consultar no banco de dados se o emial existe TABELA USUARIOS
        const user = await ...

        //GERAR A CHAVE ALEATORIA
        const chave = Math.floor(Math.random() * 100);

        //inserir o registro no banco de dados na tabel REC_SENHA
        (user.id, chave)

        //responder o cliente com chave
        response.send({chave});
    },
    salvarSenha: (request, response)=>{
        const {chave, nova_senha} = request.body;

        //buscar a chave no banco de dados na tabela REC_SENHA
        const chaveUser = await ...

        //validar se cahve existe

        //fazer um update na tabela USUARIOS no campo SENHA
        (chaveUser.user_id, nova_senha)

        //deleto o registro da tabela REC_SENHA pelo código id
        chaveUser.id

        //Envio um retorno para cliente falando se esta tudo certo! 

        
    }
}