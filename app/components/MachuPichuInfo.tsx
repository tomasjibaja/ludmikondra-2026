export default function MachuPichuInfo () {
  return (
    <div className="flex items-center justify-center bg-creamy overflow-hidden w-full">
      <div className="hidden lg:inline w-2/5">
        <img className="object-cover h-220" src='./machu-pichu-casa.jpg' alt='machu-pichu' />
      </div>
      <div className="relative flex flex-col items-center justify-center md:gap-4 gap-2 md:px-20 px-10 py-10 text-dark-green lg:w-3/5 lg:max-h-220">
        <h3 className="font-bold md:text-2xl text-xl mb-10 text-left">EL LLAMADO DE LA TIERRA</h3>
        <b className="xl:text-lg text-md ">En lo alto de las montañas sagradas, donde la Tierra late con fuerza ancestral y el tiempo parece detenerse, se abre un portal de reconexión profunda. </b>
        <p className="xl:text-lg text-md "><b>Al caminar por tierras andinas, volvemos al origen</b>. 
        Permitimos que la energía de la Pachamama nos sostenga, limpie y recuerde quienes somos. Cada paso, cada silencio, cada respiración en estas montañas despierta <b>memorias antiguas y una sabiduría que habita en nosotros</b>.</p>
        <b className="xl:text-lg text-md ">Este viaje no es solo hacia un destino físico. Es hacia el corazón de tu 
        propia esencia en conexión con el latido de la Pachamama.</b>
        <div className="flex flex-col sm:flex-row items-center justify-center md:gap-4 gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="xl:text-lg text-md ">Lo hacemos juntas, en tribu, para sanar con la medicina de la alegría,
            el placer, y el compartir sentido y liviano en un espacio de amor y cuidado.</p>
            <b className="xl:text-lg text-md ">Te invito a descubrirnos juntas recorriendo cada misterioso rincón del Valle sagrado de los Incas latiendo al unísono con el corazón del universo.</b>
          </div>
          <img className="h-36 px-5 mt-10 sm:mt-0" src="./machu-pichu-postal.png" alt="postcard" />
        </div>
      </div>
    </div>
  )
}