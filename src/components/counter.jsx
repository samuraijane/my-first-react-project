import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>The count is currently {count}</p>
      <button onClick={handleClick}>+</button>
    </>
  );
};

export default Counter;