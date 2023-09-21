const express = require("express");
const bodyParser = require("body-parser");

const app = new express();

app.use(bodyParser.json());

const usuario = {
    id: 1,
    nome: "Guilherme Pires",
    user_name: "guilherme.pires",
    senha: "gui@123"
};

app.get("/usuario", (request, response) => {
    const { nome, user_name } = usuario;
    response.send({ nome, user_name });
    // response.send(`Nome: ${nome}, Usuário: ${user_name}`);
});

app.post("/login", (request, response) => {
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
});


app.listen(8080, () => {
    console.log("Servidor está rodando na porta 8080 👍");
});