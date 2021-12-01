import React from 'react'
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
function NameList(props) {
  return (
    <div>
      <ul style={{padding: 0, backgroundColor: '#F4EEFF', display: 'inline-block', textAlign: 'center'}}>
        {props.memberList.map(member => (
          <li key={member.id} style={{listStyle: 'none', display: 'inline-block', textAlign: 'center'}}>
            {!member.checked && <CheckBoxOutlineBlankSharpIcon></CheckBoxOutlineBlankSharpIcon>}
            {member.checked && <CheckBoxOutlinedIcon></CheckBoxOutlinedIcon>}
            <p style={{display: 'inline', fontSize: '20px', paddingRight: '40px'}}>{member.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NameList
