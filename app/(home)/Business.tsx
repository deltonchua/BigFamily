import Link from 'next/link';
import Image from 'next/image';
import GasStation from '../../public/img/gas-station.jpeg';
import Ultrasound from '../../public/img/ultrasound.jpg';
import City from '../../public/img/city.jpg';

const links = [
  {
    img: ['Gas Station', GasStation],
    link: ['Energy', '/energy'],
    content: 'Petrol stations, charging stations, electric car market.',
  },
  {
    img: ['Ultrasound', Ultrasound],
    link: ['Medicine', '/medicine'],
    content: 'Polyclinics, specialist clinics, laboratory.',
  },
  {
    img: ['City', City],
    link: ['Real Estate', '/real-estate'],
    content: 'Property acquisition, negotiation, leasing.',
  },
];

export default function Business() {
  return (
    <section className='frame'>
      <div className='container p-0 grid gap-[1px] lg:grid-cols-3'>
        {links.map(({ img, link, content }, i) => (
          <div
            key={i}
            className='frame m-0 max-w-screen-sm mx-auto hover:brightness-110 transition-[filter]'
          >
            <Image src={img[1]} alt={img[0] as string} sizes='40rem' />
            <div className='border-t border-zinc-900 p-4 flex gap-4 items-center justify-between'>
              <div>
                <h3 className='uppercase text-xl'>{link[0]}</h3>
                <p className='text-sm'>{content}</p>
              </div>
              <Link href={link[1]} title={link[0]} className='btn shrink-0'>
                <span>More</span>
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
          </div>
        ))}
      </div>
    </section>
  );
}
