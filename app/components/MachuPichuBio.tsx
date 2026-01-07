import React from 'react'

const MachuPichuBio = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-creamy text-dark-green pt-10 pb-20 px-10'>
      <h2 className="font-bold xl:text-4xl lg:text-3xl text-2xl max-w-4/5 text-center my-10">
        GUÍAN, FACILITAN Y ACOMPAÑAN
      </h2>
      <div className="flex md:flex-row flex-col items-center justify-evenly py-10 md:gap-0 gap-4">
        <div className='md:w-1/4 w-3/5 overflow-hidden border-2 '>
          <img className='object-cover' src="./ludmia.jpg" alt="foto ludmi" />
        </div>
        <div className='md:w-3/5 lg:text-lg md:text-md sm:text-sm flex w-3/5 flex-col items-start justify-center'>
          <h4 className='lg:text-2xl text-xl font-semibold'>Ludmi Kondra, <span className='font-bold text-lg text-leaf-green'>Argentina</span></h4>
          <p>Instructora de técnicas de meditación, respiración, Hatha Yoga, y canto devocional (mantras).</p>
          <p>Maestra de Registros Akashicos y radiestesia, Tarotista.</p>
          <p>Lleva 15 años compartiendo estas herramientas y acompañando mujeres en sus procesos de transformación y sanación tanto en sesiones individuales o grupales, formaciones, retiros y viajes a lugares sagrados como Capilla del Monte, India, y ahora también Bali y Machu Pichu.</p>
          <span className='font-bold'>“Creo en el poder transformador de los viajes y más si son en tribu”</span>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-evenly py-10 md:gap-0 gap-4">
        <div className='md:w-1/4 w-3/5 overflow-hidden border-2 '>
            <img className='object-cover' src="./bea.jpg" alt="foto bea" />
          </div>
        <div className='md:w-3/5 lg:text-lg md:text-md sm:text-sm flex w-3/5 flex-col items-start justify-center'>
            <h4 className='lg:text-2xl text-xl font-semibold'>Beatriz Lozano, <span className='font-bold text-lg text-leaf-green'>Perú</span></h4>
            <p className=''>Administradora de Servicios Turisticos - Gerente Colibri Inner Journeys.</p>
            <p className=''>Nos recibe en Cusco, su ciudad natal para acompañar nuestro viaje con su sabiduría ancestral.</p>
            <p className=''>Fue Iniciada en la Sagrada Tradición Andina Orden del Inkarri.</p>
            <p className=''>Se formó como Terapeuta Floral, Consteladora Familiar especializada en Terapia Individual Sistemica, Terapeuta de Experiencia Somática SE, Sanadora con Rosas, Master Reiki Sistema Usui Tibetano y Reiki Kundalini.</p>
            <p className=''>Realiza terapia de Sonido con Cristal Bowls Therapy ̈ y sanacion con Péndulo Hebreo, también es Tarotista Rider White.</p>
          </div>
        </div>
    </div>
  )
}

export default MachuPichuBio