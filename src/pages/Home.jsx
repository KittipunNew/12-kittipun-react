import React, { useEffect, useState } from 'react'
import Main from '../components/Main'

function Home() {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!isVisible)
  },[])

  return (
    <>
      <Main prop='React - Assessment'/>
      <div className={`flex justify-center text-9xl mt-20 font-bold transition-all duration-1000 ${isVisible? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1>🤗Welcome🤗</h1>
      </div>
    </>
  )
}

export default Home
