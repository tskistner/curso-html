alertar();
//comentário de uma linha
/*
comentário de várias linhas
*/
var variavelGlobal = 5;

function alertar() {
    let variavelLocal = 6;
    alert('Aproveite a nossa promoção e compre um curso nosso');
    alert('Tem certeza que não quer comprar?');
}

function teste() {
    let variavelTeste = 3;
    alert('Teste');
    //texto
}

function testeFor() {
    for (let contador = 0; contador < 10; contador++) {
        console.log(contador);
    }

    let contador = 0;
    while (contador < 10) {
        console.log(contador);
        contador++
    }
}

function testeWhile() {
    let numero = 0;
    while (!isNaN(numero)) {
        numero = prompt('Informe apenas números.');
    }
    alert('Você não digitou um número.\nAplicação encerrada');
}

function alterarTexto() {
    let div = document.getElementById('minhaDiv');
    let campo = document.getElementById('campoTexto');
    div.innerHTML = '<p> O texto digitado pelo usuário é: '+campo.value+'</p>';
}

function validarResultado() {
    let resultado = document.getElementById('resultado');
    let resultadoConta = document.getElementById('resultadoConta');
    const RESULTADOVALIDO = 4;
    if (resultadoConta.value == RESULTADOVALIDO) {
        resultado.innerHTML = '<p class="sucesso">Parabéns, você acertou!</p>';
    } else {
        resultado.innerHTML = '<p class="erro">Resposta errada, tente novamente</p>';
    }
}