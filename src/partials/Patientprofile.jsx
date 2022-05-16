import React from 'react'
import patient from '../images/patientprofile.png'
import visit from '../images/s-visit.svg'
import bill from '../images/s-bill.svg'
import prescription from '../images/s-prescription.svg'
import file from '../images/s-file.svg'

function Patientprofile() {
  return (
    <div className="w-11/12    my-3 flex  justify-between flex-wrap">
        <div className="w-full py-3 mb-4 bg-bgreen shadow-xl mr-2 rounded-lg flex justify-center items-center px-4">
                <img className=" w-28 h-28 bg-gray-400 rounded-full self-center -ml-12 mr-10 border-4 border-white" src={patient}/>
                <div className="flex flex-col items-start">
                        <p className="text-2xl font-bold text-white mb-2">KORBA Abdelaziz</p>
                        <p className="text-sm font-medium text-white mb-2">E-mail : korbabdo@gmail.com</p>
                        <p className="text-sm font-medium text-white mb-2">Telephone : 0779247735</p>
                        <p className="text-sm font-medium text-white mb-2">D-naissance : 12 dec 1999</p>
                </div>
        </div>

    </div>
  )
}

export default Patientprofile