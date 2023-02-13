function converte() {
    var real = prompt('Quantos R$ você tem na carteira?')
    var res = document.getElementById('res')
    var dolar = real / 5.20
    res.innerHTML = `<strong>Com R$${real} você pode comprar US$${dolar.toFixed(2)}</strong>`
}