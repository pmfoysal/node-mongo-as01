const users = require('express').Router();
const patchOneUser = require('./patchOneUser');
const patchMultipleUser = require('./patchMultipleUser');

users.patch('/update', patchOneUser);
users.patch('/bulk-update', patchMultipleUser);

module.exports = users;
