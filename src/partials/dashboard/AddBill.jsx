import React from 'react'

function AddBill({setData}) {

  return (
    <div className="w-full px-3 mb-2">
        <label  className="text-xs font-semibold px-1">Montant</label>
        <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
            <input  type="text" name="amount" className="text-center w-full -ml-10  pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="xxxx DZD" onChange={e => setData({type:"bill",data:e.target.value})}/>
        </div>
    </div>
  )
}

export default AddBill