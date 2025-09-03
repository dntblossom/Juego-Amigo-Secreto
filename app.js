let amigos = [];
asignarTextoElemento('h2','Digite el nombre de sus amigos');

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    asignarTextoElemento('#resultado','');

    if (nombre == '' || nombre == ' '){
        asignarTextoElemento('h2','Por favor, inserte un nombre.');
    } else {
        amigos.push(nombre);
        limpiarCaja();
        listaAmigos();
    }
}

function sortearAmigo() {
    let ganador = document.querySelector('#resultado');
    ganador.innerHTML = "El amigo secreto sorteado es: " + "<li>" + amigos[(parseInt(Math.random()*amigos.length+1))-1] + "</li>";
    asignarTextoElemento('#listaAmigos','');
    amigos = [];
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function listaAmigos() {
    let amigo = document.getElementById('listaAmigos');
    amigo.innerHTML = "";

    for (i=0; i<amigos.length; i++){
        amigo.innerHTML = amigo.innerHTML + "<li>" + amigos[i] + "</li>";
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}