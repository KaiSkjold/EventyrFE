import React from 'react';

interface XmarkProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
}

export const Xmark: React.FC<XmarkProps> = ({ width = 40, height = 40, strokeColor = 'black'}) => {


  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4L20 20M20 4L4 20" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};

export default Xmark;
