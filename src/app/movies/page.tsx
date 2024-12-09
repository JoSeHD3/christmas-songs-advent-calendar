import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';
import { Movie } from '@/utils/interfaces';

const Page = () => {
  return (
    <div
      className='bg-cover bg-center relative'
      style={{
        backgroundImage:
          "url('https://w.wallhaven.cc/full/d5/wallhaven-d5pxzo.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
      <Main<Movie>
        apiEndpoint='/api/getRandomMovies'
        storageKey='movies'
        cardStorageKey='openedMovieCards'
      />
      <Footer />
    </div>
  );
};

export default Page;
