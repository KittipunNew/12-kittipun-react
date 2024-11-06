import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import HomeUser from './pages/UserHome'
import AdminHome from './pages/AdminHome';
import Owner from './pages/Owner';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/homeuser' element={<HomeUser />}/>
        <Route path='/adminhome' element={<AdminHome />}/>
        <Route path='/owner' element={<Owner />}/>
      </Routes>
    </Router>
  )
}

export default App
