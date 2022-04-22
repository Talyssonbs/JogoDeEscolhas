function verificaResposta() {
    var resposta = prompt("O que Venom deve fazer ?");
    while (true) {
        if (resposta === "b") {
            window.location.href = "../fase2/fase2.html"
            break;
        } else if (resposta == "a" || resposta == "c") {
            alert("Você errou... Game over")
            window.location.href = "./GameOver.html"
            break;
        } else {
            alert("INSIRA UMA ALTERNATIVA VÁLIDA")
            break;
        }

    }
}