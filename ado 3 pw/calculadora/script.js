

let numeros = [];

function incluirNumero() {
    const inputNumero = document.getElementById('numero');
    const numero = parseInt(inputNumero.value);

    if (isNaN(numero) || numero < 1 || numero > 100 || numeros.includes(numero)) {
        alert('Número inválido. Deve ser entre 1 e 100 e não pode ser repetido.');
        return;
    }

    numeros.push(numero);
    atualizarListaNumeros();
    inputNumero.value = '';
}

function atualizarListaNumeros() {
    const selectNumeros = document.getElementById('numerosSelecionados');
    selectNumeros.innerHTML = '';
    for (let i = 0; i < numeros.length; i++) {
        const option = document.createElement('option');
        option.text = 'Valor ' + (i + 1) + ': ' + numeros[i];
        selectNumeros.add(option);
    }
}

function finalizar() {
    if (numeros.length === 0) {
        alert('Adicione valores antes de finalizar.');
        return;
    }

    let somaValores = 0;
    let maiorValor = numeros[0];
    let menorValor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        somaValores += numeros[i];
        if (numeros[i] > maiorValor) {
            maiorValor = numeros[i];
        }
        if (numeros[i] < menorValor) {
            menorValor = numeros[i];
        }
    }

    const numeroElementos = numeros.length;
    const mediaValores = somaValores / numeroElementos;

    alert('Ao todo, temos ' + numeroElementos + ' elementos cadastrados.\n\nMaior valor informado: ' + maiorValor + '\nMenor valor informado: ' + menorValor + '\nSoma dos valores: ' + somaValores + '\nMédia dos valores informados: ' + mediaValores.toFixed(2));
}

document.getElementById('incluirBtn').addEventListener('click', incluirNumero);
document.getElementById('finalizarBtn').addEventListener('click', finalizar);
