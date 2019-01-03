const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const $nombre = $('input[name="nombre"]');
const $apellido = $('input[name="apellido"]');
const $telefono = $('input[name="telefono"]');
const $email = $('input[name="email"]');

$.ajax(`/api/users/${id}`).done(function(user){
    $nombre.val(user.nombre);
    $apellido.val(user.apellido);
    $telefono.val(user.telefono);
    $email.val(user.email);
});

$('#btn-edit').click(function(){
    const editedUser = {
        nombre : $nombre.val(),
        apellido : $apellido.val(),
        telefono : $telefono.val(),
        email : $email.val()
    }
    $.ajax(`http://localhost:3000/api/users/${id}`, {
      method: 'PUT',
      data: editedUser,
    })
    .done(function(){
        alert('usuario editado');
        location.href= '/users';
    })
    .fail(function(){
        alert('algo explotó');
      });
})