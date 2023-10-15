import React, { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function PeolpleNumber({ handleNumber }) {
  const [count, setCount] = useState(2);

  useEffect(() => {
    handleNumber('people', count);
  }, [count]);

  const handleMinus = () => {
    if (count === 2) return;
    else setCount((prev) => prev - 1);
  };
  const handlePlus = () => setCount((prev) => prev + 1);

  return (
    <div className='mt-2 mb-20'>
      <button
        onClick={handleMinus}
        className='box-border w-10 h-10 relative z-30 inline-flex items-center justify-center  overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-full cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white'
      >
        <AiOutlineMinus />
      </button>
      <span className='mx-5 text-3xl'>{count}</span>
      <button
        onClick={handlePlus}
        className='box-border w-10 h-10 relative z-30 inline-flex items-center justify-center  overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-full cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white'
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
}
