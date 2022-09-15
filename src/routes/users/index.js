const useGet = require('./get');
const users = require('express').Router();

users.use('/', [useGet]);

module.exports = users;
