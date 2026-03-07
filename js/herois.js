function abrirClasse(classe){

const area = document.getElementById("areaCards");

document.getElementById("tituloClasses").style.display = "none";

document.getElementById("logoTopo").style.display = "none";

if(classe === "fighter"){

area.innerHTML = `

<h2>LUTADORES</h2>

<div class="card">
<img src="freya-card.jpg">
<h3>Freya</h3>
</div>

<div class="card">
<img src="phoveus-card.jpg">
<h3>Phoveus</h3>
</div>

<div class="card">
<img src="badang-card.jpg">
<h3>Badang</h3>
</div>

`;

}

}
