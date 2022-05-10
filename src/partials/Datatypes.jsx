import React from 'react'

function Datatypes({data,handleClick}) {
  return (
        <div  className="w-11/12 flex flex-wrap justify-between items-center ">
            {data.map((element,id)=>(
            <div key={id} className="w-24 h-28 py-5 bg-white rounded-xl flex flex-col items-center justify-center cursor-pointer mb-4"
                    onClick={() =>{handleClick(id)}}>
                    <img  className="" src={element.image} />
                    <p className="text-muted font-bold mt-2 text-xs">{element.title}</p>
            </div>
            ))}
        </div>
    )
}

export default Datatypes