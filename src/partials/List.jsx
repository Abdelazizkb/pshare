import React from 'react'
import p3 from '../images/last 3.png';
import empty from '../images/empty.png';

function List({data,title}) {



  return (
    <div className="h-auto  xl:w-11/12 bg-white shadow-lg  border border-slate-200 rounded-xl">
      <header className="px-5 py-2 flex justify-between">
        <h2 className="font-semibold text-slate-600">{title}</h2>
        <div className="font-semibold bg-bgreen text-sm text-white py-1 px-3 rounded-md hover:cursor-pointer">Browse all</div>
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
                data.map((item,id) => {
                  return (
                    <tr key={id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={p3} width="40" height="40" alt={item.patient.first_name} />
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
      )
}

export default List

const Empty =()=>(
    <div className="w-full h-auto flex flex-col justify-center items-center py-5">
        <img src={empty}/>
        <p className="text-gray-700/70 text-lg font-bold mt-2">Il y' aucun element</p>
    </div>
)