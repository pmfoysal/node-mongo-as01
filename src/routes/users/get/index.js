const allUser = require('./allUser');
const users = require('express').Router();

users.get('/all', allUser);
// useGet.use(allUser);
// useGet.use(randomUser);

module.exports = users;
