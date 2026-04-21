let titulo = document.getElementById("titulo");
titulo.innerText = "Novo Texto";
titulo.style.color = "azul";

let botao = document.querySelector("button");
botao.onclick = function() {
    alert("Clicou");
};