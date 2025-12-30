import { Carousel } from 'antd';

export default function MachuPichuCarrousel () {

  return (
    <div className="relative h-180 overflow-hidden">
      <Carousel autoplay arrows speed={700}>
        <div>
          <img className='h-150 w-full object-cover' src="./mp-carousel/4.png" alt="machupichu" />
        </div>
        <div>
          <img className='h-150 w-full object-cover' src="./mp-carousel/5.png" alt="machupichu" />
        </div>
        <div>
          <img className='h-150 w-full object-cover' src="./mp-carousel/6.png" alt="machupichu" />
        </div>
        <div>
          <img className='h-150 w-full object-cover' src="./mp-carousel/7.png" alt="machupichu" />
        </div>
        <div>
          <img className='h-150 w-full object-cover' src="./mp-carousel/8.png" alt="machupichu" />
        </div>
        <div>
          <img className='h-150 w-full object-cover' src="./mp-carousel/9.png" alt="machupichu" />
        </div>
      </Carousel>
      <div className="w-screen p-2 bg-lima h-30 bottom-0 flex items-center justify-evenly flex-col">
        <span className="max-w-2/3 text-dark-green text-center text-xl">
          Viví un viaje para mujeres que buscan conectar con la sanación de la naturaleza
        </span>
      </div>
    </div>
  )
}