document.addEventListener('DOMContentLoaded', function() {
    // Manipulación del formulario
    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Evita que se envíe el formulario automáticamente
  
      // Obtener los valores ingresados por el usuario
      var emailInput = document.getElementById('email');
      var mensajeInput = document.getElementById('mensaje');
      var email = emailInput.value;
      var mensaje = mensajeInput.value;
  
      // Validación básica
      if (email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
      }
  
      // Aquí puedes agregar tu lógica para enviar el correo o procesar el mensaje
  
      // Ejemplo de muestra
      alert('¡Mensaje enviado correctamente!');
      emailInput.value = '';
      mensajeInput.value = '';
    });
  });  