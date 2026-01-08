"use client";
import { FormEvent } from 'react';

const scriptURL = 'https://script.google.com/macros/s/AKfycbwaj4CajT3a3h8z9CM9bBrNarBwFn7AQAFF2-B0k-1O0eBaISDVd_g_ZH2n_WKHu1VHCw/exec'

const ModalForm = () => {

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Stop the default form submission and page reload

    const formData = new FormData(event.currentTarget);
    // You can process formData here or send it to an API route

    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="w-full h-full top-0 left-0 flex flex-col items-center justify-center fixed z-0 bg-leaf-green-50">
      <div className="flex flex-col items-center justify-evenly md:w-1/3 w-3/4 md:h-1/3 h-1/2 bg-leaf-green text-lima shadow-lg rounded-md px-10">
        <span className="text-center">Ingresa un mail válido para facilitarte el itinerario</span>
        <form id="submit-to-google-sheet" className="flex flex-col items-center justify-evenly" onSubmit={onSubmit}>
          <div className="w-full">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre y apellido"
              required
              className="block bg-lima rounded-sm text-dark-green p-1"
            />
          </div>
          <div className="w-full">
            <label htmlFor="mail">Email:</label>
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="Email"
              required
              className="block bg-lima rounded-sm text-dark-green p-1"
            />
          </div>
          <button type="submit" className="my-5 bg-dark-green border-2 rounded-sm px-4 py-1">
            ENVIAR
          </button>
        </form>
      </div>
        
    </div>
  );
};

export default ModalForm;
