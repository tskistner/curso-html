//Exibir uma mensagem ao carregar a minha página
alert('Bem vindo a minha página!');

function exibirMensagem() {
    alert('Você clicou no botão');
    console.log('A página executou o método: exibirMensagem');
}


//Exercício 3 - Calculadora
function realizarCalculos() {
    let numero1 = parseInt(prompt('Informe o primeiro valor'));
    let numero2 = parseInt(prompt('Informe o segundo valor'));
    somar(numero1, numero2);
    subtrair(numero1, numero2);
    dividir(numero1, numero2);
    multiplicar(numero1, numero2);
}

function somar(valor1, valor2) {
    let resultado = valor1 + valor2;
    console.log('O resultado da soma entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

function subtrair(valor1, valor2) {
    let resultado = valor1 - valor2;
    console.log('O resultado da subtração entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

function dividir(valor1, valor2) {
    let resultado = valor1 / valor2;
    console.log('O resultado da divisão entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

function multiplicar(valor1, valor2) {
    let resultado = valor1 * valor2;
    console.log('O resultado da multiplicação entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

//Calculadora "funcional"
var valor1 = '';
var valor2 = '';
var operacao = '';

function guardarNumero(valor) {
    if (!operacao) {
        valor1 += valor;
        console.log(valor1);
    } else {
        valor2 += valor;
        console.log(valor2);
    }
}

function guardarOperacao(operacaoE) {
    operacao = operacaoE;
}

function limpar() {
    valor1 = '';
    valor2 = '';
    operacao = '';
}

function calcular() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    if (operacao == '+') {
        resultado = valor1 + valor2;
    } else if (operacao == '-') {
        resultado = valor1 - valor2;
    } else if (operacao == '*') {
        resultado = valor1 * valor2;
    } else if (operacao == '/') {
        resultado = valor1 / valor2;
    }
    alert('Resultado: ' + resultado);
    limpar();
}

function calcularComSwitch() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;
        default: 

    }
    alert('Resultado: ' + resultado);
    limpar();
}

function identificarSono() {
    const qtdHoras = prompt('Quantas horas você tem dormido por noite?');
    const horasMinimasSono = 8;
    if (qtdHoras < horasMinimasSono) {
        alert('Você está dormindo pouco. Durma mais!');
    } else {
        alert('Você está dormindo o suficiente, continua assim!');
    }
}

function horaFormato12() {
    const qtdHora = parseInt(prompt('Que horas são?'));

    if (qtdHora > 12) {
        alert(qtdHora - 12 + ' p.m');
    } else {
        alert(qtdHora + ' a.m');
    }
}

function testarOperadorOu() {
    const nro = prompt('Informe um digite');
    if (nro == 5 || nro == 10) {
        alert('O número é 5 ou 10');
    } else {
        alert('Outro número');
    }
}

function testarOperadorE() {
    const idade = prompt('Informe a sua idade');
    const idadeAmigo = prompt('Informe a idade do seu amigo');
    if (idade >= 18 && idadeAmigo >= 18) {
        alert('Vocês estão liberados para beber');
    } else {
        alert('Infelizmente não podem beber');
    }
}

function validarNumeroEntre(vlInicio, vlFinal, vlValidar) {
    if (vlValidar >= vlInicio && vlValidar <= vlFinal) {
        return true;
    }
    return false;
}

function verificarEntradaBalada() {
    const idade = prompt('Informe a sua idade');
    const lista = prompt('Você tem nome na lista? Digite Sim ou Não');
    const ingresso = prompt('Você tem ingresso? Digite Sim ou Não');

    if (idade >= 18 && (ingresso.toUpperCase() == 'SIM' || lista.toUpperCase() == 'SIM')) {
        alert('Entrada permitida');
    } else {
        alert('Entrada negada');
    }
}

function verificarEntradaBaladaMelhorado() {
    if (prompt('Informe a sua idade') >= 18 &&
        (prompt('Você tem nome na lista? Digite Sim ou Não').toUpperCase() == 'SIM'
            || prompt('Você tem ingresso? Digite Sim ou Não').toUpperCase() == 'SIM')) {
        alert('Entrada permitida');
    } else {
        alert('Entrada negada');
    }
}

function verificarMeiaEntrada() {
    const idade = prompt('Informe sua idade');
    if (idade < 12 || idade > 60) {
        alert('Você tem direito a meia entrada');
    } else {
        alert('Você paga entrada inteira');
    }
}

function identificarNomeUsuario() {
    const nomeUsuario = prompt("Informe seu nome");
    if (!nomeUsuario) {
        alert("Entrada esta proibida. Obrigatorio informar seu nome!");
        identificarNomeUsuario();
    } else {
        alert("Entrada liberada!");
    }
}

function calcularIMC() {
    const peso = prompt('Informe seu peso');
    let altura = prompt('Informe sua altura');

    //Verificando se está em centímetros para converter para metros
    if (altura.indexOf('.') == -1 && altura.length > 1) {
        altura = altura / 100;
    }
    const imc = peso / (altura * altura);

    if (imc <= 18.5) {
        alert('Você está abaixo do peso');
    } else if (imc > 18.5 && imc <= 25) {
        alert('Você está no peso normal');
    } else if (imc > 25 && imc <= 30) {
        alert('Você está acima do peso');
    } else {
        alert('Você está obeso');
    }
}

function converterDiaSemana() {
    const diaSemana = parseInt(prompt('Informe o dia da semana em número'));
    const DOMINGO = 1, SEGUNDA = 2, TERCA = 3, QUARTA = 4 , QUINTA = 5, SEXTA = 6, SABADO = 7;
    switch (diaSemana) {
        case DOMINGO: {
            alert('Domingo');
            break;
        }
        case SEGUNDA: {
            alert('Segunda-feira');
            break;
        }
        case TERCA: {
            alert('Terça-feira');
            break;
        }
        case QUARTA: {
            alert('Quarta-feira');
            break;
        }
        case QUINTA: {
            alert('Quinta-feira');
            break;
        }
        case SEXTA: {
            alert('Sexta-feira');
            break;
        }
        case SABADO: {
            alert('Sábado');
            break;
        }
        default: {
            alert('Dia inválido');
        }
    }
}

function calcularPrecoProduto(preco) {
    const preco = parseFloat(prompt('Informe o valor da sua compra.'));
    let valorTotal = calcularFormaPagamento(preco);
}

function calcularFormaPagamento(preco) {
    const formaPgto = parseInt(prompt('Informe a forma de pagamento. \n1 - PIX\n2 - Cartão de débito. \n3- Cartão de débito. \n4 - Boleto.'));
    const PIX = 1, DEBITO = 2, CREDITO = 3, BOLETO = 4;
    switch (formaPgto) {
        case PIX: {
            return preco - preco * 0.1;
        }
        case DEBITO: {
            return preco - preco * 0.05;
        }
        case CREDITO: {
            return preco + preco * 0.02;
        }
        default: {
            return preco;
        }
    }
}