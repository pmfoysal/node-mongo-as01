const roots = require('./roots');
const routes = require('express')();

function useRoutes(port) {
   routes.use('/', roots(port));
   return routes;
}

module.exports = useRoutes;
