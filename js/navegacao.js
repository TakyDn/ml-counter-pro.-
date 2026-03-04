function irInicio(){

const inicio = document.getElementById("telaInicial");
const herois = document.getElementById("telaHerois");

inicio.classList.remove("oculto");
herois.classList.add("oculto");

}

function abrirHerois(){

const inicio = document.getElementById("telaInicial");
const herois = document.getElementById("telaHerois");

inicio.classList.add("oculto");
herois.classList.remove("oculto");

}
