const allUser = require('./allUser');
const oneUser = require('./oneUser');
const users = require('express').Router();

users.get('/all', allUser);
users.get('/:id', oneUser);
// useGet.use(allUser);
// useGet.use(randomUser);

module.exports = users;
