import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import ListButton from './ListButton';
import ListWrapper from './ListWrapper';
import { v4 as uuidv4 } from 'uuid';

export default function Person({ number, date }) {
  const [possibleTime, setPossibleTime] = useState([]);
  const handleAddInput = () => {
    setPossibleTime([...possibleTime, {day: '', time: ''}]);
  };

  const handleChange = (idx, newDay, newTime) => {
    // possibleTime 배열의 사본을 만듭니다.
    const updatedPossibleTime = [...possibleTime];
    // 해당 인덱스의 일정 데이터를 업데이트합니다.
    updatedPossibleTime[idx] = { day: newDay, time: newTime };
    // state를 업데이트합니다.
    setPossibleTime(updatedPossibleTime);
  };

  console.log(possibleTime);

  return (
    <div>
      <FaUserAlt /> 
      <div>person {number}</div>
      {possibleTime.map((schedule, idx) => {
        return (
          <ListWrapper
            key={uuidv4()}
            date={date}
            idx={idx}
            day={schedule.day}
            time={schedule.time}
            handleChange={handleChange}
          />
        );
      })}
      <ListButton status={'add'} handleAddInput={handleAddInput} />
    </div>
  );
}
