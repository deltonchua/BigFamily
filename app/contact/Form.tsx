export default function Form() {
  return (
    <section className='frame m-0 px-4 py-12'>
      <form
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        className='space-y-4'
      >
        <div>
          <label htmlFor='subject' className='label'>
            Subject
          </label>
          <select
            name='subject'
            id='subject'
            className='input'
            defaultValue='General Inquiry'
          >
            <option value='General Inquiry'>General Inquiry</option>
            <option value='Investor Relations'>Investor Relations</option>
            <option value='Schedule an Appointment'>
              Schedule an Appointment
            </option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor='name' className='label'>
            Your name
          </label>
          <input type='text' name='name' id='name' required className='input' />
        </div>
        <div>
          <label htmlFor='email' className='label'>
            Your email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            required
            className='input'
          />
        </div>
        <div>
          <label htmlFor='number' className='label'>
            Your number
          </label>
          <input type='text' name='number' id='number' className='input' />
        </div>
        <div>
          <label htmlFor='message' className='label'>
            Your message
          </label>
          <textarea
            name='message'
            id='message'
            rows={6}
            className='input rounded-2xl'
            required
          ></textarea>
        </div>
        <input type='hidden' name='form-name' value='contact' />
        <div>
          <button type='submit' className='btn mt-2'>
            <span>Send Message</span>
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
          </button>
        </div>
      </form>
    </section>
  );
}
