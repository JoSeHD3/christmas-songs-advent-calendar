import Footer from '@/components/Footer';
import Main from '@/components/Main';
import { Song } from '@/utils/interfaces';

const Home = () => {
  return (
    <div
      className='bg-cover bg-center relative'
      style={{
        backgroundImage:
          "url('https://w.wallhaven.cc/full/d5/wallhaven-d5pxzo.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      <Main<Song>
        apiEndpoint='/api/getRandomSongs'
        storageKey='songs'
        cardStorageKey='openedCards'
      />
      <Footer />
    </div>
  );
};

export default Home;
