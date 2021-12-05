import React from 'react'
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

function NameList(props) {
  return (
    <div style={{padding: '30px 0'}}>
      <ul style={{padding: '0', backgroundColor: '#F4EEFF', display: 'block', margin: 0}}>
        {props.memberList.map(member => (
          <li key={member.id} style={{listStyle: 'none', display: 'block', textAlign: 'center', padding: '5px 0'}}>
            {(member.attendance_status === 'Absent') && <CheckBoxOutlineBlankSharpIcon></CheckBoxOutlineBlankSharpIcon>}
            {(member.attendance_status === 'Present') && <CheckBoxOutlinedIcon></CheckBoxOutlinedIcon>}
            <p style={{display: 'inline', fontSize: '20px', paddingRight: '40px'}}>{member.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NameList
