import React from 'react'
//import { Link } from 'react-router-dom'
import slogan from '../page/images/slogan5.png'

export const Navbar = () => {
  return (
    <section className="h-full bg-blue-800 flex items-center justify-center flex-col text-white text-center p-5" >
      <img src={slogan} alt="Logo del sitio" width={110} height={110} className="mb-6" />
      <h1 className="text-4xl font-bold mb-4">Simulacros y Material de Estudio</h1>
      <p className="text-lg max-w-xl">Prepárate para los concursos de mérito con contenido actualizado, práctico y confiable.</p>
    </section >
  )
}



