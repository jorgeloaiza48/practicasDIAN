import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../page/images/logodian.png'

export const Navbar = () => {
  return (
    <header className='bg-gray py-5 flex justify-center'>
      <Link to='/'>
        <div className='text-white text-2x1 font-bold hover:scale-110 transition-all duartion-500'> <img src={logo} alt="" /></div>
      </Link>
      

    </header>
  )
}
