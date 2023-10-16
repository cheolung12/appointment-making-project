import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { dataAction } from '../store/data'

export default function PeolpleNumber() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  
  const handleMinus = () => {
    if (data.count === 2) return;
    else dispatch(dataAction.decrement());
  };
  const handlePlus = () => dispatch(dataAction.increment());

  return (
    <div className='mt-10 mb-36 flex'>
      <button
        onClick={handleMinus}
        className='box-border w-10 h-10 relative z-30 inline-flex items-center justify-center  overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-full cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white'
      >
        <AiOutlineMinus />
      </button>
      <span className='mx-5 text-3xl flex justify-center items-center  text-orange-500 '>
        <span className='mr-4 text-3xl text-black'>
          <FaUserAlt />
        </span>
        {data.count}명
      </span>
      <button
        onClick={handlePlus}
        className='box-border w-10 h-10 relative z-30 inline-flex items-center justify-center  overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-full cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white'
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
}
