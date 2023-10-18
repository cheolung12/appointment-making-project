import React, { useState } from 'react';
import MapContainer from './MapContainer';
import { v4 as uuidv4 } from 'uuid';
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineSearch } from 'react-icons/ai';

const { kakao } = window;

export default function SearchPlaceInput() {
  const [inputText, setInputText] = useState('');
  const [places, setPlaces] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [autoComplete, setAutoComplete] = useState([]);

  const ps = new kakao.maps.services.Places();
  const onChange = (e) => {
    setInputText(e.target.value);
    if (e.target.value === '') {
      setAutoComplete([]);
    } else {
      ps.keywordSearch(e.target.value, placesSearchCB);
      function placesSearchCB(data, status) {
        if (status === kakao.maps.services.Status.OK) {
          setAutoComplete(data.map((el) => (el = el.place_name)));
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
    setPlaces([...places, address]);
    setInputText('');
    setAutoComplete([]);
  };

  const handleDelete = (place) => {
    setPlaces(places.filter((element) => element !== place));
  }

  return (
    <div className={!isClicked ? 'w-1/2 h-1/2 mb-8' : 'w-3/4 h-3/4'}>
      {!isClicked && (
        <div className='w-full h-full'>
          <form onSubmit={handleSubmit}>
            <div className='flex justify-center item-center w-full mb-4'>
              <input
                placeholder='주소를 입력해주세요.'
                onChange={onChange}
                value={inputText}
                className='w-3/4 h-10 text-xl border-b-2 border-orange-400 outline-none bg-transparent mb-2'
              />
              <button
                type='submit'
                className='ml-4 h-auto box-border rounded px-8 py-3 overflow-hidden group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300'
              >
                <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
                <span className='relative text-xl font-medium'>검색</span>
              </button>
            </div>
          </form>
          <div className='relative h-3/4 overflow-y-auto'>
            <div className='absolute top-0 z-10 w-full flex flex-col justify-center items-center px-4 pr-6'>
              {autoComplete.map((el) => (
                <div
                  key={uuidv4()}
                  onClick={() => handleAddress(el)}
                  className='w-full px-4 py-3  border-b'
                >
                  <span className='flex items-center'><span className='mr-3'><AiOutlineSearch /></span>{el}</span>
                </div>
              ))}
            </div>
            {autoComplete.length === 0 &&
              places.map((place) => {
                return (
                  <div key={uuidv4()} className='px-4 mb-4 flex'>
                    <span className='flex items-center text-xl '><span className='text-orange-600 mr-2'><FaLocationDot /></span>{place}</span>
                    <button onClick={() => handleDelete(place)} className='ml-3 text-xs  text-gray-600'>X</button> 
                  </div>
                );
              })}
          </div>
        </div>
      )}
      <div className={`${isClicked && 'h-full'} w-full flex justify-center items-start`}>
        {isClicked ? (
          <MapContainer searchPlaces={places} />
        ) : (
          <button
            onClick={showMap}
            className='mt-4 h-auto box-border rounded px-16 py-3 overflow-hidden group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300'
          >
            <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
            <span className='relative text-xl font-medium'>중간지점 찾기</span>
          </button>
        )}
      </div>
    </div>
  );
}
