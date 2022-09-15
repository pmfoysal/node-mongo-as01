const getAllUsers = require('./getAllUsers');

async function getOneUser(id) {
   const users = await getAllUsers();
   return users?.find(item => item?.id === Number(id)) || {};
}

module.exports = getOneUser;
