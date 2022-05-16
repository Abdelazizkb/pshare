import React from 'react'
import doctor from '../../images/hellodoctor.png'
import { connect } from 'react-redux';

function Hellodoctor({user}) {
  return (
    <div className="relative w-11/12 flex items-end -mt-6 mb-4">
        <div className="absolute bottom-0 w-full bg-bgreen h-40 z-0 rounded-3xl shadow-lg"/>
        <img className="z-10 xl:ml-16 h-60 w-48  xl:w-auto" src={doctor}/>
        <div className="h-40 flex flex-col flex-shrink items-start justify-center z-10 xl:ml-4">
            <p className="text-3xl font-bold font-suns text-white flex uppercase"><span className="font-medium ">Bienvenue</span> , Dr. {user.last_name}</p>
            <p className="hidden lg:inline text-xl text-white mt-1" >PShare vous souhaite une bonne journée au travail</p>
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps,null) (Hellodoctor)