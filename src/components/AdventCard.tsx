'use client';

import { toast } from '@/hooks/use-toast';
import { Song } from '@/utils/interfaces';
import { useEffect, useState } from 'react';

const AdventCard = ({ index, song }: { index: number; song: Song }) => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const today = new Date();
  const currentDay = today.getMonth() == 11 ? today.getDate() : 0;
  const isUnlocked = index + 1 <= currentDay;

  const handleClick = () => {
    if (isUnlocked && !isOpened) {
      setIsRevealed(true);
      setIsOpened(true);

      const openedCards = JSON.parse(
        localStorage.getItem('openedCards') || '[]'
      );
      localStorage.setItem(
        'openedCards',
        JSON.stringify([...openedCards, index + 1])
      );
    } else if (!isUnlocked && !isOpened) {
      toast({
        variant: 'destructive',
        title: 'This card is not unlocked yet!',
        description: 'Try to unlock it when the day comes',
      });
    }
  };

  useEffect(() => {
    const openedCards = JSON.parse(localStorage.getItem('openedCards') || '[]');
    if (openedCards.includes(index + 1)) {
      setIsOpened(true);
      setIsRevealed(true);
    }
  }, [index]);

  return (
    <div
      className='min-w-64 min-h-48 text-white bg-red-900/85 rounded border-4 border-dashed border-gray-500 flex items-center justify-center hover:scale-105 transition-transform duration-300'
      onClick={handleClick}
    >
      {isRevealed && isUnlocked ? (
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
