import React from 'react'
import { Link } from 'react-router-dom'
import materialestudio from '../assets/materialestudio.jpg'
import categorias from '../assets/categorias.png'



export const HomePage = () => {
  return (
    <div>
      <h1 className='text-3xl text-center my-6 md:mt-16'>Página principal</h1>

      <div className='flex flex-col mx-auto md:p-8 md:w-96 md:mt-12 md:border-8'>

        <Link to={'/materialApoyo'} className={`py-1 w-80 mx-auto flex flex-col jusify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden
                      bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105 md:py-2`} >

          <div className='flex justify-center items-center h-48'>
            <img src={materialestudio} alt="material-Estudio" className='w-auto' />
          </div>

          <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5 text-center '>Material de apoyo</h1>
        </Link>

        <Link to={'/category/list'} className={`w-80 mx-auto flex flex-col jusify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden
                      bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105`} >

          <div className='p-5 flex justify-center items-center h-48'>
            <img src={categorias} alt="material-Estudio" className='w-auto' />
          </div>

          <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5 text-center'>Practicar por categorías</h1>
        </Link>

      </div>
    </div>

  )
}

