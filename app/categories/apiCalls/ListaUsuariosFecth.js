import SearchBar from "@/app/components/SearchBar";
import { useEffect, useState } from "react";
import PopupCode from "@/app/components/PopupCode";

export default function ListaUsuariosFetch() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filtro, setFiltro] = useState('')
    const [popup, setPopup] = useState(false);

    useEffect(() => {

        const fetchUsuarios = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')

                if (!res.ok) throw new Error('Error al obtener usuarios')

                const data = await res.json()
                setUser(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchUsuarios()
    }, [])

    if (loading) return <p className="text-gray-600">Cargando usuarios...</p>
    if (error) return <p className="text-red-600">Error: {error}</p>

    const usuariosFiltrados = user.filter((u) =>
        u.name.toLowerCase().includes(filtro.toLowerCase()) ||
        u.email.toLowerCase().includes(filtro.toLowerCase())
    )

    const code = `import SearchBar from "@/app/components/SearchBar";
import { useEffect, useState } from "react";
import PopupCode from "@/app/components/PopupCode";

export default function ListaUsuariosFetch() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filtro, setFiltro] = useState('')
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                //API pública para testear
                const res = await fetch('https://jsonplaceholder.typicode.com/users')

                if (!res.ok) throw new Error('Error al obtener usuarios')

                const data = await res.json()
                setUser(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchUsuarios()
    }, [])

    if (loading) return <p className="text-gray-600">Cargando usuarios...</p>
    if (error) return <p className="text-red-600">Error: {error}</p>

    const usuariosFiltrados = user.filter((u) =>
        u.name.toLowerCase().includes(filtro.toLowerCase()) ||
        u.email.toLowerCase().includes(filtro.toLowerCase())
    )

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Llamada a API (Fetch)
                <button onClick={() => setPopup(true)} className='bg-amber-400 hover:bg-amber-400/80
                 cursor-pointer text-xs px-3 py-2 ml-2 rounded'>Ver código</button>
            </h2>
            {/* Input de búsqueda */}
            <SearchBar
                value={filtro}
                onChange={setFiltro}
                placeholder="Buscar por nombre o email..."
            />
            <ul className="flex flex-wrap">
                {usuariosFiltrados.map((user) => (
                    <li
                        key={user.id}
                        className="bg-white rounded shadow mb-4 w-full sm:w-[30%]
                         md:w-[27%] lg:w-[33%] min-w-[200px]"
                    >
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="text-sm text-gray-400">{user.company.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
`

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Llamada a API (Fetch)
                <button onClick={() => setPopup(true)} className='bg-amber-400 hover:bg-amber-400/80 cursor-pointer text-xs px-3 py-2 ml-2 rounded'>Ver código</button>
            </h2>
            {/* 🔍 Input de búsqueda */}
            <SearchBar
                value={filtro}
                onChange={setFiltro}
                placeholder="Buscar por nombre o email..."
            />
            <ul className="flex flex-wrap">
                {usuariosFiltrados.map((user) => (
                    <li
                        key={user.id}
                        className="bg-white rounded shadow mb-4 w-full sm:w-[30%] md:w-[27%] lg:w-[33%] min-w-[200px]"
                    >
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="text-sm text-gray-400">{user.company.name}</p>
                    </li>
                ))}
            </ul>
            {/* Mostrar popup */}
            {popup && (
                <PopupCode
                    description={code}
                    onClose={() => setPopup(false)}
                />
            )}
        </div>

    )
}