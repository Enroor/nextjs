import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center bg-gray-50 p-4"
      id="hero"
    >
      <Image
        src="/profile.png"
        alt="Foto de perfil"
        className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover"
        width={128} height={128}
      />
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        ¡Hola! Soy <span className="text-blue-600">Quique</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-xl">
        Desarrollador Frontend especializado en crear webs modernas, rápidas y accesibles.
      </p>
      <p className="mt-2 text-base italic text-gray-500 dark:text-gray-400 max-w-xl">
        &quot;Curioso, autodidacta y con ganas de seguir creciendo profresionalmente.&quot;
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Ver Proyectos
        </a>
        <a
          href="/contact"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
