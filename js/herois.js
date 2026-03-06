function abrirClasse(classe){

const area = document.getElementById("areaCards");

if(classe === "fighter"){

area.innerHTML = `

<h2>FIGHTERS</h2>

<div class="card" onclick="window.location.href='herois/freya.html'">
<img src="freya-card.jpg">
<h3>Freya</h3>
</div>

`;

}

}


function abrirClasse(classe){

document.getElementById("tituloClasses").style.display = "none";

document.getElementById("areaCards").style.display = "none";

document.getElementById("telaFighters").classList.remove("oculto");

}
