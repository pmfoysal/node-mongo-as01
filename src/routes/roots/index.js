const useGet = require('./get');
const api = require('express').Router();

function roots(port) {
   api.use('/', [useGet(port)]);
   return api;
}

module.exports = roots;
