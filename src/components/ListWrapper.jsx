import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataAction } from '../store/data';
import ListButton from './ListButton';

export default function ListWrapper({ parentIndex, childIndex, dateType }) {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const period = [];

  // 날짜 범위 생성
  const currentDate = new Date(dateType[0]);
  while (currentDate <= dateType[1]) {
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    period.push(`${month}월 ${day}일`);
    currentDate.setDate(currentDate.getDate() + 1); // 다음날짜로
  }

  // 시간 범위 생성
  const timeArray = Array.from(
    { length: 24 },
    (_, index) => `${String(index).padStart(2, '0')}:00`
  );

  const handleDayChange = (e) => {
    const newDay = e.target.value;
    dispatch(dataAction.setDay({ parentIndex, childIndex, newDay }));
  };

  const handleTimeChange1 = (e) => {
    const newTime = e.target.value;
    dispatch(dataAction.setStartTime({ parentIndex, childIndex, newTime }));
  };

  const handleTimeChange2 = (e) => {
    const newTime = e.target.value;
    dispatch(dataAction.setEndTime({ parentIndex, childIndex, newTime }));
  };

  const handleDelete = (e) => {
    dispatch(dataAction.setDelete({ parentIndex, childIndex}));
  }

  return (
    <div className='flex justify-center mb-3 w-full px-1'>
      <select
        onChange={handleDayChange}
        value={data.possibleTime[parentIndex][childIndex].day}
        className='box-border rounded-lg bg-slate-50 px-4 py-2 mr-2 w-1/3'
      >
        <option>날짜</option>
        {period.map((date, idx) => {
          return <option key={idx}>{date}</option>;
        })}
      </select>
      <select
        onChange={handleTimeChange1}
        value={data.possibleTime[parentIndex][childIndex].startTime}
        className='box-border  rounded-lg bg-slate-50 px-2 py-1 mr-2 w-1/4'
      >
        <option>시간1</option>
        {timeArray.map((time, idx) => {
          return <option key={idx}>{time}</option>;
        })}
      </select>
      <select
        onChange={handleTimeChange2}
        value={data.possibleTime[parentIndex][childIndex].endTime}
        className='box-border rounded-lg bg-slate-50 px-2 py-2 w-1/4'
      >
        <option>시간2</option>
        {timeArray.map((time, idx) => {
          return <option key={idx}>{time}</option>;
        })}
      </select>
      <ListButton status={'delete'} handleDelete={handleDelete}/>
    </div>
  );
}
