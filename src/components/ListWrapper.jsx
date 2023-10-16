import React from 'react';
import ListButton from './ListButton';

export default function ListWrapper({ date, idx, day, startTime, endTime, handleChange }) {
  const period = [];
  const currentDate = new Date(date[0])
  const timeArray = Array.from({ length: 24 }, (_, index) => `${String(index).padStart(2, '0')}:00`);
  
  while (currentDate <= date[1]) {
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    period.push(`${month}월 ${day}일`);
    currentDate.setDate(currentDate.getDate() + 1); // 다음날짜로
  }

  const handleDayChange = (e) => {
    const newDay = e.target.value;
    handleChange(idx, newDay, startTime, endTime);
  };

  const handleTimeChange1 = (e) => {
    const newTime = e.target.value;
    handleChange(idx, day, newTime, endTime);
  };

  const handleTimeChange2 = (e) => {
    const newTime = e.target.value;
    handleChange(idx, day, startTime, newTime);
  };

  return (
    <div className='flex'>
      <select onChange={handleDayChange} value={day}>
      <option>날짜</option>
        {period.map((date, idx) => {
          return <option key={idx}>{date}</option> 
        })}
      </select>
      <select onChange={handleTimeChange1} value={startTime}>
      <option>시간1</option>
        {timeArray.map((time, idx) => {
          return <option key={idx}>{time}</option>
        })}
      </select>
      <select onChange={handleTimeChange2} value={endTime}>
      <option>시간2</option>
        {timeArray.map((time, idx) => {
          return <option key={idx}>{time}</option>
        })}
      </select>
    </div>
  );
}
