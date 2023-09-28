module.exports = {
    soma: (request, response) => {
        var valor1 = 10;
        var valor2 = 20;

        var resultado = valor1 + valor2;

        response.send(`O resultado da soma é: ${resultado}`);
    },
    somaParametos : (request, response)=>{
        const { valor1, valor2 } = request.body;

        if (!valor1) {
            response.status(500).send("O parametro valor1 não foi informado!");
        } else if (!valor2) {
            response.status(500).send("O parametro valor2 não foi informado!");
        }
    
        const resultado = valor1 + valor2;
    
        response.status(200).send(`O resultado da soma dos parâmetros é : ${resultado}`);
    }
}