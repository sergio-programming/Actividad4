let numeroAleatorio = Math.floor(Math.random()*100) + 1;

let numero = document.getElementById("numero");

function adivinarNumero() {
    let numeroIngresado = parseInt(numero.value);

    if (numeroIngresado == numeroAleatorio) {
        document.getElementById("respuesta").textContent = `Felicitaciones! Has adivinado el numero. El numero es ${numeroAleatorio}`;
    }
    else if ((numeroAleatorio - 5) <= numeroIngresado && numeroIngresado <= (numeroAleatorio + 5) && numeroIngresado != numeroAleatorio) {
        document.getElementById("respuesta").textContent = `Estas muy cerca de adivinar el número`;
    }
    else if ((numeroAleatorio - 10) <= numeroIngresado && numeroIngresado <= (numeroAleatorio + 10) && numeroIngresado != numeroAleatorio) {
        document.getElementById("respuesta").textContent = `Estas cerca de adivinar el número`;
    } else if ((numeroAleatorio - 20) <= numeroIngresado && numeroIngresado <= (numeroAleatorio +20) && numeroIngresado != numeroAleatorio) {
        document.getElementById("respuesta").textContent = `Estas lejos de adivinar el número`;
    }
    else {
        document.getElementById("respuesta").textContent = `Estas muy lejos de adivinar el número`;
    }    

}