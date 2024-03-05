// TitleInput.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataAction } from '../store/data'

export default function TitleInput({ handleActivation}) {
  const [activation, setActivation] = useState(false);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (data.title.trim() !== '') {
      setActivation(true);
    } else {
      setActivation(false);
    }
    handleActivation(activation);
  }, [data.title, handleActivation, activation]);

  const handleChange = (e) => {
    dispatch(dataAction.setTitle({title: e.target.value}))
  };

  return (
      <input
        type='text'
        value={data.title}
        placeholder='이벤트를 입력해주세요..'
        onChange={handleChange}
        className='w-2/3 min-w-[250px] sm:min-w-[400px] px-4 py-6 h-10 text-xl border-2 rounded-lg bg-orange-50 border-orange-300 outline-none bg-transparent mb-10 sm:mb-12 mt-2 sm:mt-0'
      />
  );
}
