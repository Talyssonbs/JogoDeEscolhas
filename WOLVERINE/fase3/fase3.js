function verificaResposta() {
    var resposta = prompt("O que Logan deve fazer ?");
    while (true) {
        if (resposta === "c") {
            window.location.href = "./Venceu.html"
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