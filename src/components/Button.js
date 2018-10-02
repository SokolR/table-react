import React from 'react';

export const Button = ({
  buttonClass,
  cellSize,
  propertyStyle = 'left',
  valueStyle = cellSize,
  text = '+',
  buttonClick,
}) => {
  return (
    <button
      className={buttonClass}
      style={{
        width: cellSize,
        height: cellSize,
        [propertyStyle]: valueStyle,
      }}
      onClick={buttonClick}
    >
      {text}
    </button>
  );
};