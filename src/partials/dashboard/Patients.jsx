import React,{useEffect,useState} from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';
import p3 from '../../images/last 3.png';
import {BiRightArrowAlt,BiLeftArrowAlt} from  'react-icons/bi'
import { connect } from 'react-redux';
import { loadPatients } from '../../actions/ehr';


function Patients({patients,loadPatients}) {
  const [firstpage, setfirstpage] = useState(0)

  const items = patients.slice(firstpage,firstpage+4)

  useEffect(() => {
    loadPatients()
  }, [])
  



  return (
    <div className="h-auto w-11/12 bg-white shadow-lg  border border-slate-200 rounded-xl">
      <header className="px-5 py-2 flex justify-between">
        <h2 className="font-semibold text-slate-600">Patients</h2>
        <div className="font-semibold flex justify-center border-2 border-bgreen/40 rounded-md overflow-hidden shadow-md"> 
          <button className="px-2 border-r-2 border-bgreen/40 text-2xl text-bgreen/70 cursor-pointer disabled:bg-gray-200" onClick={()=>setfirstpage(firstpage-4)} disabled={firstpage===0}>< BiLeftArrowAlt/></button> 
          <button className="px-2 text-bgreen/70  cursor-pointer text-2xl disabled:bg-gray-200" onClick={()=>setfirstpage(firstpage+4)} disabled={patients.length<firstpage+4}><BiRightArrowAlt/></button> 
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
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-1 px-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-1 px-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Last visit</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                items.map((patient,id) => {
                  return (
                    <tr key={id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={p3} width="40" height="40" alt="Avatar" />
                          </div>
                          <div className="font-medium text-slate-800">{patient.first_name+" "+patient.last_name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{patient.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-bgreen">{patient.date}</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  patients: state.ehr.patients
});

export default connect(mapStateToProps,{loadPatients}) (Patients);
