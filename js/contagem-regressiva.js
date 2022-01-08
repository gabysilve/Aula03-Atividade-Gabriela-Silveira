const segundos = 1000;
const minutos = segundos * 60;
const horas = minutos * 60;
const dias = horas * 24;

let contador = new Date('04/18/2022 00:00:00').getTime();
let timer = setInterval(() => contagemRegressiva(), segundos);

function contagemRegressiva() {
  let current = new Date().getTime();
  let diferenca = contador - current;

  document.getElementById('dias').innerText = Math.floor(diferenca / dias);
  document.getElementById('horas').innerText = Math.floor(diferenca % dias / horas);
  document.getElementById('minutos').innerText = Math.floor(diferenca % horas / minutos);
  document.getElementById('segundos').innerText = Math.floor(diferenca % minutos / segundos);
}