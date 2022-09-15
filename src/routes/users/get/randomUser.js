const getRandomUser = require('../../../helpers/getRandomUser');

async function randomUser(req, res) {
   const user = await getRandomUser();
   res.send(user);
}

module.exports = randomUser;
