'use client'
import destinos from '../data/destinos'
import Button from './Button'

export default function MachuPichuItinerario () {
  return (
    <div className="text-white bg-leaf-green flex flex-col items-center justify-center pt-10 pb-20 mt-0">
      <h2 className="font-bold xl:text-4xl lg:text-3xl text-2xl max-w-4/5 text-center my-10">
        VAMOS A CONOCER Y EXPERIMENTAR
      </h2>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 gap-7 px-20 py-10">
        {destinos.map((destino, index) => {
          return (
            <div className="h-65 flex flex-col items-center justify-between" key={index}>
              <img className='h-50 w-full object-cover border-1 border-lima duration-700 hover:brightness-125 hover:shadow-xl shadow-lg' src={`${destino.src}`} alt="imagen de itinerario" />
              <div className='flex items-center justify-center w-full h-15'>
                <span className="max-w-4/5 text-md font-medium font-hammersmith text-center">{destino.title}</span>
              </div>
            </div>
          )
        })}
      </div>
      <Button text='DESCARGAR ITINERARIO' variant='lima' onClick={() => window.open('./p_data/MachuPichu-AGOSTO-26.pdf', '_blank')} />
    </div>
  )
}