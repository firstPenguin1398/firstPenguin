const express = require('express');
const app = express();
const { Op, models } = require('./mysequelize');
const dbConfig = require('./config/config.json').development;
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, dbConfig);

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
}
catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/', (req, res) => {
	res.send('Hello!');
});

app.put('/api', async(req, res) => {
  console.log("Get Attendence Data");
  console.log(req.body.selectedDate);
  console.log(req.body.thisSemester);
  /*models.member.findAll()
  .then((member) => {
    // console.log(member);
    // console.log(typeof(member));
	  return res.send(member);
  })
  .catch((err) => {
    console.log(err);
  });
  */
  const [results, metadata] = await sequelize.query(`SELECT Member.id, Member.student_id, Member.name,
  CASE WHEN Attendence.date = '${req.body.selectedDate}' THEN 'Present' ELSE 'Absent' END as attendance_status
  FROM Member
  LEFT JOIN Attendence
  on (Member.student_id = Attendence.student_id)
  where (Member.semester LIKE '%${req.body.thisSemester}%');
  `);
  console.log(results);
  return res.json(results);
});


// 3000 포트로 서버 오픈
app.listen(8080, function() {
    console.log("Express server on port 8080, visit http://localhost:8080");
});