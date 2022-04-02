import React from 'react'
import logo from '../images/pshare.png'
import {Link} from 'react-router-dom'

function ResetPassword() {
  return (
    <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
     
     <div className=" flex w-96 -mb-8">
         <img className="w-36" src={logo} />
     </div>
    
      <div className="bg-white w-96 shadow-2xl rounded-lg p-5">
        <h1 className="text-3xl font-medium">Vous avez oublié votre mot de passe ?</h1>
        <p className="text-sm">Entrez  votre adresse e-mail et vous recevrez un lien pour réinitialiser votre mot de passe</p>
        <form className="space-y-5 mt-5">
          <input type="text" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="E-mail" />
       
          <button className="text-center w-full bg-bgreen rounded-full text-white py-3 font-medium">Envoyer</button>
    
        </form>
      </div>
      <p className="mt-8">Vous savez votre mot de passe ? <Link to="/login" className="text-bgreen font-medium">S’identifier</Link>  </p>
    </div>
    
    )
}

export default ResetPassword