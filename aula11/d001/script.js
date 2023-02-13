function calcular() {
    var txtc = window.document.querySelector('input#country').value
    var res = window.document.querySelector('div#res')
    res.innerHTML = ''
    if (txtc == "Brasil" || txtc == "brasil" || txtc == "BRASIL") {
        res.innerHTML += `Brasileiro!`
    } else {
        res.innerHTML += `Estrangeiro!`
    } 
}