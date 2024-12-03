import AdventCard from './AdventCard';

const Main = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 container'>
        {Array.from({ length: 24 }).map((_, index) => (
          <AdventCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
