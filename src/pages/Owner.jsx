import React from 'react'
import { useState, useEffect } from 'react'
import image from '../image/IMG_1742.jpeg'

function Owner() {

    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
      setVisible(!isVisible)
    },[])

  return (
    <div className='flex justify-center'>
    <div className={`my-20 p-20 w-3/5 flex flex-col justify-center items-center shadow-md bg-green-100 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className='text-5xl font-bold mb-10'>12_Kittipun(New/นิว)</h1>
            <img src={image} alt="" className='w-80 rounded-3xl shadow-md mb-10' />
            <p className='font-bold text-center text-xl bg-white p-5 rounded-lg shadow-md'>"Hi everyone! My name is New. <br />I'm currently studying programming to become a junior developer. <br />Nice to meet you all!"</p>
        </div>
    </div>
  )
}

export default Owner
