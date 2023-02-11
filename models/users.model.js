const { v4: uuidv4 } = require('uuid');
const users = [
    {
        id: uuidv4(),
        username : "shahinur rahman",
        email : "srshahin111@gmail.com",

    },
    {
        id: uuidv4(),
        username : "humaira asima",
        email : "humairaasima101@gmail.com",
    },
];

module.exports = users;