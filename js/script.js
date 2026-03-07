/* ===== LOGO ===== */

function tocarSomLogo(){

const som = document.getElementById("logoSound");

som.currentTime = 0;

som.play();

}


/* ===== BLOQUEIO CLICK DIREITO ===== */

document.addEventListener("contextmenu",function(e){

e.preventDefault();

});


function filtrarHerois(){

let input = document.getElementById("pesquisaHeroi").value.toLowerCase();

let herois = document.querySelectorAll(".heroi-card");

herois.forEach(card => {

let nome = card.innerText.toLowerCase();

if(nome.includes(input)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

}


function voltarClasses(){

document.getElementById("tituloClasses").style.display = "block";

document.getElementById("areaCards").style.display = "flex";

document.getElementById("telaFighters").classList.add("oculto");

document.getElementById("logoTopo").style.display = "block";

}
