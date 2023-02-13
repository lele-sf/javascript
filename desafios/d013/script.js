function verificar() {
    var nomeAluno = prompt('Qual é o nome do aluno?')
    var nota1 = Number(prompt(`Primeira nota de ${nomeAluno}:`))
    var nota2 = Number(prompt(`Segunda nota de ${nomeAluno}:`))
    var res = document.getElementById('res')
    var media = ((nota1 + nota2) / 2)
    res.innerHTML = `<strong>Analisando a situação de ${nomeAluno}</strong>`
    res.innerHTML += `<p>Com as notas ${nota1} e ${nota2} a <strong id="media">média é ${media}</strong></p>`
    if(media < 3) {
        res.innerHTML += `<p>Com média abaixo de 3.0, o aluno está <mark id="reprovado">REPROVADO</mark></p>`
    } else if(media >=3 && media <=6 ) {
        res.innerHTML += `<p>Com média entre 3.0 e 6.0, o aluno está <mark id="rec">RECUPERAÇÃO</mark></p>`
    } else {
        res.innerHTML += `<p>Com média acima de 6.0, o aluno está <mark id="aprovado">APROVADO</mark></p>`
    }
    
}