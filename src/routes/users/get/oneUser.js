const getOneUser = require('../../../helpers/getOneUser');

async function oneUser(req, res) {
   const user = await getOneUser(req?.params?.id);
   res.send(user);
}

module.exports = oneUser;
