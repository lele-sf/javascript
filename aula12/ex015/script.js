function verificar() {
    var anoNasc = Number(document.getElementById('dataNasc').value)
    var data = new Date()
    var anoAtual = data.getFullYear()
    var res = document.getElementById('res')
    var idade = (anoAtual - anoNasc)
    if(anoNasc == 0 || anoNasc > anoAtual) {
        window.alert('Verifique os dados e tente novamente!') 
    } else {
            var sexo = document.getElementsByName('genero')
            var genero = ""
            var img = document.createElement('img')
            if(sexo[0].checked) {
                genero = 'Homem'
                if (idade >=0 && idade < 10) {
                    //Criança
                    img.setAttribute('src','img/foto-bebe-m.png')
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src','img/foto-jovem-m.png')
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src','img/foto-adulto-m.png')
                } else {
                    //Idoso
                    img.setAttribute('src','img/foto-idoso-m.png')
                }
            } else {
                genero = 'Mulher'
                if (idade >=0 && idade < 10) {
                    //Criança
                    img.setAttribute('src','img/foto-bebe-f.png')
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src','img/foto-jovem-f.png')
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src','img/foto-adulto-f.png')
                } else {
                    //Idoso
                    img.setAttribute('src','img/foto-idoso-f.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
        }
}