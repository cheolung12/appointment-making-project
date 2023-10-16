import React, { useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import Person from './Person';
import { firestore } from '../api/firebase';

export default function CreateAppointment({ info }) {
  const { title, people, date } = info;
  const [start, end] = date;
  const [data, setData] = useState({});

  const updateData = (title, name, possibleTime) => {
    // 데이터에 해당하는 title이 이미 존재하는지 확인
    if (data[title]) {
      // 이미 존재하는 title인 경우, 해당 title에 새로운 name과 가능한 시간 추가
      setData({
        ...data,
        [title]: {
          ...data[title],
          [name]: possibleTime,
        },
      });
    } else {
      // title이 존재하지 않는 경우, 새로운 title을 생성하고 name과 가능한 시간 추가
      setData({
        ...data,
        [title]: {
          [name]: possibleTime,
        },
      });
    }
  };

  // const bucket = firestore.collection('bucket');

  // const handleSave = (name, possibleTime) => {
  //   bucket.get().then((docs) => {
  //     docs.forEach((doc) => {
  //       // 해당 약속이 존재한다면 => uuid로....
  //       if(doc._delegate._document.data.value.mapValue.fields[title]){
          
  //       }
          
  //       console.log(doc._delegate._document.data.value.mapValue.fields);
  //     });
  //   })
  // };

  const peopleList = Array.from({ length: people }, (_, index) => (
    // key는 key임. props로 전달되지 않는다.
    <Person key={uuidv4()} number={index + 1} date={date} data={data} updateData={updateData}/>
  ));

  return (
    <div className='border-r border-orange-500'>
      <div>
        <div className='text-3xl font-semibold'>{title}</div>
        <div className='text-xl'>인원 수: {people}명</div>
        <div className='text-xl'>
          {moment(start).format('YYYY년 MM월 DD일')} ~{' '}
          {moment(end).format('YYYY년 MM월 DD일')}
        </div>
        <br />
        <div className='grid grid-cols-2 gap-4'>{peopleList}</div>
      </div>
    </div>
  );
}
