import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../utils/Transition';
import {logout} from '../../actions/auth'
import {connect} from 'react-redux'

function Logout({logout}) {
  const path  = "";

  return (
    <li className={`px-2 py-2 my-3 rounded-3xl mb-0.5 last:mb-0 hover:bg-bgreen hover:text-white`} onClick={()=>logout()}>
      <div className={`block    transition duration-150`}>
        <div className="flex items-center">
          <div className="relative inline-flex" >
            <button
              className={`p-2 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full `}
              aria-haspopup="true">
              <span className="sr-only">Logout</span>
              <svg className="w-4 h-4"  width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z" fill="black"/>
              </svg>
            </button>
          </div>
          <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100  duration-200">Deconnecter</span>
        </div>
      </div>
    </li>

  )
}

export default connect(null,{logout})(Logout);