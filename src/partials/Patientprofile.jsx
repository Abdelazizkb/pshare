import React,{useState,useEffect} from 'react'
import patientpic from '../images/patientprofile.png'
import visit from '../images/s-visit.svg'
import bill from '../images/s-bill.svg'
import prescription from '../images/s-prescription.svg'
import file from '../images/s-file.svg'
import {connect} from "react-redux"
import {BsFillEyeFill} from 'react-icons/bs'


function Patientprofile({patient,user}) {

  const [socket, setSocket] = useState(new WebSocket( `ws://192.168.42.221:8000/ws/ehr/${patient.patient.inn}/`))

  const handleRequest=()=>{
    console.log("fi",window.location.host)
    socket.send(JSON.stringify({
      'message': "request",
      'from' : user
    }));
  }


  if (patient==null)
    return <div className="relative w-11/12 flex items-center justify-center -mt-6 mb-4"><p className="font-medium text-black/70">Chargement...</p></div>
  return (
    <div className="w-11/12    my-3 flex  justify-between flex-wrap">
        <div className="w-full py-3 mb-4 bg-bgreen shadow-xl mr-2 rounded-lg flex justify-center items-center px-4">
                <img className=" w-28 h-28 bg-gray-400 rounded-full self-center -ml-12 mr-10 border-4 border-white" src={patientpic}/>
                <div className="flex flex-col items-start">
                        <p className="text-2xl font-bold text-white mb-2 flex items-center">{patient.patient.last_name} {patient.patient.first_name} <button className="ml-4 text-white" onClick={handleRequest}><BsFillEyeFill /></button></p>
                        <p className="text-sm font-medium text-white mb-2">E-mail : {patient.patient.email}</p>
                        <p className="text-sm font-medium text-white mb-2">Telephone : {patient.patient.phone}</p>
                        <p className="text-sm font-medium text-white mb-2">D-naissance : {patient.patient.birthday}</p>
                </div>
        </div>

    </div>
  )
}

const mapStateToProps = state => ({
  patient: state.ehr.patient,
  user: state.auth.user

});

export default connect(mapStateToProps,null) (Patientprofile)