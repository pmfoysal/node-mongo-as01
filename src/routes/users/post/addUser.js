const setOneUser = require('../../../helpers/setOneUser');

async function addUser(req, res) {
   const { data, error } = await setOneUser(req?.body);
   if (error) return res.status(error?.status).send(error);
   res.send(data);
}

module.exports = addUser;
