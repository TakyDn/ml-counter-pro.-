/* ===== LISTA DE HERÓIS ===== */

const heroisLutadores = [

{
nome: "Freya",
img: "freya-card.jpg",
acao: "abrirFreya()"
}

];


/* ===== MOSTRAR LUTADORES ===== */

function mostrarLutador(){

const area = document.getElementById("areaCards");

area.innerHTML = "";

heroisLutadores.forEach(heroi => {

area.innerHTML += `

<div class="card" onclick="${heroi.acao}">

<img src="${heroi.img}">

<h3>${heroi.nome}</h3>

</div>

`;

});

}


/* ===== ABRIR FREYA ===== */

function abrirFreya(){

document.getElementById("telaHerois").classList.add("oculto");

document.getElementById("telaDetalhe").classList.remove("oculto");

}


/* ===== VOLTAR ===== */

function voltar(){

document.getElementById("telaDetalhe").classList.add("oculto");

document.getElementById("telaHerois").classList.remove("oculto");

}
