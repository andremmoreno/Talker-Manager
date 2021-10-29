const fs = require('fs/promises');

module.exports = async (req, res, _next) => {
  const { q } = req.query;
  const read = await fs.readFile('talker.json', 'utf8');
  const data = JSON.parse(read);
  
  const filted = data.filter((each) => each.name.toLowerCase().includes(q.toLowerCase()));

  res.status(200).send(filted);
};
