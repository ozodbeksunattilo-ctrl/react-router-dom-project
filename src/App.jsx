import React from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import User from "./pages/User"
import Settings from "./pages/Settings"
import { Route,Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  return (

    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/user' element={<User/>}/>
<Route path='/settings' element={<Settings/>}/>




</Routes>
<Footer/>




    </div>
  )
}

export default App