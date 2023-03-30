import Link from 'next/link';
import Image from 'next/image';
import Map from '../../public/img/map.svg';

export default function Hero() {
  return (
    <section className='relative frame'>
      <div className='container py-44 text-center '>
        <h1 className='uppercase text-4xl lg:text-6xl max-w-2xl mx-auto'>
          We specialize in energy, medicine and real estate.
        </h1>
        <Link
          href='/about'
          title='Learn More'
          className='btn mt-8 lg:text-sm lg:p-3'
        >
          <span>Learn More</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z'
              clipRule='evenodd'
            />
          </svg>
        </Link>
      </div>
      <div className='absolute inset-0 z-[-1]'>
        <Image
          src={Map}
          alt='World Map'
          fill
          className='object-center object-cover'
        />
      </div>
    </section>
  );
}
