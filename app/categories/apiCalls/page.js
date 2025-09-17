"use client"
import React, { useState } from 'react';
import ListaUsuariosFetch from './ListaUsuariosFecth';
import ListaUsuariosAxios from './ListaUsuariosAxios';

const ApiCalls = () => {
    const [tabs, setTabs] = useState('fetch');

    return (
        <div className='container'>
            <button
                onClick={(tabs) => setTabs('fetch')}
                className={`px-4 py-2 mb-3 font-bold text-sm rounded cursor-pointer hover:opacity-95 ${tabs === 'fetch'
                    ?  'bg-blue-600 text-white'
                    : 'border border-blue-600 text-blue-600 bg-white'
                    }`}
            >
                FETCH
            </button>
            <button
                onClick={(tabs) => setTabs('axios')}
                className={`px-4 py-2 ml-2 mb-3 font-bold text-sm rounded cursor-pointer hover:opacity-95 ${tabs === 'axios'
                        ? 'bg-blue-600 text-white' 
                        : 'border border-blue-600 text-blue-600 bg-white'
                    }`}
            >
                AXIOS
            </button>
            {tabs == 'fetch' ?
                <ListaUsuariosFetch />
                :
                <ListaUsuariosAxios />
            }
        </div>
    );
}

export default ApiCalls;
