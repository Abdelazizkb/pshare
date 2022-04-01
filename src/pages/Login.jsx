import React from 'react'
import logo from '../images/pshare.png'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
     
     <div className=" flex w-96 -mb-8">
         <img className="w-36" src={logo} />
     </div>
    
      <div className="bg-white w-96 shadow-2xl rounded-lg p-5">
        <h1 className="text-3xl font-medium">S’identifier</h1>
        <p className="text-sm">Tenez-vous au courant des évolutions de votre monde professionnel</p>
        <form className="space-y-5 mt-5">
          <input type="text" className="w-full h-16 border border-gray-800 rounded px-3" placeholder="E-amai ou Téléohone" />
         <div className="w-full flex items-center  border border-gray-800 rounded px-3">
            <input type="password" className="w-4/5 h-12 border-0 outlined-0"  placeholder="Mot de passe" />
            <span className="text-bgreen rounded-full px-3 cursor-pointer">afficher</span>
          </div>
    
          <div className="">
                <a href="#!" className="font-medium text-bgreen  rounded-full p-2">Mot de passe oublié ?</a>
          </div>
    
          <button className="text-center w-full bg-bgreen rounded-full text-white py-3 font-medium">S'identifier</button>
    
        </form>
      </div>
    
      <p>Nouveau sur PShare ? <Link to="/signup" className="text-bgreen font-medium">S’inscrire</Link>  </p>
    </div>
    
    )
}

export default Login