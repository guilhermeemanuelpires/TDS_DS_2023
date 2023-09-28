const usuario = {
    id: 1,
    nome: "Guilherme Pires",
    user_name: "guilherme.pires",
    senha: "gui@123"
};

module.exports = {
    buscaUsuario : (request, response)=>{
        const { nome, user_name } = usuario;
        response.send({ nome, user_name });
        // response.send(`Nome: ${nome}, Usuário: ${user_name}`);
    },
    login : (request, response)=>{
        const { user_name, senha } = request.body;

        if (user_name == usuario.user_name){
            if(senha == usuario.senha){
                response.send("Login efetuado com sucesso!");
            }else{
                response.send("Senha inválida!");
            }
        }else{
            response.send("Usuário inválido!");
        };
    }
}