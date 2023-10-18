import React, { useState, useEffect } from 'react';
import TitleInput from '../components/TitleInput';
import PeolpleNumber from '../components/PeolpleNumber';
import DatePicker from '../components/DatePicker';
import CreateAppointment from '../components/CreateAppointment';
import Button from '../components/Button';
import ResultBox from '../components/ResultBox';
import FindLocationBanner from '../components/FindLocationBanner';
import AppointmentInfo from '../components/AppointmentInfo';
import { useDispatch } from 'react-redux';
import { dataAction } from '../store/data';

export default function NewSchedule() {
  const [currentSlider, setCurrentSlider] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [dateType, setDateType] = useState([]);
  const [ani, setAni] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setAni(true);
  }, []);

  const nextSlider = () => {
    if (currentSlider < 3) {
      setCurrentSlider(currentSlider + 1);
    }
    setIsActive(false);
  };

  const previousSlider = () => {
    if (currentSlider > 1) {
      setCurrentSlider(currentSlider - 1);
    }
  };

  const handleActivation = (activation) => {
    setIsActive(activation);
  };

  const handleDate = (date) => {
    setDateType(date);
  };
  
  const handleClick = () => {
    dispatch(dataAction.setOverWrappingTime());
  }

  return (
    <div className={`${currentSlider === 3 ? 'w-3/4 h-3/4' : 'w-1/2'}`}>
      {currentSlider === 1 && (
        <div
          className={`h-full flex flex-col justify-center items-center ${
            ani ? 'fade-in' : ''
          }`}
        >
          <TitleInput handleActivation={handleActivation} />
          <PeolpleNumber />
          <FindLocationBanner />
          <div className='absolute bottom-32'>
            <Button
              text={'다음'}
              handleClick={nextSlider}
              activation={isActive}
              px={'px-20'}
            />
          </div>
        </div>
      )}

      {currentSlider === 2 && (
        <div
          className={`flex flex-col justify-center items-center fade-in w-full px-`}
        >
          <div className='font-bold text-2xl mb-10'>날짜를 선택해주세요</div>
          <DatePicker
            handleActivation={handleActivation}
            handleDate={handleDate}
          />
          <div className='flex absolute bottom-28'>
            <Button
              text={'이전'}
              handleClick={previousSlider}
              activation={true}
              px={'px-16'}
            />
            <Button
              text={'다음'}
              handleClick={nextSlider}
              activation={isActive}
              px={'px-16'}
            />
          </div>
        </div>
      )}

      {currentSlider === 3 && (
        <div className='fade-in w-full h-full flex flex-col items-center'>
          <AppointmentInfo />
          <div className='flex w-full h-3/5'>
            <CreateAppointment dateType={dateType} />
            <ResultBox />
          </div>
          <Button
              text={'조회'}
              handleClick={handleClick}
              activation={true}
              px={'px-16'}
            />
        </div>
      )}
    </div>
  );
}
