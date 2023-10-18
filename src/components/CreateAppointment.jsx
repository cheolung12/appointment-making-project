import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Person from './Person';
import { useSelector } from 'react-redux';

export default function CreateAppointment({ dateType }) {
  const data = useSelector((state) => state.data);

  const peopleList = Array.from({ length: data.count }, (_, index) => (
    // key는 key임. props로 전달되지 않는다.
    <Person key={uuidv4()} idx={index} dateType={dateType} />
  ));

  return (
    <div className='w-2/3 h-4/5 overflow-y-scroll pr-4'>
      <div className='grid grid-cols-2 gap-4'>{peopleList}</div>
    </div>
  );
}
