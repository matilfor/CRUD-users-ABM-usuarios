
function goBack() {
  window.history.back();
}

/* This function adds a new user by clicking on the button with the 'form button' class */
$('form button').click(function () {
  /* Save the data typed in the inputs in a const variable */
    const name = $('input[name="name"]').val();
    const lastName = $('input[name="lastname"]').val();
    const phone = $('input[name="phone"]').val();
    const email = $('input[name="email"]').val();
  /* These are regexp that validate what it's typed in both the phone and email inputs */
    const phoneValidation = /^\d+$/;
    const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (phoneValidation.test(phone) === false) {
      alert('Phone format must be numbers only'); /* If what was typed doesn't match a phone format, it shows an error message */
      return;
    }
  
    if (emailValidation.test(email) === false) {
      alert('Wrong email format'); /* Same thing for the email error message */
      return;
    }
  /* Store the new user info in an object */
    let newUser = {
      name: name,
      lastName: lastName,
      email: email,
      phone: phone
    };
  /* Send that new user info to the server */
    $.ajax('http://localhost:3000/api/users', {
      method: 'POST',
      data: newUser
    })
    .done(function () {
      alert('User created');
      location.href = '/users';
    })
    .fail(function (err) {
      alert('ERROR');
      console.log('Error: ', err);
    })
  });