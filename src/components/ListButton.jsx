import React from 'react';

export default function ListButton({ status, handleAddInput, handleDelete }) {
  return (
    <div>
      {status === 'add' ? (
        <button
          onClick={handleAddInput}
          className='inline-flex items-center px-2 py-0.5 text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-gray-600'
        >
          +
        </button>
      ) : (
        <button onClick={handleDelete} className='ml-1 px-2 py-1 text-gray-600'>x</button>
      )}
    </div>
  );
}
