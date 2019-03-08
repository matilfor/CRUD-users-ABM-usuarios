/* Retrieve the id param from the url. The id is a unique number that identifies each user 
stored in the users array */
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
/* Save the html input nodes in a const variable so it can be accessed easily in the code with JQuery */
const $name = $('input[name="name"]');
const $lastName = $('input[name="lastName"]');
const $phone = $('input[name="phone"]');
const $email = $('input[name="email"]');
/* Ask the server for the information of an specific user identified by its id number */
$.ajax(`/api/users/${id}`).done(function(user){
    $name.val(user.name);
    $lastName.val(user.lastName);
    $phone.val(user.phone);
    $email.val(user.email);
});
/* Edit function that executes when the edit button is clicked */
$('#btn-edit').click(function(){
    const editedUser = {
        name : $name.val(),
        lastName : $lastName.val(),
        phone : $phone.val(),
        email : $email.val()
    }
    $.ajax(`http://localhost:3000/api/users/${id}`, {
      method: 'PUT', /* Send the edited user info to the server */
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