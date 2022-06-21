let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLInputElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLInputElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0;
limparSaldo();

function somarAoSaldo(soma: number) {
    if(campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparSaldo() {
    if(campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = "0";
    }
}

function limparCampoSoma() {
    soma.value = "";
}

botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    }
);

botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */