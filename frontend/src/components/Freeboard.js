import { useState, useEffect } from "react";
import "./Freeboard.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import Axios from "axios";

export default function Freeboard() {
  const [boardContent, setBoardContent] = useState({ title: "", content: "" });

  const [viewContent, setViewContent] = useState([]);

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
    }).then(() => {
      alert("등록완료!");
    });
    // setViewContent(viewContent.concat({ ...boardContent }));
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/api/get").then(response => {
      setViewContent(response.data);
    });
  }, [viewContent]);

  return (
    <div className="board">
      <h1>자유 게시판</h1>
      <div className="boardList">
        {viewContent.map(element => (
          <div>
            <h2>{element.title}</h2>
            <div>{ReactHtmlParser(element.content)}</div>
            <hr></hr>
          </div>
        ))}
      </div>
      <div className="form-wrapper">
        <input
          className="title-input"
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setBoardContent({
              ...boardContent,
              content: data,
            });
            console.log(boardContent);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
      <button className="submit-button" onClick={submit}>
        입력
      </button>
    </div>
  );
}
