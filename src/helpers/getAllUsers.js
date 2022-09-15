const path = require('path');
const fs = require('fs/promises');

async function getAllUsers(limit) {
   try {
      const file = path.resolve(__dirname, '../database/users.json');
      const users = await fs.readFile(file, { encoding: 'utf-8' });
      const parsed = JSON.parse(users);
      const sliced = limit ? parsed?.slice(0, Number(limit)) : parsed;
      return sliced;
   } catch (error) {
      return [];
   }
}

module.exports = getAllUsers;
