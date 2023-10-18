import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dataAction } from '../store/data';

export default function Logo() {
    const dispatch = useDispatch();
    const handleReset = () => {
        dispatch(dataAction.setReset());
    }

    return (
        <div className='absolute top-10 left-1/2 transform -translate-x-1/2'>
        <Link to='/'>
          <span onClick={handleReset} className='flex items-center font-LogoFont text-4xl text-orange-500'>
            내일어때
            <AiOutlineCalendar />
          </span>
        </Link>
      </div>
    );
}

