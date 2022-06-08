import React,{useState,useEffect} from 'react'
import patientpic from '../images/patientprofile.png'
import {connect} from "react-redux"
import {BsFillEyeFill} from 'react-icons/bs'
import {loadAllehr} from '../actions/ehr'
import {useParams} from 'react-router-dom'
import {HiOutlineFolderAdd} from 'react-icons/hi'
import AddRecord from './dashboard/AddRecord'
import {DOMAIN} from '../actions/auth'
import {GrFormClose} from 'react-icons/gr'
import {AiFillCloseCircle} from 'react-icons/ai'

function Patientprofile({user,loadAllehr,patient}) {
  const [wait, setWait] = useState(false)
  const [add, setAdd] = useState(false)

  const [socket, setSocket] = useState()
  const {inn} = useParams()

  useEffect(() => {
    setSocket(new WebSocket( `ws://${DOMAIN}/ws/ehr/${inn}/`))
  }, [])


  const handleRequest=()=>{
    socket.send(JSON.stringify({
      'message': "request",
      'from' : {user:user,data:{type:"authorization"}}
    }));
    console.log("hello",socket)
    setWait(true)
  }


  if (patient==null)
    return <div className="relative w-11/12 flex items-center justify-center -mt-6 mb-4"><p className="font-medium text-black/70">Chargement...</p></div>
  return (
    <div className="w-11/12 my-3 flex  justify-between flex-wrap">
        {(wait)&&<Wait inn={user.inn} setWait={setWait} loadAllehr={loadAllehr}/>}
        {(add)&&<AddRecord user={user} setAdd={setAdd} setWait={setWait} socket={socket}/>}
        <div className="w-full py-3 mb-4 bg-bgreen shadow-xl mr-2 rounded-lg flex justify-center items-center px-4">
                <img className=" w-28 h-28 bg-gray-400 rounded-full self-center -ml-12 mr-10 border-4 border-white" src={patientpic}/>
                <div className="flex flex-col items-start">
                        <p className="text-2xl font-bold text-white mb-2 flex items-center">{patient.patient.last_name} {patient.patient.first_name} 
                          <button className="ml-4 text-white" onClick={handleRequest}><BsFillEyeFill /></button>
                          <button className="ml-2 text-white" onClick={()=>setAdd(true)}><HiOutlineFolderAdd /></button>
                        </p>
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
  const [socket, setSocket] = useState(new WebSocket( `ws://${DOMAIN}/ws/ehr/${inn}/`))
  const [show, setShow] = useState(0)
 
  const dispose=()=>{
      setWait(false)
  }

  useEffect(() => {
    try{
      socket.onmessage=(message) => {
        const data = JSON.parse(message.data)
        if(data.message==0){
          setShow(2)
        }
        else {
          loadAllehr(data.message)
          setShow(1)
        }
      }
    }
    catch(err){}
    return () => {
      setShow(0)
    }
},[])


  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-700/40 flex justify-center items-center">
        {(show==0)&&<Spin setWait={setWait}/>}
        {(show==1)&&<Accept setWait={setWait}/>}
        {(show==2)&&<Refuse setWait={setWait}/>}
    </div>
  )
}


var Spin=({setWait})=>{
  return (<div className="relative w-3/6 h-3/6 bg-white flex flex-col  items-center justify-center rounded-lg px-4">
          <div className="absolute top-2 right-2"><GrFormClose className="cursor-pointer text-3xl text-gray-400/70" onClick={()=>setWait(false)}/></div>
            <div className="flex items-center">
              <svg role="status" className="inline mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-bgreen" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <div className="font-bold text-xl mx-2">Attendre l'autorisation du patient...</div>
            </div>
          </div>)
}

var Accept=({setWait})=>{
  return (<div className="relative w-3/6 h-3/6 bg-white flex flex-col  items-center justify-center rounded-lg px-4">
          <div className="absolute top-2 right-2"><GrFormClose className="cursor-pointer text-3xl text-gray-400/70" onClick={()=>setWait(false)}/></div>
            <div className="flex items-center">
              <svg className="inline mr-2 w-20 h-20  fill-bgreen" viewBox="0 0 24 24" id="d9090658-f907-4d85-8bc1-743b70378e93" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg">
                    <path id="70fa6808-131f-4233-9c3a-fc089fd0c1c4" data-name="done circle" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11.52,17L6,12.79l1.83-2.37L11.14,13l4.51-5.08,2.24,2Z"/>
              </svg>
              <div className="font-bold text-xl mx-2">Le patient a accepté</div>
            </div>
          </div>)
}
var Refuse=({setWait})=>{
  return (<div className="relative w-3/6 h-3/6 bg-white flex flex-col  items-center justify-center rounded-lg px-4">
          <div className="absolute top-2 right-2"><GrFormClose className="cursor-pointer text-3xl text-gray-400/70" onClick={()=>setWait(false)}/></div>
            <div className="flex items-center">
              <AiFillCloseCircle className="text-7xl text-red-700"/>
              <div className="font-bold text-xl mx-2 text-red-700 ">Le patient a refusé</div>
            </div>
          </div>)
}