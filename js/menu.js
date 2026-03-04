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
