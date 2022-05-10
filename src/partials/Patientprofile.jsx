import React from 'react'
import patient from '../images/patientprofile.png'
import visit from '../images/s-visit.svg'
import bill from '../images/s-bill.svg'
import prescription from '../images/s-prescription.svg'
import file from '../images/s-file.svg'

function Patientprofile() {
  return (
    <div className="w-11/12 h-52   my-3 flex  justify-between flex-wrap">
        <div className="w-3/6 h-full bg-white shadow-xl mr-2 rounded-lg flex justify-center items-center px-4">
                <img className=" w-24 h-24 bg-gray-400 rounded-full self-center -ml-12 mr-10" src={patient}/>
                <div className="flex flex-col items-start">
                        <p className="text-2xl font-bold text-gray-700/90 mb-2">KORBA Abdelaziz</p>
                        <p className="text-sm font-medium text-bgreen/70 mb-2">E-mail : korbabdo@gmail.com</p>
                        <p className="text-sm font-medium text-gray-700/70 mb-2">Telephone : 0779247735</p>
                        <p className="text-sm font-medium text-gray-700/70 mb-2">D-naissance : 12 dec 1999</p>
                </div>
        </div>
        <div className="flex-1 h-full  bg-white  shadow-xl rounded-lg flex flex-col justify-around ">
            <div className="w-full flex justify-around ">
                <div className="w-48 h-24  text-blue-500 rounded-lg flex items-center justify-around">
                    <img src={prescription}/>
                    <div className="flex flex-col">
                         <p className="text-sm font-medium mb-2">Ordonnances</p>   
                         <p className="font-bold">100</p>   
                    </div>
                </div>
                <div className="w-48 h-24 text-bmove flex items-center justify-around">
                    <img src={visit}/>
                    <div className="flex flex-col">
                         <p className="text-sm font-medium mb-2">Ordonnances</p>   
                         <p className="font-bold">100</p>   
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-around items-around ">
                <div className="w-48 h-24 text-bgreen flex items-center justify-around">
                    <img src={file}/>
                    <div className="flex flex-col">
                         <p className="text-sm font-medium mb-2">Ordonnances</p>   
                         <p className="font-bold">100</p>   
                    </div>
                </div>
                <div className="w-48 h-24 text-orange-500 flex items-center justify-around">
                    <img src={bill}/>
                    <div className="flex flex-col">
                         <p className="text-sm font-medium mb-2"></p>   
                         <p className="font-bold">200</p>   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Patientprofile