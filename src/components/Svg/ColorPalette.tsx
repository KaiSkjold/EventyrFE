import React from 'react';

interface ColorPaletteProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ width = 40, height = 40, strokeColor = 'black'}) => {


  return (
  <svg width={width} height={height} viewBox="0 -11 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>Color-palette</title>
    <desc>Created with Sketch.</desc>
    <defs />
    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g id="Color-palette" transform="translate(1.000000, 1.000000)" stroke={strokeColor} strokeWidth={2}>
        <path d="M62,20 C62,31 48.1,40 31,40 C7,40 24,28.3 21,23.4 C17,17 0,36.1 0,20 C0,9 13.9,0 31,0 C48.1,0 62,9 62,20 L62,20 Z" id="Shape" />
        <ellipse id="Oval-1" cx="31.5" cy="6.5" rx="4.5" ry="2.5" />
        <ellipse id="Oval-2" cx="17.5" cy="8.5" rx="4.5" ry="2.5" />
        <ellipse id="Oval-3" cx="33.5" cy="34.5" rx="4.5" ry="2.5" />
        <ellipse id="Oval-4" cx="47.5" cy="29.5" rx="4.5" ry="2.5" />
        <ellipse id="Oval-5" cx="45.5" cy="9.5" rx="4.5" ry="2.5" />
        <ellipse id="Oval-6" cx="53.5" cy="18.5" rx="4.5" ry="2.5" />
      </g>
    </g>
  </svg>
  );
};

export default ColorPalette;
