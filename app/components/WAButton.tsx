'use client'
import { IoLogoWhatsapp } from "react-icons/io";

const WAButton = () => {
  return (
    <div onClick={() => window.open('https://wa.link/6065w0', '_blank')}>
      <IoLogoWhatsapp className="fixed md:bottom-10 bottom-5 md:right-10 right-5 text-4xl text-leaf-green z-10 bg-white p-1 w-15 h-15 rounded-lg shadow-lg cursor-pointer" />
    </div>
  )
}

export default WAButton
