function obtenerResultado() {
  var palabra = document.getElementById("input-palabra").value;
  var opcion = document.getElementById("select-opciones").value;
  var resultado;

  switch (opcion) {
    case "longitud":
      resultado = palabra.length;
      break;
    case "mayusculas":
      resultado = palabra.toUpperCase();
      break;
    case "minusculas":
      resultado = palabra.toLowerCase();
      break;
    case "primerCaracter":
      resultado = palabra.charAt(0);
      break;
    default:
      resultado = "Opción inválida";
  }

  alert(resultado);
}
