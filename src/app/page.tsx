import Main from '@/components/Main';

const Home = () => {
  return (
    <>
      <header className='bg-gray-700'>
        <p>content of header</p>
      </header>
      <main className='bg-red-900 h-full w-full p-12'>
        <Main />
      </main>
      <footer className='bg-red-900'>
        <p>content of footer</p>
      </footer>
    </>
  );
};

export default Home;
