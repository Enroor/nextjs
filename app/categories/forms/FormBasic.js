import { useState } from "react";

export default function FormularioBasico() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        pais: '',
        acepta: false,
        comentario: '',
        tipoUsuario: 'estudiante'
    })

    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.nombre || !formData.email || !formData.pais) {
            setError('Todos los campos son obligatorios.')
            return
        }

        if (!formData.email.includes('@')) {
            setError('El email debe contener un "@"')
            return
        }

        if (!formData.acepta) {
            setError('Debes aceptar los términos.')
            return
        }

        setError('')
        alert(`Formulario enviado:\n${JSON.stringify(formData, null, 2)}`)

        // Limpiar formulario
        setFormData({
            nombre: '',
            email: '',
            pais: '',
            acepta: false,
            comentario: '',
            tipoUsuario: 'estudiante'
        })
    }

    return (
        <div className="container">
            <form
                onSubmit={handleSubmit}
                className="min-w-96"
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
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
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
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="example@gmail.com"
                    />
                </div>

                <div>
                    <label htmlFor="pais" className="block font-medium mb-1 text-gray-500 focus:ring-gray-900">País</label>
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
                        className="w-full border border-gray-300 rounded p-2 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-gray-900"
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

                        <div className="flex items-center mb-2 ml-3 ">
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
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}
