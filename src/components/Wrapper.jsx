import React from 'react';

export default function Wrapper({children}) {
    return (
        <div 
        className="bg-cover bg-center flex justify-center items-center w-screen h-screen"
        style={{ backgroundImage: 'url("/bg.png")' }}
        >
            {children}
        </div>
    );
}

