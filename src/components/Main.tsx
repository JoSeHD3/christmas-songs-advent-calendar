'use client';

import { useEffect, useState } from 'react';
import AdventCard from './AdventCard';
import { GET_RANDOM_SONGS_API } from '@/utils/constants';
import axios from 'axios';
import { Song } from '@/utils/interfaces';

const Main = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    const storedSongs = localStorage.getItem('songs');

    if (storedSongs) {
      setSongs(JSON.parse(storedSongs) as Song[]);
    } else {
      axios
        .get<Song[]>(GET_RANDOM_SONGS_API)
        .then((response) => {
          setSongs(response.data);
          localStorage.setItem('songs', JSON.stringify(response.data));
        })
        .catch((e) => console.error('Error fetching songs: ', e));
    }
  }, []);

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 container'>
        {songs.map((song, index) => (
          <AdventCard key={song.id} index={index} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Main;
