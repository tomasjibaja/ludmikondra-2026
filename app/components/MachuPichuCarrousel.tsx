import { Carousel } from 'antd';
import carrousel from '../data/carrousel'

export default function MachuPichuCarrousel () {

  return (
    <div className="relative w-full">
      <Carousel autoplay arrows speed={700} className='p-7 bg-leaf-green-50'>
        {
          carrousel.map((elem,index)=>{
            return (
              <div key={index}>
                <img className='aspect-video w-full object-cover' src={`${elem.src}`} alt="machupichu" />
              </div>
            )
          })
        }
      </Carousel>
      <div className="w-full bg-lima h-50 flex items-center justify-evenly flex-col">
        <span className="text-dark-green text-center lg:text-xl max-w-4/5 font-medium">
          Este es un viaje de poder para mujeres que sienten el llamado.<br /><br />
          Una experiencia de activación interior en uno de los centros energéticos más poderosos del planeta.
        </span>
      </div>
    </div>
  )
}