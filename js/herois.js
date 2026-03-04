/* ===== SISTEMA SIMPLES DE HERÓIS ===== */

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
