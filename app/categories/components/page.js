'use client'
import { useState } from "react";

function LikeButton({ label }) {
    const [likes, setLikes] = useState(0);

    return (
        <div className="my-4 p-2 bg-gray-900 hover:bg-gray-900/80 text-white cursor-pointer rounded w-1/4" onClick={() => setLikes(likes + 1)}>
            {label} 👍 {likes}
        </div>
    );
}

function TodoItem({ props }) {
    return <li><span className="font-bold">{props.id}</span>: {props.text}</li>;
}

const Page = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);
    const [idTask, setIdTask] = useState(0);

    const addTask = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;
        const newId = idTask + 1

        const newTask = {
            id: newId,
            text: task
        }

        setIdTask(newId);   
        setList([...list, newTask])
        setTask("")
    }

    return (
        <div>
            <h1 className='text-xl font-bold mb-2'>Componentes</h1>
            <div className="flex gap-4 flex-wrap justify-center">
                <LikeButton label="Frontend" />
                <LikeButton label="Backend" />
                <LikeButton label="UI/UX" />
            </div>
            <div className="mt-5 bg-gray-200 px-4 py-6 rounded">
                <h2 className="text-2xl text-gray-800 font-semibold mb-10 text-center underline">Lista de Tareas</h2>

                <div className="flex flex-wrap justify-center">
                    <form className="w-1/2" onSubmit={addTask}>
                        <input
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder="Escribe una tarea"
                            className="bg-white rounded-l px-2 py-1"
                        />
                        <button type="submit" className="bg-blue-600 hover:bg-blue-600/90  py-1 px-2 rounded-r text-white cursor-pointer">Agregar</button>
                    </form>

                    <ul className="border-l border-l-gray-500 w-1/2 pl-7">
                        {list.length ?
                            (list.map((item) => (
                                <TodoItem key={item.id} props={item} />
                            )))
                            :
                            (<li className="text-center">No hay tareas disponibles</li>)
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Page;
