const roots = require('./roots');
const users = require('./users');
const routes = require('express')();

function useRoutes(port) {
   routes.use('/', roots(port));
   routes.use('/user', users);
   return routes;
}

module.exports = useRoutes;
