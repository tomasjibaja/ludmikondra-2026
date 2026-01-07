import React from 'react'

const MachuPichuPrecio = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-creamy text-dark-green pt-10 pb-20 px-10'>
      <h2 className="font-bold xl:text-4xl lg:text-3xl text-2xl max-w-4/5 text-center my-10">
        PRECIO
      </h2>
      <div className='flex md:flex-row flex-col items-center justify-evenly text-center px-5 pt-10 w-4/5 md:gap-0 gap-10'>
        <div className='lg:w-4/9 md:w-3/7 w-1/2 flex flex-col items-center justify-center gap-3'>
          <span className='font-bold lg:text-lg md:text-md sm:text-sm text-dark-green'>INCLUYE</span>
          <p className='font-medium lg:text-lg md:text-md sm:text-sm'>
            <ul className='md:h-100 list-disc'>
              <li>Blablablablabla blablabla</li>
              <li>Blablablablabla blablabla</li>
              <li>Blablablablabla blablabla</li>
              <li>Blablablablabla blablabla</li>
              <li>Blablablablabla blablabla</li>
              <li>Blablablablabla blablabla</li>
            </ul>
          </p>
        </div>
        <div className='md:w-[1px] md:h-100 w-0 bg-dark-green' ></div>
        <div className='lg:w-4/9 md:w-3/7 w-1/2 flex flex-col items-center justify-center gap-3'>
          <span className='font-bold lg:text-lg md:text-md sm:text-sm text-dark-green'>NO INCLUYE
          </span>
          <p className='font-medium lg:text-lg md:text-md sm:text-sm'>
            <ul className='md:h-100 list-disc'>
              <li>Blablablablabla blablabla</li>
              <li>Blablablablabla blablabla</li>
              <li>Blablablablabla blablabla</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MachuPichuPrecio