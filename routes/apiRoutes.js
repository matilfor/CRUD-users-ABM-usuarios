const express = require('express')
const router = express.Router();
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
    },
    {
        id: 3,
        nombre: "Juana",
        apellido: "Molina",
        telefono: "585858585",
        email: "contacto@gmail.com"
      },
  ];

let contador = 4;

router.get("/users", function(req, res){
    const search = req.query.search;
    if (search && search.length > 0){
        let usersFiltrados = [];
        for(let i = 0; i<users.length; i++){
            //falta for
        }
        return res.json(usersFiltrados);
    }
    res.json(users);
});

router.delete("/users/:id", function(req, res){
    const userId = parseInt(req.params.id); //convierto el id que es string a un numero entero
    users.splice(users.findIndex(user => user.id == userId), 1)
    res.json(users);
});

router.get("/users/:id", function(req, res){
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    res.json(user);
});

router.post("/users", function(req, res){
    const newUser = req.body;
    if (newUser.nombre.length > 30) {
        return res.status(400).end('la pifiaste');
    };
    newUser.id = contador++;
    users.push(newUser);
    res.json(newUser);
});

router.put("/users/:id", function(req, res){
    const idUser = parseInt(req.params.id)
    const editedUser = users.find(u => u.id === idUser)
    editedUser.nombre = req.body.nombre || editedUser.nombre;
    editedUser.apellido = req.body.apellido || editedUser.apellido;
    editedUser.email = req.body.email || editedUser.email;
    editedUser.telefono = req.body.telefono || editedUser.telefono;
    res.json(editedUser)
})
module.exports = router;