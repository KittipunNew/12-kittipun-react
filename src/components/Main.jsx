import React from 'react'
import { Link } from 'react-router-dom'

function Main({prop}) {
    return (
        <div className='flex flex-col justify-center items-center text-5xl font-bold py-20'>
          <h1>Generation Thailand</h1>
          <h1>{prop}</h1>
          <div className='text-lg text-white flex gap-32 mt-14'>
            <Link to='/homeuser' className='bg-green-400 p-3 rounded-lg shadow-md transition-all duration-500 hover:bg-green-800'>User Home Sector</Link>
            <Link to='/adminhome' className='bg-green-400 p-3 rounded-lg shadow-md transition-all duration-500 hover:bg-green-800'>Admin Home Sector</Link>
          </div>
        </div>
      )
}

export default Main
