"use client";

const scriptURL = 'https://script.google.com/macros/s/AKfycby1vilZMcUQWO070WIQd6ywwb-rp7CRDP8seKr0l1Oq_LjU6gSOopxU8oer0aLf_ZyE/exec'

const ModalForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, {
      method: "POST",
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Headers": "*",
      },
      body: (`Name=${e.target.name.value}&Email=${e.target.email.value}`)
    }).then(res => res.text()).then(data => {
      alert(data)
    }).catch(error => console.log(error))
  }

  return (
    <div className="w-full h-full top-0 left-0 flex flex-col items-center justify-center fixed z-0 bg-leaf-green-50">
      <div className="flex flex-col items-center justify-evenly md:w-1/3 w-3/4 md:h-1/3 h-1/2 bg-leaf-green text-lima shadow-lg rounded-md px-10">
        <span className="text-center">Ingresa un mail válido para facilitarte el itinerario</span>
        <form id="submit-to-google-sheet" className="flex flex-col items-center justify-evenly" onSubmit={handleSubmit}>
          <div className="w-full">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre y apellido"
              required
              className="block bg-lima rounded-sm text-dark-green p-1"
            />
          </div>
          <div className="w-full">
            <label htmlFor="mail">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="block bg-lima rounded-sm text-dark-green p-1"
            />
          </div>
          <button type="submit" className="my-5 bg-dark-green border-2 rounded-sm px-4 py-1 cursor-pointer duration-500 hover:bg-leaf-green">
            ENVIAR
          </button>
        </form>
      </div>
        
    </div>
  );
};

export default ModalForm;
