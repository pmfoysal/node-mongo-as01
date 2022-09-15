const path = require('path');
const fs = require('fs/promises');

async function getAllUsers() {
   try {
      const file = path.resolve(__dirname, '../database/users.json');
      const users = await fs.readFile(file, { encoding: 'utf-8' });
      return JSON.parse(users);
   } catch (error) {
      return [];
   }
}

module.exports = getAllUsers;
