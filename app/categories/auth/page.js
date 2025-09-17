'use client';

import { useState, useEffect } from 'react';
import PopupCode from '@/app/components/PopupCode';

const HookExample = ({ title, children }) => (
    <div className="p-4 bg-gray-700 shadow rounded mb-6">
        <h2 className="text-lg font-semibold mb-3 text-blue-500 dark:text-blue-400">{title}</h2>
        {children}
    </div>
);

export default function Hooks() {
    const [popup, setPopup] = useState(false);
    // VERIFICACION 1: Simulación simple de login
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '1234') {
            setUser({ username: 'admin' });
            setErrorMsg('');
        } else {
            setErrorMsg('Usuario o contraseña incorrectos');
        }
    };

    // VERIFICACION 2: Validar email simple
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(null);

    useEffect(() => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (email === '') {
            setEmailValid(null);
        } else {
            setEmailValid(emailRegex.test(email));
        }
    }, [email]);


    const code = `'use client';

import { useState, useEffect } from 'react';

const HookExample = ({ title, children }) => (
  <div className="p-4 bg-gray-700 dark:bg-gray-800 shadow rounded mb-6">
    <h2 className="text-lg font-semibold mb-3 text-blue-500 dark:text-blue-400">{title}</h2>
    {children}
  </div>
);

export default function Hooks() {
  // VERIFICACION 1: Simulación simple de login
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      setUser({ username: 'admin' });
      setErrorMsg('');
    } else {
      setErrorMsg('Usuario o contraseña incorrectos');
    }
  };

  // VERIFICACION 2: Validar email simple
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(null);

  useEffect(() => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (email === '') {
      setEmailValid(null);
    } else {
      setEmailValid(emailRegex.test(email));
    }
  }, [email]);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4 text-gray-900">React Auth</h1>

      {/* Verificación 1: Login simple */}
      <HookExample title="Verificación - Login simple">
        {!user ? (
          <form onSubmit={handleLogin} className="space-y-4 m-auto max-w-sm text-center">
            {/* Tooltip / Hint */}
            <div className="text-sm text-gray-300 italic bg-gray-600 p-2 rounded">
              Prueba con usuario: <strong>admin</strong> y contraseña: <strong>1234</strong>
            </div>

            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 rounded border bg-gray-300"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded border bg-gray-300"
            />
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Iniciar sesión
            </button>
          </form>
        ) : (
          <p className="text-green-400 font-semibold">¡Bienvenido, {user.username}!</p>
        )}
      </HookExample>

      {/* Verificación 2: Validación de email */}
      <HookExample title="Verificación - Validación de Email">
        <input
          type="email"
          placeholder="Introduce tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded border bg-gray-300 mb-2"
        />
        {emailValid === null ? (
          <p className="text-gray-400 italic">Introduce un email para validar</p>
        ) : emailValid ? (
          <p className="text-green-400 font-semibold">Email válido ✅</p>
        ) : (
          <p className="text-red-500 font-semibold">Email inválido ❌</p>
        )}
      </HookExample>
    </div>
  );
}`;

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-xl font-bold mb-4 text-gray-900">React Auth
                <button onClick={() => setPopup(true)} className='bg-amber-400 hover:bg-amber-400/80 cursor-pointer text-xs px-3 py-2 ml-2 rounded'>Ver código</button>
            </h1>

            {/* Verificación 1: Login simple */}
            <HookExample title="Verificación - Login simple">
                {!user ? (
                    <form onSubmit={handleLogin} className="space-y-4 m-auto max-w-sm text-center">
                        {/* Tooltip / Hint */}
                        <div className="text-sm text-gray-300 italic bg-gray-600 p-2 rounded">
                            Prueba con usuario: <strong>admin</strong> y contraseña: <strong>1234</strong>
                        </div>

                        <input
                            type="text"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 rounded border bg-gray-300"
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 rounded border bg-gray-300"
                        />
                        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                        >
                            Iniciar sesión
                        </button>
                    </form>
                ) : (
                    <p className="text-green-400 font-semibold">¡Bienvenido, {user.username}!</p>
                )}
            </HookExample>

            {/* Verificación 2: Validación de email */}
            <HookExample title="Verificación - Validación de Email">
                <input
                    type="email"
                    placeholder="Introduce tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded border bg-gray-300 mb-2"
                />
                {emailValid === null ? (
                    <p className="text-gray-400 italic">Introduce un email para validar</p>
                ) : emailValid ? (
                    <p className="text-green-400 font-semibold">Email válido ✅</p>
                ) : (
                    <p className="text-red-500 font-semibold">Email inválido ❌</p>
                )}
            </HookExample>
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
