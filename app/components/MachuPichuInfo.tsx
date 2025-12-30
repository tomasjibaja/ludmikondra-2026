export default function MachuPichuInfo () {
  return (
    <div className="flex items-center justify-center bg-white h-screen overflow-hidden">
      <img className="w-1/2" src='./machu-pichu-casa.jpg' alt='machu-pichu' />
      <div className="relative h-full flex flex-col items-center justify-center gap-4 px-30 py-20 text-leaf-green text-md">
        <h3 className="font-bold text-2xl mb-10">EL LLAMADO DE LA TIERRA</h3>
        <b>En lo alto de las montañas sagradas, donde la Tierra late con fuerza ancestral y el tiempo parece detenerse, se abre un portal de reconexión profunda. </b>
        <p><b>Al caminar por tierras andinas, volvemos al origen</b>. 
        Permitimos que la energía de la Pachamama nos sostenga, limpie y recuerde quienes somos. Cada paso, cada silencio, cada respiración en estas montañas despierta <b>memorias antiguas y una sabiduría que habita en nosotros</b>.</p>
        <b>Este viaje no es solo hacia un destino físico. Es hacia el corazón de tu 
        propia esencia en conexión con el latido de la Pachamama.</b>
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <p>Lo hacemos juntas, en tribu, para sanar con la medicina de la alegría,
            el placer, y el compartir sentido y liviano en un espacio de amor y cuidado.</p>
            <b>Te invito a descubrirnos juntas recorriendo cada misterioso rincón del Valle sagrado de los Incas latiendo al unísono con el corazón del universo.</b>
          </div>
          <img className="h-36 px-5" src="./machu-pichu-postal.png" alt="postcard" />
        </div>
      </div>
    </div>
  )
}