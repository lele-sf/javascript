function calculaTroco() {
    var produto = prompt("Qual o nome do produto?");
    var valorPago = prompt("Qual o valor pago pelo cliente?");
    var valorProduto = prompt("Qual o valor do produto?");

    if (valorPago < valorProduto) {
        alert("Valor pago menor que o valor do produto, tente novamente.");
    } else {
        var troco = valorPago - valorProduto;
        alert(' O ' + produto + ' custa R$ ' + valorProduto + ',00. O cliente pagou R$ ' + valorPago + ',00 e o troco é de R$ ' + troco + ',00.');
    }
}


