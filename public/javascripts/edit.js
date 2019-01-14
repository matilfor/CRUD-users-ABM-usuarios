const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const $name = $('input[name="name"]');
const $lastName = $('input[name="lastName"]');
const $phone = $('input[name="phone"]');
const $email = $('input[name="email"]');

$.ajax(`/api/users/${id}`).done(function(user){
    $name.val(user.name);
    $lastName.val(user.lastName);
    $phone.val(user.phone);
    $email.val(user.email);
});

$('#btn-edit').click(function(){
    const editedUser = {
        name : $name.val(),
        lastName : $lastName.val(),
        phone : $phone.val(),
        email : $email.val()
    }
    $.ajax(`http://localhost:3000/api/users/${id}`, {
      method: 'PUT',
      data: editedUser,
    })
    .done(function(){
        alert('User edited');
        location.href= '/users';
    })
    .fail(function(){
        alert('Something went wrong');
      });
})