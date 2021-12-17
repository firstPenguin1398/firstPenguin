import React, { useEffect, useState } from 'react'
import NameList from './NameList';
import SelectDate from './SelectDate';
const axios = require('axios');

function Attendence() {

  const [Members, setMembers] = useState([]);
  const [selectedDate, setSelectedDate] = useState('2021-11-20');
  const [thisSemester, setThisSemester] = useState('2021-2');

  useEffect(() => {
    axios.put('/api/attendence', {
      selectedDate: selectedDate,
      thisSemester: thisSemester
    })
    .then((result) => {
      setMembers(result.data);
      console.log(result.data);
    }).catch((err) => {
      console.log(err);
    });

  }, [selectedDate]);

  return (
    <div>
      <SelectDate selectedDate={selectedDate} dateSelector={(date) => setSelectedDate(date)}></SelectDate>
      <NameList memberList={Members}></NameList>
    </div>
  )
}

export default Attendence
