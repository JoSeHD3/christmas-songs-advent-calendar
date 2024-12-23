import Footer from '@/components/Footer';
import Main from '@/components/Main';
import { Movie } from '@/utils/interfaces';

const Page = () => {
  return (
    <div
      className='bg-cover bg-center relative'
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
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
