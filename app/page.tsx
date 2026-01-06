import MachuPichuHero from './components/MachuPichuHero';
import MachuPichuInfo from './components/MachuPichuInfo';
import MachuPichuCarrousel from './components/MachuPichuCarrousel';
import MachuPichuItinerario from './components/MachuPichuItinerario';

export default function Home() {
  return (
    <div className='flex flex-col gap-0 p-18 bg-lima-light bg-[url("/firmas/firma-lima.png")] bg-repeat bg-size-[7%]'>
      <MachuPichuHero />
      <MachuPichuInfo />
      <MachuPichuCarrousel />
      <MachuPichuItinerario />
    </div>
  );
}
