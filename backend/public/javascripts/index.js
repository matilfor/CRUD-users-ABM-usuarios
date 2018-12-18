const $tableUsers = $("#table-users");
const users = [
  {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    telefono: "1234567890",
    email: "contacto@gmail.com"
  },
  {
    id: 2,
    nombre: "Grace",
    apellido: "Hopper",
    telefono: "087654321",
    email: "contacto@hotmail.com"
  }
];

function buildTableUsers() {
    for (let i = 0; i < users.length; i++) {
      $tableUsers.append(`
          <tr data-id=${users[i].id}>
              <td>${users[i].nombre}</td>
              <td>${users[i].apellido}</td>
              <td>${users[i].telefono}</td>
              <td>${users[i].email}</td>
              <td><button class="btn" id="put"><a href="put.html?id=${
                users[i].id
              }">Editar</a></button></td>
              <td><button class="btn" id="borrar">Borrar</button></td>
          </tr>
      `);
    }
  }
  
  buildTableUsers();