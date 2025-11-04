import React from 'react';

interface BookmarkProps {
  width?: number | string;
  height?: number | string;
  bookmarkType?: 'filled' | 'outlined';
}

export const Bookmark: React.FC<BookmarkProps> = ({ width = 30, height = 30, bookmarkType = 'filled'}) => {

return (
  bookmarkType === 'filled' ? (
          <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C6.9 2 7.6 2 9 2h6c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C19 3.9 19 4.6 19 6v13.208c0 1.056 0 1.583-.217 1.856a1 1 0 0 1-.778.378c-.349.002-.764-.324-1.593-.976L12 17l-4.411 3.466c-.83.652-1.245.978-1.594.976a1 1 0 0 1-.778-.378C5 20.791 5 20.264 5 19.208V6z" fill="var(--accent-color)"/></svg>
    ) : (
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="none"/>
        <path d="M5 19.6693V4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V19.6693C19 20.131 18.4277 20.346 18.1237 19.9985L12 13L5.87629 19.9985C5.57227 20.346 5 20.131 5 19.6693Z" stroke="var(--accent-color)" stroke-linejoin="round"/>
      </svg>
    )

  );
};

export default Bookmark;
