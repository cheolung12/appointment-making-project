import React from 'react';
import { Link } from 'react-router-dom';

export default function FindLocationBanner() {
  return (
    <div className='bg-transparent text-orange-400 text-xl font-medium mb-12 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-4'>
      <span>근데 우리 어디서 만나..?</span> <Link to='/findlocation' className='text-orange-500 text-2xl transition border-b border-orange-500'> 중간지점 찾기! </Link>
    </div>
  );
}
