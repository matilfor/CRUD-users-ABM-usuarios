const $tableUsers = $("#table-users");

$.ajax("/api/users").done(function(data){
  buildTableUsers(data);
});

function buildTableUsers(users) {
    for (let i = 0; i < users.length; i++) {
      $tableUsers.append(`<tbody>
          <tr scope="row" class="user-row" data-id=${users[i].id}>
              <td>${users[i].name}</td>
              <td>${users[i].lastName}</td>
              <td>${users[i].phone}</td>
              <td>${users[i].email}</td>
              <td><button class="btn edit"><i class="material-icons">
              edit</i></button></td>
              <td><button class="btn delete"><i class="material-icons">
              delete</i></button></td>
          </tr>
        </tbody>`);
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
      alert('Something went wrong');
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
        $('.user-row').remove();
        buildTableUsers(data);
      })
  });