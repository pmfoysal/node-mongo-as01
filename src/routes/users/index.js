const useGet = require('./get');
const usePost = require('./post');
const usePatch = require('./patch');
const useDelete = require('./delete');
const users = require('express').Router();

users.use('/', [useGet, usePost, usePatch, useDelete]);

module.exports = users;
