function determinarTipoTriangulo() {
    var ladoA = parseFloat(document.getElementById('ladoA').value);
    var ladoB = parseFloat(document.getElementById('ladoB').value);
    var ladoC = parseFloat(document.getElementById('ladoC').value);

    if (ladoA === ladoB && ladoB === ladoC) {
        alert("El triángulo es equilátero");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        alert("El triángulo es isósceles");
    } else {
        alert("El triángulo es escaleno");
    }
}