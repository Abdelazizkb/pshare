import React,{useEffect} from 'react'
import {loadUser} from '../actions/auth'
import {connect} from 'react-redux'

function Loading({children,loadUser}) {
    useEffect(() => {
        loadUser()
    }, [])

  return (
    <>
     {children}
    </>
  )
}

export default connect(null,{loadUser}) (Loading)