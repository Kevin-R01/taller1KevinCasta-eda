let currentShape = "";

    function showModal(shape) {
      currentShape = shape;
      document.getElementById('modal').style.display = "block";
      document.getElementById('modal-title').textContent = `Calcular ${shape}`;
      document.getElementById('modal-form').reset();
      document.getElementById('result').textContent = "";
    }

    function closeModal() {
      document.getElementById('modal').style.display = "none";
    }

    function calculate() {
      const input1 = parseFloat(document.getElementById('input1').value);
      const input2 = parseFloat(document.getElementById('input2').value);
      let result = "";

      switch (currentShape) {
        case 'circle':
          if (input1 <= 0) {
            result = "El radio debe ser mayor que cero.";
          } else {
            if (document.getElementById('modal-form').elements[0].checked) {
              result = `El perímetro del círculo es: ${2 * Math.PI * input1}`;
            } else {
              result = `El área del círculo es: ${Math.PI * input1 * input1}`;
            }
          }
          break;
        case 'triangle':
          if (input1 <= 0 || input2 <= 0) {
            result = "La base y la altura deben ser mayores que cero.";
          } else {
            if (document.getElementById('modal-form').elements[0].checked) {
              result = `El perímetro del triángulo es: ${input1 + input2 + Math.sqrt((input1 * input1) + (input2 * input2))}`;
            } else {
              result = `El área del triángulo es: ${(input1 * input2) / 2}`;
            }
          }
          break;
        case 'rectangle':
          if (input1 <= 0 || input2 <= 0) {
            result = "La longitud y el ancho deben ser mayores que cero.";
          } else {
            if (document.getElementById('modal-form').elements[0].checked) {
              result = `El perímetro del rectángulo es: ${2 * (input1 + input2)}`;
            } else {
              result = `El área del rectángulo es: ${input1 * input2}`;
            }
          }
          break;
        case 'square':
          if (input1 <= 0) {
            result = "El lado debe ser mayor que cero.";
          } else {
            if (document.getElementById('modal-form').elements[0].checked) {
              result = `El perímetro del cuadrado es: ${4 * input1}`;
            } else {
              result = `El área del cuadrado es: ${input1 * input1}`;
            }
          }
          break;
      }

      document.getElementById('result').textContent = result;
    }