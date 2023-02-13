function converte() {
    var celsius = Number(prompt('Digite uma temperatura em °C (Celsius)'))
    var res = document.getElementById('res')
    res.innerHTML = `<strong>A temperatura de ${celsius}°C, corresponde a...</strong>`
    var f = (celsius * 9 / 5) + 32
    var k = (celsius + 273.15).toFixed(2)
    res.innerHTML += `<p>${f}°F (Fahrenheit)</p>`
    res.innerHTML += `<p>${k}K (Kelvin)</p>`
}
