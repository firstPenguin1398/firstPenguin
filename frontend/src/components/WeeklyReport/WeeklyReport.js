import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Member from "./Member";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Confetti from "react-confetti";

const axios = require("axios");
//흠... 아예 빈 셀에서 출발하는 건 안되는건가..

export default function WeeklyReport() {
  const [members, setMembers] = useState([]);
  const [addFormMembers, setAddFormMembers] = useState({
    name: "",
    class: "",
    team: "",
  });

  useEffect(() => {
    axios
      .get("/api/getReport")
      .then(result => {
        setMembers(result.data);
        console.log(result.data);
      })
      .catch(console.log);
  }, []);

  const handleAddFormChange = event => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormMembers };
    newFormData[fieldName] = fieldValue;
    setAddFormMembers(newFormData);
  };

  const handleAddFormSubmit = event => {
    event.preventDefault();
    const newMember = {
      id: nanoid(),
      name: addFormMembers.name,
      class: addFormMembers.class,
      team: addFormMembers.team,
    };
    const newMembers = [...members, newMembers];
    setMembers(newMembers);
  };

  return (
    <div>
      <h2> 이번주 세션 내용을 정리해주세요</h2>
      <p>
        활동 다음주 월요일 23:59까지 이 보고서를 작성해주세요.
        <br />
        팀별 발표를 통해
        <br />
        1)자신이 새롭게 알게 된 내용 또는 인상 깊게 들은 내용
        <br />
        2)발표 이후 토의에서 나온 이야기 중 인사이트라 할만한 내용 등을 포함
        <br />
        코딩 스터디 또는 공모전, 멘토링 관련하여서도 기록하고 싶은 내용이 있다면
        자유롭게 적어주세요.
      </p>

      <form onSubmit={handleAddFormSubmit}></form>
      <form>
        {/* <input type="text"
          name="name"
          required="required"
          placeholder="이름"
          onChange={handleAddFormChange}
        />

        <input type="text"
          name="team"
          required="required"
          placeholder="소속팀"
          onChange={handleAddFormChange}
        />

        <input type="text"
          name="summary"
          minLength="50"
          placeholder="오늘세션내용"
          onChange={handleAddFormChange}
        /> */}
        <TextField
          id="outlined-basic"
          label="이름"
          variant="outlined"
          style={{ paddingRight: "30px" }}
        />
        <TextField id="outlined-basic" label="소속팀" variant="outlined" />
        <br />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="오늘 세션 내용"
          fullWidth
          multiline
          rows={4}
          style={{ paddingBottom: "30px" }}
          // defaultValue="작성해주세요"
        />
        <Button variant="outlined" fullWidth>
          입력 완료
        </Button>
        <br />
        <br />
      </form>

      <Confetti />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "100px", textAlign: "center" }}>
              이름
            </TableCell>
            <TableCell style={{ width: "50px", textAlign: "center" }}>
              소속팀
            </TableCell>
            <TableCell style={{ textAlign: "center" }}>오늘세션내용</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map(m => {
            return (
              <Member
                key={m.id}
                name={m.name}
                team={m.team}
                content={m.content}
              />
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
