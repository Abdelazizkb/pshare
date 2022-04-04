import React,{useState,forwardRef} from 'react'
import signup1 from '../../images/signup1.svg'
import DatePicker  from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function Page1({setShow,onChange,setFormData,formData}) {
  const [startDate, setStartDate] = useState(new Date());

  const handleBirthday =(date)=>{
    setFormData({...formData,birthday:date.toISOString().split('T')[0]})
    setStartDate(date)
  }
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <input onClick={onClick} ref={ref} type="button" value={formData.birthday}  className="w-full pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"/>
  ));

  return (
         <>

                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-2">
                                <label  className="text-xs font-semibold px-1">Nom</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input value={formData.last_name} type="text" name="last_name" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Abdelaziz" onChange={e => onChange(e)}/>
                                </div>
                            </div>
                        </div>

                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-2">
                                <label  className="text-xs font-semibold px-1">Prénom</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input value={formData.first_name} type="text" name="first_name" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="KORBA" onChange={e => onChange(e)}/>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full justify-start -mx-3 my-1">
                            <div className="py-1 px-3">
                                <label className="flex items-center">
                                    <input type="radio" className="form-checkbox"  name="gendre"/>
                                    <span className="text-sm font-medium ml-2">Homme</span>
                                </label>
                            </div>
                            <div className="py-1 px-3">
                                <label className="flex items-center">
                                    <input type="radio" className="form-checkbox"  name="gendre"/>
                                    <span className="text-sm font-medium ml-2">Femme</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label for="" className="text-xs font-semibold px-1">Date de naissance</label>
                                <div className="flex">
                                    <DatePicker selected={startDate} onChange={(date) => handleBirthday(date)} customInput={<ExampleCustomInput />} />
                                </div>
                            </div>
                        </div>



                        <div className="flex w-full justify-end -mx-3">
                            <div className=" ">
                                <button className="block w-full max-w-xs mx-auto bg-bgreen  text-white rounded-lg px-4 py-1 font-semibold cursor-pointer" onClick={()=>{setShow(1)}}>Suivant </button>
                            </div>
                        </div>

        </>
      )
}

export default Page1;
