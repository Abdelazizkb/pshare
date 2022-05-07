import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../utils/Transition';

function Help() {

  return (
    <div className="relative inline-flex ml-3 lg:-ml-1 ">
      <button
        className={`p-2 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full`}
        aria-haspopup="true">
        <span className="sr-only">Need help?</span>
        <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current text-slate-500" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
        </svg>
      </button>
    </div>
  )
}

export default Help;