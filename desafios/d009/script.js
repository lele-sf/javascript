function reajuste() {
    var nomeFuncionario = prompt('Qual é o nome do funcionário?')
    var salFuncionario = Number(prompt(`Qual é o salário de ${nomeFuncionario}?`))
    var porcentagem = Number(prompt(`O salário de ${nomeFuncionario} vai ser reajustado em qual porcentagem?`))
    var res = document.getElementById('res')
    var reajusteSal = salFuncionario * ((porcentagem / 100))
    res.innerHTML = `<strong>${nomeFuncionario} recebeu um aumento salarial!</strong>`
    res.innerHTML += `<p>O salário atual era ${salFuncionario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>`
    res.innerHTML += `Com um aumento de ${porcentagem}%, o salário vai aumentar ${reajusteSal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no próximo mês</p>`
    res.innerHTML += `E a partir daí, ${nomeFuncionario} vai passar a ganhar ${(salFuncionario+reajusteSal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}