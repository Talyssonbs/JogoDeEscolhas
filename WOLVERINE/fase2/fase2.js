function verificaResposta() {
    var resposta = prompt("Qual a resposta ?");
    while (true) {
        if (resposta === "c") {
            window.location.href = "../fase3/fase3.html"
            break;
        } else if (resposta == "a" || resposta == "b") {
            alert("Você errou... Game over")
            window.location.href = "./GameOver.html"
            break;
        } else {
            alert("INSIRA UMA ALTERNATIVA VÁLIDA")
            break;
        }

    }
}
function Voltar() { 
    window.location.href = "../fase1/fase1.html"
}

function Inicio() {
    window.location.href = "/index.html"
}