import Company from './Company';
import Structure from './Structure';
import Organization from './Organization';
import TalkToUs from '../utils/TalkToUs';

export default function About() {
  return (
    <main>
      <Company />
      <Structure />
      <Organization />
      <TalkToUs />
    </main>
  );
}
