import React from 'react';

interface FontProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
}

export const Font: React.FC<FontProps> = ({ width = 40, height = 40, strokeColor = 'black'}) => {


  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12V21M2 21L8 3L14 21M11 14H5M19 21C17.3431 21 16 19.6569 16 18V15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15V18C22 19.6569 20.6569 21 19 21Z" stroke={strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default Font;