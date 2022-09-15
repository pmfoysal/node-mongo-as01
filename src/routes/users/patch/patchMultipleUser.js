const isValidIds = require('../../../validations/isValidIds');
const editMultipleUser = require('../../../helpers/editMultipleUser');

async function patchMultipleUser(req, res) {
   const { valid, type, message, errorData } = isValidIds(req?.body);
   if (!valid) {
      const temp = { status: 406, type, message, data: errorData };
      return res.status(temp.status).send(temp);
   }
   const { error, data } = await editMultipleUser(req?.body);
   if (error) {
      const temp = { status: 404, ...error };
      return res.status(temp.status).send(temp);
   }
   res.send(data);
}

module.exports = patchMultipleUser;
