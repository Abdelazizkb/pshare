import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/doctor" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
