const roots = require('express').Router();

function useGet(port) {
   roots.get('/', (req, res, nex) => {
      res.send({ status: 200, port, message: 'Node-Mongo-As01 Server is Running...' });
      nex();
   });
   return roots;
}

module.exports = useGet;
