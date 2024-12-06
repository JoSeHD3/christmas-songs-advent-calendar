import Link from 'next/link';
import { ShadcnButton } from './ui';

const Header = () => {
  return (
    <header className='bg-gray-700 flex justify-center xl:gap-24 lg:gap-20 md:gap-16 sm:gap-8 sticky overflow-auto top-0 z-10'>
      <ShadcnButton
        variant='ghost'
        asChild
        className='m-2 hover:bg-gray-500 rounded xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl'
      >
        <Link href='/'>
          <p className='text-white'>Songs calendar</p>
        </Link>
      </ShadcnButton>
      <ShadcnButton
        variant='ghost'
        asChild
        className='m-2 hover:bg-gray-500 rounded xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl'
      >
        <Link href='/movies'>
          <p className='text-white'>Movies calendar</p>
        </Link>
      </ShadcnButton>
    </header>
  );
};

export default Header;
