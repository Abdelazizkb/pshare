import React,{useState,useEffect} from 'react'
import profile from '../../images/profile4.png';
import { Link} from 'react-router-dom';
import Bills from './DashboardCard04';

import { connect } from 'react-redux';
import { loadPatients } from '../../actions/ehr';
import Lastdiagnostics from './Lastdiagnostics';

function Profile({user}) {
  const [date, setdate] = useState(new Date())
   
  useEffect(() => {
    setdate(new Date())
  }, [])


  return (
    <div className="h-full xl:w-80 2xl:w-96  hidden lg:flex flex-col items-center bg-white">
        <div className ="w-5/6 flex justify-start items-center mt-5">
            <p className="font-bold text-lg">Mon profil</p>
        </div>
        <Link className="flex flex-col items-center justify-end mb-8 h-auto mt-10" to="#0">
          <img className="rounded-full border-2 p-1 border-bgreen" src={profile} width="100" height="100" alt="User 01" />
          <div className=" flex flex-col items-center  mt-2">
              <div className="text-md font-bold   ">{(user)?user.first_name+" "+user.last_name:"..."}</div>
          </div>
        </Link>
        <Lastdiagnostics/>
        <div className ="w-5/6 h-12  rounded-2xl bg-bgreen flex justify-center items-center mt-10">
            <p className="text-lg font-medium text-white">
            {date.toDateString()}          </p>
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
    user: state.auth.user
  });
  
  export default connect(mapStateToProps,null) (Profile)