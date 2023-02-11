let users = require('../models/users.model');
const {v4: uuidv4} = require('uuid');


//get users
const getAllUsers = (req, res) => {
    res.status(200).json({users})
};

//create users
const createUser = (req, res) => {
    const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email
    };
    users.push(newUser);
    res.status(200).json(users);
};

//update user
const updateUser = (req, res) => {
    const userid = req.params.id;
    const { username, email } = req.body;
    users.filter((user) => user.id === userid).map((selectedUser) => {
        selectedUser.username = username;
        selectedUser.email = email;
    })
    res.status(200).json(users);
};

//delete user
const deleteUser = (req, res) => {
   const userid = req.params.id;
   users = users.filter((user) => user.id !== userid)
    res.status(200).json(users);
};



module.exports = {getAllUsers, createUser, updateUser, deleteUser};