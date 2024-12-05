import Footer from '@/components/Footer';
import Main from '@/components/Main';
import { Toaster } from '@/components/ui';

const Home = () => {
  return (
    <div
      className='bg-cover bg-center'
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp7958855.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      <header className='bg-gray-700 flex justify-center'>
        <p className='lg:text-7xl md:text-5xl sm: text-3xl font-bold'>
          ROLL YOUR XMAS SONG
        </p>
      </header>
      <Main />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;
