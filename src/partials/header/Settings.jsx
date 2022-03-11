import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../utils/Transition';

function Settings() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex ml-3">
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && 'bg-slate-200'}`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Need help?</span>
        <svg className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.47999C21.34 9.33999 21.39 9.06999 21.28 8.86999L19.36 5.54999C19.24 5.32999 18.99 5.25999 18.77 5.32999L16.38 6.28999C15.88 5.90999 15.35 5.58999 14.76 5.34999L14.4 2.80999C14.36 2.56999 14.16 2.39999 13.92 2.39999H10.08C9.83999 2.39999 9.64999 2.56999 9.60999 2.80999L9.24999 5.34999C8.65999 5.58999 8.11999 5.91999 7.62999 6.28999L5.23999 5.32999C5.01999 5.24999 4.76999 5.32999 4.64999 5.54999L2.73999 8.86999C2.61999 9.07999 2.65999 9.33999 2.85999 9.47999L4.88999 11.06C4.83999 11.36 4.79999 11.69 4.79999 12C4.79999 12.31 4.81999 12.64 4.86999 12.94L2.83999 14.52C2.65999 14.66 2.60999 14.93 2.71999 15.13L4.63999 18.45C4.75999 18.67 5.00999 18.74 5.22999 18.67L7.61999 17.71C8.11999 18.09 8.64999 18.41 9.23999 18.65L9.59999 21.19C9.64999 21.43 9.83999 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.39999 13.98 8.39999 12C8.39999 10.02 10.02 8.39999 12 8.39999C13.98 8.39999 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill="black"/>
        </svg>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">Need help?</div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <svg className="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect y="3" width="12" height="9" rx="1" />
                  <path d="M2 0h8v2H2z" />
                </svg>
                <span>Documentation</span>
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <svg className="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.47999C21.34 9.33999 21.39 9.06999 21.28 8.86999L19.36 5.54999C19.24 5.32999 18.99 5.25999 18.77 5.32999L16.38 6.28999C15.88 5.90999 15.35 5.58999 14.76 5.34999L14.4 2.80999C14.36 2.56999 14.16 2.39999 13.92 2.39999H10.08C9.83999 2.39999 9.64999 2.56999 9.60999 2.80999L9.24999 5.34999C8.65999 5.58999 8.11999 5.91999 7.62999 6.28999L5.23999 5.32999C5.01999 5.24999 4.76999 5.32999 4.64999 5.54999L2.73999 8.86999C2.61999 9.07999 2.65999 9.33999 2.85999 9.47999L4.88999 11.06C4.83999 11.36 4.79999 11.69 4.79999 12C4.79999 12.31 4.81999 12.64 4.86999 12.94L2.83999 14.52C2.65999 14.66 2.60999 14.93 2.71999 15.13L4.63999 18.45C4.75999 18.67 5.00999 18.74 5.22999 18.67L7.61999 17.71C8.11999 18.09 8.64999 18.41 9.23999 18.65L9.59999 21.19C9.64999 21.43 9.83999 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.39999 13.98 8.39999 12C8.39999 10.02 10.02 8.39999 12 8.39999C13.98 8.39999 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill="black"/>
                </svg>
                <span>Support Site</span>
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <svg className="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.47999C21.34 9.33999 21.39 9.06999 21.28 8.86999L19.36 5.54999C19.24 5.32999 18.99 5.25999 18.77 5.32999L16.38 6.28999C15.88 5.90999 15.35 5.58999 14.76 5.34999L14.4 2.80999C14.36 2.56999 14.16 2.39999 13.92 2.39999H10.08C9.83999 2.39999 9.64999 2.56999 9.60999 2.80999L9.24999 5.34999C8.65999 5.58999 8.11999 5.91999 7.62999 6.28999L5.23999 5.32999C5.01999 5.24999 4.76999 5.32999 4.64999 5.54999L2.73999 8.86999C2.61999 9.07999 2.65999 9.33999 2.85999 9.47999L4.88999 11.06C4.83999 11.36 4.79999 11.69 4.79999 12C4.79999 12.31 4.81999 12.64 4.86999 12.94L2.83999 14.52C2.65999 14.66 2.60999 14.93 2.71999 15.13L4.63999 18.45C4.75999 18.67 5.00999 18.74 5.22999 18.67L7.61999 17.71C8.11999 18.09 8.64999 18.41 9.23999 18.65L9.59999 21.19C9.64999 21.43 9.83999 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.39999 13.98 8.39999 12C8.39999 10.02 10.02 8.39999 12 8.39999C13.98 8.39999 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill="black"/>
                </svg>
                <span>Contact us</span>
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default Settings;