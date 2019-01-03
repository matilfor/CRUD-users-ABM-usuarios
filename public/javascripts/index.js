const $tableUsers = $("#table-users");
$.ajax("/api/users").done(function(data){
  buildTableUsers(data);
});

function buildTableUsers(users) {
    for (let i = 0; i < users.length; i++) {
      $tableUsers.append(`
          <tr class= "fila-user" data-id=${users[i].id}>
              <td>${users[i].nombre}</td>
              <td>${users[i].apellido}</td>
              <td>${users[i].telefono}</td>
              <td>${users[i].email}</td>
              <td><button class="btn edit">Editar</button></td>
              <td><button class="btn delete">Borrar</button></td>
          </tr>
      `);
    }
  };

  $(document).on("click", ".btn.delete", function() {
    const that = $(this);
    const id = that
      .parent()
      .parent()
      .data("id");
    $.ajax(`/api/users/${id}`, { 
      method: "delete" 
    })
    .done(function(){
      that.parent().parent().remove();
    })
    .fail(function(){
      alert('algo explotó');
    });
  });

  $(document).on("click", ".btn.edit", function(){
    const id = $(this)
    .parent()
    .parent()
    .data("id");
    location.href = `/users/edit?id=${id}`;
  });

  $('#filter-form button').click(function(){
    const search = $('#filter-form input').val();
    $.ajax('/api/users?search=' + search)
      .done(function(data){
        $('table tr.fila-user').remove();
        buildTableUsers(data);
      })
  });