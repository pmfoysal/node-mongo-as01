const allUser = require('./allUser');
const oneUser = require('./oneUser');
const randomUser = require('./randomUser');
const users = require('express').Router();

users.get('/all', allUser);
users.get('/random', randomUser);
users.get('/:id', oneUser);

module.exports = users;
