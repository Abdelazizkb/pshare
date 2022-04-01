import React from 'react'

function Step({show}) {
  
  const step=(n)=>{return `w-7 rounded-full border-2 border-bgreen  ${show==n && 'border-bmove text-bmove'} ${show>n && ' border-bmove bg-bmove text-white'}`}
  return (
    <div className="flex text-md text-bgreen font-bold items-end w-full justify-center mt-2">
        <p className={step(0)}>1</p>
        <p className={show>0?'text-bmove':''}>-----</p>
        <p  className={step(1)}>2</p>
        <p className={show>1?'text-bmove':''}>-----</p>
        <p  className={step(2)}>3</p>
        <p className={show>2?'text-bmove':''}>-----</p>
        <p  className={step(3)}>4</p>
    </div>
  )
}

export default Step