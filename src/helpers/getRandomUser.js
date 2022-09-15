const getOneUser = require('./getOneUser');
const getAllUsers = require('./getAllUsers');

async function getRandomUser() {
   const users = await getAllUsers();
   const ids = users?.map(item => item?.id);
   const [min, max] = [Math.min(...ids), Math.max(...ids)];
   const id = Math.floor(Math.random() * (max - min + 1)) + min;
   const user = await getOneUser(id);
   return user;
}

module.exports = getRandomUser;
