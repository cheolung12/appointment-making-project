import React from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import Person from './Person';

export default function CreateAppointment({ info }) {
  const { title, people, date } = info;
  const [start, end] = date;

  const peopleList = Array.from({ length: people }, (_, index) => (
    // key는 key임. props로 전달되지 않는다.
    <Person key={uuidv4()} number={index + 1} date={date} />
  ));

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h2>인원 수: {people}명</h2>
        <h2>
          {moment(start).format('YYYY년 MM월 DD일')} ~{' '}
          {moment(end).format('YYYY년 MM월 DD일')}
        </h2>
        <br />
        <div>{peopleList}</div>
      </div>
      <div> {/*여기다가는 시간입력 */}</div>
    </div>
  );
}
