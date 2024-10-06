let valorIngresado1 = document.getElementById("numero1");
let valorIngresado2 = document.getElementById("numero2");
let valorIngresado3 = document.getElementById("numero3");


function esMayorIntermedioMenor() {

    document.getElementById("numeroMayor").textContent = '';
    document.getElementById("numeroIntermedio").textContent = '';
    document.getElementById("numeroMenor").textContent = '';
    document.getElementById("dosIguales").textContent = '';
    document.getElementById("numeroDiferente").textContent = '' ;
    document.getElementById("numerosIguales").textContent = '';

    let num1 = parseInt(valorIngresado1.value);
    let num2 = parseInt(valorIngresado2.value);
    let num3 = parseInt(valorIngresado3.value);

    if (num1 > num2 && num2 > num3) {
        document.getElementById("numeroMayor").textContent = `Numero mayor: ${num1}`;
        document.getElementById("numeroIntermedio").textContent = `Numero intermedio: ${num2}`;
        document.getElementById("numeroMenor").textContent = `Numero menor: ${num2}`;
    } else if (num1 > num3 && num3 > num2) {
        document.getElementById("numeroMayor").textContent = `Numero mayor: ${num1}`;
        document.getElementById("numeroIntermedio").textContent = `Numero intermedio: ${num3}`;
        document.getElementById("numeroMenor").textContent = `Numero menor: ${num2}`;
    } else if (num2 > num1 && num1 > num3) {
        document.getElementById("numeroMayor").textContent = `Numero mayor: ${num2}`;
        document.getElementById("numeroIntermedio").textContent = `Numero intermedio: ${num1}`;
        document.getElementById("numeroMenor").textContent = `Numero menor: ${num3}`;
    } else if (num2 > num3 && num3 > num1) {
        document.getElementById("numeroMayor").textContent = `Numero mayor: ${num2}`;
        document.getElementById("numeroIntermedio").textContent = `Numero intermedio: ${num3}`;
        document.getElementById("numeroMenor").textContent = `Numero menor: ${num1}`;
    } else if (num3 > num1 && num1 > num2) {
        document.getElementById("numeroMayor").textContent = `Numero mayor: ${num3}`;
        document.getElementById("numeroIntermedio").textContent = `Numero intermedio: ${num1}`;
        document.getElementById("numeroMenor").textContent = `Numero menor: ${num2}`;
    } else if (num3 > num2 && num2 > num1) {
        document.getElementById("numeroMayor").textContent = `Numero mayor: ${num3}`;
        document.getElementById("numeroIntermedio").textContent = `Numero intermedio: ${num2}`;
        document.getElementById("numeroMenor").textContent = `Numero menor: ${num1}`;
    } else if (num1 == num2 && num1 != num3) {
        document.getElementById("dosIguales").textContent = `Hay dos numeros iguales: ${num1} = ${num2}`;
        document.getElementById("numeroDiferente").textContent = `Numero diferente: ${num3}`;
    } else if (num1 == num3 && num1 != num2) {
        document.getElementById("dosIguales").textContent = `Hay dos numeros iguales: ${num1} = ${num3}`;
        document.getElementById("numeroDiferente").textContent = `Numero diferente: ${num2}`;
    } else if (num2 == num3 && num2 != num1) {
        document.getElementById("dosIguales").textContent = `Hay dos numeros iguales: ${num2} = ${num3}`;
        document.getElementById("numeroDiferente").textContent = `Numero diferente: ${num1}`;
    } else {
        document.getElementById("numerosIguales").textContent = `Los tres numeros son iguales: ${num1} = ${num2} = ${num3}`
    }

}