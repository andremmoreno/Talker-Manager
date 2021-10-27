const fs = require('fs/promises');

module.exports = async (req, res, _next) => {
  const data = await fs.readFile('talker.json');
  const talkers = JSON.parse(data);
  res.status(200).send(talkers);
};
