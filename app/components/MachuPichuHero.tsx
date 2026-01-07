import Button from '../components/Button'

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen max-w-screen items-center justify-top bg-white font-sans overflow-hidden cursor-default">
      <div className="w-screen hero-container max-h-screen overflow-hidden">
        <img className="lg:w-full min-h-screen object-cover" src="./machu-landing.png" alt="machu-pichu"/>
      </div>
      <div className="absolute top-1/3 flex flex-col items-center justify-center">
        <span className="lg:text-9xl md:text-8xl sm:text-7xl text-5xl font-hammersmith text-lima text-shadow-lg duration-500 hover:brightness-75">
          MACHU PICHU
        </span>
        <span className="lg:text-2xl md:text-lg sm:text-md text-sm font-bold text-white text-shadow-lg text-center max-w-[100%]">
          UN VIAJE PARA RECIBIR LA BENDICIÓN DE LA MADRE TIERRA
        </span>
        <span className="lg:text-2xl md:text-lg sm:text-md text-sm font-bold text-white text-shadow-lg bg-leaf-green px-2 mt-4">23 DE AGOSTO AL 4 DE SEPTIEMBRE 2026</span>
      </div>
      <div className="w-screen px-4 py-6 bg-lima absolute bottom-0 flex items-center justify-evenly flex-col gap-4">
        <span className="max-w-2/3 text-dark-green text-center lg:text-xl text-sm">Viví un viaje para mujeres que buscan conectar con la sanación de la naturaleza</span>
        <Button text='DESCARGAR PDF' variant={'dark'} />
      </div>
    </div>
  );
}
