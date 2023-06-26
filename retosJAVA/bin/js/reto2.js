function mostrarAlerta(evento) {
    alert('Has activado el evento: ' + evento);
  }
  
  function handleClick() {
    mostrarAlerta('click');
  }
  
  function handleMouseOver() {
    mostrarAlerta('mouseover');
  }
  
  function handleKeyDown() {
    mostrarAlerta('keydown');
  }
  
  function handleKeyUp() {
    mostrarAlerta('keyup');
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    mostrarAlerta('submit');
  }
  
  function handleFocus() {
    mostrarAlerta('focus');
  }
  
  function handleBlur() {
    mostrarAlerta('blur');
  }
  
  function handleChange() {
    mostrarAlerta('change');
  }
  
  function handleLoad() {
    mostrarAlerta('load');
  }
  
  function handleResize() {
    mostrarAlerta('resize');
  }
  