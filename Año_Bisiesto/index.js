let valorIngresado = document.getElementById("year");
let respuesta = document.getElementById("respuesta")

function esBisiesto() {
    let year = parseInt(valorIngresado.value);
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        respuesta.textContent = `El año ${year} es bisiesto`;
    }
    else if (isNaN(year)) {
        respuesta.textContent = `Debes ingresar un año valido`;
    }
    else{
        respuesta.textContent = `El año ${year} no es bisiesto`;
    }
}