import React from 'react';
import { Link } from 'react-router-dom';

export default function FindLocationBanner() {
  return (
    <div className='bg-transparent text-orange-400 text-xl font-medium mb-12'>
      <span className='mr-4'>근데 우리 어디서 만나..?</span> <Link to='/findlocation' className='underline text-orange-500 font-semibold'> 중간지점 찾기! </Link>
    </div>
  );
}
