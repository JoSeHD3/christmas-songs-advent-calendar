'use client';

import { Song } from '@/utils/interfaces';
import { useState } from 'react';

const AdventCard = ({ index, song }: { index: number; song: Song }) => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const handleClick = () => {
    setIsRevealed((isRevealed) => !isRevealed);
  };

  return (
    <div
      className='min-w-64 min-h-48 bg-red-900/85 rounded border-4 border-dashed border-gray-500 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-transform duration-300'
      onClick={handleClick}
    >
      {isRevealed ? (
        <div className='text-center'>
          <p className='font-bold'>{song.name}</p>
          <iframe
            className='w-full'
            src={`https://www.youtube.com/embed/${new URL(song.youtube).searchParams.get('v')}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p className='text-6xl font-bold'>{index + 1}</p>
      )}
    </div>
  );
};

export default AdventCard;
