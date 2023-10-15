import React from 'react';

export default function Button({ text, activation, handleClick }) {
  return (
    <div>
      {activation ? (
        <button
          onClick={handleClick}
          className='box-border rounded px-20 py-3 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300'
        >
          <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
          <span className='relative text-xl font-medium'>{text}</span>
        </button>
      ) : (
        <button
          disabled
          className='box-border rounded px-20 py-3 overflow-hidden group bg-green-200 relative  text-white'
        >
          <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12'></span>
          <span className='relative text-xl font-medium'>{text}</span>
        </button>
      )}
    </div>
  );
}


  /* <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */

