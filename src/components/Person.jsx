import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import ListButton from './ListButton';
import ListWrapper from './ListWrapper';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { dataAction } from '../store/data'

export default function Person({ idx, dateType }) {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch(); 
  const [name, setName] = useState(data.people[idx]);
  const [editable, setEditable] = useState(false);

  console.log(data);
  
  const handleEdit = (e) => {
    setEditable((prev) => !prev);
    const newName = e.target.value;
    dispatch(dataAction.setName({ idx, name: newName }));
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setEditable((prev) => !prev);
      const newName = e.target.value;
      dispatch(dataAction.setName({ idx, name: newName }));
    }
  };

  const handleAddInput = () => {
    dispatch(dataAction.setPossible({idx, time: {day: '', startTime: '', endTime: ''}}));
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <span className='mb-2 text-2xl'><FaUserAlt /></span>
      {!editable ? (
        <div onDoubleClick={() => setEditable((prev) => !prev)} className='text-lg mb-2'>{name}</div>
      ) : (
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyPress}
        ></input>
      )}
      {data.possibleTime[idx].map((_, childIndex) => {
        return (
          <ListWrapper
            key={uuidv4()}
            parentIndex={idx}
            childIndex={childIndex}
            dateType={dateType}
          />
        );
      })}
      <ListButton status={'add'} handleAddInput={handleAddInput} />
    </div>
  );
}
