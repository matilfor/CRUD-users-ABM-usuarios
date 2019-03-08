const express = require('express')
const router = express.Router();
/* 'users' is an array type object that stores information in json format. It will store the info that the user adds. */
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
/* This variable is used to store the id number of each user. It initializes in the 4th position of the array
because there are 3 stored objects already */
let counter = 4;
/* This function searchs for users by retrieving the data typed in the filter html input*/
router.get("/users", function(req, res){
    const search = req.query.search;
    if (search && search.length > 0){
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
        /* The filteredUsers array stores the data that was typed in the search input */
        return res.json(filteredUsers);
    }
    /* Returns the list of users (or user) that matches the search query */
    return res.json(users);
});
/* This function allows the deletion of a user from the users array */
router.delete("/users/:id", function(req, res){
    const userId = parseInt(req.params.id);
    /* The splice method adds/removes items to/from an array, and returns the removed item(s). */
    users.splice(users.findIndex(user => user.id == userId), 1)
    res.json(users);
});
/* Retrieve an specific user by its id number */
router.get("/users/:id", function(req, res){
    const userId = parseInt(req.params.id);
    /* Using the find method to search for an specific id */
    const user = users.find(user => user.id === userId);
    res.json(user);
});
/* Add a new user to the users array */
router.post("/users", function(req, res){
    const newUser = req.body;
    if (newUser.name.length > 30) {
      /* The name can't have more than 30 letters */
        return res.status(400).end('Error');
    };
    /* The id of the new user will be the last number of the counter (which matches the last position in the users array) */
    newUser.id = counter++;
    /* The push method adds a new object to an array */
    users.push(newUser);
    /* Receive the new user info in json format */
    res.json(newUser);
});
/* Edit user information */
router.put("/users/:id", function(req, res){
    /* The parseInt function parses a string argument (the id) and returns an integer */
    const idUser = parseInt(req.params.id)
    /* Search the user to edit by its id number with the find method */
    const editedUser = users.find(u => u.id === idUser)
    /* One can choose to edit some or all of the fields. if the info hasn't been edited, it will be stored anyway */
    editedUser.name = req.body.name || editedUser.name;
    editedUser.lastName = req.body.lastName || editedUser.lastName;
    editedUser.email = req.body.email || editedUser.email;
    editedUser.phone = req.body.phone || editedUser.phone;
    /* Receive the edited user info */
    res.json(editedUser)
})
module.exports = router;