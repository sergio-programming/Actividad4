let valorIngresado = document.getElementById("celsius");

function celsius_a_fahrenheit() {
    let gradosCelsius = parseInt(valorIngresado.value);
    let gradosFahrenheit = (gradosCelsius * 9/5) + 32;
    document.getElementById("respuesta").textContent = `${gradosCelsius}°C = ${gradosFahrenheit}°F`;
}