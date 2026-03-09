function conversor() {
    let valor = window.prompt('Digite um valor em m (Metros) para converter:');
    if (valor !== null) {
      const numero = parseFloat(valor);
      if (!isNaN(numero)) {
        window.alert('A distâcia de: ' + valor + 'em metros, corresponde a:' +
        '\nEm milímetros: ' + (numero * 1000) + 'mm'+ 
        '\nEm centímetros: ' + (numero * 100) + 'cm'+
        '\nEm decímetros: ' + (numero * 10) + 'dm'+
        '\nEm decâmetros: ' + (numero / 10) + 'dam'+
        '\nEm hectômetros: ' + (numero / 100) + 'hm'+
        '\nEm quilômetros: ' + (numero / 1000) + 'km');
        } else {
            alert('Por favor, digite um número válido.');
        }
    }
}

function temperatura() {
  let valor = window.prompt('Digite um valor em °C (Celsius) para converter:');
  if (valor !== null) {
    const numero = parseFloat(valor);
    window.alert('A temperatura de: ' + valor + '°C, corresponde a:' +
    '\nEm Fahrenheit: ' + ((numero * 9/5) + 32) + '°F'+ 
    '\nEm Kelvin: ' + (numero + 273.15) + 'K');
  } else {
    alert('Por favor, digite um número válido.');
  }
}

function dinheiro() {
  let valorDol = window.prompt('Qual a cotação do Dólar (U$) hoje?:');
  if (valorDol !== null ) {
    const numero = parseFloat(valorDol);
    let valorRs = window.prompt('Digite um valor em R$ (Reais) para converter:');
    if (valorRs !== null) {
      const numero2 = parseFloat(valorRs);
      window.alert('O valor de: ' + valorRs + 'R$, corresponde a:' +
      '\nEm Dólares: ' + (numero2 / numero) + 'U$');
    } else {
      alert('Por favor, digite um número válido.');
    }
  }
}

const botao = document.getElementById('conversorBtn');
if (botao) {
    botao.addEventListener('click', conversor);
}

const temperaturaBtn = document.getElementById('temperaturaBtn');
if (temperaturaBtn) {
  temperaturaBtn.addEventListener('click', temperatura); 
}

const dinheiroBtn = document.getElementById('dinheitoBtn');
if (dinheiroBtn) {
  dinheiroBtn.addEventListener('click', dinheiro);
}