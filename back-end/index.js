const express = require("express");
const sequelize = require('./database');
const User = require("./user");


sequelize.sync( {force: true}).then(() => console.log('db está pronto'));

const app = express();

app.use(express.json());

app.post('/users', async (req, res) =>{
  await User.create(req.body);
  res.send('lista está inserida');
})

app.get('/users', async (req, res) => {
 const users = await User.findAll();
     res.send(users);
  })

app.get('/users/id', async(req, res) =>{
  const requestedId = req.params.id;
  const user = await User.findOne({where: { id: requestedId}})
  res.send(user);
})

app.put('/users/:id', async (req, res) =>{
  const requestedId = req.params.id;
  const user = await User.findOne({where: { id: requestedId}});
  user.document = req.body.document;
  await user.save();
  res.send('update');
})

app.delete('/users/:id', async (req, res) =>{
  const requestedId = req.params.id;
  await User.destroy({ where: { id: requestedId}});
  res.send('removido');
})

app.listen(3000, () => {
  console.log("servidor rodando");
});
