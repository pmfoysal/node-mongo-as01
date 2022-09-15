const addUser = require('./addUser');
const users = require('express').Router();

users.post('/save', addUser);

module.exports = users;
