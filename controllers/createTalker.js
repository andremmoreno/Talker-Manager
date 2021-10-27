const fs = require('fs/promises');

module.exports = async (req, res, _next) => {
  const read = await fs.readFile('talker.json');
  const data = JSON.parse(read);
  const { id, name, age, talk } = req.body;
  const newData = {
    id,
    name,
    age,
    talk,
  };
  data.push(newData);
  await fs.writeFile('talker.json', JSON.stringify(data));
  
  res.status(201).send({ message: 'Funciona' });
};
