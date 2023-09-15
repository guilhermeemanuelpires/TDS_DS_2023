const express = require('express');

const app = new express();

app.get("/alunos",(request, response)=>{
    response.send("Alunos");
});

app.get("/professores",(request, response)=>{
    response.send("<h1>professores</h1>");
});

app.get("/soma",(request, response)=>{
    var valor1 = 10;
    var valor2 = 20;

    var resultado =  valor1 + valor2;

    response.send(`O resultado da soma é: ${resultado}`);
});

app.post("/soma_parametros",(request, response)=>{

    console.log(request.body);
    // const valor1 = request.body.valor1;
    // const valor2 = request.body.valor2;

    // const resultado = valor1 + valor2;

    // response.send(`O resultado da soma dos parâmetros é : ${resultado}`);

});



app.listen(8080, () =>
    console.log("O servidor está rodando na porta 8080! 👍")
);