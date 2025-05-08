import React from 'react'
import { MaterialEstudioCard } from './MaterialEstudioCard'
import { material_estudio_data } from './materialEstudioData'
import { Link } from 'react-router-dom'


export const MaterialEstudioList = () => {

    const material_estudio = material_estudio_data.map((material) => {

        return <MaterialEstudioCard data={material.titulo} url={material.url} image={material.image} />
    })


    return (
        <div>
            <h1 className='text-5xl text-center my-10 hover:text-blue-600 underline shadow-xl'>Material de Estudio</h1>
            <Link to={'/'}>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 sm:ml-2">Inicio</button>
            </Link>
            <div className='w-full h-auto max-w-full flex flex-wrap items-center justify-center p-8'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {material_estudio}
                </div>
            </div>
        </div>

    )
}
