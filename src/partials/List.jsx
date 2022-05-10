import React,{useState} from 'react'
import p3 from '../images/last 3.png';
import p1 from '../images/last 1.png';
import p2 from '../images/last 2.png';
import p4 from '../images/last 4.png';
import p5 from '../images/last 5.png';
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
          <button className="px-2 text-bgreen/70 text-2xl  cursor-pointer disabled:bg-gray-200" onClick={()=>setfirstpage(firstpage+4)} disabled={data.length<firstpage+4}><BiRightArrowAlt/></button> 
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
                            <img className="rounded-full" src={avatars[id]} width="40" height="40" alt={item.patient.first_name} />
                          </div>
                          <div className="font-medium text-slate-800">{item.patient.last_name+" "+item.patient.first_name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{item.patient.email}</div>
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
  <div className="fixed left-0 top-0 h-full w-full flex justify-center items-center bg-gray-400/20  z-40">
      <div className="w-4/12 h-4/6 bg-white p-3 flex flex-col items-center rounded-lg">
       <div className="text-3xl w-full flex justify-end cursor-pointer" onClick={()=>setPopup(false)}><RiCloseFill/></div>
       <div className=" w-full  flex flex-col">
         <img className=" w-48 rounded-full self-center" src={p5}/>
         <div className=" w-full flex flex-col items-start pl-10 self-end ">
            <div className="flex w-full items-center mt-5">
                <p className="text-sm font-bold w-1/2 mr-2">Nom : {item.patient.last_name}</p>
                <p  className="text-sm font-bold w-1/2">Prenom : {item.patient.first_name}</p> 
            </div>
            <div className="flex  w-full items-center mt-5">
                <p className="text-sm font-bold w-1/2 mr-2">E-mail : {item.patient.email}</p>
                <p  className="text-sm font-bold w-1/2">Phone : {item.patient.phone}</p> 
            </div>
            <div className="flex  w-full items-center mt-5">
                <Link to={`/patient/${item.patient.inn}`} className="text-sm font-bold w-1/2 mr-2">Inn : {item.patient.inn}</Link>
                <p  className="text-sm font-bold w-1/2">D-naissance : 12-12-1999</p> 
            </div>
         </div>
       </div>
       <div className="w-5/6 h-40 bg-slate-100/30 rounded-lg mt-8 py-1 px-2 overflow-auto">
        <div className="flex w-full justify-end  items-end"><span className="text-xs font-bold text-bgreen">{item.date}</span></div>
        <div className="w-full  my-2 break-all ">
            {item.data}
        </div>
       </div>
      </div>
  </div>
)