import destinos from '../data/destinos'

export default function MachuPichuItinerario () {
  return (
    <div className="text-white bg-leaf-green flex flex-col items-center justify-center pt-20 mt-0">
      <h2 className="font-bold text-4xl">
        DESTINOS Y EXPERIENCIAS
      </h2>
      <span className="text-xl">
        Estos son los lugares que recorreremos
      </span>
      <div className="grid grid-cols-5 gap-7 p-20">
        {destinos.map((destino, index) => {
          return (
            <div className="h-65 flex flex-col items-center justify-between" key={index}>
              <img className='h-50 w-full object-cover border-1 border-lima duration-700 hover:brightness-125' src={`${destino.src}`} alt="imagen de itinerario" />
              <div className='flex items-center justify-center w-full h-15'>
                <span className="max-w-4/5 text-md font-medium font-hammersmith text-center">{destino.title}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}