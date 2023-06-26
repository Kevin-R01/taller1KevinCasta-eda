function convertirTemperatura() {
    // Obtener los elementos select y el valor de temperatura
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var unidadDesde = document.getElementById("unidadDesde").value;
    var unidadHasta = document.getElementById("unidadHasta").value;

    // Realizar la conversión de temperatura
    var resultado;
    if (unidadDesde === "celsius") {
        if (unidadHasta === "fahrenheit") {
            resultado = temperatura * 9 / 5 + 32;
        } else if (unidadHasta === "kelvin") {
            resultado = temperatura + 273.15;
        } else {
            resultado = temperatura; // La misma unidad, no es necesario convertir
        }
    } else if (unidadDesde === "fahrenheit") {
        if (unidadHasta === "celsius") {
            resultado = (temperatura - 32) * 5 / 9;
        } else if (unidadHasta === "kelvin") {
            resultado = (temperatura - 32) * 5 / 9 + 273.15;
        } else {
            resultado = temperatura; // La misma unidad, no es necesario convertir
        }
    } else if (unidadDesde === "kelvin") {
        if (unidadHasta === "celsius") {
            resultado = temperatura - 273.15;
        } else if (unidadHasta === "fahrenheit") {
            resultado = (temperatura - 273.15) * 9 / 5 + 32;
        } else {
            resultado = temperatura; // La misma unidad, no es necesario convertir
        }
    }

    // Mostrar el resultado en una alerta
    alert("El resultado de la conversión es: " + resultado.toFixed(2));
}