import { Carousel } from 'antd';

export default function MachuPichuCarrousel () {

  return (
    <div className="relative h-200 w-full mb-10">
      <Carousel autoplay arrows speed={700} className='p-7 bg-leaf-green-50'>
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
      <div className="w-full bg-lima h-50 flex items-center justify-evenly flex-col">
        <span className="text-dark-green text-center text-xl max-w-2/3 font-medium">
          Este es un viaje de poder para mujeres que sienten el llamado.<br /><br />
          Una experiencia de activación interior en uno de los centros energéticos más poderosos del planeta.
        </span>
      </div>
    </div>
  )
}