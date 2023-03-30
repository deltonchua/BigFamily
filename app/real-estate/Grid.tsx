import Image from 'next/image';
import City from '../../public/img/real-estate/city.jpg';
import Negotiation from '../../public/img/real-estate/negotiation.jpg';
import Sale from '../../public/img/real-estate/sale.jpg';

const list = [
  ['Property Acquisition', City],
  ['Consultation & Negotiation', Negotiation],
  ['Sale & Lease', Sale],
];

export default function Grid() {
  return (
    <section className='frame'>
      <div className='container p-0 grid gap-[1px] lg:grid-cols-3'>
        {list.map(([title, img], i) => (
          <div
            key={i}
            className='frame m-0 max-w-screen-sm mx-auto hover:brightness-110 transition-[filter]'
          >
            <Image src={img} alt={title as string} sizes='40rem' />
            <p className='border-t border-zinc-900 p-4 uppercase text-lg text-center'>
              {title as string}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
