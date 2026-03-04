/* ===== MOSTRAR LUTADOR ===== */

function mostrarLutador(){

document.getElementById("areaCards").innerHTML = `

<div class="card" onclick="abrirFreya()">

<img src="freya-card.jpg">

<h3>Freya</h3>

</div>

`;

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
