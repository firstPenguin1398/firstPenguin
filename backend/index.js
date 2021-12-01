const express = require('express');
const app = express();
const { Op, models } = require('./mysequelize');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('FirstPenguin', 'root', 'ihibiscusyou8!', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
}
catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.get('/', (req, res) => {
	res.send('Hello!');
});

app.get('/api', (req, res) => {
  console.log("getdata");
  models.member.findAll({ where: { generation: 1 }})
  .then((user) => {
    console.log(user);
	  res.send(user);
  })
  .catch((err) => {
    console.log(err);
  });
});


// 3000 포트로 서버 오픈
app.listen(8080, function() {
    console.log("Express server on port 8080, visit http://localhost:8080");
});