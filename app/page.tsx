import Button from './components/Button';
import MachuPichuHero from './components/MachuPichuHero';
import MachuPichuInfo from './components/MachuPichuInfo';
import MachuPichuCarrousel from './components/MachuPichuCarrousel';

export default function Home() {
  return (
    <div className='flex flex-col gap-0'>
      <MachuPichuHero />
      <MachuPichuInfo />
      <MachuPichuCarrousel />
    </div>
  );
}
