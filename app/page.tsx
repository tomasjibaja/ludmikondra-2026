import MachuPichuHero from './components/MachuPichuHero';
import MachuPichuInfo from './components/MachuPichuInfo';
import MachuPichuCarrousel from './components/MachuPichuCarrousel';
import MachuPichuItinerario from './components/MachuPichuItinerario';
import MachuPichuBio from './components/MachuPichuBio';
import MachuPichuHook from './components/MachuPichuHook';
import MachuPichuHookAlt from './components/MachuPichuHookAlt';
import HookToggle from './components/HookToggle';
import Banner from './components/Banner';
import MachuPichuPrecio from './components/MachuPichuPrecio';

export default function Home() {

  return (
    <div className='flex flex-col gap-0 lg:p-18 md:p-9 bg-lima-light bg-[url("/firmas/firma-lima.png")] bg-repeat bg-size-[7%]'>
      <MachuPichuHero />
      <MachuPichuInfo />
      <MachuPichuCarrousel />
      <MachuPichuItinerario />
      <MachuPichuBio />
      <Banner src='./machu-pichu-ciudad.jpg' />
      <HookToggle />
      <MachuPichuPrecio />
    </div>
  );
}
