'use client'
import { BsBookmarkCheckFill } from "react-icons/bs";
import LinkButton from './LinkButton';

const MachuPichuHook = () => {
  return (
    <div className="text-dark-green bg-lima flex md:flex-row flex-col items-center justify-evenly pt-10 lg:pb-20 pb-10">
      <div className='flex flex-col w-3/4'>
        <h2 className="font-bold xl:text-4xl lg:text-3xl text-2xl max-w-4/5 text-center lg:my-20 my-10 text-left">
          Este viaje es para vos si...
        </h2>
        <div className='mb-9 relative border-l-3 border-double pl-2'>
          <BsBookmarkCheckFill className='absolute lg:text-3xl text-2xl top-1 left-[-40]' />
          <span className='font-bold lg:text-xl md:text-lg sm:text-md uppercase text-dark-green '>Sentís deseo de conectar con la energía de la Tierra y escuchar su susurro</span>
          <p className='font-medium lg:text-lg md:text-md sm:text-sm'>La energía de los Andes nos recibe para darnos fuerza, sostén y profunda conexión con las raíces ancestrales de la Madre Tierra para volver renovadas e integrar en nosotras la fuerza de la Pachamama.</p>
        </div>
        <div className='mb-9 relative border-l-3 border-double pl-2'>
          <BsBookmarkCheckFill className='absolute lg:text-3xl text-2xl top-1 left-[-40]' />
          <span className='font-bold lg:text-xl md:text-lg sm:text-md uppercase text-dark-green'>Te gusta viajar sin preocuparte por nada</span>
          <p className='font-medium lg:text-lg md:text-md sm:text-sm'>Esta experiencia fue diseñada por mujeres para mujeres cuidando cada detalle para que puedas soltar el control y entregarte al disfrute.</p>
        </div>
        <div className='mb-9 relative border-l-3 border-double pl-2'>
          <BsBookmarkCheckFill className='absolute lg:text-3xl text-2xl top-1 left-[-40]' />
          <span className='font-bold lg:text-xl md:text-lg sm:text-md uppercase text-dark-green '>Buscas una experiencia transformadora y no querés hacerlo sola</span>
          <p className='font-medium lg:text-lg md:text-md sm:text-sm'>Estuve en tu lugar queriendo viajar, sin tener con quien, pero con ganas de compartir. Ese deseo me fue llevando a crear estos espacios para cumplir nuestros sueños y hacerlo juntas, de la mano, en tribu.</p>
        </div>
        <div className="flex items-center justify-center">
          <LinkButton text='ME SUMO!' variant='dark' link="#reservar"/>
        </div>
      </div>
    </div>
  )
}

export default MachuPichuHook
