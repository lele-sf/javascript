// nome completo

const name = prompt('Digite seu nome completo: ')
const nameWithoutSpaces = name.replace(/\s/g, '');
const nameUpper = name.toUpperCase()
const nameLower = name.toLowerCase()
const nameLength = nameWithoutSpaces.length;
const nameSplit = name.split(' ')
const fname = nameSplit[0]

console.log(`O seu nome em maiúsculas é: ${nameUpper}`)
console.log(`O seu nome em minúsculas é: ${nameLower}`)
console.log(`Seu nome completo tem ${nameLength} letras.`)
console.log(`Seu primeiro nome é ${fname} e tem ${fname.length} letras.`)