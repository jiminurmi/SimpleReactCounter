import React from 'react';

const DecrementButton = ({ onDecrement}) => {
  return(
    <button onClick={onDecrement}>-</button>
  );
}

export default DecrementButton;