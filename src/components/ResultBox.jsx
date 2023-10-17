import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataAction } from '../store/data';

export default function ResultBox() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleClick =() => {
    dispatch(dataAction.setOverWrappingTime());
    console.log(data.result);
  }
  return <div>
    <button onClick={handleClick}>조회</button>
  </div>;
}
