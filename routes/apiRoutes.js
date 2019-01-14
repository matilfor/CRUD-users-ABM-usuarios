const express = require('express')
const router = express.Router();
const users = [
    {
      id: 1,
      name: "Ada",
      lastName: "Lovelace",
      phone: "1234567890",
      email: "contact@gmail.com"
    },
    {
      id: 2,
      name: "Grace",
      lastName: "Hopper",
      phone: "087654321",
      email: "contact@hotmail.com"
    },
    {
        id: 3,
        name: "Juana",
        lastName: "Molina",
        phone: "585858585",
        email: "contact@gmail.com"
      },
  ];

let counter = 4;

router.get("/users", function(req, res){
    const search = req.query.search;
    if (search && search.length > 0){
        //search = search.toLowerCase();
        let filteredUsers = [];
        for(let i = 0; i<users.length; i++){
            const name = users[i].name.toLowerCase();
            const lastName = users[i].lastName.toLowerCase();
            const phone = users[i].phone.toLowerCase();
            const email = users[i].email.toLowerCase();
            if (name.indexOf(search)>=0 || lastName.indexOf(search)>=0 || phone.indexOf(search)>=0 || email.indexOf(search)>=0){
                filteredUsers.push(users[i]);
            }
        }
        return res.json(filteredUsers);
    }
    return res.json(users);
});

router.delete("/users/:id", function(req, res){
    const userId = parseInt(req.params.id);
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
    if (newUser.name.length > 30) {
        return res.status(400).end('Error');
    };
    newUser.id = counter++;
    users.push(newUser);
    res.json(newUser);
});

router.put("/users/:id", function(req, res){
    const idUser = parseInt(req.params.id)
    const editedUser = users.find(u => u.id === idUser)
    editedUser.name = req.body.name || editedUser.name;
    editedUser.lastName = req.body.lastName || editedUser.lastName;
    editedUser.email = req.body.email || editedUser.email;
    editedUser.phone = req.body.phone || editedUser.phone;
    res.json(editedUser)
})
module.exports = router;