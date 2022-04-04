import React,{useState} from 'react'
import logo from '../images/pshare.png'
import {Navigate ,Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../actions/auth';

function Login({isAuthenticated,login}) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };
  if (isAuthenticated)
    return <Navigate  to='/doctor' />;
  return (
    <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">

     <Link to="/" className=" flex w-96 -mb-8">
         <img className="w-36" src={logo} />
     </Link>

      <div className="bg-white w-96 shadow-2xl rounded-lg p-5">
        <h1 className="text-3xl font-medium">S’identifier</h1>
        <p className="text-sm">Tenez-vous au courant des évolutions de votre monde professionnel</p>
        <form className="space-y-5 mt-5" onSubmit={e => onSubmit(e)}>
          <input type="text" name="email" className="w-full h-16 border border-gray-800 rounded px-3" placeholder="E-mail" onChange={e => onChange(e)}/>
         <div className="w-full flex items-center  border border-gray-800 rounded px-3">
            <input type="password" name="password" className="w-4/5 h-12 border-0 outlined-0"  placeholder="Mot de passe" onChange={e => onChange(e)}/>
            <span className="text-bgreen rounded-full px-3 cursor-pointer">afficher</span>
          </div>

          <div className="">
                <a href="#!" className="font-medium text-bgreen  rounded-full p-2">Mot de passe oublié ?</a>
          </div>

          <button className="text-center w-full bg-bgreen rounded-full text-white py-3 font-medium" type="submit">S'identifier</button>

        </form>
      </div>

      <p>Nouveau sur PShare ? <Link to="/signup" className="text-bgreen font-medium">S’inscrire</Link>  </p>
    </div>

    )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{login}) (Login)