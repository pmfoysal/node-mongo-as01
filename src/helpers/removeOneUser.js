const path = require('path');
const fs = require('fs/promises');
const getAllUsers = require('./getAllUsers');

async function removeOneUser(data) {
   const valid = data?.hasOwnProperty('id');
   if (!valid) {
      return {
         error: {
            status: 406,
            type: 'ID Not Provided!',
            message: 'The required id is missing in the requested body.',
         },
         data: {},
      };
   }
   const users = await getAllUsers();
   const current = users?.find(item => item?.id === Number(data?.id));
   if (!current) {
      return {
         error: {
            status: 404,
            type: 'ID Not Matched!',
            message: 'The following data id is not found in the database.',
         },
         data: {},
      };
   }
   const remains = users?.filter(item => item?.id !== Number(data?.id));
   return {
      error: null,
      data: await editToDB(current, remains),
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

module.exports = removeOneUser;
