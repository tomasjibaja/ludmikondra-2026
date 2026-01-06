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
            <div className=" flex flex-col items-center justify-center" key={index}>
              <img src={`${destino.src}`} alt="imagen de itinerario" />
              <span className="text-xl font-medium font-hammersmith">{destino.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}