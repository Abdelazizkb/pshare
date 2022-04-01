import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import Appointements from '../partials/dashboard/Appointements';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import Patients from '../partials/dashboard/Patients';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import RecentVisit from '../partials/dashboard/RecentVisit';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';
import Bills from '../partials/dashboard/Bills';
import Table from '../partials/dashboard/Table';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

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
 */}          <div  className="flex  flex-wrap justify-between w-full">
                <Patients />     
                <Appointements />
              </div>
              <div  className="flex  flex-wrap justify-between w-full mt-8">
                <Bills/>         
                <Bills/>         
                <Bills/>     
              </div>
    
 
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;