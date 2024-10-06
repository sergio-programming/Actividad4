let valorIngresado = document.getElementById("minutos");

function minutos_a_horas() {
    let minutos = parseInt(valorIngresado.value);
    let horas = Math.floor(minutos/60);
    let min = minutos % 60;
    document.getElementById("respuesta").textContent = `${horas} horas y ${min} minutos`
}
