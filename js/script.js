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
