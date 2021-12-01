import React, { useState } from 'react'
import './Style.css'
function SelectDate(props) {
  const [selectedDate, setSelectedDate] = useState(1);
  return (
    <div>
      <ul>
        {props.dateList.map(date => (
          <li key={date.id} style={{display: 'inline-block', padding: '2px 10px'}}>
            <button
              style={{borderStyle: 'none', fontSize: '20px', backgroundColor: '#A6B1E1', color: 'white', borderRadius: '8px', minWidth: '130px', fontFamily: 'cursive', lineHeight: '35px', cursor: 'pointer'}}
              className='dateButton'
              onClick={e=>{
                e.preventDefault();
                setSelectedDate(date.id)
              }}
            >
              {date.date}
            </button>
          </li>
        ))}
      </ul>
      <div style={{padding: '20px 60px', fontSize: '30px'}}> {'>'} {props.dateList[selectedDate-1].date} 세션</div>
    </div>
  )
}

export default SelectDate