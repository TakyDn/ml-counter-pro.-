function irInicio(){

const inicio = document.getElementById("telaInicial");
const herois = document.getElementById("telaHerois");

inicio.classList.remove("oculto");
herois.classList.add("oculto");

fecharMenu();
  
}

function abrirHerois(){

document.getElementById("telaInicial").classList.add("oculto");
document.getElementById("telaHerois").classList.remove("oculto");

fecharMenu();

}
