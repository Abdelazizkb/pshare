import React,{ useState} from 'react'
import Page1 from '../partials/signup/Page1'
import Page2 from '../partials/signup/Page2'
import Page3 from '../partials/signup/Page3'
import Page4 from '../partials/signup/Page4'
import signup1 from '../images/signup1.svg'
import password from '../images/password.svg'
import company from '../images/company.svg'
import Step from '../partials/signup/Step'
import {Link} from 'react-router-dom'
import logo from '../images/pshare.png'

function Signup() {
  const [show, setShow] = useState(0)

  return (
      
    <div className="min-w-screen bg-white min-h-screen flex flex-col items-center justify-center px-5 py-5">
        <div className=" flex w-96 mb-2  w-3/6">
          <img className="w-36" src={logo} />
        </div>
        <div className="bg-white text-gray-500 rounded-lg shadow-2xl w-3/6 overflow-visible" style={{maxWidth:1000}}>
            <div className="md:flex w-full transition  duration-700">
              <div className="w-full md:w-1/2 py-3 px-5 md:px-10 transition  duration-700">
                  <div className="text-center mb-5">
                      <h1 className="text-gray-600 text-3xl font-medium text-left">S'inscrire</h1>
                      <p className="text-sm text-left">Tenez-vous au courant des évolutions de votre monde professionnel</p>
                      <Step show={show}/>
                   </div>
                  <div>
                  {show==0&&<Page1 setShow={setShow}/>}
                  {show==1&&<Page2 setShow={setShow}/>}
                  {show==2&&<Page3 setShow={setShow}/>}
                  {show==3&&<Page4 setShow={setShow}/>}
              </div>
            </div>
              <div className="hidden md:block w-1/2  py-10 px-10 bg-gradient-to-r from-bmove to-cyan-500 rounded-r-lg">
                  {show==0&&<img className="max-h-68 w-96 mt-10 mx-auto" src={signup1} />}
                  {show==1&&<img className="max-h-68 w-96 mt-10 mx-auto" src={signup1} />}
                  {show==2&&<img className="max-h-52  mt-10 mx-auto" src={company} />}
                  {show==3&&<img className="max-h-80 w-96 mt-20 mx-auto" src={password} />}
                  
              </div>
            </div>
        </div>
        <p className="mt-8">Vous avez un compte  PShare ? <Link to="/login" className="text-bgreen font-medium">S’identifier</Link>  </p>

    </div>
  )
}

export default Signup