// import React, { Component } from "react";
// import { nanoid } from 'nanoid';
// // import "./index.css"
// import { Link } from "react-router-dom";
// import Member from './Member';
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import TableBody from '@material-ui/core/TableBody';
// import TableRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
// //흠... 아예 빈 셀에서 출발하는 건 안되는건가..
// import data from './mock-data.json';
// import Confetti from 'react-confetti';
// //import FpImg from "./components/FpImg";
// //import MainPage from "./components/MainPage";

// export default function WeeklyReport() {
//   const [members, setMembers] = useState(data);
//   const [addFormMembers, setAddFormMembers] = useState({
//     name: '',
//     class: '',
//     team: ''
//   })

//   const handleAddFormChange = (event) => {
//     event.preventDefault();

//     const fieldName=event.target.getAttribute('name');
//     const fieldValue=event.target.value;

//     const newFormData={ ...addFormMembers};
//     newFormData[fieldName]=fieldValue;

//     setAddFormData(newFormData);

//   };

//   const handleAddFormSubmit = (event) => {
//     event.preventDefault();

//     const newMember={
//       id: nanoid(),
//       name: addFormMembers.name,
//       class: addFormMembers.class,
//       team: addFormMembers.team
//     };

//     const newMembers = [ ...members, newMembers];
//     setMembers(newMembers);
//   }
//     return (
//       <div>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>이름</TableCell>
//               <TableCell>기수</TableCell>
//               <TableCell>소속팀</TableCell>
//               <TableCell>오늘세션내용</TableCell> 
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {members.map(m=>{
//               return <Member name={m.name} class={m.class} team={m.team} summary={m.summary}/>
//             })}
//           </TableBody>
//         </Table>

//         <h2> 이번주 세션 내용을 정리해주세요</h2>
//         <form onSubmit={handleAddFormSubmit}></form>
//         <form>
//           <input type="text" 
//           name="name" 
//           required="required" 
//           placeholder="이름"
//           onChange={handleAddFormChange}/>

//           <input type="text" 
//           name="class"  
//           placeholder="기수"
//           onChange={handleAddFormChange}/>

//           <input type="text" 
//           name="team" 
//           required="required" 
//           placeholder="소속팀"
//           onChange={handleAddFormChange}/>

//           <input type="text"
//           name="summary"
//           minlength="50"
//           placeholder="오늘세션내용"
//           onChange={handleAddFormChange}/>
//         </form>
//         <Confetti width={300} height={200}/>
//       </div>
//     );
// }