const useGet = require('./get');
const usePost = require('./post');
const usePatch = require('./patch');
const users = require('express').Router();

users.use('/', [useGet, usePost, usePatch]);

module.exports = users;
