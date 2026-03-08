function abrirClasse(classe){

const area = document.getElementById("areaCards");

document.getElementById("tituloClasses").style.display = "none";

document.getElementById("logoTopo").style.display = "none";

if(classe === "fighter"){

area.innerHTML = `

<h2>SOLDADOS</h2>

<div class="card">
<img src="img-herois-cards/freya-card.jpg">
<h3>Freya</h3>
</div>

<div class="card">
<img src="img-herois-cards/phoveus-card.jpg">
<h3>Phoveus</h3>
</div>

<div class="card">
<img src="img-herois-cards/badang-card.jpg">
<h3>Badang</h3>
</div>

<div class="card">
<img src="img-herois-cards/terizla-card.jpg">
<h3>Terizla</h3>
</div>

<div class="card">
<img src="img-herois-cards/chou-card.jpg">
<h3>Chou</h3>
</div>

<div class="card">
<img src="img-herois-cards/arlott-card.jpg">
<h3>Arlott</h3>
</div>

`;

ordenarHerois();
  
}

}


function voltarClasses(){

const area = document.getElementById("areaCards");

area.innerHTML = `

<div class="classe-card" onclick="abrirClasse('fighter')">
<img src="img-classes/fighter.png" class="classe-icon">
<h3>SOLDADO</h3>
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


function ordenarHerois(){

const area = document.getElementById("areaCards");

const cards = Array.from(area.querySelectorAll(".card"));

cards.sort((a,b)=>{

const nomeA = a.querySelector("h3").innerText.toLowerCase();

const nomeB = b.querySelector("h3").innerText.toLowerCase();

return nomeA.localeCompare(nomeB);

});

area.innerHTML = "";

cards.forEach(card => area.appendChild(card));

}
