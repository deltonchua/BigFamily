import Image from 'next/image';
import Ultrasound from '../../public/img/medicine/ultrasound.jpg';
import Botox from '../../public/img/medicine/botox.jpg';
import Dentist from '../../public/img/medicine/dentist.jpg';
import Lab from '../../public/img/medicine/lab.jpg';
import DNA from '../../public/img/medicine/dna.jpg';
import Pharmacy from '../../public/img/medicine/pharmacy.jpg';

const list = [
  ['Obstetrics & Gynecology', Ultrasound],
  ['Aesthetics & Dermatology', Botox],
  ['Dentist', Dentist],
  ['Lab Work', Lab],
  ['Stem Cells & DNA', DNA],
  ['Pharmacy', Pharmacy],
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
