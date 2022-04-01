import React from 'react'
import signup1 from '../../images/signup1.svg'
import Select from './Select';

function Page3({setShow}) {

  return (
        <>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                            <Select name="l'hôpital"/>
                        </div>
                    </div>

                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                            <Select name="service"/>
                        </div>
                    </div>
                    <div className="h-5"/>
                    <div className="flex flex-col flex-1"/>
                    <div className="flex w-full justify-end -mx-3">
                        <div className=" ">
                            <button className="block w-full max-w-xs mx-auto  text-bgreen rounded-lg px-4 py-1 font-semibold cursor-pointer" onClick={()=>{setShow(1)}}>Back </button>
                        </div>
                        <div className=" ">
                            <button className="block w-full max-w-xs mx-auto bg-bgreen  text-white rounded-lg px-4 p-1 font-semibold cursor-pointer" onClick={()=>{setShow(3)}}>Next </button>
                        </div>
                    </div>

        </>
      )
}

export default Page3;
