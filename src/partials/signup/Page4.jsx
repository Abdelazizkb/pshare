import React from 'react'
import { connect } from 'react-redux';
import { createCompany,signUp } from '../../actions/auth';

function Page4({setShow,onChange,formData,createCompany,isDoctor,signUp}) {

  const { email,first_name,last_name,category,c_name,birthday,phone,inn,password,re_password,company} = formData;

  const handleClick = () => {
    if(!isDoctor)
    createCompany(email,first_name,last_name,category,c_name,birthday,phone,inn,password,re_password);
    else
    signUp(email,first_name,last_name,birthday,phone,inn,password,re_password,company)
  };

  return (
       <>
            <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                    <label for="" className="text-xs font-semibold block py-2">Mot de passe </label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                        <input  value={formData.password}  type="password" name="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************************" onChange={e => onChange(e)}/>
                    </div>
                </div>
            </div>

            <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                    <label for="" className="text-xs font-semibold block py-2">Mot de passe confirmation</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                        <input  type="password" name="re_password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************************" onChange={e => onChange(e)}/>
                    </div>
                </div>
            </div>
            <div className="h-5"/>

            <div className="flex w-full justify-end -mx-3">
                <div className=" ">
                    <button className="block w-full max-w-xs mx-auto  text-bgreen rounded-lg px-4 py-1 font-semibold cursor-pointer" onClick={()=>{setShow(2)}}>Précédent </button>
                </div>
                <div className=" ">
                    <button className="block w-full max-w-xs mx-auto bg-bgreen  text-white rounded-lg px-4 p-1 font-semibold cursor-pointer"  onClick={handleClick}>Confirmer </button>
                </div>
            </div>
        </>
  )
}

export default connect(null,{createCompany,signUp})(Page4)