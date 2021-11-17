let express = require('express');

// express 는 함수이므로, 반환값을 변수에 저장한다.
let app = express();

app.get('/', (req, res) => {
	res.send('Hello!');
});

// 3000 포트로 서버 오픈
app.listen(8080, function() {
    console.log("start! express server on port 8080")
});