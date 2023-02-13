function moedaBR(value) {
    return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}

function verificar() {
    var precoAntigo = Number(prompt('Qual era o preço anterior do produto?'))
    var precoAtual = Number(prompt('Qual é o preço atual do produto?'))
    var res = document.getElementById('res')
    res.innerHTML = '<strong>Analisando os valores informados</strong>' + `<p>O produto custava ${moedaBR(precoAntigo)} e agora custa ${moedaBR(precoAtual)}.</p>`
    if (precoAntigo < precoAtual) {
        res.innerHTML += '<p>Hoje o produto está mais caro.</p>' + `<p>O preço subiu ${moedaBR(precoAtual - precoAntigo)} em relação ao preço anterior.</p>`
    } else {
        res.innerHTML += '<p>Hoje o produto está mais barato.</p>' + `<p>O preço caiu ${moedaBR(precoAntigo - precoAtual)} em relação ao preço anterior.</p>`
    }
}
