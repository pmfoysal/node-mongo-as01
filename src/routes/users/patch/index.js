const users = require('express').Router();
const patchOneUser = require('./patchOneUser');

users.patch('/update', patchOneUser);

module.exports = users;
