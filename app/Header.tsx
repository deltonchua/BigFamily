'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  ['Energy', '/energy'],
  ['Medicine', '/medicine'],
  ['Real Estate', '/real-estate'],
  ['About Us', '/about'],
  ['Get in Touch', '/contact'],
];

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='sticky top-0 z-10 bg-zinc-100 frame'>
      <div className='lg:container lg:flex lg:items-center lg:justify-between lg:gap-6'>
        <div className='p-4 flex items-center justify-between gap-6 lg:p-0'>
          <Link
            href='/'
            title='Home'
            className='text-xl uppercase font-black tracking-tight'
          >
            Big Family
          </Link>
          <button
            className='lg:hidden'
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            {showMenu ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            )}
          </button>
        </div>
        <nav className={`${showMenu ? 'block' : 'hidden'} lg:flex gap-6`}>
          {links.map(([title, href], i) => (
            <Link
              href={href}
              title={title}
              key={i}
              className='link p-4 flex items-center justify-between frame focus:bg-white group lg:p-0 lg:shadow-none lg:last:btn lg:focus:bg-inherit'
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <span>{title}</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5 transition-transform group-hover:translate-x-1 lg:hidden'
              >
                <path
                  fillRule='evenodd'
                  d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
