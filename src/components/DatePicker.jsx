import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { dataAction } from '../store/data'


export default function DatePicker({ handleActivation, handleDate }) {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [value, onChange] = useState([]);
  const [nowDate, setNowDate] = useState('');
  const [activation, setActivation] = useState(false);

  useEffect(() => {
    if(value.length === 2){
      setActivation(true);
    } else {
      setActivation(false);
    }
    handleActivation(activation);
  }, [data.date, handleActivation, activation, value.length]);

  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    handleDate(selectedDate);
    const startDay = moment(selectedDate[0]).format('YYYY년 MM월 DD일');
    const endDay  = moment(selectedDate[1]).format('YYYY년 MM월 DD일')
    dispatch(dataAction.setDate({startDay, endDay}));
    setNowDate(
      `${moment(selectedDate[0]).format('YYYY년 MM월 DD일')} ~ ${moment(
        selectedDate[1]
      ).format('YYYY년 MM월 DD일')}`
    );
  };

  return (
    <div className='mb-14'>
      <Calendar
        onChange={handleDateChange}
        value={value}
        formatDay={(_, date) => moment(date).format('DD')}
        selectRange={true}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        className='mb-8'
      ></Calendar>
      <div className='h-10 text-lg text-center'>{nowDate}</div>
    </div>
  );
}
