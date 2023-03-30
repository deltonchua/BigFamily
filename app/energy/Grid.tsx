import Image from 'next/image';
import GasStation from '../../public/img/energy/gas-station.jpeg';
import Charging from '../../public/img/energy/charging.jpg';
import Workshop from '../../public/img/energy/workshop.jpg';
import ATM from '../../public/img/energy/atm.jpeg';
import Billboard from '../../public/img/energy/billboard.jpg';
import Coffee from '../../public/img/energy/coffee.jpg';

const list = [
  ['Petrol Station', GasStation],
  ['Charging Station', Charging],
  ['Workshop', Workshop],
  ['ATM', ATM],
  ['Billboard', Billboard],
  ['F&B', Coffee],
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
