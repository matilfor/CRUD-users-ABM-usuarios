$('form button').click(function () {
    const name = $('input[name="name"]').val();
    const lastName = $('input[name="lastname"]').val();
    const phone = $('input[name="phone"]').val();
    const email = $('input[name="email"]').val();
  
    const phoneValidation = /^\d+$/;
    const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (phoneValidation.test(phone) === false) {
      alert('Phone format must be numbers only');
      return;
    }
  
    if (emailValidation.test(email) === false) {
      alert('Wrong email format');
      return;
    }
  
    let newUser = {
      name: name,
      lastName: lastName,
      email: email,
      phone: phone
    };
  
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