import React, { Profiler, useState,Suspense } from 'react';


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
import Datatypes from '../partials/Datatypes';
import DashboardContainer from '../hoc/DashboardContainer';


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

function Dashboard() {

  const [show, setShow] = useState(0)


  return (
  <DashboardContainer>
      <Hellodoctor/>
      <Datatypes data={elements} handleClick={setShow}/>
      {tables[show]}
  </DashboardContainer>
  );
}



export default Dashboard;