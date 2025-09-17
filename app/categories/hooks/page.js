'use client';

import Popup from '@/app/components/PopupCode';
import { useState, useEffect, useRef } from 'react';

const HookExample = ({ title, children }) => (
    <div className="p-4 bg-gray-700  shadow rounded mb-6">
        <h2 className="text-lg font-semibold mb-3 text-blue-500 dark:text-blue-400">{title}</h2>
        {children}
    </div>
);

export default function Hooks() {
    const [popup, setPopup] = useState(false);
    // useState - contador
    const [count, setCount] = useState(0);

    // useEffect - temporizador
    const [time, setTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // useRef - enfocar input
    const inputRef = useRef(null);
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const code = `'use client';
import { useState, useEffect, useRef } from 'react';

const HookExample = ({ title, children }) => (
  <div className="p-4 bg-gray-700  shadow rounded mb-6">
    <h2 className="text-lg font-semibold mb-3 text-blue-500 dark:text-blue-400">{title}</h2>
    {children}
  </div>
);

export default function Hooks() {
  // useState - contador
  const [count, setCount] = useState(0);

  // useEffect - temporizador
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // useRef - enfocar input
  const inputRef = useRef(null);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Ejemplos de React Hooks
        <Popup/>
      </h1>

      {/* useState */}
      <HookExample title="useState - Contador">
        <p className="mb-4 text-gray-200">
          Contador actual: <span className="font-bold">{count}</span>
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          Incrementar
        </button>
      </HookExample>

      {/* useEffect */}
      <HookExample title="useEffect - Temporizador">
        <p className="text-gray-300 mb-2">
          Tiempo transcurrido: <span className="font-semibold">{time}s</span>
        </p>
        <p className="text-sm text-gray-400 italic">
          Este contador se actualiza cada segundo usando <code className="bg-gray-600 px-1 rounded">useEffect</code>.
        </p>
      </HookExample>

      {/* useRef */}
      <HookExample title="useRef - Foco en input">
        <input
          ref={inputRef}
          type="text"
          placeholder="Haz clic para enfocarme"
          className="border border-gray-400 dark:border-gray-600 px-3 py-2 rounded w-full max-w-sm mb-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <button
          onClick={focusInput}
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition cursor-pointer"
        >
          Enfocar Input
        </button>
      </HookExample>
    </div>
  );
}`;

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-xl font-bold mb-4">React Hooks
                <button
                    onClick={() => setPopup(true)}
                    className="bg-amber-400 hover:bg-amber-400/80 cursor-pointer text-xs px-3 py-2 ml-2 rounded"
                >
                    Ver código
                </button>
            </h1>

            {/* useState */}
            <HookExample title="useState - Contador">
                <p className="mb-4 text-gray-200">
                    Contador actual: <span className="font-bold">{count}</span>
                </p>
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                >
                    Incrementar
                </button>
            </HookExample>

            {/* useEffect */}
            <HookExample title="useEffect - Temporizador">
                <p className="text-gray-300 mb-2">
                    Tiempo transcurrido: <span className="font-semibold">{time}s</span>
                </p>
                <p className="text-sm text-gray-400 italic">
                    Este contador se actualiza cada segundo usando <code className="bg-gray-600 px-1 rounded">useEffect</code>.
                </p>
            </HookExample>

            {/* useRef */}
            <HookExample title="useRef - Foco en input">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Haz clic para enfocarme"
                    className="border border-gray-400 dark:border-gray-600 px-3 py-2 rounded-l w-full max-w-sm mb-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <button
                    onClick={focusInput}
                    className="bg-blue-500 text-white px-5 py-2.5 rounded-r hover:bg-blue-400 transition cursor-pointer"
                >
                    Enfocar Input
                </button>
            </HookExample>
            {popup && (
                <Popup description={code} onClose={()=>setPopup(false)}/>
            )}
        </div>
    );
}
