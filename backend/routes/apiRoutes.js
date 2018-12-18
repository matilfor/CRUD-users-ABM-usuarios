const express = require('express')
const router = express.Router();
const path = require('path');
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

router.get("/users", function(req, res){
    res.json(users);
});

module.exports = router;