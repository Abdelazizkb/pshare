import React,{useState} from 'react'
import {GrFormClose} from 'react-icons/gr'
import {IoMdImages} from 'react-icons/io'
import AddBill from './AddBill'
import AddDiagnostic from './AddDiagnostic'
import AddFile from './AddFile'
import AddPrescription from './AddPrescription'


function AddRecord({setAdd,setWait,socket,user}) {
    const [type, setType] = useState("diagnostic")
    const [data, setData] = useState({})

    const handleChange=(e)=>{
        setType(e.target.value)
    }

    const handleRequest=()=>{
        socket.send(JSON.stringify({
          'message': "request",
          'from' : {user,data}
        }));
        console.log("hello",socket)
        setAdd(false)
        setWait(true)
      }
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-700/40 flex justify-center items-center">
        <div className="w-3/6 h-auto py-4 bg-white flex flex-col items-center justify-center rounded-lg px-4">
            <div className="w-full flex justify-end  px-2"><GrFormClose className="cursor-pointer text-lg" onClick={()=>setAdd(false)}/></div>
            <p></p>
            <div className="w-full px-3 mb-2">
                    <label for="countries" className="text-xs font-semibold block py-2">Sélectionnez le type</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                        <select  id={type} name="category" className="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        onChange={(e)=>{handleChange(e)}}>
                            <option className="text-center" value="diagnostic">Consultations</option>
                            <option className="text-center" value="bill">Factures</option>
                            <option className="text-center" value="prescription">Ordonnances</option>
                            <option className="text-center" value="file">Fichiers</option>
                            <option className="text-center" value="appointment">Rendez-vous</option>
                        </select>
                    </div>
            </div>
            {(type==="bill")&&<AddBill setData={setData}/>}
            {(type==="diagnostic")&&<AddDiagnostic setData={setData}/>}
            {(type==="file")&&<AddFile/>}
            {(type==="prescription")&&<AddPrescription setData={setData} data={data}/>}
            <div className="w-full flex justify-end">
                <button className="py-1 px-3 bg-bmove font-bold text-white rounded-lg mr-3 shadow-lg" onClick={handleRequest}>Confirmer</button> 
            </div>
        </div>
    </div>
  )
}

export default AddRecord