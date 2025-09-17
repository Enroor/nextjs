'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';

// Se eliminó el estado 'showPopup' y la lógica asociada.
// El componente ahora depende completamente del padre para ser renderizado o no.
export default function Popup({ description, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(description);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  // La condición para renderizar (if !showPopup...) se elimina.
  // El componente padre se encargará de esto.

  return (
    // El onClick del fondo ahora solo llama a onClose.
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* El e.stopPropagation() evita que el clic en el contenido cierre el popup. Correcto! */}
      <div
        className="relative bg-white max-w-4xl w-full rounded-lg shadow-lg overflow-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white text-xl font-bold hover:text-pink-700 transition cursor-pointer"
        >
          ✕
        </button>

        {/* Botón copiar */}
        <button
          onClick={handleCopy}
          className="absolute top-3 right-12 flex items-center gap-1 text-white text-sm hover:text-green-400 transition cursor-pointer"
        >
          {copied ? (
            <>
              <CheckIcon className="w-4 h-4" />
              Copiado!
            </>
          ) : (
            <>
              <ClipboardDocumentIcon className="w-4 h-4" />
              Copiar
            </>
          )}
        </button>

        {/* Código con resaltado */}
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          showLineNumbers
          wrapLongLines
          customStyle={{
            borderRadius: '8px',
            fontSize: '0.85rem',
            paddingTop: '2rem',
            marginTop: '0',
            marginBottom: '0',
          }}
        >
          {description}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}