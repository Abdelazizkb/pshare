import React from 'react'
import logo from '../images/pshare.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="min-w-xl px-32 mx-auto flex justify-between items-center">
       <img className="h-24" src={logo} alt="logo" />
        <div className="flex -mt-2 items-center">
          <Link className="font-medium  text-black/80" to='/signup'>S'inscrire</Link>  
          <Link className="text-white font-medium  bg-bgreen py-1 px-3 rounded-lg ml-2" to='/login'>Connexion</Link>  
        </div>
    </div>
  )
}

export default Navbar