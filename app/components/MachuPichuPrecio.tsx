import React from 'react'
import { BiSolidBadgeDollar, BiSolidCheckCircle } from "react-icons/bi";
import { RiCloseCircleFill } from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";


const MachuPichuPrecio = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center bg-creamy text-dark-green pt-10 pb-20 px-10'>
      <h2 className="font-bold xl:text-4xl lg:text-3xl text-2xl max-w-4/5 text-center my-10">
        PRECIO DEL VIAJE
      </h2>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className='lg:text-5xl font-semibold'>$ <b className='font-bold lg:text-6xl'>2800</b> USD.-</h2>
        <span className='lg:text-xl'>Por persona - Base doble</span>
        <span className='lg:text-lg text-center font-medium text-dark-green'><b>Señá tu cupo con 350 USD</b> y armá tu plan de pago personalizado en cuotas<br/>mensuales o bimensuales, el último pago se realiza al llegar a Cusco</span>
      </div>
      <div className='relative flex flex-col items-center justify-center gap-2 my-10 py-10 px-20 bg-leaf-green rounded-xl text-lima shadow-xl'>
        <BiSolidBadgeDollar className='absolute top-5 right-5 animate-pulse lg:text-7xl' />
        <span className='lg:text-2xl'>VALOR LANZAMIENTO</span>
        <span className='lg:text-6xl font-semibold'>$ <b className='font-bold lg:text-7xl'>2500</b> USD.-</span>
        <span>hasta el <b>31/01/26</b></span>
      </div>
      <span className='lg:text-xl text-center font-medium text-leaf-green'><span className='font-bold'>FORMA DE PAGO: </span>Dólar billete,<br />transferencia en USD  dentro de Argentina<br />o transferencia internacional</span>
      <span className='lg:text-xl font-semibold'>CUPOS LIMITADOS HASTA 14 PASAJERAS</span>
      <span className='lg:text-xl font-semibold'>CIERRE DE INSCRIPCIÓN 30 DE MARZO 2026</span>
      <div className='flex md:flex-row flex-col items-center justify-evenly text-center px-5 pt-10 w-4/5 md:gap-0 gap-10'>
        <div className='lg:w-4/9 md:w-3/7 w-1/2 flex flex-col items-center justify-center gap-3'>
          <span className='font-bold lg:text-lg md:text-md sm:text-sm text-dark-green'>
            <FaRegSquareCheck className='inline lg:text-3xl' />
            {' '}INCLUYE
          </span>
          <ul className='font-medium lg:text-lg md:text-md sm:text-sm md:h-100'>
            <li>Blablablablabla blablabla</li>
            <li>Blablablablabla blablabla</li>
            <li>Blablablablabla blablabla</li>
            <li>Blablablablabla blablabla</li>
            <li>Blablablablabla blablabla</li>
            <li>Blablablablabla blablabla</li>
          </ul>
        </div>
        <div className='md:w-[1px] md:h-100 w-0 bg-dark-green' ></div>
        <div className='lg:w-4/9 md:w-3/7 w-1/2 flex flex-col items-center justify-center gap-3'>
          <span className='font-bold lg:text-lg md:text-md sm:text-sm text-dark-green'>NO INCLUYE
          </span>
          <ul className='font-medium lg:text-lg md:text-md sm:text-sm md:h-100'>
            <li>Blablablablabla blablabla</li>
            <li>Blablablablabla blablabla</li>
            <li>Blablablablabla blablabla</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MachuPichuPrecio