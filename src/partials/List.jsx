import React,{useState} from 'react'
import p3 from '../images/last 3.png';
import p1 from '../images/last 1.png';
import p2 from '../images/last 2.png';
import p4 from '../images/last 4.png';
import p5 from '../images/last 5.png';
import patientpic from '../images/patientprofile.png'
import {Link} from 'react-router-dom'
import empty from '../images/empty.png';
import {BiRightArrowAlt,BiLeftArrowAlt} from  'react-icons/bi'
import {RiCloseFill} from 'react-icons/ri'


const avatars =[p1,p2,p3,p4]

function List({data,title}) {

  const [popup, setPopup] = useState(false)
  const [item, setItem] = useState()
  const [firstpage, setfirstpage] = useState(0)
  const items = data.slice(firstpage,firstpage+4)
  
  const handleClick = (item) =>{
    setItem(item)
    setPopup(true)
  }


  return (
    <>
    {(popup)&&<Popup item={items[item]} setPopup={setPopup}/>}
    <div className="h-auto  w-11/12 bg-white shadow-lg  border border-slate-200 rounded-xl">
      <header className="px-5 py-2 flex justify-between">
        <h2 className="font-semibold text-slate-600">{title}</h2>
        <div className="font-semibold flex justify-center border-2 border-bgreen/40 rounded-md overflow-hidden shadow-md"> 
          <button className="px-2 border-r-2 border-bgreen/40  text-bgreen/70 text-2xl cursor-pointer disabled:bg-gray-200" onClick={()=>setfirstpage(firstpage-4)} disabled={firstpage===0}><BiLeftArrowAlt/></button> 
          <button className="px-2 text-bgreen/70 text-2xl  cursor-pointer disabled:bg-gray-200" onClick={()=>setfirstpage(firstpage+4)} disabled={data.length<=firstpage+4}><BiRightArrowAlt/></button> 
        </div>
      </header>
      <div className="p-2">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-1 px-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Nom complet</div>
                </th>
                <th className="p-1 px-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-1 px-2 whitespace-nowrap">
                  <div className="font-semibold text-left">la date</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                items.map((item,id) => {
                  return (
                    <tr className="cursor-pointer" key={id} onClick={() =>handleClick(id)}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={avatars[id]} width="40" height="40" alt={item.user.first_name} />
                          </div>
                          <div className="font-medium text-slate-800">{item.user.last_name+" "+item.user.first_name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{item.user.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-bgreen">{item.date}</div>
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
    </>
      )
}

export default List

const Empty =()=>(
    <div className="w-full h-auto flex flex-col justify-center items-center py-5">
        <img src={empty}/>
        <p className="text-gray-700/70 text-lg font-bold mt-2">Il y' aucun element</p>
    </div>
)

const Popup=({item,setPopup})=>(
  <div className="fixed left-0 top-0 h-full w-full flex justify-center items-center bg-gray-400/20  z-40 ">
      <div className="w-3/12 h-8/12 bg-white p-3 flex flex-col items-center border border-gray-200/80 rounded-xl shadow-xl">
       <div className="text-3xl w-full flex justify-end cursor-pointer" onClick={()=>setPopup(false)}><RiCloseFill/></div>
       <div className=" w-full  flex flex-col">
         <img className=" w-28 rounded-full self-center" src={patientpic}/>
         <div>
           <div>
            <label  className="text-xs font-semibold px-1">Nom</label>
            <input value={item.user.first_name+" "+item.user.last_name} type="text" name="email" className="w-full h-7 border border-gray-800/30 rounded px-3 my-1" placeholder="E-mail"/>
           </div>
           <div>
            <label  className="text-xs font-semibold px-1">E-mail</label>
            <input value={item.user.email} type="text" name="email" className="w-full h-7 border border-gray-800/30 rounded px-3 my-1" placeholder="E-mail"/>
           </div>
           <div>
            <label  className="text-xs font-semibold px-1">Telephone</label>
            <input value={item.user.phone}  type="text" name="email" className="w-full h-7 border border-gray-800/30 rounded px-3 my-1" placeholder="E-mail"/>
           </div>
           <div>
            <label  className="text-xs font-semibold px-1">Numero d'identité</label>
            <input value={item.user.inn} type="text" name="email" className="w-full h-7 border border-gray-800/30 rounded px-3 my-1" placeholder="E-mail"/>
           </div>
         </div>
       </div>
        {(item.data_type==="bill")&&<Bill item={item}/>}
        {(item.data_type==="diagnostic")&&<Diagnostics item={item}/>}
        {(item.data_type==="prescription")&&<Prescriptions item={item}/>}
      </div>
  </div>
)

const Bill =({item})=>(
  <div className="mx-8 w-full h-auto bg-slate-100/30 rounded-lg mt-4 py-1 px-2 overflow-auto">
    <div className="flex w-full justify-between  items-end"><span className="text-xs font-semibold">Facture :</span><span className="text-xs font-bold text-bgreen">{item.date}</span></div>
    <div className="w-full  my-2 break-all ">
        {item.data} DZD
    </div>
 </div>
)

const Diagnostics =({item})=>(
  <div className="mx-8 w-full h-40 bg-slate-100/30 rounded-lg mt-4 py-1 px-2 overflow-auto">
    <div className="flex w-full justify-between  items-end"><span className="text-xs font-semibold">Consultations :</span><span className="text-xs font-bold text-bgreen">{item.date}</span></div>
    <div className="w-full  my-2 break-all ">
        {item.data} 
    </div>
 </div>
)

const Prescriptions =({item})=>{
  const list = JSON.parse(item.data)
  console.log(list)
  return (
          <div className="mx-8 w-full h-auto  rounded-lg mt-4 py-1 px-2 overflow-auto">
              <div className="flex w-full justify-between  items-end"><span className="text-xs font-semibold">Ordonnance :</span><span className="text-xs font-bold text-bgreen">{item.date}</span></div>
              <div className="w-full  my-2 break-all ">
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
                        list.map((item,id) => {
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
          </div>
  )
}