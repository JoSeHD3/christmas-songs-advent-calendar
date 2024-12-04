import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <div className='flex justify-center align-middle p-4'>
      <p className='flex text-white'>
        Designed and developed by:{' '}
        <a href='https://github.com/JoSeHD3'>
          <Github />
        </a>
      </p>
    </div>
  );
};

export default Footer;
