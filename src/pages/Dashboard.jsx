import React, { Profiler, useState,Suspense } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import Appointements from '../partials/dashboard/Appointements';
import Patients from '../partials/dashboard/Patients';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import RecentVisit from '../partials/dashboard/RecentVisit';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';
import Bills from '../partials/dashboard/Bills';
import Table from '../partials/dashboard/Table';
import Hellodoctor from '../partials/dashboard/Hellodoctor';
import {Navigate ,Link} from 'react-router-dom'

const Profile = React.lazy(()=>import('../partials/dashboard/Profile'))

import patien from '../images/patien.png'
import file from '../images/file.png'
import prescription from '../images/prescription.png'
import visit from '../images/visit.png'
import bill from '../images/bill.png'
import calendar from '../images/calendar.png'
import { connect } from 'react-redux';
import Diagnostics from '../partials/dashboard/Diagnostics';
import Prescriptions from '../partials/dashboard/Prescriptions';
import Files from '../partials/dashboard/Files';


const elements =[
  {
    title:"Patients",
    image: patien
  },
  {
    title:"Consultations",
    image: visit
  },
  {
    title:"Factures",
    image: bill
  },
  {
    title:"Ordonnances",
    image: prescription
  },
  {
    title:"Fichiers",
    image: file
  },
  {
    title:"Rendez-vous",
    image: calendar
  },
]
const tables = [<Patients />,<Diagnostics/>,<Bills/>,<Prescriptions/>,<Files/>]
function Dashboard({isAuthenticated}) {
   
  const [show, setShow] = useState(0)

  const [sidebarOpen, setSidebarOpen] = useState(true);
  if (! isAuthenticated)
    return <Navigate  to='/' />;
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 pb-4 w-full max-w-9xl mx-auto">

            {/* Cards */}
            <div className="flex flex-col flex-wrap justify-between">

      
{/*               
              <DashboardCard02 />
              <DashboardCard03 />
              <DashboardCard04 />
              <DashboardCard05 />
              <DashboardCard06 />
              <DashboardCard07 />
              <DashboardCard08 />
              <DashboardCard09 /> */}
             
{/*               <DashboardCard11 />
 */}          <div  className="flex  flex-col items-center w-full">
                <Hellodoctor/>

                <div  className="w-11/12 flex flex-wraper justify-between items-center mb-4">
                  {elements.map((element,id)=>(
                    <div key={id} className="w-24 h-28 py-5 bg-white rounded-xl flex flex-col items-center justify-center cursor-pointer"
                          onClick={() =>{setShow(id)}}>
                          <img  className="" src={element.image} />
                          <p className="text-muted font-bold mt-2 text-xs">{element.title}</p>
                    </div>
                  ))}
                </div>
                {tables[show]}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Suspense fallback={<div className="h-full w-96 flex flex-col items-center justify-center bg-white">Chargement en cours...</div>}>
        <Profile/>
      </Suspense>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,null) (Dashboard);