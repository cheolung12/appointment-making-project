import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Person from './Person';
import { useSelector } from 'react-redux';

export default function CreateAppointment({dateType}) {
  const data = useSelector((state) => state.data);
  const [start, end] = data.date;

  const peopleList = Array.from({ length: data.count }, (_, index) => (
    // key는 key임. props로 전달되지 않는다.
    <Person key={uuidv4()} idx={index} dateType={dateType}/>
  ));

  return (
    <div className='border-r border-orange-500'>
      <div>
        <div className='text-3xl font-semibold'>{data.title}</div>
        <div className='text-xl'>인원 수: {data.count}명</div>
        <div className='text-xl'>
          {start} ~{' '}
          {end}
        </div>
        <br />
        <div className='grid grid-cols-2 gap-4'>{peopleList}</div>
      </div>
    </div>
  );
}
