import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import ListButton from './ListButton';
import ListWrapper from './ListWrapper';
import { v4 as uuidv4 } from 'uuid';
import SaveButton from './SaveButton';

export default function Person({ number, date }) {
  const [possibleTime, setPossibleTime] = useState([]);
  const [name, setName] = useState(`person ${number}`);
  const [editable, setEditable] = useState(false);

  const handleEdit = () => setEditable((prev) => !prev);

  const handleAddInput = () => {
    setPossibleTime([...possibleTime, { day: '', startTime: '', endTime: '' }]);
  };

  console.log(possibleTime);

  const handleChange = (idx, newDay, startTime, endTime) => {
    const updatedPossibleTime = [...possibleTime];
    updatedPossibleTime[idx] = { day: newDay, startTime, endTime};
    setPossibleTime(updatedPossibleTime);
  };  

  return (
    <div className='flex flex-col justify-center items-center'>
      <span className='mb-2 text-2xl'><FaUserAlt /></span>
      {!editable ? (
        <div onDoubleClick={handleEdit} className='text-lg mb-2'>{name}</div>
      ) : (
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleEdit}
        ></input>
      )}
      {possibleTime.map((schedule, idx) => {
        return (
          <ListWrapper
            key={uuidv4()}
            date={date}
            idx={idx}
            day={schedule.day}
            startTime={schedule.startTime}
            endTime={schedule.endTime}
            handleChange={handleChange}
          />
        );
      })}
      <ListButton status={'add'} handleAddInput={handleAddInput} />
      {/* <button onClick={handleSaveClick} >저장 하기</button> */}
    </div>
  );
}
