import { useState, useEffect } from "react";
import "./Freeboard.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import Axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BasicModal from "./Home/BasicModal";
import Button from "@mui/material/Button";

export default function Freeboard() {
  const DateCal = () => {
    const year = new Date().getFullYear().toString();
    const month = (new Date().getMonth() + 1).toString();
    const day = new Date().getDate().toString();
    const time = new Date().toString().split(" ")[4];
    const dateArr = [year, month, day, time];
    const date = dateArr.join("-");
    return date;
  };

  const [boardContent, setBoardContent] = useState({
    title: "",
    content: "",
    date: DateCal(),
    author: "",
  });

  const [viewContent, setViewContent] = useState([]);

  const [getDB, setGetDB] = useState(true);

  const getValue = e => {
    const { name, value } = e.target;
    setBoardContent({
      ...boardContent,
      [name]: value,
    });
    console.log(boardContent);
  };

  const submit = () => {
    Axios.post("http://localhost:8080/api/insert", {
      title: boardContent.title,
      content: boardContent.content,
      author: boardContent.author,
      date: boardContent.date,
    }).then(() => {
      alert("작성 완료되었습니다!");
      setGetDB(!getDB);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/api/get").then(response => {
      setViewContent(response.data);
    });
  }, [getDB]);

  return (
    <div className="board">
      <div className="boardList">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>제목</TableCell>
                <TableCell>작성자</TableCell>
                <TableCell>작성일</TableCell>
                <TableCell>작성 내용</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {viewContent.length === 0 ? (
                <div className="noList">
                  아직 게시글이 없습니다. '글쓰기'를 통해 게시글을 작성해보세요!
                </div>
              ) : (
                viewContent.map(element => (
                  <TableRow
                    key={element.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{element.title}</TableCell>
                    <TableCell>{element.author}</TableCell>
                    <TableCell>{element.date}</TableCell>
                    <TableCell>
                      <BasicModal
                        modalTitle="글보기"
                        modalText={ReactHtmlParser(element.content)}
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="form-wrapper">
        <h1>글쓰기</h1>
        <div className="writeHeader">
          <div>
            <input
              className="write-input"
              type="text"
              placeholder="제목"
              onChange={getValue}
              name="title"
            />
            <input
              className="write-input"
              type="text"
              placeholder="글쓴이"
              onChange={getValue}
              name="author"
            />
          </div>
          <Button
            variant="contained"
            className="submit-button"
            onClick={submit}
          >
            등록하기
          </Button>
        </div>
        <CKEditor
          editor={ClassicEditor}
          data="<p>글 쓰기 시작!</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            setBoardContent({
              ...boardContent,
              content: data,
            });
            console.log(boardContent);
          }}
        />
      </div>
    </div>
  );
}
