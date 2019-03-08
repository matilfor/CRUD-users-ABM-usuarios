/* Save the html table node in a const variable so it can be accessed easily in the code with JQuery */
const $tableUsers = $("#table-users");
/* Create a table that shows the users' info and send it to the server with ajax */
$.ajax("/api/users").done(function(data){
  buildTableUsers(data);
});
/* This function creates the table */
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
/* This function deletes an user by clicking on the delete button */
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
      that.parent().parent().remove(); /* If everything it's ok, it deletes the deleted user's row from the table */
    })
    .fail(function(){
      alert('Something went wrong'); /* If something is wrong, it shows an error message */
    });
  });
/* This function edits an user by clicking on the edit button */
  $(document).on("click", ".btn.edit", function(){
    const id = $(this)
    .parent()
    .parent()
    .data("id");
    location.href = `/users/edit?id=${id}`;
  });
/* This function searchs for an user by clicking on the filter button */
  $('#filter-form button').click(function(){
    const search = $('#filter-form input').val();
    $.ajax('/api/users?search=' + search)
      .done(function(data){
        $('.user-row').remove(); /* This method removes all rows that doesn't match the search query */
        /* Shows the new table with only the searched user or users */
        buildTableUsers(data);
      })
  });