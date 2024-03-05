import React from 'react';
import { useSelector } from 'react-redux';

export default function AppointmentInfo() {
  const data = useSelector((state) => state.data);
  const [start, end] = data.date;

  return (
    <div className='flex flex-col items-center mt-4 sm:mt-0 mb-10'>
      <div className='text-xl sm:text-3xl font-semibold text-orange-600 underline mb-4'>
        {data.title}
      </div>
      <div className='text-md sm:text-lg mb-2'>인원 수: {data.count}명</div>
      <div className='text-md sm:text-lg'>
        {start} ~ {end}
      </div>
    </div>
  );
}
