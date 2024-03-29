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
    <div className='flex flex-col justify-start items-center w-full mb-4'>
      <span className='mb-2 text-2xl sm:text-4xl text-orange-600'><FaUserAlt /></span>
      {!editable ? (
        <div onDoubleClick={() => setEditable((prev) => !prev)} className='text-md sm:text-lg font-medium mb-2'>{name}</div>
      ) : (
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyPress}
          className='text-md sm:text-lg font-medium mb-2 outline-orange-500 bg-transparent'
          autoFocus
        ></input>
      )}
      <div className='w-full'> 
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
      </div>
      <ListButton status={'add'} handleAddInput={handleAddInput} />
    </div>
  );
}
