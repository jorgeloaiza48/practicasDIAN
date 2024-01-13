import React from 'react'
import { Link } from 'react-router-dom'
import materialestudio from '../assets/materialestudio.jpg'
import categorias from '../assets/categorias.png'



export const HomePage = () => {
  return (
    <div>
      <h1 className='text-3xl text-center mt-20'>Página principal</h1>

      <div className='flex justify-evenly items-center pt-44 w-3/4 mx-auto'>

        <Link to={'/materialApoyo'} className={`flex flex-col jusify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden
                      bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105 `} >

          <div className='p-5 flex justify-center items-center h-48'>
            <img src={materialestudio} alt="material-Estudio" className='w-auto' />
          </div>

          <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5 text-center '>Material de apoyo</h1>
        </Link>

        <Link to={'/category/list'} className={`flex flex-col jusify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden
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

