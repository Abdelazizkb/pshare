import React from 'react'
import logo from '../images/pshare.png'
import {Link} from 'react-router-dom'

function ResetPasswordConfirm() {
  return (
    <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
     
     <div className=" flex w-96 -mb-8">
         <img className="w-36" src={logo} />
     </div>
    
      <div className="bg-white w-96 shadow-2xl rounded-lg p-5">
        <h1 className="text-3xl font-medium">Réinitialiser votre mot de passe</h1>
        <form className="space-y-5 mt-5">
          <div className="w-full flex items-center  border border-gray-800 rounded px-3">
            <input type="password" className="w-4/5 h-12 border-0 outlined-0"  placeholder="Mot de passe" />
            <span className="text-bgreen rounded-full px-3 cursor-pointer">afficher</span>
          </div>
          <input type="password" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="confirmez votre Mot de passe" />
   
          <button className="text-center w-full bg-bgreen rounded-full text-white py-3 font-medium">Confirmer</button>
    
        </form>
      </div>
    
    </div>
     )
}

export default ResetPasswordConfirm