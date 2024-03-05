import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function ResultBox() {
  const data = useSelector((state) => state.data);
  console.log(data);
  return (
    <div className='flex-auto w-full sm:w-[300px]'>
      <div className='grid sm:flex grid-cols-2 sm:flex-col flex-row gap-4 justify-center items-center'>
        {data.result.map((overlap, idx) => {
          const [date, time, people] = overlap;
          return (
            <div key={uuidv4()} className='text-orange-500 mb-6'>
              <div className='mb-1 text-lg sm:text-2xl'>
                <span className='mr-2'>{date}</span>
                {time[0]}시~{time[1]}시{' '}
              </div>
              <div className='mb-1 text-black text-md sm:text-xl font-medium'>
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
