import { useEffect, useState } from "react";
//Descargar dependecias de AXIOS npm i --saved axios
import axios from "axios";
import PopupCode from "@/app/components/PopupCode";
import SearchBar from "@/app/components/SearchBar";

export default function ListaUsuariosAxios() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [popup, setPopup] = useState(false);
    const [filtro, setFiltro] = useState('')

    // Función para cargar usuarios
    const fetchUsers = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(data);
            setError("");
        } catch (err) {
            setError("Error al obtener los usuarios");
        } finally {
            setLoading(false);
        }
    };

    // Carga inicial
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !email) {
            alert("Nombre y Email son obligatorios");
            return;
        }

        try {
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/users",
                {
                    name: nombre,
                    email: email,
                }
            );

            alert(
                "Usuario enviado (fake): " + JSON.stringify(response.data, null, 2)
            );

            // Opcional: simular que lo agregamos a la lista
            setUsers((prev) => [...prev, response.data]);

            // Limpiar inputs
            setNombre("");
            setEmail("");
        } catch (err) {
            alert("Error al enviar usuario");
        }
    };

    if (loading) return <p className="text-gray-600">Cargando usuarios...</p>;
    if (error) return <p className="text-red-600">Error: {error}</p>;

    const usersFilters = users.filter((u) =>
        u.name.toLowerCase().includes(filtro.toLowerCase()) ||
        u.email.toLowerCase().includes(filtro.toLowerCase())
    )

    const code = `import { useEffect, useState } from "react";
//Descargar dependecias de AXIOS npm i --saved axios
import axios from "axios";
import PopupCode from "@/app/components/PopupCode";

export default function ListaUsuariosAxios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    // Función para cargar usuarios
    const fetchUsuarios = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsuarios(data);
            setError("");
        } catch (err) {
            setError("Error al obtener los usuarios");
        } finally {
            setLoading(false);
        }
    };

    // Carga inicial
    useEffect(() => {
        fetchUsuarios();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !email) {
            alert("Nombre y Email son obligatorios");
            return;
        }

        try {
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/users",
                {
                    name: nombre,
                    email: email,
                }
            );

            alert(
                "Usuario enviado (fake): " + JSON.stringify(response.data, null, 2)
            );

            // Opcional: simular que lo agregamos a la lista
            setUsuarios((prev) => [...prev, response.data]);

            // Limpiar inputs
            setNombre("");
            setEmail("");
        } catch (err) {
            alert("Error al enviar usuario");
        }
    };

    if (loading) return <p className="text-gray-600">Cargando usuarios...</p>;
    if (error) return <p className="text-red-600">Error: {error}</p>;

    return (
        <div className="mt-6 space-y-6">
            <h2 className="text-xl font-bold">
                Usuarios desde API (Axios)
            </h2>
             {/* Input de búsqueda */}
            <SearchBar
                value={filtro}
                onChange={setFiltro}
                placeholder="Buscar por nombre o email..."
            />
            {/* Lista de usuarios */}
            {loading ? (
                <p className="text-gray-600">Cargando usuarios...</p>
            ) : error ? (
                <p className="text-red-600">Error: {error}</p>
            ) : (
                <ul className="flex flex-wrap">
                    {usuarios.map((user) => (
                        <li
                            key={user.id}
                            className="bg-white rounded mb-4 shadow w-full
                             sm:w-[45%] md:w-[30%] lg:w-[22%] min-w-[200px]"
                        >
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                            <p className="text-sm text-gray-400">
                                {user?.company?.name || "Sin empresa"}
                            </p>
                        </li>
                    ))}
                </ul>
            )}

            {/* Formulario POST */}
            <div className="text-center flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-700 p-4 rounded shadow space-y-4 max-w-md"
                >
                    <h3 className="font-semibold text-lg text-white">Nuevo usuario</h3>

                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="w-full border border-gray-300 bg-white p-2 rounded"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 bg-white p-2 rounded"
                    />

                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded
                         hover:bg-green-700 transition cursor-pointer"
                    >
                        Añadir
                    </button>
                </form>
            </div>
        </div>
    );
}
       return (
        <div>
            <h2 className="text-xl font-bold mb-4">
                Usuarios desde API (Axios)
                <button
                    onClick={() => setPopup(true)}
                    className="bg-amber-400 hover:bg-amber-400/80 cursor-pointer 
                    text-xs px-3 py-2 ml-2 rounded"
                >
                    Ver código
                </button>
            </h2>
            {/*  Input de búsqueda */}
            <SearchBar
                value={filtro}
                onChange={setFiltro}
                placeholder="Buscar por nombre o email..."
            />
            {/*  Lista de usuarios */}
            {loading ? (
                <p className="text-gray-600">Cargando usuarios...</p>
            ) : error ? (
                <p className="text-red-600">Error: {error}</p>
            ) : (
                <ul className="flex flex-wrap mb-4">
                    {usersFilters.map((user) => (
                        <li
                            key={user.id}
                            className="bg-white rounded mb-4 shadow w-full 
                            sm:w-[45%] md:w-[30%] lg:w-[22%] min-w-[200px]"
                        >
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                            <p className="text-sm text-gray-400">
                                {user?.company?.name || "Sin empresa"}
                            </p>
                        </li>
                    ))}
                </ul>
            )}

            {/* Formulario POST */}
            <div className="text-center flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-700 p-4 rounded shadow space-y-4 max-w-md"
                >
                    <h3 className="font-semibold text-lg text-white">Nuevo usuario</h3>

                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="w-full border border-gray-300 bg-white p-2 rounded"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 bg-white p-2 rounded"
                    />

                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded
                         hover:bg-green-700 transition cursor-pointer"
                    >
                        Añadir
                    </button>
                </form>
            </div>
        </div>
    );
}
`

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">
                Usuarios desde API (Axios)
                <button
                    onClick={() => setPopup(true)}
                    className="bg-amber-400 hover:bg-amber-400/80 cursor-pointer text-xs px-3 py-2 ml-2 rounded"
                >
                    Ver código
                </button>
                {/* 🔘 Botón de recarga */}
                {/* <button
                    onClick={fetchUsuarios}
                    className="bg-amber-500 text-white text-xs ml-4 px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                >
                    Recargar usuarios
                </button> */}
            </h2>
            {/* 🔍 Input de búsqueda */}
            <SearchBar
                value={filtro}
                onChange={setFiltro}
                placeholder="Buscar por nombre o email..."
            />
            {/* 📄 Lista de usuarios */}
            {loading ? (
                <p className="text-gray-600">Cargando usuarios...</p>
            ) : error ? (
                <p className="text-red-600">Error: {error}</p>
            ) : (
                <ul className="flex flex-wrap mb-4">
                    {usersFilters.map((user) => (
                        <li
                            key={user.id}
                            className="bg-white rounded mb-4 shadow w-full sm:w-[45%] md:w-[30%] lg:w-[22%] min-w-[200px]"
                        >
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                            <p className="text-sm text-gray-400">
                                {user?.company?.name || "Sin empresa"}
                            </p>
                        </li>
                    ))}
                </ul>
            )}

            {/* 📬 Formulario POST */}
            <div className="text-center flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-700 p-4 rounded shadow space-y-4 max-w-md"
                >
                    <h3 className="font-semibold text-lg text-white">Nuevo usuario</h3>

                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="w-full border border-gray-300 bg-white p-2 rounded"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 bg-white p-2 rounded"
                    />

                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer"
                    >
                        Añadir
                    </button>
                </form>
            </div>
            {/* Mostrar popup */}
            {popup && (
                <PopupCode description={code} onClose={() => setPopup(false)} />
            )}
        </div>
    );
}
