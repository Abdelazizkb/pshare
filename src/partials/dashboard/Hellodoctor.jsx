import React from 'react'
import doctor from '../../images/hellodoctor.png'

function Hellodoctor() {
  return (
    <div className="relative xl:w-11/12 flex items-end -mt-6 mb-4">
        <div className="absolute bottom-0 w-full bg-bgreen h-40 z-0 rounded-3xl shadow-lg"/>
        <img className="z-10 ml-16 h-60" src={doctor}/>
        <div className="h-40 flex flex-col flex-shrink items-start justify-center z-10 ml-4">
            <p className="text-3xl font-bold font-suns text-white flex"><span className="font-medium">Bienvenue</span> , Dr. KORBA</p>
            <p className="text-xl text-white mt-1" >PShare vous souhaite une bonne journée au travail</p>
        </div>
    </div>
  )
}

export default Hellodoctor