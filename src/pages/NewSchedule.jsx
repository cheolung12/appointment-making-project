import React, { useState } from 'react';
import TitleInput from '../components/TitleInput';
import PeolpleNumber from '../components/PeolpleNumber';
import DatePicker from '../components/DatePicker';
import CreateAppointment from '../components/CreateAppointment';
import Button from '../components/Button';

export default function NewSchedule() {
  const [currentSlider, setCurrentSlider] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [info, setInfo] = useState({title: '', people: 2, date: []})


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
  
  const handleInfo = (type, value) => {
    setInfo({...info, [type]:  value});
  }

  console.log(info);
  return (
    <div>
      {currentSlider === 1 && (
        <div>
          <TitleInput handleActivation={handleActivation} handleTitle={handleInfo}/>
          <PeolpleNumber handleNumber={handleInfo}/>
          <Button text={'다음'} handleClick={nextSlider} activation={isActive}/>
        </div>
      )}

      {currentSlider === 2 && (
        <div>
          <DatePicker handleActivation={handleActivation} handleDate={handleInfo}/>
          <Button text={'이전'} handleClick={previousSlider} activation={true}/>
          <Button text={'다음'} handleClick={nextSlider} activation={isActive}/>
        </div>
      )}

      {currentSlider === 3 && (
        <div>
          <CreateAppointment info={info}/>
        </div>
      )}
    </div>
  );
}
