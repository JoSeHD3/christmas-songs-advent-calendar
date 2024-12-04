import Main from '@/components/Main';
import { Toaster } from '@/components/ui/toaster';

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
      <main className='bg-red-900 bg-transparent h-full w-full p-12'>
        <Main />
      </main>
      <footer className='bg-red-900'>
        <p>content of footer</p>
      </footer>
      <Toaster />
    </div>
  );
};

export default Home;
