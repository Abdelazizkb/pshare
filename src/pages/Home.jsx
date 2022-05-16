import React from 'react'
import {Navigate ,Link} from 'react-router-dom'
import { connect } from 'react-redux';
import Navbar from '../partials/Navbar';

function Home({isAuthenticated}) {
  if (isAuthenticated)
    return <Navigate  to='/doctor' />;
  return (
    <div className="w-full h-screen bg-white">
        <Navbar />
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,null) (Home)