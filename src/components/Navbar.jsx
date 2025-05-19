import React from 'react'
import { Link } from 'react-router-dom'
import slogan from '../page/images/slogan5.png'

export const Navbar = () => {
  return (
    <header className='bg-gray py-5 flex justify-center  '>
      <Link to='/'>
        <div className='text-white text-2x1 font-bold transition-all duration-500 '> <img className='h-30 w-96 object-cover' src={slogan} alt="" /></div>
      </Link>
      

    </header>
  )
}
