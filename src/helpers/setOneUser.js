const path = require('path');
const fs = require('fs/promises');
const getAllUsers = require('./getAllUsers');
const isValidData = require('../validations/isValidData');

async function setOneUser(data) {
   const response = { error: null, data: null };
   const { valid, missings } = isValidData(data);
   if (!valid) {
      response.error = {
         status: 406,
         type: 'Invalid Data',
         message: `The ${missings} are missings in the requested body.`,
      };
      response.data = null;
   } else {
      response.error = null;
      response.data = await addToDB(data);
   }
   return response;
}

async function addToDB(data) {
   const prevUsers = await getAllUsers();
   const newUser = {
      id: prevUsers?.length + 1,
      gender: data?.gender,
      name: data?.name,
      contact: data?.contact,
      address: data?.address,
      photoUrl: data?.photoUrl,
   };
   const temp = [...prevUsers, newUser];
   try {
      const file = path.resolve(__dirname, '../database/users.json');
      await fs.writeFile(file, JSON.stringify(temp, null, 3));
      return newUser;
   } catch (error) {
      return {
         message: 'User cannot be added at this moment!',
      };
   }
}

module.exports = setOneUser;
