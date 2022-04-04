import React from 'react'
import {Navigate ,Link} from 'react-router-dom'
import { connect } from 'react-redux';

function Home({isAuthenticated}) {
  if (isAuthenticated)
    return <Navigate  to='/doctor' />;
  return (
    <div className="flex flex-col">
        Home
        <Link to='/signup'>signup</Link>  
        <Link to='/login'>login</Link>  
        <Link to='/doctor'>doctor</Link>  
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,null) (Home)