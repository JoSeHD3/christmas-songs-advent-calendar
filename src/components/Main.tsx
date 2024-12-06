'use client';

import { useEffect, useState } from 'react';
import AdventCard from './AdventCard';
import axios from 'axios';

const Main = <T extends { id: number; name: string; youtube: string }>({
  apiEndpoint,
  storageKey,
  cardStorageKey,
}: {
  apiEndpoint: string;
  storageKey: string;
  cardStorageKey: string;
}) => {
  const [items, setItems] = useState<T[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem(storageKey);

    if (storedItems) {
      setItems(JSON.parse(storedItems) as T[]);
    } else {
      axios
        .get<T[]>(apiEndpoint)
        .then((response) => {
          setItems(response.data);
          localStorage.setItem(storageKey, JSON.stringify(response.data));
        })
        .catch((e) => console.error('Error fetching items: ', e));
    }
  }, [apiEndpoint, storageKey]);

  return (
    <main className='flex justify-center items-center min-h-screen bg-red-900 bg-transparent h-full w-full p-12'>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 container'>
        {items.map((item, index) => (
          <AdventCard
            key={item.id}
            index={index}
            item={item}
            storageKey={cardStorageKey}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
