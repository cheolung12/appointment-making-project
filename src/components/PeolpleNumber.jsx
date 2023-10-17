import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { dataAction } from '../store/data';
import { PiPlusBold, PiMinusBold } from 'react-icons/pi';

export default function PeolpleNumber() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleMinus = () => {
    if (data.count === 2) return;
    else dispatch(dataAction.decrement());
  };
  const handlePlus = () => {
    if (data.count === 6) return;
    return dispatch(dataAction.increment());
  }

  return (
    <div className='mt-10 mb-20 flex'>
      <button
        onClick={handleMinus}
        className='box-border w-10 h-10 relative z-30 inline-flex items-center justify-center  overflow-hidden font-bold text-gray-600 transition-all duration-500 border border-gray-200 rounded-full cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white'
      >
        <PiMinusBold />
      </button>
      <span className='mx-5 text-3xl flex justify-center items-center  text-orange-500 '>
        <span className='mr-4 text-3xl text-black'>
          <FaUserAlt />
        </span>
        {data.count}명
      </span>
      <button
        onClick={handlePlus}
        className='box-border w-10 h-10 relative z-30 inline-flex items-center justify-center  overflow-hidden font-bold text-gray-600 transition-all duration-500 border border-gray-200 rounded-full cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white'
      >
        <PiPlusBold />
      </button>
    </div>
  );
}
