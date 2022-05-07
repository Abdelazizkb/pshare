import React from 'react'
import User01 from '../images/user-36-02.jpg';
import { Link} from 'react-router-dom';

function Authenticated() {
  return (
        <Link className="flex items-center mb-8" to="#0">
          <img className="rounded-full border-2 p-1 border-bgreen" src={User01} width="60" height="60" alt="User 01" />
          <div className=" flex-column lg:ml-4 xl:ml-2 ">
              <div className="text-md font-medium text-bgreen  lg:opacity-0 lg:sidebar-expanded:opacity-100 ">Abdelaziz korba</div>
              <div className="text-sm  text-gray-500  lg:opacity-0 lg:sidebar-expanded:opacity-100 ">korbaabdo@gmail.com</div>
          </div>
        </Link>
      )
}

export default Authenticated