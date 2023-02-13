function tabuada() {
    const num = Number(document.getElementById("numero").value);
    const tab = document.getElementById("tab");
    let tabConteudo = "";
    if (!num) {
      alert("Por favor, digite um número!");
      return;
    }
    for (let c = 1; c <= 10; c++) {
      tabConteudo += `<option value="tab${c}">${num} x ${c} = ${num * c}</option>`;
    }
    tab.innerHTML = tabConteudo;
  }



/*
    for(var x = 0; x <= 10; x++) {
            var multiplicacao = tab * x
            res.innerHTML += `<br>${tab} X ${x} = ${multiplicacao} <br>`
        }
*/ 