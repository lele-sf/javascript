const alunos = []

for(let i=1;i<=4;i++) {
  const nome = prompt(`Digite o nome do estudante ${i}:`);
  alunos.push(nome)
}

const alunoAleatorio = alunos[Math.floor(Math.random() * alunos.length)]

console.log(`Aluno escolhido: ${alunoAleatorio}`);