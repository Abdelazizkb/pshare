import React,{useState,useEffect} from 'react'
import patientpic from '../images/patientprofile.png'
import visit from '../images/s-visit.svg'
import bill from '../images/s-bill.svg'
import prescription from '../images/s-prescription.svg'
import file from '../images/s-file.svg'
import {connect} from "react-redux"
import {BsFillEyeFill} from 'react-icons/bs'
import {loadAllehr} from '../actions/ehr'

function Patientprofile({user,loadAllehr,patient=0}) {
  const [wait, setWait] = useState(false)

  const [socket, setSocket] = useState()

  useEffect(() => {
    if (patient) {
      setSocket(new WebSocket( `ws://192.168.42.221:8000/ws/ehr/${patient.patient.inn}/`))
    }
  },[patient])

  const handleRequest=()=>{
    console.log("request1",`ws://192.168.42.221:8000/ws/ehr/${patient.patient.inn}/`)
    socket.send(JSON.stringify({
      'message': "request",
      'from' : user
    }));
    setWait(true)
  }


  if (patient==null)
    return <div className="relative w-11/12 flex items-center justify-center -mt-6 mb-4"><p className="font-medium text-black/70">Chargement...</p></div>
  return (
    <div className="w-11/12    my-3 flex  justify-between flex-wrap">
        {(wait)&&<Wait inn={user.inn} setWait={setWait} loadAllehr={loadAllehr}/>}
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

export default connect(mapStateToProps,{loadAllehr}) (Patientprofile)

const Wait=({inn,setWait,loadAllehr})=>{
  const [socket, setSocket] = useState(new WebSocket( `ws://192.168.42.221:8000/ws/ehr/${inn}/`))

  useEffect(() => {
    try{
      socket.onmessage=(message) => {
        const data = JSON.parse(message.data)
        if(data.message==0){
          setWait(false)
        }
        else {
          loadAllehr(data.message)
          setWait(false)
        }
      }
    }
    catch(err){}
},[])



  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-700/40 flex justify-center items-center">
         <Spin/>
    </div>
  )
}


var Spin=()=>{
  return (<div className="w-3/6 h-3/6 bg-white flex  items-center justify-center rounded-lg px-4">
              <svg role="status" className="inline mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-bgreen" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <div className="font-bold text-xl mx-2">Attendre l'autorisation du patient...</div>
          </div>)
}