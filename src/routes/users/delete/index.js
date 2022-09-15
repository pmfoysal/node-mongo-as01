const users = require('express').Router();
const deleteOneUser = require('./deleteOneUser');

users.delete('/delete', deleteOneUser);

module.exports = users;
