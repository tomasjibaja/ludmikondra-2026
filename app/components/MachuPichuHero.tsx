import Button from '../components/Button'

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen max-w-screen items-center justify-top bg-white font-sans overflow-hidden cursor-default">
      <h1 className="absolute w-screen pl-10 top-0 text-dark-green text-2xl m-10 font-light duration-500 hover:font-medium">
        Bhakti Devi Viajes
      </h1>
      <div className="w-screen hero-container max-h-screen overflow-hidden">
        <img className="w-full object-cover" src="./machu-landing.png" alt="machu-pichu"/>
      </div>
      <div className="absolute text-9xl top-1/3 flex flex-col items-center justify-center">
        <span className="font-hammersmith text-lima text-shadow-lg duration-500 hover:brightness-75">
          MACHU PICHU
        </span>
        <span className="text-2xl font-bold text-white text-shadow-lg">
          UN VIAJE PARA RECIBIR LA BENDICIÓN DE LA MADRE TIERRA
        </span>
        <span className="text-2xl font-bold text-white text-shadow-lg bg-leaf-green px-2 mt-4">23 DE AGOSTO AL 4 DE SEPTIEMBRE 2026</span>
      </div>
      <div className="w-screen p-2 bg-lima h-1/5 absolute bottom-0 flex items-center justify-evenly flex-col">
        <span className="max-w-2/3 text-dark-green text-center text-xl">Viví un viaje para mujeres que buscan conectar con la sanación de la naturaleza</span>
        <Button variant='dark'>Inscribirme</Button>
      </div>
    </div>
  );
}
