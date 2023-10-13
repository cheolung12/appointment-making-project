import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

export default function DatePicker({ handleActivation, handleDate }) {
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
  }, [value, handleActivation, activation]);

  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setNowDate(
      `${moment(selectedDate[0]).format('YYYY년 MM월 DD일')} ~ ${moment(
        selectedDate[1]
      ).format('YYYY년 MM월 DD일')}`
    );
    handleDate('date', selectedDate);
  };

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={value}
        formatDay={(_, date) => moment(date).format('DD')}
        selectRange={true}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
      ></Calendar>
      <div>{nowDate}</div>
    </div>
  );
}
