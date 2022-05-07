import React,{useEffect} from 'react'
import p1 from '../../images/last 1.png';
import p2 from '../../images/last 2.png';
import p3 from '../../images/last 3.png';
import p4 from '../../images/last 4.png';
import { connect } from 'react-redux';
import { loadDiagnostics } from '../../actions/ehr';

const images =[p1,p2,p3,p4];

function Lastdiagnostics({diagnostics,loadDiagnostics}) {

  useEffect(() => {
        loadDiagnostics()
        console.log("object");
  }, [])

  return (
    <div className="w-full flex flex-col items-start mt-4 px-8">
        <div className="flex w-full justify-between mb-4">
            <p className="font-medium">Derniers</p>
            <p  className="text-sm font-bold text-bgreen">Tout afficher</p>
        </div>
        <div className="w-full flex flex-col">
               {(diagnostics.length==0)&&<Empty/>}    
               {diagnostics.slice(0,4).map((e,i)=>{
                    return   (<div className="flex w-full mb-3">
                                        <img className="rounded-full border-2 p-1 border-bgreen" src={images[i]} width="65" height="55" alt="User 01" />
                                        <div className="flex flex-col justify-between ml-4 py-2">
                                                <span className="font-medium">{e.patient.first_name+" "+e.patient.last_name}</span>
                                                <span className="text-gray-900/70">{e.date}</span>
                                        </div>
                                </div>)})
                }
        </div>

    </div>
  )
}

const mapStateToProps = state => ({
    diagnostics: state.ehr.diagnostics
  });

export default connect(mapStateToProps,{loadDiagnostics}) (Lastdiagnostics)


const Empty =()=>(
        <>
            <div className="w-full h-16 bg-slate-200/30 text center flex items-center justify-center rounded-lg mb-2">
                  <p>there is no previous diagnostics</p>
            </div>
            <div className="w-full h-16 bg-slate-200/20 text center rounded-lg mb-2">
            </div>
            <div className="w-full h-16 bg-slate-200/10 text center rounded-lg mb-2">
            </div>
            <div className="w-full h-16 bg-slate-200/5 text center rounded-lg mb-2">
            </div>
        </>
)