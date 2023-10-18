import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function ResultBox() {
  const data = useSelector((state) => state.data);

  return (
    <div className='w-1/3 pl-4 overflow-y-scroll'>
      <div className='flex flex-col justify-center items-center'>
        {data.result.map((overlap, idx) => {
          const [date, time, people] = overlap;
          return (
            <div key={uuidv4()} className='text-orange-500 mb-6'>
              <div className='mb-1 text-2xl'>
                <span className='mr-2'>{date}</span>
                {time[0]}시~{time[1]}시{' '}
              </div>
              <div className='mb-1 text-black text-xl font-medium'>
                인원:{' '}
                {people.map((person) => (
                  <span key={uuidv4()} className='mr-1'>{person}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
