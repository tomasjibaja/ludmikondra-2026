import React from 'react'

const MachuPichuBio = () => {
  return (
    <div className="text-white bg-lavanda flex md:flex-row flex-col items-center justify-evenly py-20 mt-0 md:gap-0 gap-4">
      <div className='md:w-1/3 w-4/5'>
        <img className='object-cover' src="./machu-pichu-llama.jpg" alt="ludmi" />
      </div>
      <div className='md:w-1/2 md:text-lg sm:text-md flex w-4/5 flex-col items-start justify-center gap-4'>
        <h3 className='lg:text-4xl text-2xl'>GUÍA Y FACILITADORA</h3>
        <h4 className='lg:text-3xl text-xl font-medium'>Ludmila Kondratzky</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus corporis, similique provident excepturi, ex nobis voluptatum ratione eligendi sequi, possimus consectetur? Provident quis tempora aliquid, aperiam aut deserunt obcaecati! Repellat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, facere nostrum aperiam natus suscipit iusto, numquam reiciendis quidem dolores dolorum vitae consequuntur rerum voluptas, perspiciatis laborum. Libero autem minima repellat?</p>
      </div>
    </div>
  )
}

export default MachuPichuBio