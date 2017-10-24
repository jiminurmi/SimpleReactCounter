import React from 'react';

const IncrementButton = ({ onIncrement }) => {
  return(
    <button onClick={onIncrement}>+</button>
  );
}

export default IncrementButton;