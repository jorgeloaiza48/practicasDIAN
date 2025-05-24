/* Código original, hecho por mi */

/* 
import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryCard = ({ category, alt, src, gradientColor,cantidadPreguntas }) => {
    return (
        <div className=''>
            <div className={`m-6 w-64 mx-auto flex flex-col bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r ${gradientColor} transition-all hover:scale-105 `}>
                <Link to={`/category/${category}`}  >

                    <div className='p-5 flex justify-center items-center'>
                        <img src={src} alt={`categoria ${alt}`} className='w-36' />
                    </div>
                    
                    <h1 className='text-center text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>{category}  <p className='text-xs text-right'>({cantidadPreguntas.length} preguntas)</p></h1>
                   
                </Link>
            </div>
        </div>
    )
} 
*/


import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryCard = ({ category, alt, src, gradientColor, cantidadPreguntas }) => {
  return (
    <div className={`m-6 w-64 mx-auto flex flex-col rounded-2xl overflow-hidden bg-gradient-to-r ${gradientColor} bg-slate-500 transition-transform hover:scale-105`}>
      <Link to={`/category/${category}`}>
        <div className="p-5 flex justify-center items-center">
          <img src={src} alt={`Icono de la categoría ${alt}`} className="w-36" />
        </div>

        <h1 className="text-center text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
          {category}{' '}
          <span className="text-xs float-right">({cantidadPreguntas.length} preguntas)</span>
        </h1>
      </Link>
    </div>
  )
}
