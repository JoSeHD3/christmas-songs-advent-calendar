import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='flex justify-center align-middle p-4 bg-red-900'>
      <p className='flex text-white'>
        Designed and developed by:{' '}
        <a href='https://github.com/JoSeHD3'>
          <Github />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
