import React from 'react'
import { NavLink} from 'react-router-dom';

function SidebarLink({to="/",pathname,children}) {
const location = "Dashboard"; {/*useLocation();*/}
  const path  = "";
  return (
              <li className={`px-3 py-2 my-3 rounded-3xl mb-0.5 last:mb-0 ${(path.localeCompare(pathname))? `hover:bg-bgreen hover:text-white`:` bg-bgreen text-white`}`}>
                <NavLink end to={to} className={`block    transition duration-150`}>
                  <div className="flex items-center">
                      {children}
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100  duration-200">{pathname}</span>
                  </div>
                </NavLink>
              </li>
  )
}

export default SidebarLink