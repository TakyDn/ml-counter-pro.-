/* ===== NAVEGAÇÃO ===== */

function irInicio(){

document.getElementById("telaHerois").classList.add("oculto");

document.getElementById("telaDetalhe").classList.add("oculto");

document.getElementById("telaInicial").classList.remove("oculto");

fecharMenu();

}

function abrirHerois(){

document.getElementById("telaInicial").classList.add("oculto");

document.getElementById("telaDetalhe").classList.add("oculto");

document.getElementById("telaHerois").classList.remove("oculto");

fecharMenu();

}
