const removeOneUser = require('../../../helpers/removeOneUser');

async function deleteOneUser(req, res) {
   const { error, data } = await removeOneUser(req?.body);
   if (error) {
      return res.status(error?.status).send(error);
   }
   res.send(data);
}

module.exports = deleteOneUser;
