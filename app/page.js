'use client';

import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="text-center mt-10">
      {/* <h1 className="text-5xl text-transparent bg-clip-text gradient-text drop-shadow-md mb-6 font-extrabold">
        Bienvenido a NextJS
      </h1>
      <h5 className="text-gray-600 mb-10">Seleccione una categoría en el menú principal</h5> */}
      <Hero/>
    </div>
  );
}
