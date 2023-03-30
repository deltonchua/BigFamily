import PageHeader from '../utils/PageHeader';
import Contacts from './Contacts';
import Form from './Form';

export default function Contact() {
  return (
    <main>
      <PageHeader header='Get in Touch' />
      <div className='frame'>
        <div className='container p-0 grid lg:grid-cols-2 gap-[1px]'>
          <Contacts />
          <Form />
        </div>
      </div>
    </main>
  );
}
