"use client"

import React, { useState } from 'react';
import FormBasic from './FormBasic';
import PopupCode from '@/app/components/PopupCode';

const Forms = () => {
    const [popup, setPopup] = useState(false);
    const code = `import { useState } from "react";

export default function FormularioBasico() {
//Estados que necesitamos para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pais: '',
    acepta: false,
    comentario: '',
    tipoUsuario: 'estudiante'
  });

  //Estado para mostrar los errores
  const [error, setError] = useState('');

  const handleChange = (e) => {
    //Extraemos los valores
    const { name, value, type, checked } = e.target;

    //Actualizamos el estado
    setFormData((prev) => ({
      ...prev, //Copia el estado anterior
      //[name]: actualiza el campo que disparó el evento, Si es checkbox usa checked
      [name]: type === 'checkbox' ? checked : value, 
    }));
  };

  //Envio de datos al pulsar el botón del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); //Previene recargar página al pulsar en enviar

    //Validación de inputs y demás
    if (!formData.nombre || !formData.email || !formData.pais) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('El email debe contener un "@"');
      return;
    }

    if (!formData.acepta) {
      setError('Debes aceptar los términos.');
      return;
    }

    setError('');
    //Enviamos datos del formulario
    alert(\`Formulario enviado:\\n\${JSON.stringify(formData, null, 2)}\`);

    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      pais: '',
      acepta: false,
      comentario: '',
      tipoUsuario: 'estudiante'
    });
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="min-w-96 bg-white rounded shadow"
      >
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-1 font-medium text-gray-500">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 
            focus:outline-none focus:ring-2 focus:ring-gray-900"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium text-gray-500">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 
            focus:outline-none focus:ring-2 focus:ring-gray-900"
            placeholder="example@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="pais" className="block font-medium mb-1 text-gray-500">
            País
          </label>
          <select
            id="pais"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 cursor-pointer"
          >
            <option value="">Selecciona tu país</option>
            <option value="argentina">Argentina</option>
            <option value="mexico">México</option>
            <option value="españa">España</option>
            <option value="colombia">Colombia</option>
          </select>
        </div>

        <div className="my-4">
          <label htmlFor="comentario" className="block mb-1 font-medium text-gray-500">
            Comentario:
          </label>
          <textarea
            id="comentario"
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 resize-none
             h-24 focus:outline-none focus:ring-2 focus:ring-gray-900"
            placeholder="Escribe un mensaje..."
          ></textarea>
        </div>

        <div className="my-4">
          <p className="mb-1 font-medium text-gray-500">Tipo de usuario:</p>
          <div className="flex">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="estudiante"
                name="tipoUsuario"
                value="estudiante"
                checked={formData.tipoUsuario === 'estudiante'}
                onChange={handleChange}
                className="mr-2 cursor-pointer"
              />
              <label htmlFor="estudiante" className="cursor-pointer">Estudiante</label>
            </div>

            <div className="flex items-center mb-2 ml-3">
              <input
                type="radio"
                id="profesional"
                name="tipoUsuario"
                value="profesional"
                checked={formData.tipoUsuario === 'profesional'}
                onChange={handleChange}
                className="mr-2 cursor-pointer"
              />
              <label htmlFor="profesional" className="cursor-pointer">Profesional</label>
            </div>
          </div>
        </div>

        <div className="flex items-center my-3">
          <input
            type="checkbox"
            id="acepta"
            name="acepta"
            checked={formData.acepta}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="acepta">Acepto los términos y condiciones</label>
        </div>

        {error && <p className="mb-4 text-red-600 font-semibold">{error}</p>}

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded
             hover:bg-blue-700 transition cursor-pointer"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
`;

    return (
        <div>
            <h2 className='text-xl font-bold mb-4'>
                Formulario Básico
                <button onClick={() => setPopup(true)} className='bg-amber-400 hover:bg-amber-400/80 cursor-pointer text-xs px-3 py-2 ml-2 rounded'>Ver código</button>
            </h2>
            {/* Formulario */}
            <FormBasic />

            {/* Mostrar popup */}
            {popup && (
                <PopupCode
                    description={code}
                    onClose={() => setPopup(false)}
                />
            )}
        </div>
    );
}

export default Forms;
