import Link from 'next/link';

const Pin = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6 link'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
    />
  </svg>
);

const Email = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6 link'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
    />
  </svg>
);

const WhatsApp = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6 link'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z'
    />
  </svg>
);

const grid = [
  {
    header: 'Business Domains',
    links: [
      ['Energy', '/energy'],
      ['Medicine', '/medicine'],
      ['Real Estate', '/real-estate'],
    ],
  },
  {
    header: 'Company',
    links: [
      ['About Us', '/about'],
      ['Contact', '/contact'],
    ],
    socials: [
      [
        'Wisma Central, 147, Jln Ampang, 50450 Kuala Lumpur',
        'https://goo.gl/maps/2pceQ9SAABhzo97u6',
        Pin,
      ],
      ['contact@bigfamily.world', 'mailto:contact@bigfamily.world', Email],
      ['WhatsApp', 'https://wa.me/60173082891', WhatsApp],
    ],
  },
];

export default function Footer() {
  return (
    <footer className='uppercase'>
      <div className='frame'>
        <div className='container py-16 grid gap-8 text-center lg:grid-cols-3 lg:text-left'>
          <div className='flex flex-col gap-3 items-center lg:items-start'>
            <Link
              href='/'
              title='Home'
              className='text-xl font-black tracking-tight'
            >
              Big Family
            </Link>
            <p className='text-sm'>
              Wisma Central
              <br />
              147, Jln Ampang
              <br />
              50450 Kuala Lumpur
              <br />
              Malaysia
            </p>
          </div>
          {grid.map(({ header, links, socials }, i) => (
            <div
              key={i}
              className='flex flex-col gap-3 items-center lg:items-start'
            >
              <h3 className='text-lg'>{header}</h3>
              {links.map(([title, href], j) => (
                <Link href={href} title={title} key={j} className='link'>
                  {title}
                </Link>
              ))}
              {socials && (
                <div className='flex items-center gap-3'>
                  {socials.map(([title, href, Icon], k) => (
                    <a
                      href={href as string}
                      target='_blank'
                      rel='noopener noreferrer'
                      title={title as string}
                      key={k}
                    >
                      {Icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='frame'>
        <div className='container py-6 text-center text-xs'>
          &copy; {new Date().getFullYear()} Big Family Sdn Bhd. <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
