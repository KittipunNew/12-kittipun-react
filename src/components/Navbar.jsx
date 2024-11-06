import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='p-5 flex justify-end gap-10 font-bold border-b-4'>
        <Link to='/' className='hover:text-green-300'>Home</Link>
        <Link to='/owner' className='hover:text-green-300' >Owner</Link>
    </nav>
  )
}

export default Navbar
