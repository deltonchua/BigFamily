export default function PageHeader({ header }: { header: string }) {
  return (
    <div className='frame'>
      <h1 className='container py-8 uppercase text-3xl'>{header}</h1>
    </div>
  );
}
