export function megaSena(qtt = 6, numeros = []) {
  let quantidade = +qtt;
  if (quantidade < 6 && quantidade > 60) {
    throw "Quantidade inválida!!!";
  }

  if (numeros.length === quantidade) {
    return numeros.sort((a, b) => a - b);
  }

  const numeroAleatorio = parseInt(Math.random() * 60) + 1;
  if (!numeros.includes(numeroAleatorio)) {
    return megaSena(quantidade, [...numeros, numeroAleatorio]);
  } else {
    return megaSena(quantidade, numeros);
  }
}
