import React, { useState, useEffect } from 'react';
import TitleInput from '../components/TitleInput';
import PeolpleNumber from '../components/PeolpleNumber';
import DatePicker from '../components/DatePicker';
import CreateAppointment from '../components/CreateAppointment';
import Button from '../components/Button';
import ResultBox from '../components/ResultBox';

export default function NewSchedule() {
  const [currentSlider, setCurrentSlider] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [dateType, setDateType] = useState([]);
  const [ani, setAni] = useState(false);
  
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
  }


  return (
    <div>
      {currentSlider === 1 && (
        <div className={`flex flex-col justify-center items-center ${ani ? 'fade-in' : ''}`}>
          <TitleInput handleActivation={handleActivation}/>
          <PeolpleNumber />
          <Button text={'다음'} handleClick={nextSlider} activation={isActive} />
        </div>
      )}

      {currentSlider === 2 && (
        <div className={`flex flex-col justify-center items-center fade-in w-full px-`}>
          <div className='font-bold text-2xl mb-8'>날짜를 선택해주세요</div>
          <DatePicker handleActivation={handleActivation} handleDate={handleDate}/>
          <div className='flex'>
          <Button text={'이전'} handleClick={previousSlider} activation={true}  />
          <Button text={'다음'} handleClick={nextSlider} activation={isActive} />
          </div>
        </div>
      )}

      {currentSlider === 3 && (
        <div className={`fade-in`}>
          <div className='flex justify-between'>
          <CreateAppointment dateType={dateType}/>
          <ResultBox />
        </div>
        </div>
      )}
    </div>
  );
}
