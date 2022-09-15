const getAllUsers = require('../../../helpers/getAllUsers');

async function allUser(req, res) {
   const users = await getAllUsers();
   res.send(users);
}

module.exports = allUser;
