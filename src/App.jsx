import { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import Missing from './components/Missing'
import {Routes, Route} from 'react-router-dom'

import HomeLayout from './components/global/Home/HomeLayout'
import About from './pages/About'
import Contact from './pages/Contact'



function App() {
  return (
    <div className=" bg-gray-900 ">
    <Routes>

      <Route path="*" element={<Missing />} />


      <Route path='/' element={<HomeLayout/>}>
        <Route path='home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>

      

    </Routes>
    </div>
  );
}



export default App;