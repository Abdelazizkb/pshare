import React from 'react'

function Page2({setShow,onChange,setIsDoctor,isDoctor,formData}) {

  return (
    <>

            <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                    <label for="" className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                        <input value={formData.email} type="email" name="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Exmple@gmail.com" onChange={e => onChange(e)}/>
                    </div>
                </div>
            </div>

            <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                    <label for="" className="text-xs font-semibold px-1">Téléphone</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                        <input value={formData.phone} type="number" name="phone" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="0779....24" onChange={e => onChange(e)}/>
                    </div>
                </div>
            </div>
            
            <div className="flex w-full justify-start -mx-3 my-1 ">
                <div className="py-1 px-3">
                    <label className="flex items-center" >
                        <input type="radio" className="form-checkbox"  name="gendre"  checked={isDoctor} onChange={()=>setIsDoctor(true)}/>
                        <span className="text-sm font-medium ml-2">Médecin</span>
                    </label>
                </div>
                <div className="py-1 px-3" onClick={()=>setIsDoctor(false)}>
                    <label className="flex items-center" >
                        <input type="radio" className="form-checkbox"  name="gendre"  checked={!isDoctor} onChange={()=>setIsDoctor(true)}/>
                        <span className="text-sm font-medium ml-2">Compagnie</span>
                    </label>
                </div>
            </div>

            <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                    <label for="" className="text-xs font-semibold px-1">Numéro d'identité</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                        <input value={formData.inn} type="text" name="inn" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="00699..............." onChange={e => onChange(e)}/>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-end -mx-3">
                <div className=" ">
                    <button className="block w-full max-w-xs mx-auto  text-bgreen rounded-lg px-4 py-1 font-semibold cursor-pointer" onClick={()=>{setShow(0)}}>Précédent </button>
                </div>
                <div className=" ">
                    <button className="block w-full max-w-xs mx-auto bg-bgreen  text-white rounded-lg px-4 p-1 font-semibold cursor-pointer" onClick={()=>{setShow(2)}}>Suivant </button>
                </div>
            </div>
</>
      )
}

export default Page2;
