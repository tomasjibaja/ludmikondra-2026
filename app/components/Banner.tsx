import React from 'react'

interface ChildProps {
  src: string;
}

const Banner = ({ src }: ChildProps) => {
  return (
    <div className="h-120 max-w-screen overflow-hidden">
        <img className="lg:w-full object-cover" src={`${src}`} alt="banner img"/>
    </div>
  )
}

export default Banner
