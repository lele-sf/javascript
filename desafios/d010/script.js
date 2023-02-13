function calcular() {
    var a = Number(prompt('Qual o valor de a?'))
    var b = Number(prompt('Qual o valor de b?'))
    var c = Number(prompt('Qual o valor de c?'))
    var res = document.getElementById('res')
    var delta = ((b*b)-4*(a*c))
    res.innerHTML = '<strong id="res">Resolvendo Bhaskara</strong>'
    res.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>△ = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <mark><strong>△ = ${delta}</strong></mark></p>`
}