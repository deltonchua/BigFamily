import Link from 'next/link';

export default function TalkToUs() {
  return (
    <section className='frame'>
      <div className='container py-16 text-center'>
        <h3 className='uppercase text-3xl lg:text-4xl'>Talk to Us</h3>
        <p className='mt-1 mb-4'>Got a question for us?</p>
        <Link href='/contact' title='Get in Touch' className='btn'>
          <span>Get in Touch</span>
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
    </section>
  );
}
