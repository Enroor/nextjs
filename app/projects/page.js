// components/Projects.jsx
import Image from "next/image";

const projects = [
  {
    title: "Clon de Netflix",
    description: "Aplicación clon de Netflix usando React y Firebase.",
    image: "/web_example.jpg",
    link: "#",
  },
  {
    title: "Dashboard Admin",
    description: "Panel de administración con Tailwind y Chart.js.",
    image: "/web_example.jpg",
    link: "#",
  },
  {
    title: "Portafolio Personal",
    description: "Este mismo portafolio construido con Next.js y Tailwind.",
    image: "/web_example.jpg",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white p-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Proyectos</h2>
        <p className="text-gray-600 mb-12">
          Aquí algunos de los proyectos que he desarrollado recientemente.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              rel="noopener noreferrer"
              className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                width={100}
                height={50}
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
