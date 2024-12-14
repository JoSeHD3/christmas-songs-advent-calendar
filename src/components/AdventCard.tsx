'use client';

import { useEffect, useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const AdventCard = <T extends { id: number; name: string; youtube: string }>({
  index,
  item,
  storageKey,
}: {
  index: number;
  item: T;
  storageKey: string;
}) => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [backfaceFlag, setbackfaceFlag] = useState<boolean>(false);

  const today = new Date();
  const currentDay = today.getMonth() == 11 ? today.getDate() : 0;
  const isUnlocked = index + 1 <= currentDay;

  const handleClick = () => {
    if (isUnlocked && !isOpened) {
      setIsRevealed(true);
      setIsOpened(true);

      const openedCards = JSON.parse(localStorage.getItem(storageKey) || '[]');
      localStorage.setItem(
        storageKey,
        JSON.stringify([...openedCards, index + 1])
      );

      setTimeout(() => {
        setbackfaceFlag(true);
      }, 150);
    } else if (!isUnlocked && !isOpened) {
      toast({
        variant: 'destructive',
        title: 'This card is not unlocked yet!',
        description: 'Try to unlock it when the day comes',
      });
    }
  };

  useEffect(() => {
    const openedCards = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (openedCards.includes(index + 1)) {
      setIsOpened(true);
      setIsRevealed(true);
      setbackfaceFlag(true);
    }
  }, [index, storageKey]);

  return (
    <div
      className='group flex w-full md:w-2/5 lg:w-[29%] xl:w-1/5 h-48'
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          isRevealed && isUnlocked ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front Side of the Card */}
        {!backfaceFlag && (
          <div className='absolute w-full h-full bg-red-800/80 text-white flex items-center justify-center rounded-lg z-10'>
            <p className='text-6xl font-bold'>{index + 1}</p>
          </div>
        )}

        {/* Back Side of the Card */}
        <div
          className={cn(
            'absolute w-full h-full bg-red-800/100 text-white text-pretty text-center flex flex-col items-center justify-center rounded-lg [transform:rotateY(180deg)] z-20',
            !backfaceFlag && '[backface-visibility:hidden]'
          )}
        >
          <p className='font-bold text-lg'>{item.name}</p>
          {item.youtube && (
            <iframe
              className={cn(
                'w-52 h-28 mt-2',
                !backfaceFlag ? '[pointer-events:none]' : '[pointer-events:all]'
              )}
              src={`https://www.youtube.com/embed/${new URL(item.youtube).searchParams.get('v')}`}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdventCard;
