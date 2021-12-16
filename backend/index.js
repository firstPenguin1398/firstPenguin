const express = require('express');
const app = express();
const { Op, models } = require('./mysequelize');
const dbConfig = require('./config/config.json').development;
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, dbConfig);

const mysql = require("mysql");
const PORT = process.env.port || 8080;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1939inin!!",
  database: "firstpenguin",
});

app.get("/", (req, res) => {
  res.send("Hello! hahahahah");
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


app.get("/api/get", (req, res) => {
  const sqlQuery = "SELECT * FROM freeboard;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/api/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sqlQuery = "INSERT INTO members (username,password) VALUES (?,?)";
  db.query(sqlQuery, [username, password], (err, result) => {
    res.send(result);
  });
});

app.post("/api/login", (req, res) => {
  const loginName = req.body.loginName;
  const loginPw = req.body.loginPw;
  const sqlQuery = "SELECT * FROM members WHERE username = ? AND password = ?";
  db.query(sqlQuery, [loginName, loginPw], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong username/password combination!" });
    }
  });
});

app.post("/api/insert", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const date = req.body.date;
  const author = req.body.author;
  const sqlQuery =
    "INSERT INTO freeboard (title, content, date, author) VALUES (?,?,?,?)";
  db.query(sqlQuery, [title, content, date, author], (err, result) => {
    res.send(result);
  });
});

app.post("/api/delete", (req, res) => {
  const id = req.body.id;
  const sqlQuery = "DELETE FROM freeboard WHERE id = ?";
  db.query(sqlQuery, id, (err, result) => {
    res.send(result);
  });
});
//app.post 질문...

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
