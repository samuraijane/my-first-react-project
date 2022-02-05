import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (number) => {
    setCount(count + number);
  };

  return (
    <>
      <p>The count is currently {count}</p>
      <button onClick={() => handleClick(1)}>+</button>
      <button onClick={() => handleClick(-1)}>-</button>
    </>
  );
};

export default Counter;