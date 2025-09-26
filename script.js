const input = document.querySelector("#meu-input");
const infos = document.querySelector("h4");
function cliqueiNoBotao() {
  infos.innerHTML = input.value;
  infos.style.color = "blue";
}

const gostei = document.querySelector("#gostei");
const naoGostei = document.querySelector("#nao-gostei");
const h3 = document.querySelector("h5");

let contador = 0;

function clicGostei() {
  contador++;
  h3.textContent = contador;
}

function clicNaoGostei() {
  contador--;
  h3.textContent = contador;
}

gostei.addEventListener("click", clicGostei);
naoGostei.addEventListener("click", clicNaoGostei);
