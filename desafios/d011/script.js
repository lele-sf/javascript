function verificar() {
    var ano = Number(prompt(`Qual é o ano que você quer verificar?`))
    var res = document.getElementById('res')
    res.innerHTML = (`<strong>Analisando o ano de ${ano}...</strong>`)
    if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
        res.innerHTML += `<p>O ano de ${ano} <mark id="verde">É BISSEXTO</mark>✅</p>`
    } else {
        res.innerHTML += `<p>O ano de ${ano} <mark id="vermelho">NÃO É BISSEXTO</mark>❌</p>`
    }
}