function converte() {
    var metro = Number(prompt('Digite uma distância em metros(m)'))
    var res = document.getElementById('res')
    res.innerHTML = `<strong>A distância de ${metro} metros, corresponde a...</strong>`
    res.innerHTML += `<p>${metro/1000} quilômetros (Km)</p>`+`<p>${metro/100} hectômetros (Hm)</p>`+`<p>${metro/10} decâmetros (Dam)</p>`+`<p>${metro*10} decímetros (dm)</p>`+`<p>${metro*100} centímetros (cm)</p>`+`<p>${metro*1000} milímetros (mm)</p>`
}