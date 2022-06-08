import React,{useState}from 'react'

function AddPrescription({setData,data}) {
  const [medicaments, setMedicaments] = useState([{name:"",dose:""}])

  const handleChange =(id,e)=>{
        let stagedList=[...medicaments]
        let item = stagedList[id]
        item={...item,[e.target.name]:e.target.value}
        stagedList[id]=item
        setMedicaments(stagedList)
        setData({type:"prescription",data:stagedList})
        console.log("stagedList",stagedList);
        console.log("medicaments",medicaments);
  }

  const addMedicament=()=>{
      setMedicaments([...medicaments,{name:"",dose:""}])
  }

  const removeMedicament=()=>{
      if(medicaments.length>1){
        let list=[...medicaments]
        list.pop()
        setMedicaments(list)
      }
  }


  return (
    <div className="w-full px-1">
        <div className="h-auto  w-full bg-white  rounded-xl">
            <div className="p-2">
                {/* Table */}
                <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    {/* Table header */}
                    <thead className="text-xs font-semibold  text-slate-400 bg-slate-50 rounded-r-lg">
                        <tr className="">
                            <th className="p-1 px-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Nom medicaments</div>
                            </th>
                            <th className="p-1 px-2 rounded-r-lg">
                                <div className="font-semibold text-left">Dose/jr</div>
                            </th>
                        </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="w-full text-sm divide-y divide-slate-100 ">
                    {
                        medicaments.map((item,id) => {
                        return (
                            <tr className="cursor-pointer h-14" key={id}>
                                <td className="w-5/6   whitespace-nowrap mb-2">
                                    <input name="name" 
                                           className="p-2 w-full whitespace-nowrap border  rounded-lg"
                                           value={item.name}
                                           onChange={(e) =>{handleChange(id,e)}}
                                    />
                                </td>
                                <td className=" whitespace-nowrap">
                                    <div className="text-left font-medium text-bgreen">
                                        <input name="dose"
                                               className="p-2 w-20 whitespace-nowrap border rounded-lg text-center"
                                               value={item.dose}
                                               onChange={(e) =>{handleChange(id,e)}}
                                        />
                                    </div>
                                </td>
                            </tr>
                        )
                        })
                    }
                    </tbody>
                </table>

                </div>
                {(data.length===0)&&<Empty/>}
            </div>
        </div>
        <div className="w-full flex items-center justify-end pr-3">
            <button className="text-lg font-bold border-2 border-gray-700/70 w-8 mb-2 -mt-2 mr-2 rounded-lg" onClick={addMedicament}>+</button>
            <button className="text-lg font-bold border-2 border-gray-700/70  w-8 mb-2 -mt-2 rounded-lg" onClick={removeMedicament}>-</button>
        </div>
    </div>
  )
}

export default AddPrescription