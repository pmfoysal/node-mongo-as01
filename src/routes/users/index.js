const useGet = require('./get');
const usePost = require('./post');
const users = require('express').Router();

users.use('/', [useGet, usePost]);

module.exports = users;
