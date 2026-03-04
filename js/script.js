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


/* ===== MENU ===== */

function abrirMenu(){

document.getElementById("menuLateral").classList.add("ativo");

document.getElementById("overlay").classList.add("ativo");

ativarNox();

}

function fecharMenu(){

document.getElementById("menuLateral").classList.remove("ativo");

document.getElementById("overlay").classList.remove("ativo");

document.getElementById("noxContainer").classList.remove("active");

}


/* ===== NAVEGAÇÃO ===== */

function irInicio(){

document.getElementById("telaHerois").classList.add("oculto");

document.getElementById("telaDetalhe").classList.add("oculto");

document.getElementById("telaInicial").classList.remove("oculto");

fecharMenu();

}

function abrirHerois(){

document.getElementById("telaInicial").classList.add("oculto");

document.getElementById("telaDetalhe").classList.add("oculto");

document.getElementById("telaHerois").classList.remove("oculto");

fecharMenu();

}


/* ===== LOGO ===== */

function tocarSomLogo(){

const som = document.getElementById("logoSound");

som.currentTime = 0;

som.play();

}


/* ===== CARDS ===== */

function mostrarLutador(){

document.getElementById("areaCards").innerHTML = `

<div class="card" onclick="abrirFreya()">

<img src="freya-card.jpg">

<h3>Freya</h3>

</div>

`;

}

function abrirFreya(){

document.getElementById("telaHerois").classList.add("oculto");

document.getElementById("telaDetalhe").classList.remove("oculto");

}

function voltar(){

document.getElementById("telaDetalhe").classList.add("oculto");

document.getElementById("telaHerois").classList.remove("oculto");

}


/* ===== BLOQUEIO CLICK DIREITO ===== */

document.addEventListener("contextmenu",function(e){

e.preventDefault();

});
