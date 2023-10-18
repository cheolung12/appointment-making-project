// TitleInput.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataAction } from '../store/data'

export default function TitleInput({ handleActivation}) {
  const [activation, setActivation] = useState(false);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  console.log(data);
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
        className='w-2/3 h-10  text-xl border-b-2 border-orange-400 outline-none bg-transparent mb-12'
      />
  );
}
