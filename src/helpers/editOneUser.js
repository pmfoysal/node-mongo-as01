const path = require('path');
const fs = require('fs/promises');
const getAllUsers = require('./getAllUsers');

async function editOneUser(data) {
   const id = Number(data?.id);
   const users = await getAllUsers();
   const current = users?.find(item => item?.id === id);
   const index = users?.findIndex(item => item?.id === id);
   if (!current) {
      return {
         error: true,
         data: null,
      };
   }
   const edited = { ...current, ...data };
   users[index] = edited;
   return {
      error: null,
      data: await editToDB(edited, users),
   };
}

async function editToDB(edited, data) {
   try {
      const file = path.resolve(__dirname, '../database/users.json');
      await fs.writeFile(file, JSON.stringify(data, null, 3));
      return edited;
   } catch (error) {
      return {
         message: 'User cannot be updated at this moment!',
      };
   }
}

module.exports = editOneUser;
