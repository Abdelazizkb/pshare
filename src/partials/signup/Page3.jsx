import React,{useEffect} from 'react';
import signup1 from '../../images/signup1.svg';
import Select from './Select';
import { connect } from 'react-redux';
import { loadCategories, loadCompanies } from '../../actions/auth';

function Page3({setShow,loadCategories,loadCompanies,categories,companies,onChange,isDoctor,formData}) {
  useEffect(() => {
    loadCategories();
    loadCompanies();
  }, [])

  const show = isDoctor ?<Doctor companies={companies} formData={formData} onChange={onChange}/>: <Company categories={categories} formData={formData} onChange={onChange}/>
  return (
    <>
        {show}
        <div className="h-5"/>
        <div className="flex flex-col flex-1"/>
        <div className="flex w-full justify-end -mx-3">
            <div className=" ">
                <button className="block w-full max-w-xs mx-auto  text-bgreen rounded-lg px-4 py-1 font-semibold cursor-pointer" onClick={()=>{setShow(1)}}>Précédent </button>
            </div>
            <div className=" ">
                <button className="block w-full max-w-xs mx-auto bg-bgreen  text-white rounded-lg px-4 p-1 font-semibold cursor-pointer" onClick={()=>{setShow(3)}}>Suivant </button>
            </div>
        </div>
    </>
  )
}



const mapStateToProps = state => ({
    categories: state.auth.categories,
    companies: state.auth.companies,
});

export default connect(mapStateToProps,{loadCategories,loadCompanies})(Page3);


export const Company=({categories,formData,onChange})=>{
    return (
        <>
            <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                    <label for="countries" class="text-xs font-semibold block py-2">Sélectionnez le type de l'entreprise</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                        <select value={formData.category} id="countries" name="category" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" onChange={e => onChange(e)}>
                            {categories.map((e,i)=>{
                                return <option value={e.id} key={i}>{e.name}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                    <label for="" className="text-xs font-semibold block py-2">Nom de compagnie</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                        <input value={formData.c_name} type="text" name="c_name" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Nome de compagnie" onChange={e => onChange(e)}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Doctor=({companies,formData,onChange})=>{
    return (
        <>
            <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                    <label for="countries" class="text-xs font-semibold block py-2">Sélectionnez l'hopital</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                        <select value={formData.category} id="countries" name="company" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" onChange={e => onChange(e)}>
                            {companies.map((e,i)=>{
                                return <option value={e.id} key={i}>{e.name}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                    <label for="countries" className="text-xs font-semibold block py-2">Sélectionnez le service</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                        <select id="countries" name="category" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" onChange={e => onChange(e)}>
                            {companies.map((e,i)=>{
                                return <option value={e.id} key={i}>{e.name}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}