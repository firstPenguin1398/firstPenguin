import React, { useEffect } from 'react'
import NameList from './NameList';
import SelectDate from './SelectDate';
import { Members, Dates } from './Data';
const axios = require('axios');

function Attendence() {
  useEffect(() => {
    console.log('hi');
    axios.get('/api')
    .then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  });
  return (
    <div>
      <h1 style={{padding: '10px 30px', color: '#2A0944', }}>Attendence</h1>
      <SelectDate dateList={Dates}></SelectDate>
      <NameList memberList={Members}></NameList>
    </div>
  )
}

export default Attendence
