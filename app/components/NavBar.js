"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const router = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = [
    { text: "Home", path: "/" },
    { text: "Formularios", path: "/categories/forms" },
    { text: "API Calls", path: "/categories/apiCalls" },
    { text: "Hooks", path: "/categories/hooks" },
    { text: "Auth", path: "/categories/auth" },
    { text: "Componentes", path: "/categories/components" },
    { text: "Contacto", path: "/contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-200 sticky top-0 z-10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">QUIQUE.RO</Link>

          {/* Botón de hamburguesa solo visible en móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-200 hover:text-white dark:hover:text-gray-300 focus:outline-none transition-colors duration-300"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Menú visible en escritorio */}
          <ul className="hidden md:flex gap-4">
            {navItem.map((item, index) => (
              <li
                key={index}
                className={`${
                  router === item.path
                    ? "bg-gray-950/50 dark:bg-gray-700"
                    : ""
                } hover:bg-white/10 dark:hover:bg-white/20 text-gray-300 dark:text-gray-300 font-medium text-sm py-2 px-3 rounded transition-colors duration-300`}
              >
                <Link href={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú desplegable solo en móvil */}
        {menuOpen && (
          <ul className="md:hidden px-4 pb-4 space-y-2">
            {navItem.map((item, index) => (
              <li
                key={index}
                className={`${
                  router === item.path
                    ? "bg-gray-950/50 dark:bg-gray-700"
                    : ""
                } hover:bg-white/10 dark:hover:bg-white/20 text-gray-300 dark:text-gray-300 font-medium text-sm py-2 px-3 rounded transition-colors duration-300`}
              >
                <Link href={item.path} onClick={() => setMenuOpen(false)}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default NavBar;
