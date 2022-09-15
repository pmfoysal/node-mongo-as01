const getAllUsers = require('../../../helpers/getAllUsers');

async function allUser(req, res) {
   const users = await getAllUsers(req?.query?.limit);
   res.send(users);
}

module.exports = allUser;
