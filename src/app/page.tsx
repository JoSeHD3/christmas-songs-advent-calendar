import Main from '@/components/Main';

const Home = () => {
  return (
    <div
      className='bg-cover bg-center'
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp7958855.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      <header className='bg-gray-700'>
        <p>content of header</p>
      </header>
      <main className='bg-red-900 bg-transparent h-full w-full p-12'>
        <Main />
      </main>
      <footer className='bg-red-900'>
        <p>content of footer</p>
      </footer>
    </div>
  );
};

export default Home;
