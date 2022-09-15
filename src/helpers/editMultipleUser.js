const path = require('path');
const fs = require('fs/promises');
const getAllUsers = require('./getAllUsers');

async function editMultipleUser(data) {
   const valids = {};
   const invalids = [];
   const users = await getAllUsers();

   data?.forEach(item => {
      const index = users?.findIndex(user => user?.id === Number(item?.id));
      if (index !== -1) {
         valids[index] = { ...users[index], ...item };
         users[index] = valids[index];
      } else invalids.push(item);
   });

   if (invalids.length) {
      return {
         valid: false,
         error: {
            type: 'ID Not Matched!',
            message: 'The following data ids not found in the database.',
            data: invalids,
         },
         data: [],
      };
   }
   return {
      valid: true,
      error: null,
      data: await editToDB(Object.values(valids), users),
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

module.exports = editMultipleUser;
