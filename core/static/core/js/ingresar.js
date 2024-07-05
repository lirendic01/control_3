$(document).ready(function() {
  // Asignar placeholders para ayudar a los usuarios
  $('#cuenta').attr('placeholder', 'Ej: cgomezv, cevans, sjohasson');
  $('#password').attr('placeholder', 'Ingresa tu contraseña actual');

  // Validación del formulario usando jQuery Validate
  $('#form').validate({
    rules: {
      'cuenta': {
        required: true,
      },
      'password': {
        required: true,
      },
    },
    messages: {
      'cuenta': {
        required: 'Debe ingresar un nombre de usuario',
      },
      'password': {
        required: 'Debe ingresar una contraseña',
      },
    },
    errorPlacement: function(error, element) {
      error.insertAfter(element); // Inserta el mensaje de error después del elemento
      error.addClass('error-message'); // Aplica una clase al mensaje de error
    },
  });

  // Manejar el cambio en el combobox de usuarios
  $('#user-select').change(function() {
    var selectedUsername = $(this).val();
    var password = 'Duoc@123'; // Contraseña por defecto
    var validUsernames = ['cevans', 'eolsen', 'tholland', 'sjohansson', 'cpratt', 'mruffalo', 'super'];

    // Verificar si el usuario seleccionado está en la lista de usuarios válidos
    if (validUsernames.includes(selectedUsername)) {
      password = '123'; // Cambiar la contraseña según sea necesario
    }

    // Asignar valores a los campos cuenta y contraseña
    $('#cuenta').val(selectedUsername);
    $('#password').val(password);

    // Forzar la validación de los campos cuenta y contraseña
    $('#cuenta').valid();
    $('#password').valid();
  });

});
