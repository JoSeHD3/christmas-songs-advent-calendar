import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';
import { Toaster } from '@/components/ui';
import { Song } from '@/utils/interfaces';

const Home = () => {
  return (
    <div
      className='bg-cover bg-center relative'
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp7958855.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
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
