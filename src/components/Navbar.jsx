import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='bg-gray-800 py-5 flex justify-center'>
      <Link to='/'>
        <h1 className='text-white text-2x1 font-bold hover:scale-110 transition-all duartion-500'>Quiz DIAN</h1>
      </Link>

    </header>
  )
}
