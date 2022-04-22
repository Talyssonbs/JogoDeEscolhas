function verificaResposta() {
    var resposta = prompt("O que Venom deve fazer ?");
    while (true) {
        if (resposta === "a") {
            window.location.href = "../fase3/fase3.html"
            break;
        } else if (resposta == "c" || resposta == "b") {
            alert("Você errou... Game over")
            window.location.href = "./GameOver.html"
            break;
        } else {
            alert("INSIRA UMA ALTERNATIVA VÁLIDA")
            break;
        }

    }
}