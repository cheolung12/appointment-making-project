import React from 'react';

export default function Button({text, activation, handleClick}) {
    return (
        <div>
            {activation 
            ? <button className="bg-blue-500" onClick={handleClick}>{text}</button>
            : <button className="bg-red-500" disabled>{text}</button>
            }
        </div>
    );
}

