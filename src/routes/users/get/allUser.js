const path = require('path');
const fs = require('fs/promises');

async function allUser(req, res) {
   try {
      const users = await fs.readFile(path.resolve(__dirname, '../../../database/users.json'), { encoding: 'utf-8' });
      res.send(users);
   } catch (error) {
      res.send([]);
   }
}

module.exports = allUser;
