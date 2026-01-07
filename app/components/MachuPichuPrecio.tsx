import React from 'react'
import { BiSolidBadgeDollar, BiSolidCheckCircle } from "react-icons/bi";
import { RiCloseCircleFill } from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
import Button from './Button';


const MachuPichuPrecio = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center bg-creamy text-dark-green pt-10 pb-20 px-10'>
      <h2 className="font-bold xl:text-4xl lg:text-3xl text-2xl max-w-4/5 text-center my-10">
        PRECIO DEL VIAJE
      </h2>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className='lg:text-5xl text-3xl font-semibold'>$ <b className='font-bold lg:text-6xl text-4xl'>2800</b> USD.-</h2>
        <span className='lg:text-xl'>Por persona - Base doble</span>
        <span className='lg:text-lg text-center font-medium text-dark-green'><b>Señá tu cupo con 350 USD</b> y armá tu plan de pago personalizado en cuotas<br/>mensuales o bimensuales, el último pago se realiza al llegar a Cusco</span>
      </div>
      <div className='relative flex flex-col items-center justify-center gap-2 my-10 lg:py-10 py-7 lg:px-20 px-10 bg-leaf-green rounded-xl text-lima shadow-xl'>
        <BiSolidBadgeDollar className='absolute top-5 right-5 animate-pulse lg:text-7xl text-3xl' />
        <span className='lg:text-2xl'>VALOR LANZAMIENTO</span>
        <span className='lg:text-6xl text-2xl font-semibold flex items-center gap-2'>$ <b className='font-bold lg:text-7xl text-5xl'>2500</b> USD.-</span>
        <span>hasta el <b>31/01/26</b></span>
      </div>
      <span className='lg:text-xl text-center font-medium text-leaf-green'><span className='font-bold'>FORMA DE PAGO: </span>Dólar billete,<br />transferencia en USD  dentro de Argentina<br />o transferencia internacional</span>
      <span className='lg:text-xl font-semibold text-center'>CUPOS LIMITADOS HASTA 14 PASAJERAS</span>
      <span className='lg:text-xl font-semibold text-center'>CIERRE DE INSCRIPCIÓN 30 DE MARZO 2026</span>
      <Button text='RESERVAR' variant='dark'/>
      <div className='flex md:flex-row flex-col md:items-start items-center justify-evenly text-center pt-10 w-4/5 md:gap-0 gap-10'>
        <div className='lg:w-4/9 md:w-3/7 w-full flex flex-col items-start justify-center gap-3'>
          <div className='flex items-center justify-center gap-4'>
            <FaRegSquareCheck className='inline lg:text-3xl text-leaf-green' />
            <span className='font-extrabold lg:text-lg md:text-md sm:text-sm text-dark-green'>QUÉ INCLUYE</span>
          </div>
          <ul className='font-medium lg:text-lg md:text-md sm:text-sm text-left *:mb-4'>
            <li>11 noches de alojamiento en hoteles 3 estrellas con media pensión</li>
            <li>Traslados: aeropuerto-hotel, tren de Cusco a Machu Pichu, subida y bajada a Machu Pichu, bus cama Cusco-Puno, bus hacia todas las actividades</li>
            <li>Todas las actividades mencionadas: excursiones, yoga y meditación</li>
            <li>Guía oficial de turismo</li>
            <li>Asistencia permanente durante su visita por Parte de Bea y Ludmi</li>
            <li>Boletos de ingresos a las actividades mencionadas</li>
          </ul>
        </div>
        <div className='md:w-[1px] md:h-120 md:mx-20 w-0 bg-dark-green place-self-center' ></div>
        <div className='lg:w-4/9 md:w-3/7 w-full flex flex-col items-start justify-center gap-3'>
          <div className='flex items-center justify-center gap-4'>
            <FaRegWindowClose className='inline lg:text-3xl text-leaf-green' />
            <span className='font-extrabold lg:text-lg md:text-md sm:text-sm text-dark-green'>QUÉ NO INCLUYE</span>
          </div>
          <ul className='font-medium lg:text-lg md:text-md sm:text-sm md:h-100 text-left *:mb-4'>
            <li>1 comida diaria según programa será almuerzo o cena (se calcula 150usd aprox en todo el viaje)</li>
            <li>Pasaje internacional (si viajas desde Argentina podrás salir con el grupo, precio a confirmar)</li>
            <li>Propinas</li>
          </ul>
        </div>
      </div>
      <Button text='AGENDAR LLAMADA' variant='dark'/>
    </div>
  )
}

export default MachuPichuPrecio