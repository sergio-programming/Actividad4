function statusVoto() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    if (edad >= 18) {
        document.getElementById("respuesta").textContent = `Estimado usuari@ ${nombre}, usted se encuentra apt@ para votar`;
    }
    else {
        document.getElementById("respuesta").textContent = `Estimado usuari@ ${nombre}, usted no se encuentra apt@ para votar`;
    }
}