
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        input.value = '';
        actualizarLista();
    } else {
        alert('Por favor, ingrese un nombre.');
    }
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesita al menos dos amigos para sortear.');
        return;
    }

    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSecreto);
}

function mostrarResultado(amigoSecreto) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
}