    // Obtener referencia a los elementos del formulario
    const registrationForm = document.getElementById('registration-form');
    const tipoDocumentoInput = document.getElementById('tipo-documento');
    const noDocumentoInput = document.getElementById('no-documento');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const fechaNacimientoInput = document.getElementById('fecha-nacimiento');
    const correoInput = document.getElementById('correo');
    const passwordInput = document.getElementById('password');
    const confirmarPasswordInput = document.getElementById('confirmar-password');
    const aceptarTerminosCheckbox = document.getElementById('aceptar-terminos');
  
    // Agregar evento de envío del formulario
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validarFormulario()) {
        alert('Registro exitoso!');
        registrationForm.reset();
      }
    });
  
    // Mostrar los términos de uso en la ventana modal
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.getElementsByClassName('close')[0];
  
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    aceptarTerminosCheckbox.addEventListener('click', function() {
      if (aceptarTerminosCheckbox.checked) {
        modal.style.display = 'block';
      } else {
        modal.style.display = 'none';
      }
    });
  
    // Validar el formulario antes de enviarlo
    function validarFormulario() {
      const tipoDocumento = tipoDocumentoInput.value;
      const noDocumento = noDocumentoInput.value;
      const nombre = nombreInput.value;
      const apellido = apellidoInput.value;
      const fechaNacimiento = new Date(fechaNacimientoInput.value);
      const correo = correoInput.value;
      const password = passwordInput.value;
      const confirmarPassword = confirmarPasswordInput.value;
  
      if (!tipoDocumento || !noDocumento || !nombre || !apellido || !fechaNacimiento || !correo || !password || !confirmarPassword) {
        alert('Todos los campos son obligatorios.');
        return false;
      }
  
      if (noDocumento.length < 5) {
        alert('El número de documento debe tener al menos 5 caracteres.');
        return false;
      }
  
      if (!/^[A-Za-z0-9\s]+$/.test(nombre) || !/^[A-Za-z0-9\s]+$/.test(apellido)) {
        alert('El nombre y el apellido deben ser alfanuméricos.');
        return false;
      }
  
      const anioMinimo = new Date().getFullYear() - 18;
      if (fechaNacimiento.getFullYear() > anioMinimo) {
        alert('Debe tener al menos 18 años para registrarse.');
        return false;
      }
  
      if (!/.+@misena\.edu\.co$/.test(correo)) {
        alert('Ingrese un correo válido con el dominio @misena.edu.co');
        return false;
      }
  
      if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}/.test(password)) {
        alert('La contraseña debe tener al menos 10 caracteres y contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.');
        return false;
      }
  
      if (password !== confirmarPassword) {
        alert('Las contraseñas no coinciden.');
        return false;
      }
  
      if (!aceptarTerminosCheckbox.checked) {
        alert('Debe aceptar los Términos de Uso.');
        return false;
      }
  
      return true;
    }