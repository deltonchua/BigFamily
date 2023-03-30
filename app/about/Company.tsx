'use client';

import { useState } from 'react';

export default function Company() {
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <section>
      <div
        className='frame cursor-pointer group'
        title='About Us'
        onClick={() => {
          setShowDropdown((prev) => !prev);
        }}
      >
        <div className='container py-8 flex justify-between gap-6 items-center'>
          <h1 className='uppercase text-3xl'>About Us</h1>
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
        <div className='frame'>
          <p className='container py-16'>
            Greetings. We are a small but dynamic company that specializes in
            energy, medicine and real estate. Big Family Sdn Bhd is managed by a
            team of medical and business professionals. Adhering to our practice
            of Management by Result, we strive to provide the best possible
            service to meet our clients&apos; expectation. We wish you good
            health and great wealth.
          </p>
        </div>
      )}
    </section>
  );
}
