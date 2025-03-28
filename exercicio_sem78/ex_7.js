var pedido = [40, 90, 200, 12];
var totalPedidos = pedido[0];
var i = 1;

while(i < pedido.length) {
    totalPedidos += pedido[i];
    i++;


if (totalPedidos < 50) {
  console.log("Você é um adulto!");
} else if (totalPedidos >= 50 && totalPedidos < 199.99) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
}
}