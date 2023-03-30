'use client';

import { useState } from 'react';

const sectors = [
  {
    title: 'Polyclinics (Each)',
    positions: [
      ['General Manager', 1],
      ['Accounts & Admin', 1],
      ['Doctor', 6],
      ['Nurse', 12],
      ['Cleaner', 2],
    ],
  },
  {
    title: 'Petrol Stations (Each)',
    positions: [
      ['General Manager', 1],
      ['Accounts & Admin', 1],
      ['Supervisor', 3],
      ['Worker', 9],
      ['Cleaner', 2],
    ],
  },
];

export default function Organization() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section id='org'>
      <div
        className='frame cursor-pointer group'
        title='Organization'
        onClick={() => {
          setShowDropdown((prev) => !prev);
        }}
      >
        <div className='container py-8 flex justify-between gap-6 items-center'>
          <h1 className='uppercase text-3xl'>Organization</h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 transition-transform group-hover:translate-x-1'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
      </div>
      {showDropdown && (
        <>
          <div className='frame'>
            <h3 className='container uppercase text-xl'>CEO</h3>
          </div>
          <div className='frame'>
            <h3 className='container uppercase text-xl'>
              HR & Admin, Assistant
            </h3>
          </div>
          <div className='frame'>
            <div className='container p-0 grid lg:grid-cols-2 gap-[1px]'>
              {sectors.map(({ title, positions }, i) => (
                <div key={i} className='frame p-4 m-0'>
                  <p className='uppercase text-lg mb-2'>{title}</p>
                  {positions.map(([position, number], j) => (
                    <div
                      key={j}
                      className='flex justify-between gap-4 font-mono'
                    >
                      <span>{position}</span>
                      <span>{number}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
