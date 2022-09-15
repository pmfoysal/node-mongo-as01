const getOneUser = require('./getOneUser');
const getAllUsers = require('./getAllUsers');

async function getRandomUser() {
   const users = await getAllUsers();
   const allIds = users?.map(item => item?.id);
   const minmax = [Math.min(...allIds), Math.max(...allIds)];
   const id = Math.floor(Math.random() * minmax[1]) + minmax[0];
   const user = await getOneUser(id);
   return user;
}

module.exports = getRandomUser;
