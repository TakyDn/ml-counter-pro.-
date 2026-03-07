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


function voltarClasses(){

const area = document.getElementById("areaCards");

area.innerHTML = `

<div class="classe-card" onclick="abrirClasse('fighter')">
<img src="img-classes/fighter.png" class="classe-icon">
<h3>LUTADOR</h3>
</div>

<div class="classe-card" onclick="abrirClasse('tank')">
<img src="img-classes/tank.png" class="classe-icon">
<h3>TANK</h3>
</div>

<div class="classe-card" onclick="abrirClasse('assassin')">
<img src="img-classes/assassin.png" class="classe-icon">
<h3>ASSASSINO</h3>
</div>

<div class="classe-card" onclick="abrirClasse('mage')">
<img src="img-classes/mage.png" class="classe-icon">
<h3>MAGO</h3>
</div>

<div class="classe-card" onclick="abrirClasse('marksman')">
<img src="img-classes/marksman.png" class="classe-icon">
<h3>ATIRADOR</h3>
</div>

<div class="classe-card" onclick="abrirClasse('support')">
<img src="img-classes/support.png" class="classe-icon">
<h3>SUPORTE</h3>
</div>

`;

document.getElementById("tituloClasses").style.display = "block";
document.getElementById("logoTopo").style.display = "block";

}
