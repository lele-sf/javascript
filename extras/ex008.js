const alunos = [];

for (let i = 1; i <= 4; i++) {
  const nome = prompt(`Aluno ${i}: `);
  alunos.push(nome);
}

for (let i = alunos.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [alunos[i], alunos[j]] = [alunos[j], alunos[i]];
}

console.log("Ordem dos alunos:");
for (let i = 0; i < alunos.length; i++) {
  console.log(`${i + 1}. ${alunos[i]}`);
}