'use client'
import { BiSolidBadgeDollar } from "react-icons/bi";
import { PiNumberCircleOneBold, PiNumberCircleTwoBold, PiNumberCircleThreeBold } from "react-icons/pi";
import { FaRegWindowClose } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
import Button from './Button';
import LinkButton from './LinkButton';


const MachuPichuPrecio = () => {
  return (
    <div className='flex flex-col lg:gap-4 gap-7 items-center justify-center bg-creamy text-dark-green pt-10 pb-20 px-10'>
      <h2 className="font-bold xl:text-4xl lg:text-3xl text-2xl max-w-4/5 text-center md:mt-10">
        INVERTÍ EN VOS
      </h2>
      <div className='relative flex flex-col items-center justify-center gap-2 md:my-10 lg:py-10 py-7 lg:px-20 px-10 bg-leaf-green rounded-xl text-lima shadow-xl'>
        <BiSolidBadgeDollar className='absolute top-5 right-5 animate-pulse lg:text-5xl text-3xl' />
        <span className='lg:text-2xl text-xl text-center'>DESCUENTO EXCLUSIVO DE</span>
        <span className='lg:text-6xl text-2xl font-semibold flex items-center gap-2'>$ <b className='font-bold lg:text-7xl text-5xl'>150</b> USD.-</span>
        <span className='lg:text-lg text-md'>agendando tu llamada</span>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 rounded-xl border-1 border-leaf-green-50 lg:px-10 px-7 py-4 shadow-md'>
        <span className='lg:text-2xl text-center'>RESERVA HOY<br/>solo con</span>
        <h2 className='lg:text-5xl text-3xl font-semibold'>$ <b className='font-bold lg:text-6xl text-4xl'>350</b> USD.-</h2>
        <span className='lg:text-xl'>de seña y pagá en cuotas</span>
      </div>
      <span className='lg:text-xl text-center font-normal text-dark-green flex flex-col'>
        <b>Valor regular: $ 2800 USD.-</b>
        <span className="lg:text-lg font-medium text-center">Por persona - Base doble</span>
      </span>
      <LinkButton text='RESERVAR' variant='dark' link='#reservar'/>
      <div className='flex md:flex-row flex-col md:items-start items-center justify-evenly text-center pt-10 w-4/5 md:gap-0 gap-10'>
        <div className='lg:w-4/9 md:w-3/7 w-full flex flex-col items-start justify-center gap-3'>
          <div className='flex items-center justify-center gap-4'>
            <FaRegSquareCheck className='inline lg:text-3xl text-leaf-green' />
            <span className='font-extrabold lg:text-lg md:text-md sm:text-sm text-dark-green'>QUÉ INCLUYE</span>
          </div>
          <ul className='font-medium lg:text-lg md:text-md sm:text-sm text-left *:mb-4'>
            <li>11 noches alojamiento en hoteles 3 estrellas</li>
            <li>Traslados (aeropuerto, bus a todas las actividades, bus cama a Puno, tren a Machu Pichu)</li>
            <li>Media pensión</li>
            <li>Todas las actividades, excursiones y ceremonias</li>
            <li>Guía oficial de turismo</li>
            <li>Asistencia permanente de Ludmi y Bea</li>
            <li>Todos los ingresos a las actividades</li>
          </ul>
        </div>
        <div className='md:w-[1px] md:h-120 md:mx-20 w-0 bg-dark-green place-self-center' ></div>
        <div className='lg:w-4/9 md:w-3/7 w-full flex flex-col items-start justify-center gap-3'>
          <div className='flex items-center justify-center gap-4'>
            <FaRegWindowClose className='inline lg:text-3xl text-leaf-green' />
            <span className='font-extrabold lg:text-lg md:text-md sm:text-sm text-dark-green'>QUÉ NO INCLUYE</span>
          </div>
          <ul className='font-medium lg:text-lg md:text-md sm:text-sm md:h-100 text-left *:mb-4'>
            <li>1 comida diaria</li>
            <li>Pasaje internacional (consultar por salida grupal desde Argentina)</li>
            <li>Propinas</li>
          </ul>
        </div>
      </div>
      <div className='mt-10 flex flex-col items-start justify-center md:w-3/5 w-full'>
        <span className='md:text-3xl text-xl font-bold mb-10' id='reservar'>¿Cómo reservo mi lugar?</span>
        <div className='flex flex-col items-start justify-center text-lg font-medium'>
          <PiNumberCircleOneBold className='text-3xl text-leaf-green' />
          <span className='mb-5'>Agendá tu llamada para conocernos y hacer todas las preguntas que tengas</span>
          <PiNumberCircleTwoBold className='text-3xl text-leaf-green' />
          <span className='mb-5'>Después de la llamada te enviaremos el formulario de inscripción</span>
          <PiNumberCircleThreeBold className='text-3xl text-leaf-green' />
          <span className='mb-5'>Tu cupo se confirma cuando envíes el comprobante de pago de la reserva</span>
        </div>
      </div>
      <Button text='AGENDAR LLAMADA' variant='dark' onClick={() => window.open('https://wa.link/6065w0', '_blank')}/>
    </div>
  )
}

export default MachuPichuPrecio