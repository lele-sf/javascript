function atualizaHora() {
    var hora = new Date();
    var msg = document.getElementById('msg');
    msg.innerHTML = `<p>Agora são ${hora.getHours()}:${("0" + hora.getMinutes()).slice(-2)}</p>`;

    if (hora.getHours() >= 0 && hora.getHours() <= 12) {
        msg.innerHTML += '<img src ="img/morning.png">';
        document.body.style.background = '#ffda58';
    } else if (hora.getHours() > 12 && hora.getHours() <= 18) {
        msg.innerHTML += '<img src ="img/afternoon.png">';
        document.body.style.background = '#f4a085';
    } else {
        msg.innerHTML += '<img src ="img/night.png"></div>';
        document.body.style.background = '#463d4f';
    }
}

setInterval(atualizaHora, 1000)
