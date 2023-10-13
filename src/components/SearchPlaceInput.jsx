import React, { useState } from 'react';
import MapContainer from './MapContainer';
import { v4 as uuidv4 } from 'uuid';

const { kakao } = window;

export default function SearchPlaceInput() {
  const [inputText, setInputText] = useState('');
  const [places, setPlaces] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [autoComplete, setAutoComplete] = useState([]);

  const ps = new kakao.maps.services.Places();

  const onChange = (e) => {
    setInputText(e.target.value);
    if(e.target.value === ''){
      setAutoComplete([]);
    } else {
    ps.keywordSearch(e.target.value, placesSearchCB);
    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        setAutoComplete(data.map((el) => el = el.address_name));
      }
    }
  }
  
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaces([...places, inputText]);
    setInputText('');
    setAutoComplete([]);
  };

  const showMap = () => setIsClicked((prev) => !prev);

  const handleAddress = (address) => {
    setInputText(address);
    setAutoComplete([]);
  }
console.log(autoComplete);
  return (
    <div>
      {!isClicked && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder='주소를 입력해주세요.'
            onChange={onChange}
            value={inputText}
          />
          <button type='submit'>검색</button>
          {autoComplete.map((el) =>
            <div key={uuidv4()} onClick={() => handleAddress(el)}>{el}</div>
          )}
        </form>
      )}
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
