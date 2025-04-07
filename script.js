document.getElementById("calcular").addEventListener("click", function () {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const imc = peso / (altura * altura);
  let classificacao = "";
  let mensagemIdeal = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso.";
    const pesoIdealMin = 18.5 * (altura * altura);
    mensagemIdeal = `Seu peso ideal mínimo seria de ${pesoIdealMin.toFixed(
      2
    )} kg. Você precisa ganhar ${Math.abs(peso - pesoIdealMin).toFixed(2)}kg.`;
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal.";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso.";
    const pesoIdealMax = 24.9 * (altura * altura);
    mensagemIdeal = `Seu peso ideal máximo seria de ${pesoIdealMax.toFixed(
      2
    )} kg. Você precisa perder ${Math.abs(peso - pesoIdealMax).toFixed(2)} kg.`;
  } else {
    classificacao = "Obesidade.";
    const pesoIdealMax = 24.9 * (altura * altura);
    mensagemIdeal = `Seu peso ideal máximo seria de ${pesoIdealMax.toFixed(
      2
    )} kg. Você precisa perder ${Math.abs(peso - pesoIdealMax).toFixed(2)} kg.`;
  }
  document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(
    2
  )}. <br> Classificação: ${classificacao} <br> ${mensagemIdeal}`;
});
