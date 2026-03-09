function conversor() {
    let valor = window.prompt('Digite um valor em m (Metros) para converter:');
    window.alert('Valor digitado: ' + valor);
    if (valor !== null) {
        const numero = parseFloat(valor);
        if (!isNaN(numero)) {
            alert('Resultado da conversão (exemplo): ' + (numero * 2));
        } else {
            alert('Por favor, digite um número válido.');
        }
    }
}

const botao = document.getElementById('conversorBtn');
if (botao) {
    botao.addEventListener('click', conversor);
} else {
    console.warn('Botão não encontrado: verifique se o id está correto.');
}