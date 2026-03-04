/* ===== FALAS OFICIAIS DO NOX ===== */

const falasMenu = [

`Ah… o menu.
Finalmente decidiu pensar antes de agir. Eu estava começando a me preocupar.`,

`Interessante… procurando vantagem antes da batalha.
Gosto quando você aprende rápido.`,

`Planejamento. Finalmente.
Vitórias começam aqui — não no impulso.`

];

/* ===== ATIVAR NOX ===== */

function ativarNox(){

const indice = Math.floor(Math.random() * falasMenu.length);

const falaEscolhida = falasMenu[indice];

const box = document.getElementById("noxFala");
const container = document.getElementById("noxContainer");

container.classList.add("active");

box.innerHTML = "";

let i = 0;

function digitar(){

if(i < falaEscolhida.length){

box.innerHTML += falaEscolhida[i] === "\n" ? "<br>" : falaEscolhida[i];

i++;

setTimeout(digitar,22);

}

}

digitar();

  }
