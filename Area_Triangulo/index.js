function areaTriangulo() {
    let base = parseInt(document.getElementById("base").value);
    let altura = parseInt(document.getElementById("altura").value);
    if (base <= 0 || altura <=0) {
        document.getElementById("respuesta").textContent = `Has ingresado valores invalidos`;
    }
    else {
        let area = (base * altura) / 2;
        document.getElementById("respuesta").textContent = `Area = ${area}u²`;
    }

}