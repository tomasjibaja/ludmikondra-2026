import { GiEarthAmerica } from "react-icons/gi";
import { BsAirplaneEngines } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import Button from './Button';

const MachuPichuHook = () => {
  return (
    <div className="text-dark-green bg-lima flex flex-col items-center justify-evenly pt-10 pb-20 cursor-default">
      <h2 className="font-bold xl:text-4xl lg:text-3xl text-2xl max-w-4/5 text-center my-10 text-center">
        ESTE VIAJE ES PARA VOS SI...
      </h2>
      <div className='flex md:flex-row flex-col items-center justify-evenly text-center px-5 pt-10 md:gap-0 gap-20'>
        <div className='lg:w-2/9 md:w-2/7 w-2/3 flex flex-col items-center justify-center gap-3'>
          <GiEarthAmerica className='text-9xl' />
          <span className='font-bold lg:text-lg md:text-md sm:text-sm text-dark-green'>Sentís deseo de conectar con la energía de la Tierra y escuchar su susurro</span>
          <p className='font-medium lg:text-lg md:text-md sm:text-sm'>La energía de los <b>Andes</b> nos recibe para darnos fuerza, sostén y profunda conexión con las raíces ancestrales de la <b>Madre Tierra</b> para volver renovadas e integrar en nosotras la fuerza de la <b>Pachamama</b>.</p>
        </div>
        <div className='lg:w-2/9 md:w-2/7 w-2/3 flex flex-col items-center justify-center gap-3'>
          <BsAirplaneEngines className='text-8xl mb-7' />
          <span className='font-bold lg:text-lg md:text-md sm:text-sm text-dark-green'>Te gusta viajar sin preocuparte por nada</span>
          <p className='font-medium lg:text-lg md:text-md sm:text-sm'>Esta experiencia fue diseñada por mujeres para mujeres cuidando cada detalle para que puedas soltar el control y entregarte al disfrute.</p>
        </div>
        <div className='lg:w-2/9 md:w-2/7 w-2/3 flex flex-col items-center justify-center gap-3'>
          <IoIosPeople className='text-9xl' />
          <span className='font-bold lg:text-lg md:text-md sm:text-sm text-dark-green'>Buscas una experiencia transformadora y no querés hacerlo sola</span>
          <p className='font-medium lg:text-lg md:text-md sm:text-sm'>Estuve en tu lugar queriendo viajar, sin tener con quien, pero con ganas de compartir. Ese deseo me fue llevando a crear estos espacios para cumplir nuestros sueños y hacerlo juntas, de la mano, en tribu.</p>
        </div>
      </div>
      <Button text='ME SUMO!' variant='dark'/>
    </div>
  )
}

export default MachuPichuHook
