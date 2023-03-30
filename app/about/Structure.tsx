'use client';

import { useState } from 'react';

const sectors = [
  { title: 'Medicine', ownership: [['Ownership', 100]] },
  { title: 'Real Estate', ownership: [['Ownership', 100]] },
  {
    title: 'Petrol Stations',
    ownership: [
      ['Ownership', 51],
      ['Bumiputera Partners', 49],
    ],
  },
];

export default function Structure() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section>
      <div
        className='frame cursor-pointer group'
        title='Structure'
        onClick={() => {
          setShowDropdown((prev) => !prev);
        }}
      >
        <div className='container py-8 flex justify-between gap-6 items-center'>
          <h1 className='uppercase text-3xl'>Structure</h1>
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
            <h3 className='container uppercase text-2xl'>Big Family Sdn Bhd</h3>
          </div>
          <div className='frame'>
            <div className='container p-0 grid lg:grid-cols-3 gap-[1px]'>
              {sectors.map(({ title, ownership }, i) => (
                <div key={i} className='frame p-4 m-0'>
                  <p className='uppercase text-lg mb-2'>{title}</p>
                  {ownership.map(([owner, percentage], j) => (
                    <div
                      key={j}
                      className='flex justify-between gap-4 font-mono'
                    >
                      <span>{owner}</span>
                      <span>{percentage}%</span>
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
