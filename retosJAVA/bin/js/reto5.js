function verificarSeleccion() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var actividad = document.getElementById("actividad").value;

    // Aquí puedes agregar tu propia lógica para comprobar la selección
    var respuestaCorrecta = (nombre === "Nombre1" && apellido === "Apellido1" && actividad === "Actividad1");

    if (respuestaCorrecta) {
        alert("La respuesta es correcta");
    } else {
        alert("La respuesta es incorrecta");
    }
}