let num = document.getElementById('txtn')
let lista = document.getElementById('sellista')
let valores = []
    function add() {
        if (num.value.length == 0 || num.value > 100 || num.value < 1 || valores.indexOf(Number(num.value)) != -1) {
            alert('Valor inválido ou já encontrado na lista.')
        } else {
            let n = Number(num.value)       
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            lista.appendChild(item)
            res.innerHTML = ''
            valores.push(n)
        }
        num.value = ''
        num.focus()
    }
    function finalizar() {
        if (valores == 0) {
            alert('Adicione valores antes de finalizar!')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior) {
                    maior = valores[pos]
                } else if (valores[pos] < menor) {
                    menor = valores[pos]
                }
            }
            media = soma / tot
            res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados.</p>` 
            res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
            res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
        }
    }