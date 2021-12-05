import React, { useState } from 'react'
import { Dates } from './Data';
import './Style.css'

function SelectDate(props) {

  return (
    <div>
      <ul>
        {Dates.map(date => (
          <li key={date.id} style={{display: 'inline-block', padding: '2px 10px'}}>
            <button
              style={{borderStyle: 'none', fontSize: '20px', backgroundColor: '#A6B1E1', color: 'white', borderRadius: '8px', minWidth: '130px', fontFamily: 'cursive', lineHeight: '35px', cursor: 'pointer'}}
              className='dateButton'
              onClick={e=>{
                e.preventDefault();
                console.log(date.date);
                props.dateSelector(date.date)
              }}
            >
              {date.date}
            </button>
          </li>
        ))}
      </ul>
      <div style={{padding: '20px 60px', fontSize: '30px'}}> {'>'} {props.SelectDate} 세션</div>
    </div>
  )
}

export default SelectDate