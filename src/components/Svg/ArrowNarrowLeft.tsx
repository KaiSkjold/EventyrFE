import React from 'react';

interface ArrowNarrowLeftProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
}

export const ArrowNarrowLeft: React.FC<ArrowNarrowLeftProps> = ({ width = 40, height = 40, strokeColor = 'black'}) => {


  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};

export default ArrowNarrowLeft;
