import React, { useEffect, useState } from 'react';

export default function PeolpleNumber({ handleNumber }) {
  const [count, setCount] = useState(2);

  useEffect(() => {
    handleNumber('count', count);
  }, [count]);

  const handleMinus = () => {
    if (count === 2) return;
    else setCount((prev) => prev - 1);
  };
  const handlePlus = () => setCount((prev) => prev + 1);

  return (
    <div>
      <button onClick={handleMinus}> - </button>
      <span>{count}</span>
      <button onClick={handlePlus}> + </button>
    </div>
  );
}
