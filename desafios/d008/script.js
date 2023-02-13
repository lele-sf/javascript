function desconto() {
    var nomeProduto = prompt('Qual é o produto que você está comprando?')
    var precoProduto = Number(prompt(`Qual é o preço de ${nomeProduto}?`))
    var res = document.getElementById('res')
    var desconto = precoProduto * 0.1
    res.innerHTML = `<strong>Calculando desconto de 10% para ${nomeProduto}...</strong>`
    res.innerHTML += `<p>O preço original era R$${precoProduto.toFixed(2)}</p>`
    res.innerHTML += `<p>Você acaba de ganhar R$${(desconto).toFixed(2)} de desconto (-10%)!</p>`
    res.innerHTML += `No fim, você vai pagar R$${(precoProduto - desconto).toFixed(2)} no produto ${nomeProduto}!`

}