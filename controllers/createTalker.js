const fs = require('fs/promises');

module.exports = async (req, res, _next) => {
  const { name, age, talk } = req.body;
  const read = await fs.readFile('talker.json', 'utf8');
  const data = await JSON.parse(read);

  const lastId = data[data.length - 1].id;

  const newData = { 
    id: lastId + 1,
    name,
    age,
    talk,
  };
  // data.push(newData);
  await fs.writeFile('talker.json', JSON.stringify([...data, newData]));
  res.status(201).send(newData);
};
