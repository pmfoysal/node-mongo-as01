const editOneUser = require('../../../helpers/editOneUser');
const isValidId = require('../../../validations/isValidId');

async function patchOneUser(req, res) {
   const valid = isValidId(req?.body);
   if (!valid) {
      const temp = { status: 406, type: 'ID Not Provided!', message: 'The required id is missing in the requested body.' };
      return res.status(temp.status).send(temp);
   }
   const { error, data } = await editOneUser(req?.body);
   if (error) {
      const temp = { status: 404, type: 'ID Not Matched!', message: 'The requested id is not found in the database.' };
      return res.status(temp.status).send(temp);
   }
   res.send(data);
}

module.exports = patchOneUser;
