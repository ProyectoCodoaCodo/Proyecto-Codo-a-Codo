/*Contacto*/

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  var firstname = document.getElementById('firstname').value;
  if (firstname.length == 0) {
    alert('No has escrito nada en el nombre');
    return;
  }
  var lastname = document.getElementById('lastname').value;
  if (lastname.length == 0) {
    alert('No has escrito nada en el apellido');
    return;
  }
  var Mail = document.getElementById('Mail').value;
  if (Mail.indexOf("@") == -1 || Mail.length < 6) {
    alert('Por favor ingrese un mail valido');
    return;
  }
  var comentarios = document.getElementById('comentarios').value;
  if (comentarios.length < 20) {
    alert('Por favor ingrese un comentario');
    return;
  }
  this.submit();
}
