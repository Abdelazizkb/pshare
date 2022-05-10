import React, { Profiler, useState,Suspense } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import {connect} from 'react-redux'
import {Navigate,useParams} from 'react-router-dom'

const Profile = React.lazy(()=>import('../partials/dashboard/Profile'))

function DashboardContainer({children,isAuthenticated}) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
  if (!isAuthenticated)
        return <Navigate  to='/'/>;
  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
                <div className="px-4 sm:px-6 lg:px-8 pb-4 w-full max-w-9xl mx-auto">
                    <div className="flex flex-col flex-wrap justify-between">
                        <div  className="flex  flex-col items-center w-full">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <Suspense fallback={<div className="h-full w-96 flex flex-col items-center justify-center bg-white">Chargement en cours...</div>}>
        <Profile/>
        </Suspense>
    </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,null) (DashboardContainer)
