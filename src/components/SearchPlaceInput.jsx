import React, { useState } from 'react';
import MapContainer from './MapContainer';
import { v4 as uuidv4 } from 'uuid';

export default function SearchPlaceInput() {
  const [inputText, setInputText] = useState('');
  const [places, setPlaces] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaces([...places, inputText]);
    setInputText('');
  };
  const showMap = () => setIsClicked((prev) => !prev);

  console.log(places);
  return (
    <div>
     {!isClicked &&  <form onSubmit={handleSubmit}>
        <input
          placeholder='주소를 입력해주세요.'
          onChange={onChange}
          value={inputText}
        />
        <button type='submit'>검색</button>
      </form>}
      {places.map((place, idx) => {
        return (
          <div key={uuidv4()}>
            위치{idx + 1} : {place}
          </div>
        );
      })}
      {isClicked ? (
        <MapContainer searchPlaces={places} />
      ) : (
        <button type='button' onClick={showMap}>
          중간지점 찾기
        </button>
      )}
    </div>
  );
}
