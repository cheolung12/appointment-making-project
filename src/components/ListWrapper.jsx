import React, { useState } from 'react';
import ListButton from './ListButton';

export default function ListWrapper({ date, idx, day, time, handleChange }) {
  const period = [];
  const currentDate = new Date(date[0])
  const timeArray = Array.from({ length: 24 }, (_, index) => `${String(index).padStart(2, '0')}:00`);
  
  while (currentDate <= date[1]) {
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    period.push(`${month}월 ${day}일`);
    currentDate.setDate(currentDate.getDate() + 1); // 다음날짜로
  }

  const handleDayChange = (event) => {
    const newDay = event.target.value;
    handleChange(idx, newDay, time);
  };

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    handleChange(idx, day, newTime);
  };

  return (
    <div className='flex'>
      <select onChange={handleDayChange} value={day}>
      <option>날짜</option>
        {period.map((date, idx) => {
          return <option key={idx}>{date}</option> 
        })}
      </select>
      <select onChange={handleTimeChange} value={time}>
      <option>시간</option>
        {timeArray.map((time, idx) => {
          return <option key={idx}>{time}</option>
        })}
      </select>
    </div>
  );
}
