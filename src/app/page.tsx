import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';
import { Toaster } from '@/components/ui';

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
      <Main />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;
